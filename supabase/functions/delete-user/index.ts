import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req: Request) => {
  // Tratamento de CORS para requisições do browser
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      // Supabase API URL - Env var exportada automaticamente pelo Supabase.
      Deno.env.get('SUPABASE_URL') ?? '',
      // Supabase API ANON KEY - Env var exportada automaticamente pelo Supabase.
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      // Create client with Auth context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    // 1. Verificar se quem chama é ADMIN
    const {
      data: { user },
    } = await supabaseClient.auth.getUser()

    if (!user) throw new Error('Não autenticado')

    // Buscar role na tabela public.users para garantir que é admin
    const { data: profile } = await supabaseClient
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile?.role !== 'admin' && profile?.role !== 'sindico') {
      return new Response(JSON.stringify({ error: 'Sem permissão (Apenas Admin/Síndico)' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // 2. Pegar o ID do alvo no corpo da requisição
    const { userId } = await req.json()
    if (!userId) throw new Error('ID do usuário não fornecido')

    // 3. Instanciar cliente ADMIN (Service Role) para poder deletar do Auth
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // 4. Deletar usuário do Auth (Isso dispara o CASCADE para public.users)
    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(userId)

    if (deleteError) throw deleteError

    return new Response(JSON.stringify({ success: true, message: 'Usuário deletado com sucesso' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})