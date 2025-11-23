import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'

// Substitua pela sua VAPID Key Pública real
const VAPID_PUBLIC_KEY = 'BNG__SUA_CHAVE_PUBLICA_AQUI__...' 

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export function usePushNotifications() {
  const { user } = useAuth()
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [permission, setPermission] = useState<NotificationPermission>('default')

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission)
      checkSubscription()
    }
  }, [user])

  async function checkSubscription() {
    if (!user || !('serviceWorker' in navigator)) return

    const registration = await navigator.serviceWorker.ready
    const subscription = await registration.pushManager.getSubscription()
    setIsSubscribed(!!subscription)
  }

  async function subscribe() {
    if (!user) return
    setLoading(true)

    try {
      const result = await Notification.requestPermission()
      setPermission(result)
      
      if (result !== 'granted') {
        throw new Error('Permissão de notificação negada.')
      }

      const registration = await navigator.serviceWorker.ready
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
      })

      const { error } = await supabase.from('push_subscriptions').insert({
        user_id: user.id,
        subscription: subscription.toJSON(),
        user_agent: navigator.userAgent
      })

      if (error && error.code !== '23505') throw error

      setIsSubscribed(true)
      alert('Notificações ativadas com sucesso!')

    } catch (error: any) {
      console.error('Erro ao ativar notificações:', error)
      alert('Não foi possível ativar notificações. Verifique as permissões do navegador.')
    } finally {
      setLoading(false)
    }
  }

  return {
    isSupported: 'Notification' in window && 'serviceWorker' in navigator,
    isSubscribed,
    permission,
    loading,
    subscribe
  }
}