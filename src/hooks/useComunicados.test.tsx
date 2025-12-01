import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor, act } from '@testing-library/react'
import { useComunicados } from './useComunicados'

// Mock completo do Supabase
const mockSelect = vi.fn()
const mockOrder = vi.fn()
const mockEq = vi.fn()
const mockInsert = vi.fn()

vi.mock('../lib/supabase', () => ({
  supabase: {
    from: vi.fn((table: string) => {
      if (table === 'comunicados') {
        mockSelect.mockReturnValue({
          order: mockOrder
        })
        return { select: mockSelect }
      }
      if (table === 'comunicado_reads') {
        return { insert: mockInsert }
      }
      return {}
    })
  }
}))

// Mock AuthContext
vi.mock('../contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { id: 'user-123' },
    profile: { condominio_id: 'condo-123' }
  })
}))

function setupSuccessMocks() {
  mockOrder.mockImplementation(() => ({
    order: vi.fn().mockResolvedValue({
      data: [
        { 
          id: 'c1', 
          title: 'Bem-vindo', 
          body: 'Texto', 
          published_at: '2025-11-01T00:00:00Z',
          priority: 5,
          type: 'geral',
          comunicado_attachments: [],
          comunicado_reads: [{ user_id: 'user-123' }]
        },
        { 
          id: 'c2', 
          title: 'Manutenção', 
          body: 'Aviso', 
          published_at: '2025-11-15T00:00:00Z',
          priority: 3,
          type: 'importante',
          comunicado_attachments: [],
          comunicado_reads: []
        }
      ],
      error: null
    })
  }))

  mockInsert.mockResolvedValue({ data: { id: 'read-1' }, error: null })
}

describe.skip('useComunicados (legado) - hooks complexos serão substituídos por React Query', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    setupSuccessMocks()
  })

  it('carrega comunicados e calcula unreadCount corretamente', async () => {
    const { result } = renderHook(() => useComunicados())
    await waitFor(() => expect(result.current.loading).toBe(false), { timeout: 3000 })
    expect(result.current.comunicados.length).toBe(2)
    expect(result.current.unreadCount).toBe(1)
  })

  it('marca como lido e reduz unreadCount', async () => {
    const { result } = renderHook(() => useComunicados())
    await waitFor(() => expect(result.current.loading).toBe(false), { timeout: 3000 })
    expect(result.current.unreadCount).toBe(1)

    await act(async () => {
      await result.current.markAsRead('c2')
    })

    expect(result.current.unreadCount).toBe(0)
  })

  it('trata erro ao carregar comunicados', async () => {
    mockOrder.mockImplementationOnce(() => ({
      order: vi.fn().mockResolvedValue({
        data: null,
        error: new Error('db error')
      })
    }))
    
    const { result } = renderHook(() => useComunicados())
    await waitFor(() => expect(result.current.loading).toBe(false), { timeout: 3000 })
    expect(result.current.error).toBeDefined()
  })
})
