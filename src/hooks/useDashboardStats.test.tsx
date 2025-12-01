import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useDashboardStats } from './useDashboardStats'

// Mock AuthContext
vi.mock('../contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { id: 'user-123' },
    profile: { condominio_id: 'condo-123' }
  })
}))

// Supabase mock helpers
let despesasCalls = 0
const supabaseFrom = vi.fn()
const supabaseRpc = vi.fn()
vi.mock('../lib/supabase', () => ({
  supabase: {
    from: (table: string) => supabaseFrom(table),
    rpc: (fn: string, args?: any) => supabaseRpc(fn, args)
  }
}))

function setupSuccessMocks() {
  despesasCalls = 0
  supabaseFrom.mockImplementation((table: string) => {
    if (table === 'despesas') {
      // Primeira chamada: descobrir última despesa (order/limit/maybeSingle)
      if (despesasCalls === 0) {
        despesasCalls++
        return {
          select: () => ({
            order: () => ({ limit: () => ({ maybeSingle: async () => ({ data: { due_date: '2025-10-25T00:00:00Z' } }) }) })
          })
        }
      }
      // Segunda chamada: range do mês (gte/lte)
      return {
        select: () => ({ gte: () => ({ lte: async () => ({ data: [{ amount: 120.5 }, { amount: 79.5 }] }) }) })
      }
    }
    if (table === 'votacoes') {
      return { select: () => ({ gt: async () => ({ data: [{ id: 'v1' }, { id: 'v2' }] }) }) }
    }
    if (table === 'ocorrencias') {
      return { select: () => ({ in: async () => ({ data: [{ status: 'aberto' }, { status: 'em_andamento' }, { status: 'aberto' }] }) }) }
    }
    if (table === 'faqs') {
      return { select: () => ({ count: 'exact', head: true }) }
    }
    if (table === 'comunicados') {
      return { select: async () => ({ data: [{ id: 'c1' }, { id: 'c2' }, { id: 'c3' }] }) }
    }
    if (table === 'comunicado_reads') {
      return { select: () => ({ eq: async () => ({ data: [{ comunicado_id: 'c1' }] }) }) }
    }
    // default: retorna objeto mínimo com select para evitar erros
    return { select: () => ({}) }
  })
}

describe('useDashboardStats', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    setupSuccessMocks()
  })

  it('carrega estatísticas com sucesso', async () => {
    const { result } = renderHook(() => useDashboardStats())
    // aguarda processamento
    await waitFor(() => expect(result.current.loading).toBe(false))

    // validações básicas
    expect(result.current.stats.despesas.totalMes).toBeGreaterThan(0)
    expect(result.current.stats.votacoes.ativas).toBe(2)
    expect(result.current.stats.ocorrencias.abertas).toBe(2)
    expect(result.current.stats.comunicados.nao_lidos).toBe(2) // 3 total, 1 lido
    expect(result.current.stats.despesas.monthLabel.length).toBeGreaterThan(0)
  })

  it('não carrega sem condominio_id', async () => {
    vi.doMock('../contexts/AuthContext', () => ({
      useAuth: () => ({ user: { id: 'user-123' }, profile: { condominio_id: undefined } })
    }))
    const { useDashboardStats: HookNoCondo } = await import('./useDashboardStats')
    const { result } = renderHook(() => HookNoCondo())
    // loading deve permanecer true até não iniciar
    expect(result.current.loading).toBe(true)
  })

  it('exibe erro gracioso quando supabase falha', async () => {
    supabaseFrom.mockImplementation((table: string) => {
      if (table === 'despesas') {
        return { select: () => ({ order: () => ({ limit: () => ({ maybeSingle: async () => ({ data: null }) }) }) }) }
      }
      // força erro em range despesas
      return { select: () => ({ gte: () => ({ lte: async () => { throw new Error('db error') } }) }) }
    })

    const { result } = renderHook(() => useDashboardStats())
    await waitFor(() => expect(result.current.loading).toBe(false))
    // em caso de erro, mantém valores iniciais
    expect(result.current.stats).toBeDefined()
    expect(result.current.stats.despesas.totalMes).toBe(0)
  })

  it('permite recarregar manualmente via reload', async () => {
    const { result } = renderHook(() => useDashboardStats())
    await waitFor(() => expect(result.current.loading).toBe(false))
    const previousTotal = result.current.stats.despesas.totalMes

    // altera mock para novo valor, respeitando a primeira chamada (order/limit/maybeSingle)
    despesasCalls = 0
    supabaseFrom.mockImplementation((table: string) => {
      if (table === 'despesas') {
        if (despesasCalls === 0) {
          despesasCalls++
          return { select: () => ({ order: () => ({ limit: () => ({ maybeSingle: async () => ({ data: { due_date: '2025-10-25T00:00:00Z' } }) }) }) }) }
        }
        return { select: () => ({ gte: () => ({ lte: async () => ({ data: [{ amount: 300 }] }) }) }) }
      }
      return { select: () => ({}) }
    })

    await result.current.reload()
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.stats.despesas.totalMes).toBeGreaterThanOrEqual(previousTotal)
  })
})
