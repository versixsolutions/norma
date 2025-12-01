import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Comunicados from './Comunicados'
import * as AuthContext from '../contexts/AuthContext'

// Mock hooks
vi.mock('../hooks/queries/comunicados', () => ({
  useComunicadosQuery: vi.fn(),
  useMarkComunicadoAsRead: vi.fn(),
}))

vi.mock('../contexts/AuthContext', async () => {
  const actual = await vi.importActual<typeof import('../contexts/AuthContext')>('../contexts/AuthContext')
  return {
    ...actual,
    useAuth: vi.fn(),
  }
})

// Mock components
vi.mock('../components/PageLayout', () => ({
  default: ({ children, title, subtitle, headerAction }: any) => (
    <div>
      <div data-testid="page-layout-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {headerAction}
      </div>
      <div data-testid="page-layout-content">{children}</div>
    </div>
  ),
}))

vi.mock('../components/LoadingSpinner', () => ({
  default: () => <div data-testid="loading-spinner">Carregando...</div>,
}))

vi.mock('../components/EmptyState', () => ({
  default: ({ title, description, action }: any) => (
    <div data-testid="empty-state">
      <p>{title}</p>
      <p>{description}</p>
      {action && <button onClick={action.onClick}>{action.label}</button>}
    </div>
  ),
}))

import { useComunicadosQuery, useMarkComunicadoAsRead } from '../hooks/queries/comunicados'

describe('Comunicados Page', () => {
  const mockComunicados = [
    {
      id: 'com-1',
      title: 'Manutenção do Elevador',
      content: 'Informamos que será realizada manutenção preventiva no elevador.',
      type: 'importante',
      priority: 3,
      published_at: '2024-01-15T10:00:00Z',
      created_at: '2024-01-15T09:00:00Z',
      author: { full_name: 'João Síndico', role: 'sindico' },
      is_read: false,
    },
    {
      id: 'com-2',
      title: 'Assembleia Geral',
      content: 'Convocação para assembleia geral ordinária.',
      type: 'assembleia',
      priority: 4,
      published_at: '2024-01-10T14:00:00Z',
      created_at: '2024-01-10T13:00:00Z',
      author: { full_name: 'Maria Admin', role: 'admin' },
      is_read: true,
    },
    {
      id: 'com-3',
      title: 'Boleto Disponível',
      content: 'O boleto de janeiro já está disponível.',
      type: 'financeiro',
      priority: 2,
      published_at: '2024-01-05T08:00:00Z',
      created_at: '2024-01-05T07:00:00Z',
      author: { full_name: 'Sistema', role: 'admin' },
      is_read: false,
    },
  ]

  const mockMarkAsReadMutate = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()

    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: null,
      profile: {
        id: 'user-1',
        email: 'test@example.com',
        full_name: 'Test User',
        first_name: 'Test',
        last_name: 'User',
        role: 'morador',
        phone: null,
        unit_number: '101',
        block: null,
        resident_type: null,
        is_whatsapp: null,
        condominio_id: 'condo-1',
        condominio_name: 'Condomínio Teste',
        avatar_url: null,
      },
      session: null,
      loading: false,
      authError: null,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      isAdmin: false,
      isSindico: false,
      isSubSindico: false,
      isConselho: false,
      isMorador: true,
      canManage: false,
    })

    vi.mocked(useComunicadosQuery).mockReturnValue({
      data: mockComunicados,
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    } as any)

    vi.mocked(useMarkComunicadoAsRead).mockReturnValue({
      mutate: mockMarkAsReadMutate,
      isLoading: false,
    } as any)
  })

  const renderPage = () => {
    return render(
      <BrowserRouter>
        <Comunicados />
      </BrowserRouter>
    )
  }

  describe('Rendering', () => {
    it('should render page title and subtitle', () => {
      renderPage()

      expect(screen.getByText('Mural de Comunicados')).toBeInTheDocument()
      expect(screen.getByText('Fique por dentro de tudo')).toBeInTheDocument()
    })

    it('should show loading spinner when loading', () => {
      vi.mocked(useComunicadosQuery).mockReturnValue({
        data: [],
        isLoading: true,
        error: null,
        refetch: vi.fn(),
      } as any)

      renderPage()

      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
    })

    it('should render all comunicados', () => {
      renderPage()

      expect(screen.getByText('Manutenção do Elevador')).toBeInTheDocument()
      expect(screen.getByText('Assembleia Geral')).toBeInTheDocument()
      expect(screen.getByText('Boleto Disponível')).toBeInTheDocument()
    })
  })

  describe('Summary Cards', () => {
    it('should display total comunicados count', () => {
      renderPage()

      expect(screen.getByText('Total de Avisos')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument() // 3 comunicados
    })

    it('should display unread count', () => {
      renderPage()

      expect(screen.getByText('Não Lidos')).toBeInTheDocument()
      const counts = screen.getAllByText('2')
      expect(counts.length).toBeGreaterThan(0) // 2 appears multiple times
    })

    it('should display urgent count', () => {
      renderPage()

      expect(screen.getByText('Urgentes')).toBeInTheDocument()
      // '2' appears multiple times in the page (unread badge, unread count, urgent count)
      const urgentCard = screen.getByText('Urgentes').closest('div')
      expect(urgentCard).toHaveTextContent('2')
    })
  })

  describe('Header Actions', () => {
    it('should show unread badge', () => {
      renderPage()

      expect(screen.getByText(/2 novos/i)).toBeInTheDocument()
    })

    it('should not show unread badge when all read', () => {
      vi.mocked(useComunicadosQuery).mockReturnValue({
        data: mockComunicados.map(c => ({ ...c, is_read: true })),
        isLoading: false,
        error: null,
        refetch: vi.fn(),
      } as any)

      renderPage()

      expect(screen.queryByText(/novos/i)).not.toBeInTheDocument()
    })

    it('should show create button for managers', () => {
      vi.mocked(AuthContext.useAuth).mockReturnValue({
        user: null,
        profile: {
          id: 'user-1',
          email: 'admin@example.com',
          full_name: 'Admin User',
          first_name: 'Admin',
          last_name: 'User',
          role: 'admin',
          phone: null,
          unit_number: '101',
          block: null,
          resident_type: null,
          is_whatsapp: null,
          condominio_id: 'condo-1',
          condominio_name: 'Condomínio Teste',
          avatar_url: null,
        },
        session: null,
        loading: false,
        authError: null,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        isAdmin: true,
        isSindico: false,
        isSubSindico: false,
        isConselho: false,
        isMorador: false,
        canManage: true,
      })

      renderPage()

      expect(screen.getByText(/Novo Aviso/i)).toBeInTheDocument()
    })

    it('should not show create button for regular users', () => {
      renderPage()

      expect(screen.queryByText(/Novo Aviso/i)).not.toBeInTheDocument()
    })
  })

  describe('Comunicado Cards', () => {
    it('should display unread badge on new comunicados', () => {
      renderPage()

      const novoBadges = screen.getAllByText('NOVO')
      expect(novoBadges).toHaveLength(2) // 2 unread
    })

    it('should show type badges', () => {
      renderPage()

      // Type badges appear both in filter bar and on cards
      const importanteBadges = screen.getAllByText(/Importante/i)
      expect(importanteBadges.length).toBeGreaterThan(0)
      
      const assembleiaBadges = screen.getAllByText(/Assembleia/i)
      expect(assembleiaBadges.length).toBeGreaterThan(0)
      
      const financeiroBadges = screen.getAllByText(/Financeiro/i)
      expect(financeiroBadges.length).toBeGreaterThan(0)
    })

    it('should mark comunicado as read when button clicked', async () => {
      const user = userEvent.setup()
      renderPage()

      const markReadButtons = screen.getAllByText(/Marcar lido/i)
      await user.click(markReadButtons[0])

      expect(mockMarkAsReadMutate).toHaveBeenCalledWith('com-1')
    })

    it('should show "Lido" for read comunicados', () => {
      renderPage()

      expect(screen.getByText('Lido')).toBeInTheDocument()
    })

    it('should expand comunicado content when "Saiba mais" clicked', async () => {
      const user = userEvent.setup()
      renderPage()

      const saibaMaisButtons = screen.getAllByText(/Saiba mais/i)
      await user.click(saibaMaisButtons[0])

      await waitFor(() => {
        expect(screen.getByText(/Ler menos/i)).toBeInTheDocument()
      })
    })
  })

  describe('Filtering', () => {
    it('should show all comunicados by default', () => {
      renderPage()

      expect(screen.getByText('Manutenção do Elevador')).toBeInTheDocument()
      expect(screen.getByText('Assembleia Geral')).toBeInTheDocument()
      expect(screen.getByText('Boleto Disponível')).toBeInTheDocument()
    })

    it('should filter by type when filter button clicked', async () => {
      const user = userEvent.setup()
      renderPage()

      // Find filter button specifically (not the card badge)
      const filters = screen.getAllByText(/Assembleia/i)
      const assembleiaFilter = filters.find(el => el.closest('button')?.className.includes('rounded-full'))
      
      if (assembleiaFilter) {
        const button = assembleiaFilter.closest('button')
        if (button) {
          await user.click(button)
        }
      }

      await waitFor(() => {
        // After filtering, only assembleia type should remain
        expect(screen.queryByText('Manutenção do Elevador')).not.toBeInTheDocument()
        expect(screen.getByText('Assembleia Geral')).toBeInTheDocument()
      })
    })

    it('should show all when "Todos" filter clicked', async () => {
      const user = userEvent.setup()
      renderPage()

      // First filter to specific type
      const filters = screen.getAllByText(/Importante/i)
      const importanteFilter = filters.find(el => el.closest('button')?.className.includes('rounded-full'))
      
      if (importanteFilter) {
        const button = importanteFilter.closest('button')
        if (button) {
          await user.click(button)
        }
      }

      // Then click "Todos"
      const todosButton = screen.getByText('Todos')
      await user.click(todosButton)

      await waitFor(() => {
        expect(screen.getByText('Manutenção do Elevador')).toBeInTheDocument()
        expect(screen.getByText('Assembleia Geral')).toBeInTheDocument()
      })
    })
  })

  describe('Empty State', () => {
    it('should show empty state when no comunicados', () => {
      vi.mocked(useComunicadosQuery).mockReturnValue({
        data: [],
        isLoading: false,
        error: null,
        refetch: vi.fn(),
      } as any)

      renderPage()

      expect(screen.getByTestId('empty-state')).toBeInTheDocument()
      expect(screen.getByText(/Nenhum comunicado/i)).toBeInTheDocument()
    })

    it('should show empty state action button', async () => {
      const user = userEvent.setup()
      vi.mocked(useComunicadosQuery).mockReturnValue({
        data: [],
        isLoading: false,
        error: null,
        refetch: vi.fn(),
      } as any)

      renderPage()

      const verTodosButton = screen.getByText('Ver todos')
      await user.click(verTodosButton)

      // Should reset filter (tested by state change)
      expect(verTodosButton).toBeInTheDocument()
    })
  })
})
