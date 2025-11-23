/// <reference lib="webworker" />
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'

declare let self: ServiceWorkerGlobalScope

cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)
self.skipWaiting()
clientsClaim()

self.addEventListener('push', (event) => {
  if (!event.data) return

  try {
    const data = event.data.json()
    
    const title = data.title || 'Novo Comunicado'
    const options = {
      body: data.body || 'Você tem uma nova mensagem do condomínio.',
      icon: '/pwa-192x192.png',
      badge: '/pwa-192x192.png',
      data: {
        url: data.url || '/'
      },
      vibrate: [100, 50, 100]
    }

    event.waitUntil(
      self.registration.showNotification(title, options)
    )
  } catch (err) {
    console.error('Erro ao processar notificação push:', err)
  }
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      if (clientList.length > 0) {
        let client = clientList[0]
        for (let i = 0; i < clientList.length; i++) {
          if (clientList[i].focused) {
            client = clientList[i]
          }
        }
        return client.focus()
      }
      return self.clients.openWindow(event.notification.data.url)
    })
  )
})