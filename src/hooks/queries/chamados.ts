import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import toast from 'react-hot-toast'

/**
 * Interface para um chamado de suporte
 */
export interface Chamado {
  id: string
  user_id: string
  subject: string
  description: string
  status: 'aberto' | 'em_andamento' | 'resolvido' | 'fechado'
  response: string | null
  created_at: string
  updated_at: string | null
  closed_at: string | null
}

/**
 * Hook React Query para buscar chamados do usuário
 * Inclui cache automático e revalidação
 * 
 * @param statusFilter - Filtro de status opcional
 * @returns Query com chamados do usuário
 */
export function useChamadosQuery(statusFilter?: string) {
  const { user } = useAuth()

  return useQuery({
    queryKey: ['chamados', user?.id, statusFilter],
    queryFn: async () => {
      if (!user?.id) {
        throw new Error('Usuário não autenticado')
      }

      let query = supabase
        .from('chamados')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      // Aplicar filtro de status se fornecido
      if (statusFilter && statusFilter !== 'todos') {
        query = query.eq('status', statusFilter)
      }

      const { data, error } = await query

      if (error) throw error

      return data as Chamado[]
    },
    enabled: !!user?.id,
    staleTime: 1000 * 60 * 2, // 2 minutos
    gcTime: 1000 * 60 * 10, // 10 minutos
  })
}

/**
 * Hook React Query para criar novo chamado
 * Atualiza cache automaticamente após criação
 * 
 * @returns Mutation para criar chamado
 */
export function useCreateChamado() {
  const queryClient = useQueryClient()
  const { user } = useAuth()

  return useMutation({
    mutationFn: async (data: { subject: string; description: string }) => {
      if (!user?.id) {
        throw new Error('Usuário não autenticado')
      }

      const { data: newChamado, error } = await supabase
        .from('chamados')
        .insert({
          user_id: user.id,
          subject: data.subject,
          description: data.description,
          status: 'aberto',
        })
        .select()
        .single()

      if (error) throw error

      return newChamado as Chamado
    },
    onSuccess: (newChamado: Chamado) => {
      // Atualizar cache - adicionar novo chamado no início da lista
      queryClient.setQueryData<Chamado[]>(
        ['chamados', user?.id],
        (old: Chamado[] | undefined) => (old ? [newChamado, ...old] : [newChamado])
      )

      // Invalidar queries relacionadas para forçar revalidação
      queryClient.invalidateQueries({ queryKey: ['chamados', user?.id] })

      toast.success('✅ Chamado criado com sucesso!')
    },
    onError: (error: Error) => {
      toast.error(`❌ Erro ao criar chamado: ${error.message}`)
      console.error('Erro ao criar chamado:', error)
    },
  })
}

/**
 * Hook React Query para atualizar status de um chamado
 * Usa atualização otimista para melhor UX
 * 
 * @returns Mutation para atualizar status
 */
export function useUpdateChamadoStatus() {
  const queryClient = useQueryClient()
  const { user } = useAuth()

  return useMutation({
    mutationFn: async ({
      chamadoId,
      novoStatus,
    }: {
      chamadoId: string
      novoStatus: 'aberto' | 'em_andamento' | 'resolvido' | 'fechado'
    }) => {
      const updates: Partial<Chamado> = {
        status: novoStatus,
        updated_at: new Date().toISOString(),
      }

      // Se estiver fechando, adicionar closed_at
      if (novoStatus === 'fechado') {
        updates.closed_at = new Date().toISOString()
      }

      const { data, error } = await supabase
        .from('chamados')
        .update(updates)
        .eq('id', chamadoId)
        .eq('user_id', user?.id)
        .select()
        .single()

      if (error) throw error

      return data as Chamado
    },
    // Atualização otimista
    onMutate: async ({ chamadoId, novoStatus }: { chamadoId: string; novoStatus: Chamado['status'] }) => {
      // Cancelar queries pendentes
      await queryClient.cancelQueries({ queryKey: ['chamados', user?.id] })

      // Salvar estado anterior
      const previousChamados = queryClient.getQueryData<Chamado[]>(['chamados', user?.id])

      // Atualizar cache otimisticamente
      queryClient.setQueryData<Chamado[]>(
        ['chamados', user?.id],
        (old: Chamado[] | undefined) =>
          old?.map((chamado: Chamado) =>
            chamado.id === chamadoId
              ? { ...chamado, status: novoStatus, updated_at: new Date().toISOString() }
              : chamado
          )
      )

      return { previousChamados }
    },
    onSuccess: (_: Chamado, { novoStatus }: { novoStatus: Chamado['status'] }) => {
      toast.success(`✅ Status atualizado para ${novoStatus}`)
    },
    onError: (error: Error, _: unknown, context: { previousChamados?: Chamado[] } | undefined) => {
      // Reverter em caso de erro
      if (context?.previousChamados) {
        queryClient.setQueryData(['chamados', user?.id], context.previousChamados)
      }
      toast.error(`❌ Erro ao atualizar: ${error.message}`)
      console.error('Erro ao atualizar chamado:', error)
    },
    onSettled: () => {
      // Revalidar após mutação (sucesso ou erro)
      queryClient.invalidateQueries({ queryKey: ['chamados', user?.id] })
    },
  })
}

/**
 * Hook React Query para fechar um chamado
 * Wrapper do useUpdateChamadoStatus com status 'fechado'
 * 
 * @returns Mutation para fechar chamado
 */
export function useCloseChamado() {
  const updateStatus = useUpdateChamadoStatus()

  return useMutation({
    mutationFn: async (chamadoId: string) => {
      return updateStatus.mutateAsync({
        chamadoId,
        novoStatus: 'fechado',
      })
    },
    onSuccess: () => {
      toast.success('✅ Chamado fechado')
    },
  })
}

/**
 * Hook derivado para contar chamados por status
 * 
 * @param status - Status para contar
 * @returns Número de chamados com o status especificado
 */
export function useChamadosCountByStatus(status: Chamado['status']) {
  const { data: chamados = [] } = useChamadosQuery()

  return chamados.filter((c: Chamado) => c.status === status).length
}

/**
 * Hook para configurar realtime subscription de chamados
 * Atualiza cache automaticamente quando houver mudanças
 * 
 * @returns Função de cleanup da subscription
 */
export function useChamadosRealtime() {
  const queryClient = useQueryClient()
  const { user } = useAuth()

  if (!user?.id) return

  const subscription = supabase
    .channel('chamados-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'chamados',
        filter: `user_id=eq.${user.id}`,
      },
      (payload) => {
        console.log('Chamado atualizado:', payload)

        if (payload.eventType === 'INSERT') {
          // Adicionar novo chamado ao cache
          queryClient.setQueryData<Chamado[]>(
            ['chamados', user.id],
            (old: Chamado[] | undefined) => (old ? [payload.new as Chamado, ...old] : [payload.new as Chamado])
          )
        } else if (payload.eventType === 'UPDATE') {
          // Atualizar chamado existente no cache
          queryClient.setQueryData<Chamado[]>(
            ['chamados', user.id],
            (old: Chamado[] | undefined) =>
              old?.map((c: Chamado) =>
                c.id === payload.new.id ? (payload.new as Chamado) : c
              )
          )

          // Notificações
          if (payload.old.response !== payload.new.response && payload.new.response) {
            toast.success('💬 Você recebeu uma resposta do síndico!')
          }
          if (payload.old.status !== payload.new.status) {
            toast.success(`📋 Status do chamado: ${payload.new.status}`)
          }
        } else if (payload.eventType === 'DELETE') {
          // Remover chamado deletado do cache
          queryClient.setQueryData<Chamado[]>(
            ['chamados', user.id],
            (old: Chamado[] | undefined) => old?.filter((c: Chamado) => c.id !== payload.old.id)
          )
        }

        // Invalidar queries para forçar revalidação
        queryClient.invalidateQueries({ queryKey: ['chamados', user.id] })
      }
    )
    .subscribe()

  return () => {
    subscription.unsubscribe()
  }
}
