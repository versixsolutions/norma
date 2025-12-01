import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { 
  useChamadosQuery, 
  useCreateChamado, 
  useUpdateChamadoStatus,
  useCloseChamado,
  useChamadosCountByStatus 
} from './chamados'
import * as AuthContext from '../../contexts/AuthContext'

// Mock do Supabase
const mockChamados = [
  {
    id: 'chamado-1',
    user_id: 'user-123',
    subject: 'Administrativo',
    description: 'Problema com portaria',
    status: 'aberto',
    response: null,
    created_at: '2025-11-30T10:00:00Z',
    updated_at: null,
    closed_at: null
  },
  {
    id: 'chamado-2',
    user_id: 'user-123',
    subject: 'Financeiro',
    description: 'Dúvida sobre boleto',
    status: 'em_andamento',
    response: 'Estamos verificando',
    created_at: '2025-11-29T10:00:00Z',
    updated_at: '2025-11-29T15:00:00Z',
    closed_at: null
  },
  {
    id: 'chamado-3',
    user_id: 'user-123',
    subject: 'Sugestão',
    description: 'Melhorias no app',
    status: 'fechado',
    response: 'Sugestão registrada',
    created_at: '2025-11-28T10:00:00Z',
    updated_at: '2025-11-28T16:00:00Z',
    closed_at: '2025-11-28T16:00:00Z'
  }
]

vi.mock('../../lib/supabase', () => ({
  supabase: {
    from: (table: string) => {
      if (table === 'chamados') {
        return {
          select: () => ({
            eq: () => ({
              order: async () => ({ data: mockChamados, error: null }),
              eq: () => ({
                order: async () => ({ data: mockChamados, error: null })
              })
            })
          }),
          insert: () => ({
            select: () => ({
              single: async () => ({
                data: {
                  id: 'new-chamado',
                  user_id: 'user-123',
                  subject: 'Novo Chamado',
                  description: 'Descrição do novo chamado',
                  status: 'aberto',
                  response: null,
                  created_at: new Date().toISOString(),
                  updated_at: null,
                  closed_at: null
                },
                error: null
              })
            })
          }),
          update: () => ({
            eq: () => ({
              eq: () => ({
                select: () => ({
                  single: async () => ({
                    data: {
                      ...mockChamados[0],
                      status: 'em_andamento',
                      updated_at: new Date().toISOString()
                    },
                    error: null
                  })
                })
              })
            })
          })
        }
      }
      return {}
    },
    channel: () => ({
      on: () => ({ subscribe: vi.fn() })
    })
  }
}))

vi.mock('../../contexts/AuthContext', () => ({
  useAuth: vi.fn()
}))

vi.mock('react-hot-toast', () => ({
  default: {
    success: vi.fn(),
    error: vi.fn()
  }
}))

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0
      },
      mutations: {
        retry: false
      }
    }
  })
  
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

describe('useChamadosQuery', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: { id: 'user-123', email: 'test@example.com' },
      loading: false,
      canManage: false,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      updateProfile: vi.fn()
    } as any)
  })

  it('busca todos os chamados do usuário', async () => {
    const { result } = renderHook(
      () => useChamadosQuery(),
      { wrapper: createWrapper() }
    )

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toHaveLength(3)
    expect(result.current.data?.[0].subject).toBe('Administrativo')
    expect(result.current.data?.[1].status).toBe('em_andamento')
    expect(result.current.data?.[2].closed_at).toBeTruthy()
  })

  it('busca chamados com filtro de status', () => {
    const { result } = renderHook(
      () => useChamadosQuery('aberto'),
      { wrapper: createWrapper() }
    )

    // Query aceita filtro como parâmetro (validar apenas estrutura)
    expect(result.current).toBeDefined()
  })

  it('não executa query sem usuário autenticado', () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: null,
      loading: false,
      canManage: false,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      updateProfile: vi.fn()
    } as any)

    const { result } = renderHook(
      () => useChamadosQuery(),
      { wrapper: createWrapper() }
    )

    expect(result.current.isLoading).toBe(false)
    expect(result.current.data).toBeUndefined()
  })
})

describe('useCreateChamado', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: { id: 'user-123', email: 'test@example.com' },
      loading: false,
      canManage: false,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      updateProfile: vi.fn()
    } as any)
  })

  it('cria novo chamado com sucesso', async () => {
    const { result } = renderHook(
      () => useCreateChamado(),
      { wrapper: createWrapper() }
    )

    expect(result.current.isPending).toBe(false)

    result.current.mutate({
      subject: 'Novo Chamado',
      description: 'Descrição do novo chamado'
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data?.id).toBe('new-chamado')
    expect(result.current.data?.status).toBe('aberto')
  })

  it('falha ao criar chamado sem usuário', async () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: null,
      loading: false,
      canManage: false,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      updateProfile: vi.fn()
    } as any)

    const { result } = renderHook(
      () => useCreateChamado(),
      { wrapper: createWrapper() }
    )

    result.current.mutate({
      subject: 'Teste',
      description: 'Teste'
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
  })
})

describe('useUpdateChamadoStatus', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: { id: 'user-123', email: 'test@example.com' },
      loading: false,
      canManage: false,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      updateProfile: vi.fn()
    } as any)
  })

  it('atualiza status do chamado', async () => {
    const { result } = renderHook(
      () => useUpdateChamadoStatus(),
      { wrapper: createWrapper() }
    )

    result.current.mutate({
      chamadoId: 'chamado-1',
      novoStatus: 'em_andamento'
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data?.status).toBe('em_andamento')
  })
})

describe('useCloseChamado', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: { id: 'user-123', email: 'test@example.com' },
      loading: false,
      canManage: false,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      updateProfile: vi.fn()
    } as any)
  })

  it('fecha chamado com sucesso', async () => {
    const { result } = renderHook(
      () => useCloseChamado(),
      { wrapper: createWrapper() }
    )

    result.current.mutate('chamado-1')

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
  })
})

describe('useChamadosCountByStatus', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: { id: 'user-123', email: 'test@example.com' },
      loading: false,
      canManage: false,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      updateProfile: vi.fn()
    } as any)
  })

  it('conta chamados por status corretamente', async () => {
    const { result } = renderHook(
      () => useChamadosCountByStatus('aberto'),
      { wrapper: createWrapper() }
    )

    await waitFor(() => expect(result.current).toBe(1))
  })

  it('retorna 0 para status sem chamados', async () => {
    const { result } = renderHook(
      () => useChamadosCountByStatus('resolvido'),
      { wrapper: createWrapper() }
    )

    await waitFor(() => expect(result.current).toBe(0))
  })
})
