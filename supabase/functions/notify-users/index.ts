import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import webpush from 'https://esm.sh/web-push@3.6.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const VAPID_PUBLIC_KEY = Deno.env.get('VAPID_PUBLIC_KEY')
const VAPID_PRIVATE_KEY = Deno.env.get('VAPID_PRIVATE_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

if (VAPID_PUBLIC_KEY && VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(
    'mailto:admin@versix.com.br',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
  )
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const payload = await req.json()
    const comunicado = payload.record

    if (!comunicado) throw new Error('Nenhum registro encontrado no payload.')

    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!)

    console.log(`📢 Processando notificação para comunicado: ${comunicado.title}`)

    const { data: users } = await supabase.from('users').select('id, email, full_name')
    const { data: subscriptions } = await supabase.from('push_subscriptions').select('subscription, user_id')

    if (RESEND_API_KEY) {
      const emailPromises = users?.map(u => {
        return fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Versix Condomínio <onboarding@resend.dev>', // Troque pelo seu domínio validado no Resend
            to: [u.email], // Em produção, verifique a política do Resend para envios em massa
            subject: `Novo Comunicado: ${comunicado.title}`,
            html: `
              <h1>Olá, ${u.full_name || 'Morador'}</h1>
              <p>Um novo comunicado foi publicado no mural do condomínio.</p>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h2 style="margin-top:0;">${comunicado.title}</h2>
                <p style="white-space: pre-line;">${comunicado.content}</p>
              </div>
              <p><a href="https://app.versix.com.br">Clique aqui para acessar o sistema</a></p>
            `
          })
        }).catch(err => console.error(`Erro email para ${u.email}:`, err))
      }) || []
      
      await Promise.all(emailPromises)
      console.log(`✅ Emails disparados.`)
    }

    if (VAPID_PRIVATE_KEY && subscriptions && subscriptions.length > 0) {
      const notificationPayload = JSON.stringify({
        title: `Condomínio: ${comunicado.title}`,
        body: comunicado.content.substring(0, 100) + '...',
        url: '/comunicados'
      })

      const pushPromises = subscriptions.map(sub => {
        return webpush.sendNotification(sub.subscription, notificationPayload)
          .catch(async (err: any) => {
            if (err.statusCode === 410 || err.statusCode === 404) {
              await supabase.from('push_subscriptions').delete().eq('subscription', sub.subscription)
            } else {
              console.error('Erro push:', err)
            }
          })
      })

      await Promise.all(pushPromises)
      console.log(`✅ Pushes disparados.`)
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (error: any) {
    console.error('Erro Fatal:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})