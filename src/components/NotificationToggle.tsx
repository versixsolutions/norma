import { usePushNotifications } from '../hooks/usePushNotifications'

export default function NotificationToggle() {
  const { isSupported, isSubscribed, permission, loading, subscribe } = usePushNotifications()

  if (!isSupported) return null

  if (isSubscribed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
        <div className="bg-green-100 p-2 rounded-full text-green-600">🔔</div>
        <div>
          <p className="text-sm font-bold text-green-800">Notificações Ativas</p>
          <p className="text-xs text-green-600">Você receberá alertas de novos comunicados.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-gray-900 text-sm">Receber Alertas?</h3>
          <p className="text-xs text-gray-500 mt-1">Ative para saber de avisos urgentes na hora.</p>
        </div>
        <button
          onClick={subscribe}
          disabled={loading || permission === 'denied'}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
            permission === 'denied' 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-primary text-white hover:bg-primary-dark shadow-md'
          }`}
        >
          {loading ? 'Ativando...' : permission === 'denied' ? 'Bloqueado' : 'Ativar'}
        </button>
      </div>
    </div>
  )
}