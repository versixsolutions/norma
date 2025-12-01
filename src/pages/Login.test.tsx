import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Login from './Login'

const mockNavigate = vi.fn()
const mockSignIn = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate
  }
})

vi.mock('../contexts/AuthContext', () => ({
  useAuth: () => ({
    signIn: mockSignIn,
    user: null,
    profile: null
  })
}))

function renderLogin() {
  return render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  )
}

describe('Login', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
    mockSignIn.mockClear()
  })

  it('renderiza formulário de login', () => {
    renderLogin()
    
    expect(screen.getByText('Bem-vindo de volta!')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('seu@email.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar na plataforma/i })).toBeInTheDocument()
  })

  it('exibe logo da Versix', () => {
    renderLogin()
    
    const logo = screen.getByAltText('Versix Norma')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/assets/logos/versix-solutions-logo.png')
  })

  it('exibe link para cadastro', () => {
    renderLogin()
    
    expect(screen.getByText(/ainda não tem conta\?/i)).toBeInTheDocument()
    const signupLink = screen.getByRole('link', { name: /cadastre-se aqui/i })
    expect(signupLink).toHaveAttribute('href', '/signup')
  })

  it('valida campos vazios', async () => {
    const user = userEvent.setup()
    renderLogin()
    
    const submitButton = screen.getByRole('button', { name: /entrar na plataforma/i })
    await user.click(submitButton)

    expect(screen.getByText(/por favor, preencha todos os campos/i)).toBeInTheDocument()
    expect(mockSignIn).not.toHaveBeenCalled()
  })

  it('submete formulário com credenciais válidas', async () => {
    const user = userEvent.setup()
    mockSignIn.mockResolvedValue({ user: { id: '123' } })
    
    renderLogin()
    
    await user.type(screen.getByPlaceholderText('seu@email.com'), 'user@test.com')
    await user.type(screen.getByPlaceholderText('••••••••'), 'password123')
    await user.click(screen.getByRole('button', { name: /entrar na plataforma/i }))

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('user@test.com', 'password123')
      expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true })
    })
  })

  it('exibe erro de credenciais inválidas', async () => {
    const user = userEvent.setup()
    mockSignIn.mockRejectedValue(new Error('Invalid login credentials'))
    
    renderLogin()
    
    await user.type(screen.getByPlaceholderText('seu@email.com'), 'wrong@test.com')
    await user.type(screen.getByPlaceholderText('••••••••'), 'wrongpass')
    await user.click(screen.getByRole('button', { name: /entrar na plataforma/i }))

    await waitFor(() => {
      expect(screen.getByText(/email ou senha incorretos/i)).toBeInTheDocument()
    })
  })

  it('tem copyright footer com ano atual', () => {
    renderLogin()
    
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${currentYear}.*Versix Solutions`, 'i'))).toBeInTheDocument()
  })

  it('tem atributos de autocomplete corretos', () => {
    renderLogin()
    
    expect(screen.getByPlaceholderText('seu@email.com')).toHaveAttribute('autocomplete', 'username')
    expect(screen.getByPlaceholderText('••••••••')).toHaveAttribute('autocomplete', 'current-password')
  })
})
