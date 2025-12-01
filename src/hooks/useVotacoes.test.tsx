import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor, act } from '@testing-library/react'
import { useVotacoes } from './useVotacoes'

// Mock AuthContext
vi.mock('../contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { id: 'user-123' },
    profile: { condominio_id: 'condo-123' }
  })
}))

// Mock toast
vi.mock('react-hot-toast', () => ({
  default: {
    success: vi.fn(),
    error: vi.fn(),
    loading: vi.fn(() => 'toast-id'),
    dismiss: vi.fn()
  }
}))

// Supabase mock helpers
const supabaseFrom = vi.fn()
const supabaseRpc = vi.fn()
vi.mock('../lib/supabase', () => ({
  supabase: {
    from: (table: string) => supabaseFrom(table),
    rpc: (fn: string, args?: any) => supabaseRpc(fn, args)
  }
}))

function setupSuccessMocks() {
  supabaseFrom.mockImplementation((table: string) => {
    if (table === 'votacoes') {
      return {
        select: () => ({
          eq: () => ({
            order: async () => ({
              data: [
                {
                  id: 'vot-1',
                  title: 'Pauta 1',
                  description: 'Desc',
                  start_date: '2025-11-01T00:00:00Z',
                  end_date: '2025-12-30T00:00:00Z', // ativa
                  total_voters: 100,
                  is_secret: false,
                  options: [{ id: 1, text: 'Sim' }, { id: 2, text: 'Não' }],
                  condominio_id: 'condo-123'
                },
                {
                  id: 'vot-2',
                  title: 'Pauta 2',
                  description: 'Desc',
                  start_date: '2025-10-01T00:00:00Z',
                  end_date: '2025-11-01T00:00:00Z', // encerrada
                  total_voters: 80,
                  is_secret: true,
                  options: [{ id: 3, text: 'A' }, { id: 4, text: 'B' }],
                  condominio_id: 'condo-123'
                }
              ]
            })
          })
        })
      }
    }
    if (table === 'votos') {
      return {
        select: () => ({
          eq: () => ({
            eq: () => ({ maybeSingle: async () => ({ data: { option_id: 1 } }) })
          })
        }),
        insert: async () => ({ error: null })
      }
    }
    return { select: () => ({}) }
  })
  supabaseRpc.mockImplementation((fn: string) => {
    if (fn === 'get_votacao_results') {
      return { data: { '1': 60, '2': 40 } }
    }
    return { data: {} }
  })
}

describe('useVotacoes', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    setupSuccessMocks()
  })

  it('carrega votações e enriquece com resultados e voto do usuário', async () => {
    const { result } = renderHook(() => useVotacoes('all'))
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.votacoes.length).toBe(2)
    const [ativa, encerrada] = result.current.votacoes
    expect(ativa.status).toBe('ativa')
    expect(encerrada.status).toBe('encerrada')
    expect(ativa.results).toBeDefined()
    expect(ativa.user_vote).toBe('Sim')
    expect(ativa.user_already_voted).toBe(true)
  })

  it('filtra por status ativa/encerrada corretamente', async () => {
    const { result: r1 } = renderHook(() => useVotacoes('ativa'))
    await waitFor(() => expect(r1.current.loading).toBe(false))
    expect(r1.current.votacoes.length).toBeGreaterThan(0)
    expect(r1.current.votacoes.some(v => v.status === 'ativa')).toBe(true)

    const { result: r2 } = renderHook(() => useVotacoes('encerrada'))
    await waitFor(() => expect(r2.current.loading).toBe(false))
    expect(r2.current.votacoes.length).toBeGreaterThan(0)
    expect(r2.current.votacoes.some(v => v.status === 'encerrada')).toBe(true)
  })

  it('trata erro ao carregar votações', async () => {
    supabaseFrom.mockImplementationOnce(() => ({ select: () => ({ eq: () => ({ order: async () => ({ error: new Error('db error') }) }) }) }))
    const { result } = renderHook(() => useVotacoes('all'))
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.error).toBeDefined()
  })

  it('impede voto duplo e voto em votação encerrada', async () => {
    const { result } = renderHook(() => useVotacoes('all'))
    await waitFor(() => expect(result.current.loading).toBe(false))

    // já votado na ativa
    const ok1 = await result.current.votar('vot-1', 1)
    expect(ok1).toBe(false)

    // simula encerrada escolhida
    await act(async () => {
      const ok2 = await result.current.votar('vot-2', 3)
      expect(ok2).toBe(false)
    })
  })

  it('registra voto e recarrega dados', async () => {
    // ajustar mock para não ter voto do usuário inicialmente
    supabaseFrom.mockImplementation((table: string) => {
      if (table === 'votacoes') {
        return { select: () => ({ eq: () => ({ order: async () => ({ data: [{ id: 'vot-3', title: 'Nova', description: '', start_date: '2025-11-01T00:00:00Z', end_date: '2025-12-30T00:00:00Z', total_voters: 50, is_secret: false, options: [{ id: 10, text: 'X' }, { id: 11, text: 'Y' }], condominio_id: 'condo-123' }] }) }) }) }
      }
      if (table === 'votos') {
        return { select: () => ({ eq: () => ({ eq: () => ({ maybeSingle: async () => ({ data: null }) }) }) }), insert: async () => ({ error: null }) }
      }
      return { select: () => ({}) }
    })
    supabaseRpc.mockImplementation(() => ({ data: { '10': 1, '11': 0 } }))

    const { result } = renderHook(() => useVotacoes('all'))
    await waitFor(() => expect(result.current.loading).toBe(false))

    const ok = await act(async () => result.current.votar('vot-3', 10))
    expect(ok).toBe(true)
  })
})
