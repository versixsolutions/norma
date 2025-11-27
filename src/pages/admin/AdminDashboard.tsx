import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useNavigate } from 'react-router-dom'
import { useAdmin } from '../../contexts/AdminContext'
import { useAuth } from '../../contexts/AuthContext'
import LoadingSpinner from '../../components/LoadingSpinner'
import EmptyState from '../../components/EmptyState'
import { formatCurrency } from '../../lib/utils'

// Interface para os dados da tabela de saúde
interface CondominioHealth {
  id: string
  name: string
  slug: string
  total_users: number
  pending_users: number
  open_issues: number
  active_polls: number
}

export default function AdminDashboard() {
  const navigate = useNavigate()
  const { isAdmin } = useAuth()
  const { setSelectedCondominioId } = useAdmin() // Para o botão "Acessar"

  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalCondominios: 0,
    totalUsers: 0,
    totalPending: 0,
    totalOpenIssues: 0
  })
  const [condominioHealth, setCondominioHealth] = useState<CondominioHealth[]>([])

  useEffect(() => {
    if (isAdmin) {
      loadGlobalStats()
    }
  }, [isAdmin])

  async function loadGlobalStats() {
    try {
      setLoading(true)

      // 1. Buscar todos os condomínios
      const { data: condominios, error: condError } = await supabase
        .from('condominios')
        .select('id, name, slug')
        .order('created_at', { ascending: false })

      if (condError) throw condError

      // 2. Para cada condomínio, buscar métricas vitais
      // Nota: Em produção com muitos dados, isso deve virar uma RPC ou View no banco.
      // Para o MVP, faremos queries paralelas.
      const healthData = await Promise.all(
        (condominios || []).map(async (cond) => {
          // Contagem de usuários
          const { count: totalUsers } = await supabase
            .from('users')
            .select('*', { count: 'exact', head: true })
            .eq('condominio_id', cond.id)

          // Contagem de pendentes
          const { count: pendingUsers } = await supabase
            .from('users')
            .select('*', { count: 'exact', head: true })
            .eq('condominio_id', cond.id)
            .eq('role', 'pending')

          // Ocorrências abertas
          const { count: openIssues } = await supabase
            .from('ocorrencias')
            .select('*', { count: 'exact', head: true })
            .eq('condominio_id', cond.id)
            .in('status', ['aberto', 'em_andamento'])

          // Votações ativas
          const now = new Date().toISOString()
          const { count: activePolls } = await supabase
            .from('votacoes')
            .select('*', { count: 'exact', head: true })
            .eq('condominio_id', cond.id)
            .gt('end_date', now)

          return {
            id: cond.id,
            name: cond.name,
            slug: cond.slug,
            total_users: totalUsers || 0,
            pending_users: pendingUsers || 0,
            open_issues: openIssues || 0,
            active_polls: activePolls || 0
          }
        })
      )

      setCondominioHealth(healthData)

      // Calcular totais globais
      const totalUsers = healthData.reduce((acc, curr) => acc + curr.total_users, 0)
      const totalPending = healthData.reduce((acc, curr) => acc + curr.pending_users, 0)
      const totalOpenIssues = healthData.reduce((acc, curr) => acc + curr.open_issues, 0)

      setStats({
        totalCondominios: condominios?.length || 0,
        totalUsers,
        totalPending,
        totalOpenIssues
      })

    } catch (error) {
      console.error('Erro ao carregar dashboard global:', error)
    } finally {
      setLoading(false)
    }
  }

  // Função para "entrar" no condomínio
  const handleAccessCondominio = (id: string) => {
    setSelectedCondominioId(id) // Seta o contexto global
    // Opcional: Navegar para uma página específica, ex: Usuários
    // navigate('/admin/usuarios') 
    // Por enquanto, apenas seta o contexto e o usuário vê que o topo mudou
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) return <LoadingSpinner message="Compilando dados da plataforma..." />

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Global</h1>
          <p className="text-gray-500">Visão macro da plataforma Versix Norma.</p>
        </div>
        <button
          onClick={() => navigate('/admin/condominios')}
          className="bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-bold shadow-md hover:bg-indigo-700 transition flex items-center gap-2"
        >
          <span>🏢</span> Gerenciar Condomínios
        </button>
      </div>

      {/* 1. KPIs Globais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl">🏢</div>
            <span className="text-xs font-bold text-gray-400 uppercase">Clientes</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.totalCondominios}</p>
          <p className="text-xs text-gray-500">Condomínios ativos</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-xl">👥</div>
            <span className="text-xs font-bold text-gray-400 uppercase">Alcance</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
          <p className="text-xs text-gray-500">Usuários totais</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${stats.totalPending > 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
              ⏳
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase">Fila</span>
          </div>
          <p className={`text-2xl font-bold ${stats.totalPending > 0 ? 'text-red-600' : 'text-gray-900'}`}>{stats.totalPending}</p>
          <p className="text-xs text-gray-500">Aprovações pendentes</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-xl">🚨</div>
            <span className="text-xs font-bold text-gray-400 uppercase">Suporte</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.totalOpenIssues}</p>
          <p className="text-xs text-gray-500">Ocorrências abertas</p>
        </div>
      </div>

      {/* 2. Tabela de Saúde dos Condomínios */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-900">Saúde dos Condomínios</h3>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
            {condominioHealth.length} clientes
          </span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold">
                <th className="px-5 py-3">Condomínio</th>
                <th className="px-5 py-3 text-center">Usuários</th>
                <th className="px-5 py-3 text-center">Pendentes</th>
                <th className="px-5 py-3 text-center">Ocorrências</th>
                <th className="px-5 py-3 text-center">Assembleias</th>
                <th className="px-5 py-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {condominioHealth.map((cond) => (
                <tr key={cond.id} className="hover:bg-gray-50 transition">
                  <td className="px-5 py-3">
                    <div className="font-bold text-gray-900 text-sm">{cond.name}</div>
                    <div className="text-xs text-gray-400 font-mono">@{cond.slug}</div>
                  </td>
                  <td className="px-5 py-3 text-center text-sm text-gray-600">
                    {cond.total_users}
                  </td>
                  <td className="px-5 py-3 text-center">
                    {cond.pending_users > 0 ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-red-50 text-red-600 border border-red-100">
                        {cond.pending_users}
                      </span>
                    ) : (
                      <span className="text-gray-300">-</span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-center">
                    {cond.open_issues > 0 ? (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-600">
                        {cond.open_issues} 🚨
                      </span>
                    ) : (
                      <span className="text-green-500 text-xs font-bold">OK</span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-center">
                    {cond.active_polls > 0 ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                        {cond.active_polls} Ativas
                      </span>
                    ) : (
                      <span className="text-gray-300 text-xs">Inativo</span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button
                      onClick={() => handleAccessCondominio(cond.id)}
                      className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 px-3 py-1.5 rounded text-xs font-bold transition border border-transparent hover:border-indigo-100"
                    >
                      Acessar &rarr;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {condominioHealth.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            Nenhum condomínio encontrado.
          </div>
        )}
      </div>
    </div>
  )
}