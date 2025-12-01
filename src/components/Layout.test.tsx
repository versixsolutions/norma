import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout'
import * as AuthContext from '../contexts/AuthContext'
import * as ThemeContext from '../contexts/ThemeContext'

// Mock all dependencies
vi.mock('../hooks/useDashboardStats', () => ({
  useDashboardStats: () => ({ stats: {} }),
}))

vi.mock('../hooks/useKeyboardNavigation', () => ({
  useKeyboardShortcuts: vi.fn(),
}))

vi.mock('./LoadingSpinner', () => ({
  default: () => <div data-testid="loading">Loading</div>,
}))

vi.mock('./Chatbot', () => ({
  default: () => null,
}))

vi.mock('./SkipLinks', () => ({
  default: () => null,
}))

vi.mock('./KeyboardShortcutsHelp', () => ({
  default: () => null,
}))

vi.mock('./ui/Tooltip', () => ({
  default: ({ children }: any) => children,
}))

vi.mock('../contexts/AuthContext', async () => {
  const actual = await vi.importActual<typeof import('../contexts/AuthContext')>('../contexts/AuthContext')
  return {
    ...actual,
    useAuth: vi.fn(),
  }
})

vi.mock('../contexts/ThemeContext', () => ({
  useTheme: vi.fn(),
}))

describe('Layout Component', () => {
  const mockProfile = {
    id: 'user-1',
    email: 'test@example.com',
    full_name: 'João Silva',
    first_name: 'João',
    role: 'morador' as const,
    phone: null,
    unit_number: '101',
    block: null,
    resident_type: null,
    is_whatsapp: null,
    condominio_id: 'condo-1',
    condominio_name: 'Condomínio Teste',
    avatar_url: null,
    last_name: 'Silva',
  }

  const mockTheme = {
    name: 'default',
    slug: 'default',
    fullName: 'Default Theme',
    colors: {
      primary: { DEFAULT: '#3B82F6', dark: '', light: '', 50: '', 100: '', 200: '', 300: '', 400: '', 500: '', 600: '', 700: '', 800: '', 900: '' },
      text: { secondary: '#6B7280', primary: '', muted: '' },
      background: { DEFAULT: '', secondary: '', tertiary: '' },
      accent: { DEFAULT: '', light: '', dark: '' },
      success: { DEFAULT: '', light: '', dark: '' },
      warning: { DEFAULT: '', light: '', dark: '' },
      error: { DEFAULT: '', light: '', dark: '' },
      info: { DEFAULT: '', light: '', dark: '' },
      surface: { DEFAULT: '', elevated: '', sunken: '' },
      hover: { DEFAULT: '', light: '' },
      active: { DEFAULT: '', light: '' },
      border: { DEFAULT: '', light: '', dark: '' },
    },
    gradients: {
      header: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      card: '',
      button: '',
      background: '',
    },
    branding: {
      logoUrl: 'https://example.com/logo.png',
      logoAlt: '',
      faviconUrl: '',
      primaryColor: '',
      secondaryColor: '',
    },
    typography: {
      fontFamily: '',
      headingFont: '',
      bodyFont: '',
      sizes: { xs: '', sm: '', base: '', lg: '', xl: '', '2xl': '', '3xl': '', '4xl': '' },
    },
    spacing: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
      '2xl': '',
    },
    borderRadius: {
      sm: '',
      md: '',
      lg: '',
      xl: '',
      full: '',
    },
    shadows: {
      sm: '',
      md: '',
      lg: '',
      xl: '',
      inner: '',
    },
    effects: {
      blur: '',
      opacity: '',
      transition: '',
    },
    customProperties: {},
  }

  beforeEach(() => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: null,
      profile: mockProfile,
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

    vi.mocked(ThemeContext.useTheme).mockReturnValue({
      theme: mockTheme,
      loading: false,
      setCustomTheme: vi.fn(),
    })
  })

  it('should show loading spinner when theme is loading', () => {
    vi.mocked(ThemeContext.useTheme).mockReturnValue({
      theme: mockTheme,
      loading: true,
      setCustomTheme: vi.fn(),
    })

    render(
      <Router>
        <Layout />
      </Router>
    )

    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })

  it('should render header with condominium name', () => {
    render(
      <Router>
        <Layout />
      </Router>
    )

    expect(screen.getByText('Condomínio Teste')).toBeInTheDocument()
  })

  it('should render logo', () => {
    render(
      <Router>
        <Layout />
      </Router>
    )

    const logo = screen.getByAltText('Versix Norma')
    expect(logo).toBeInTheDocument()
  })

  it('should display user info', () => {
    render(
      <Router>
        <Layout />
      </Router>
    )

    expect(screen.getByText('João')).toBeInTheDocument()
    expect(screen.getByText(/Unid: 101/i)).toBeInTheDocument()
  })

  it('should show admin badge for admin users', () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: null,
      profile: { ...mockProfile, role: 'admin' },
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

    render(
      <Router>
        <Layout />
      </Router>
    )

    expect(screen.getByText('Super Admin')).toBeInTheDocument()
  })

  it('should show admin panel link for managers', () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: null,
      profile: mockProfile,
      session: null,
      loading: false,
      authError: null,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      isAdmin: false,
      isSindico: true,
      isSubSindico: false,
      isConselho: false,
      isMorador: false,
      canManage: true,
    })

    render(
      <Router>
        <Layout />
      </Router>
    )

    expect(screen.getAllByText(/Painel Admin/i).length).toBeGreaterThan(0)
  })

  it('should render mobile navigation', () => {
    render(
      <Router>
        <Layout />
      </Router>
    )

    // Check for unique mobile nav items
    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Norma')).toBeInTheDocument()
    
    // These appear in both sidebar and mobile nav
    const suporteLinks = screen.getAllByText('Suporte')
    expect(suporteLinks.length).toBeGreaterThan(0)
  })

  it('should render desktop menu button', () => {
    render(
      <Router>
        <Layout />
      </Router>
    )

    expect(screen.getByLabelText('Abrir menu')).toBeInTheDocument()
  })
})
