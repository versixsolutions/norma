import { useDashboardStats } from '../../hooks/useDashboardStats'
import { formatCurrency } from '../../lib/utils'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const { stats, loading } = useDashboardStats()
  const navigate = useNavigate()

  const cards = [
    {
      title: 'Ocorrências Abertas',
      value: stats.ocorrencias.abertas,
      label: 'Aguardando atenção',
      icon: '🚨',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      link: '/admin/ocorrencias'
    },
    {
      title: 'Despesas do Mês',
      value: formatCurrency(stats.despesas.totalMes),
      label: stats.despesas.monthLabel,
      icon: '💰',
      color: 'text-green-600',
      bg: 'bg-green-50',
      link: '/admin/financeiro'
    },
    {
      title: 'Votações Ativas',
      value: stats.votacoes.ativas,
      label: 'Em andamento',
      icon: '🗳️',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      link: '/admin/votacoes'
    },
    {
      title: 'Aprovar Cadastros',
      value: 'Verificar', // Futuramente ligar com count de usuários pending
      label: 'Gestão de Acesso',
      icon: '👥',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      link: '/admin/usuarios'
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Visão Geral</h1>
        <p className="text-gray-500">Resumo das atividades do condomínio.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div 
            key={card.title} 
            onClick={() => navigate(card.link)}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${card.bg}`}>
                {card.icon}
              </div>
              {/* Se fosse um número > 0, poderia ter um badge aqui */}
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{card.title}</h3>
            <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
            <p className="text-xs text-gray-400 mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Área de Acesso Rápido */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Atalhos Operacionais</h3>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => alert('Em breve')} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left text-sm font-medium text-gray-700">📢 Criar Comunicado</button>
            <button onClick={() => alert('Em breve')} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left text-sm font-medium text-gray-700">🗳️ Nova Assembleia</button>
            <button onClick={() => alert('Em breve')} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left text-sm font-medium text-gray-700">🧠 Treinar Chatbot</button>
            <button onClick={() => alert('Em breve')} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left text-sm font-medium text-gray-700">💰 Lançar Despesa</button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-2">Inteligência Artificial</h3>
            <p className="text-blue-100 text-sm mb-4">A Ísis respondeu a 45 dúvidas esta semana. Mantenha a base de conhecimento atualizada.</p>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-sm font-bold transition">
              Ver logs da IA
            </button>
          </div>
          <div className="absolute -right-4 -bottom-8 text-9xl opacity-10">🤖</div>
        </div>
      </div>
    </div>
  )
}