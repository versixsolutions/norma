import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'

interface DashboardStats {
  faq: { answeredThisMonth: number }
  despesas: { totalMes: number; count: number }
  votacoes: { ativas: number; participation: number }
  ocorrencias: { abertas: number; em_andamento: number }
  comunicados: { nao_lidos: number } // ✅ Adicionado
}

const INITIAL_STATS: DashboardStats = {
  faq: { answeredThisMonth: 0 },
  despesas: { totalMes: 0, count: 0 },
  votacoes: { ativas: 0, participation: 0 },
  ocorrencias: { abertas: 0, em_andamento: 0 },
  comunicados: { nao_lidos: 0 } // ✅ Inicializado para evitar crash
}

export function useDashboardStats() {
  const [stats, setStats] = useState<DashboardStats>(INITIAL_STATS)
  const [loading, setLoading] = useState(true)
  const { profile, user } = useAuth()

  useEffect(() => {
    if (profile?.condominio_id) {
      loadStats()
    }
  }, [profile?.condominio_id, user?.id])

  async function loadStats() {
    try {
      setLoading(true)
      
      const startOfMonth = new Date()
      startOfMonth.setDate(1)
      startOfMonth.setHours(0, 0, 0, 0)
      
      // 1. Despesas
      const { data: despesas } = await supabase
        .from('despesas')
        .select('amount')
        .gte('due_date', startOfMonth.toISOString())
      
      const totalDespesas = despesas?.reduce((acc, curr) => acc + Number(curr.amount), 0) || 0

      // 2. Votações
      const now = new Date().toISOString()
      const { data: votacoes } = await supabase
        .from('votacoes')
        .select('id')
        .gt('end_date', now)
      
      // 3. Ocorrências
      const { data: ocorrencias } = await supabase
        .from('ocorrencias')
        .select('status')
        .in('status', ['aberto', 'em_andamento'])

      const abertas = ocorrencias?.filter(o => o.status === 'aberto').length || 0
      const emAndamento = ocorrencias?.filter(o => o.status === 'em_andamento').length || 0

      // 4. FAQs
      const { count: faqCount } = await supabase
        .from('faqs')
        .select('*', { count: 'exact', head: true })

      // 5. Comunicados (Não Lidos)
      let unreadCount = 0
      if (user) {
        const { data: allComunicados } = await supabase.from('comunicados').select('id')
        const { data: reads } = await supabase
          .from('comunicado_reads')
          .select('comunicado_id')
          .eq('user_id', user.id)
        
        const readIds = new Set(reads?.map(r => r.comunicado_id) || [])
        unreadCount = allComunicados?.filter(c => !readIds.has(c.id)).length || 0
      }

      setStats({
        faq: { answeredThisMonth: faqCount || 0 },
        despesas: { 
          totalMes: totalDespesas, 
          count: despesas?.length || 0 
        },
        votacoes: { 
          ativas: votacoes?.length || 0, 
          participation: 0 
        },
        ocorrencias: { 
          abertas, 
          em_andamento: emAndamento 
        },
        comunicados: {
          nao_lidos: unreadCount
        }
      })

    } catch (error) {
      console.error('Erro ao carregar estatísticas:', error)
    } finally {
      setLoading(false)
    }
  }

  return { stats, loading, reload: loadStats }
}