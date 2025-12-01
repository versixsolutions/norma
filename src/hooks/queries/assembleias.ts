import { useQuery } from '@tanstack/react-query'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import type { Assembleia } from '../../types'

export function useAssembleiasQuery() {
  const { profile } = useAuth()
  const condominioId = profile?.condominio_id

  return useQuery<Assembleia[], Error>({
    queryKey: ['assembleias', condominioId],
    queryFn: async () => {
      if (!condominioId) return []
      const { data, error } = await supabase
        .from('assembleias')
        .select('*')
        .eq('condominio_id', condominioId)
        .order('data_hora', { ascending: false })
      if (error) throw error
      return data || []
    },
    enabled: Boolean(condominioId),
    staleTime: 1000 * 60, // 1 min
    gcTime: 1000 * 60 * 10, // 10 min
  })
}
