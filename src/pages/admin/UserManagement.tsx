import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { formatDateTime } from '../../lib/utils'
import LoadingSpinner from '../../components/LoadingSpinner'
import EmptyState from '../../components/EmptyState'

interface UserData {
  id: string
  email: string
  full_name: string
  role: string
  unit_number: string
  phone: string
  created_at: string
}

export default function UserManagement() {
  const [users, setUsers] = useState<UserData[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'pending' | 'active'>('pending')
  const [processingId, setProcessingId] = useState<string | null>(null)

  useEffect(() => {
    loadUsers()
  }, [])

  async function loadUsers() {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setUsers(data || [])
    } catch (error) {
      console.error('Erro ao carregar usuários:', error)
    } finally {
      setLoading(false)
    }
  }

  // Aprovar: Muda role de 'pending' para 'morador'
  async function handleApprove(id: string) {
    if (!confirm('Confirmar aprovação deste morador?')) return
    setProcessingId(id)
    try {
      const { error } = await supabase
        .from('users')
        .update({ role: 'morador' })
        .eq('id', id)

      if (error) throw error
      
      // Atualiza lista local
      setUsers(prev => prev.map(u => u.id === id ? { ...u, role: 'morador' } : u))
      alert('Usuário aprovado com sucesso!')
    } catch (error: any) {
      alert('Erro: ' + error.message)
    } finally {
      setProcessingId(null)
    }
  }

  // Rejeitar: Por enquanto, vamos apenas deletar o registro da tabela public.users
  // Nota: Em um cenário real completo, deveríamos deletar também do auth.users via Edge Function
  async function handleReject(id: string) {
    if (!confirm('Tem certeza? Isso removerá o cadastro.')) return
    setProcessingId(id)
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      setUsers(prev => prev.filter(u => u.id !== id))
      alert('Cadastro rejeitado/removido.')
    } catch (error: any) {
      alert('Erro: ' + error.message)
    } finally {
      setProcessingId(null)
    }
  }

  const filteredUsers = users.filter(u => {
    if (filter === 'pending') return u.role === 'pending'
    if (filter === 'active') return u.role !== 'pending'
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestão de Acesso</h1>
          <p className="text-gray-500 text-sm">Gerencie permissões e novos cadastros.</p>
        </div>
        
        <div className="flex bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-md text-sm font-bold transition ${filter === 'pending' ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            Pendentes ({users.filter(u => u.role === 'pending').length})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-md text-sm font-bold transition ${filter === 'active' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            Ativos ({users.filter(u => u.role !== 'pending').length})
          </button>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : filteredUsers.length === 0 ? (
        <EmptyState 
          icon={filter === 'pending' ? '✅' : '👥'} 
          title={filter === 'pending' ? 'Tudo limpo!' : 'Nenhum usuário'} 
          description={filter === 'pending' ? 'Não há cadastros pendentes de aprovação.' : 'Nenhum usuário ativo encontrado.'} 
        />
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                  <th className="px-6 py-4">Nome / Email</th>
                  <th className="px-6 py-4">Unidade</th>
                  <th className="px-6 py-4">Telefone</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">{user.full_name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono text-xs font-bold">
                        {user.unit_number || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {user.phone || '-'}
                    </td>
                    <td className="px-6 py-4">
                      {user.role === 'pending' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                          Pendente
                        </span>
                      ) : (
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                          user.role === 'admin' || user.role === 'sindico' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {user.role}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {user.role === 'pending' && (
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleReject(user.id)}
                            disabled={!!processingId}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition disabled:opacity-50"
                            title="Rejeitar"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                          <button
                            onClick={() => handleApprove(user.id)}
                            disabled={!!processingId}
                            className="px-3 py-1.5 bg-green-600 text-white text-xs font-bold rounded-lg hover:bg-green-700 transition shadow-sm disabled:opacity-50 flex items-center gap-1"
                          >
                            {processingId === user.id ? '...' : 'Aprovar'}
                          </button>
                        </div>
                      )}
                      {user.role !== 'pending' && (
                        <button className="text-gray-400 hover:text-primary text-sm font-medium">
                          Editar
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}