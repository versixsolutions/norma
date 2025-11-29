import { useRegisterSW } from 'virtual:pwa-register/react'

export default function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('✅ Service Worker registrado:', r)
    },
    onRegisterError(error) {
      console.error('❌ Erro ao registrar Service Worker:', error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  const handleUpdate = async () => {
    try {
      // Atualizar o Service Worker
      await updateServiceWorker(true)
      // Aguardar um pouco e recarregar a página
      setTimeout(() => {
        window.location.reload()
      }, 500)
    } catch (error) {
      console.error('Erro ao atualizar:', error)
      window.location.reload()
    }
  }

  return (
    <div className="Container">
      {(offlineReady || needRefresh) && (
        <div className="fixed bottom-5 right-5 z-[100] bg-white p-4 rounded-lg shadow-2xl border border-gray-200 max-w-sm animate-slide-up">
          <div className="mb-3 text-sm text-gray-600 font-medium">
            {offlineReady ? (
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                App pronto para uso offline!
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Nova versão disponível!
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            {needRefresh && (
              <button
                className="flex-1 bg-primary text-white px-3 py-1.5 rounded text-xs font-bold hover:opacity-90 transition"
                onClick={handleUpdate}
              >
                Atualizar
              </button>
            )}
            <button
              className="flex-1 border border-gray-300 text-gray-600 px-3 py-1.5 rounded text-xs font-bold hover:bg-gray-50 transition"
              onClick={close}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}