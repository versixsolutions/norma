import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { formatDateTime } from '../lib/utils'
import PageLayout from '../components/PageLayout'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'

interface Comunicado {
  id: string
  title: string
  content: string
  type: string // 'assembleia' | 'financeiro' | 'urgente' | 'informativo' | 'geral'
  priority: number // 1: Normal, 2: Alta, 3: Urgente
  published_at: string
  created_at: string
  author: {
    full_name: string
    role: string
  } | null
  is_read: boolean
}

// Configuração visual baseada nos tipos do banco de dados
const TYPE_CONFIG: Record<string, any> = {
  'assembleia': { 
    label: 'Assembleia', 
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200', 
    icon: '⚖️',
    badgeColor: 'bg-indigo-600'
  },
  'financeiro': { 
    label: 'Financeiro', 
    color: 'bg-emerald-100 text-emerald-800 border-emerald-200', 
    icon: '💰',
    badgeColor: 'bg-emerald-600'
  },
  'urgente': { 
    label: 'Urgente', 
    color: 'bg-red-100 text-red-800 border-red-200', 
    icon: '🚨',
    badgeColor: 'bg-red-600'
  },
  'informativo': { 
    label: 'Informativo', 
    color: 'bg-blue-100 text-blue-800 border-blue-200', 
    icon: 'ℹ️',
    badgeColor: 'bg-blue-600'
  },
  'importante': { 
    label: 'Importante', 
    color: 'bg-orange-100 text-orange-800 border-orange-200', 
    icon: '⚠️',
    badgeColor: 'bg-orange-600'
  },
  'geral': { 
    label: 'Geral', 
    color: 'bg-gray-100 text-gray-800 border-gray-200', 
    icon: '📋',
    badgeColor: 'bg-gray-600'
  }
}

export default function Comunicados() {
  const [comunicados, setComunicados] = useState<Comunicado[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    loadComunicados()
  }, [user])

  async function loadComunicados() {
    try {
      // Busca comunicados ordenados por Prioridade (DESC) e depois por Data (DESC)
      const { data: comunicadosData, error: comunicadosError } = await supabase
        .from('comunicados')
        .select(`
          id,
          title,
          content,
          type,
          priority,
          published_at,
          created_at,
          author:author_id (
            full_name,
            role
          )
        `)
        .order('priority', { ascending: false })
        .order('published_at', { ascending: false })

      if (comunicadosError) throw comunicadosError

      // Busca status de leitura
      const { data: readsData, error: readsError } = await supabase
        .from('comunicado_reads')
        .select('comunicado_id')
        .eq('user_id', user?.id || '')

      if (readsError) throw readsError

      const readIds = new Set(readsData?.map(r => r.comunicado_id) || [])

      const formattedData = comunicadosData?.map(c => ({
        ...c,
        author: Array.isArray(c.author) ? c.author[0] : c.author,
        is_read: readIds.has(c.id),
        // Fallback para published_at se for nulo (embora o banco tenha, segurança extra)
        published_at: c.published_at || c.created_at
      })) || []

      setComunicados(formattedData)
    } catch (error) {
      console.error('Erro ao carregar comunicados:', error)
    } finally {
      setLoading(false)
    }
  }

  async function markAsRead(comunicadoId: string) {
    try {
      if (!user) return

      const { error } = await supabase
        .from('comunicado_reads')
        .insert({
          comunicado_id: comunicadoId,
          user_id: user.id,
        })

      if (error) throw error

      setComunicados(prev =>
        prev.map(c =>
          c.id === comunicadoId ? { ...c, is_read: true } : c
        )
      )
    } catch (error) {
      console.error('Erro ao marcar como lido:', error)
    }
  }

  // Helper para renderizar quebras de linha corretamente
  function renderContent(content: string) {
    return content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ))
  }

  const unreadCount = comunicados.filter(c => !c.is_read).length

  if (loading) return <LoadingSpinner message="Carregando quadro de avisos..." />

  return (
    <PageLayout
      title="Quadro de Avisos"
      subtitle="Fique por dentro de tudo que acontece no condomínio"
      icon="📢"
      headerAction={
        unreadCount > 0 ? (
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block border border-white/30 shadow-sm">
            <p className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              {unreadCount} não {unreadCount === 1 ? 'lido' : 'lidos'}
            </p>
          </div>
        ) : null
      }
    >
      {/* Filtro Rápido / Legenda (Visual apenas) */}
      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {Object.entries(TYPE_CONFIG).map(([key, config]) => (
          <div key={key} className={`px-3 py-1 rounded-full text-xs font-bold border ${config.color} opacity-80`}>
            {config.icon} {config.label}
          </div>
        ))}
      </div>

      {/* Lista de Comunicados */}
      {comunicados.length > 0 ? (
        <div className="space-y-6">
          {comunicados.map((comunicado) => {
            // Configuração visual baseada no tipo, com fallback para 'geral'
            const typeConfig = TYPE_CONFIG[comunicado.type] || TYPE_CONFIG['geral']
            const isHighPriority = comunicado.priority >= 3

            return (
              <div
                key={comunicado.id}
                className={`
                  relative bg-white rounded-xl shadow-sm border-l-4 overflow-hidden transition-all hover:shadow-md
                  ${!comunicado.is_read ? 'ring-2 ring-purple-400 ring-offset-2' : ''}
                `}
                style={{ borderLeftColor: isHighPriority ? '#EF4444' : '#E5E7EB' }} // Borda vermelha se urgente
              >
                {/* Badge de Novo */}
                {!comunicado.is_read && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-sm z-10">
                    NOVO
                  </div>
                )}

                <div className="p-5 md:p-6">
                  {/* Cabeçalho do Card */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 pr-8">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {/* Badge do Tipo */}
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${typeConfig.color}`}>
                          {typeConfig.icon} {typeConfig.label}
                        </span>
                        
                        {/* Badge de Prioridade se for alta */}
                        {isHighPriority && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold bg-red-50 text-red-700 border border-red-100">
                            🔥 Alta Prioridade
                          </span>
                        )}
                        
                        <span className="text-xs text-gray-400 font-medium">
                          {formatDateTime(comunicado.published_at)}
                        </span>
                      </div>
                      
                      <h3 className={`text-lg md:text-xl font-bold text-gray-900 ${!comunicado.is_read ? 'text-purple-900' : ''}`}>
                        {comunicado.title}
                      </h3>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="prose prose-sm max-w-none text-gray-700 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="leading-relaxed whitespace-pre-line">
                      {comunicado.content}
                    </p>
                  </div>

                  {/* Rodapé do Card */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-base">
                        {comunicado.author?.role === 'sindico' ? '👑' : '👤'}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {comunicado.author?.full_name || 'Administração'}
                        </p>
                        <p className="text-xs text-gray-400 capitalize">
                          {comunicado.author?.role || 'Gestão'}
                        </p>
                      </div>
                    </div>

                    {!comunicado.is_read ? (
                      <button
                        onClick={() => markAsRead(comunicado.id)}
                        className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg hover:scale-[1.02] transition active:scale-95 flex items-center justify-center gap-2"
                      >
                        <span>✓</span> Marcar como lido
                      </button>
                    ) : (
                      <span className="flex items-center gap-1.5 text-green-600 text-sm font-semibold bg-green-50 px-3 py-1.5 rounded-full self-start sm:self-auto">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Lido em {formatDateTime(new Date().toISOString())} {/* Simulando data de leitura visual */}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <EmptyState
          icon="📭"
          title="Nenhum comunicado"
          description="Não há avisos ou comunicados no momento. Tudo tranquilo por aqui!"
        />
      )}
    </PageLayout>
  )
}