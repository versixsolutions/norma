import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import type { ComunicadoWithDetails } from '../../types'

/**
 * Hook para carregar comunicados com React Query (cache e invalidação automática)
 */
export function useComunicadosQuery(typeFilter?: string) {
  const { user } = useAuth()
  const userId = user?.id

  return useQuery<ComunicadoWithDetails[], Error>({
    queryKey: ['comunicados', userId, typeFilter],
    queryFn: async () => {
      if (!userId) return []

      let query = supabase
        .from('comunicados')
        .select('*, comunicado_attachments(*), comunicado_reads(user_id)')
        .order('priority', { ascending: false })
        .order('published_at', { ascending: false })

      if (typeFilter && typeFilter !== 'all') {
        query = query.eq('type', typeFilter)
      }

      const { data: comunicadosData, error } = await query
      if (error) throw error

      const comunicadosWithDetails: ComunicadoWithDetails[] = (comunicadosData || []).map((comunicado: any) => {
        const is_read = comunicado.comunicado_reads.some((read: { user_id: string }) => read.user_id === userId)
        return {
          ...comunicado,
          attachments: comunicado.comunicado_attachments || [],
          is_read,
        }
      })

      return comunicadosWithDetails
    },
    enabled: Boolean(userId),
    staleTime: 1000 * 60 * 2, // 2 min
    gcTime: 1000 * 60 * 10, // 10 min
  })
}

/**
 * Mutation para marcar comunicado como lido com optimistic update
 */
export function useMarkComunicadoAsRead() {
  const queryClient = useQueryClient()
  const { user } = useAuth()

  return useMutation({
    mutationFn: async (comunicadoId: string) => {
      if (!user) throw new Error('Usuário não autenticado')

      const { error } = await supabase.from('comunicado_reads').insert({
        comunicado_id: comunicadoId,
        user_id: user.id,
      })

      if (error && error.code !== '23505') throw error
      return comunicadoId
    },
    onMutate: async (comunicadoId: string) => {
      // Optimistic update: marcar como lido imediatamente
      await queryClient.cancelQueries({ queryKey: ['comunicados'] })

      const previousData = queryClient.getQueriesData({ queryKey: ['comunicados'] })

      queryClient.setQueriesData<ComunicadoWithDetails[]>({ queryKey: ['comunicados'] }, (old: ComunicadoWithDetails[] | undefined) => {
        if (!old) return old
        return old.map((c: ComunicadoWithDetails) => (c.id === comunicadoId ? { ...c, is_read: true } : c))
      })

      return { previousData }
    },
    onError: (_err: Error, _comunicadoId: string, context: { previousData: [unknown, ComunicadoWithDetails[] | undefined][] } | undefined) => {
      // Rollback em caso de erro
      if (context?.previousData) {
        context.previousData.forEach(([key, data]: [unknown, ComunicadoWithDetails[] | undefined]) => {
          queryClient.setQueryData(key as unknown[], data)
        })
      }
    },
    onSettled: () => {
      // Revalidar após sucesso ou erro
      queryClient.invalidateQueries({ queryKey: ['comunicados'] })
    },
  })
}

/**
 * Hook derivado para contar não lidos
 */
export function useUnreadComunicadosCount(typeFilter?: string) {
  const { data: comunicados = [] } = useComunicadosQuery(typeFilter)
  return comunicados.filter((c: ComunicadoWithDetails) => !c.is_read).length
}
