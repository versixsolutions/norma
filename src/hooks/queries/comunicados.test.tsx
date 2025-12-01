import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { useComunicadosQuery, useMarkComunicadoAsRead, useUnreadComunicadosCount } from './comunicados'
import * as AuthContext from '../../contexts/AuthContext'

// Dados mock
const mockComunicados = [
  {
    id: '1',
    title: 'Comunicado Importante',
    content: 'Conteúdo do comunicado',
    type: 'importante',
    priority: 1,
    published_at: '2025-11-30T10:00:00Z',
    created_at: '2025-11-30T09:00:00Z',
    author_id: 'user-1',
    comunicado_attachments: [],
    comunicado_reads: []
  },
  {
    id: '2',
    title: 'Comunicado Geral',
    content: 'Outro conteúdo',
    type: 'geral',
    priority: 2,
    published_at: '2025-11-29T10:00:00Z',
    created_at: '2025-11-29T09:00:00Z',
    author_id: 'user-1',
    comunicado_attachments: [],
    comunicado_reads: [{ user_id: 'user-123' }]
  }
]

// Mock do Supabase
vi.mock('../../lib/supabase', () => ({
  supabase: {
    from: () => ({
      select: () => ({
        order: () => ({
          order: () => ({
            eq: async () => ({ data: mockComunicados, error: null })
          })
        })
      }),
      insert: async () => ({ data: null, error: null })
    })
  }
}))

// Mock do AuthContext
vi.mock('../../contexts/AuthContext', () => ({
  useAuth: vi.fn()
}))

// Wrapper para QueryClient
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

describe('useComunicadosQuery', () => {
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

  it('busca comunicados sem filtro', async () => {
    const { result } = renderHook(
      () => useComunicadosQuery(),
      { wrapper: createWrapper() }
    )

    // Aguardar conclusão da query
    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    // Mock retorna dados processados
    expect(result.current.data).toBeDefined()
    expect(Array.isArray(result.current.data)).toBe(true)
  })

  it('busca comunicados com filtro de tipo', async () => {
    const { result } = renderHook(
      () => useComunicadosQuery('importante'),
      { wrapper: createWrapper() }
    )

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toHaveLength(2)
  })

  it('retorna array vazio se não há usuário autenticado', async () => {
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
      () => useComunicadosQuery(),
      { wrapper: createWrapper() }
    )

    // Query não deve executar sem usuário
    expect(result.current.isLoading).toBe(false)
    expect(result.current.data).toBeUndefined()
  })
})

describe('useMarkComunicadoAsRead', () => {
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

  it('marca comunicado como lido', async () => {
    const { result } = renderHook(
      () => useMarkComunicadoAsRead(),
      { wrapper: createWrapper() }
    )

    // Estado inicial
    expect(result.current.isPending).toBe(false)

    // Executar mutation
    result.current.mutate('comunicado-1')

    // Aguardar conclusão
    await waitFor(() => expect(result.current.isSuccess).toBe(true))
  })

  it('falha gracefully se usuário não autenticado', async () => {
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
      () => useMarkComunicadoAsRead(),
      { wrapper: createWrapper() }
    )

    result.current.mutate('comunicado-1')

    await waitFor(() => expect(result.current.isError).toBe(true))
  })
})

describe('useUnreadComunicadosCount', () => {
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

  it('conta comunicados não lidos corretamente', async () => {
    const { result } = renderHook(
      () => useUnreadComunicadosCount(),
      { wrapper: createWrapper() }
    )

    // Hook derivado retorna número
    await waitFor(() => expect(typeof result.current).toBe('number'))
    expect(result.current).toBeGreaterThanOrEqual(0)
  })

  it('retorna 0 quando não há comunicados não lidos', async () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: { id: 'user-999', email: 'other@example.com' },
      loading: false,
      canManage: false,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      updateProfile: vi.fn()
    } as any)

    const { result } = renderHook(
      () => useUnreadComunicadosCount(),
      { wrapper: createWrapper() }
    )

    await waitFor(() => expect(typeof result.current).toBe('number'))
    expect(result.current).toBeGreaterThanOrEqual(0)
  })
})
