import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import PendingApproval from './PendingApproval'

const mockNavigate = vi.fn()
const mockSignOut = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate
  }
})

vi.mock('../contexts/AuthContext', () => ({
  useAuth: () => ({
    signOut: mockSignOut,
    profile: {
      id: '123',
      full_name: 'João Silva',
      email: 'joao@test.com'
    }
  })
}))

function renderPendingApproval() {
  return render(
    <BrowserRouter>
      <PendingApproval />
    </BrowserRouter>
  )
}

describe('PendingApproval', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
    mockSignOut.mockClear()
  })

  it('renderiza título e mensagem principal', () => {
    renderPendingApproval()
    
    expect(screen.getByText('Cadastro em Análise')).toBeInTheDocument()
    expect(screen.getByText(/seu cadastro foi recebido/i)).toBeInTheDocument()
  })

  it('exibe nome do usuário na mensagem', () => {
    renderPendingApproval()
    
    expect(screen.getByText(/olá,/i)).toBeInTheDocument()
    expect(screen.getByText('João Silva')).toBeInTheDocument()
  })

  it('exibe ícone animado de ampulheta', () => {
    renderPendingApproval()
    
    expect(screen.getByText('⏳')).toBeInTheDocument()
  })

  it('exibe instruções do que acontece a seguir', () => {
    renderPendingApproval()
    
    expect(screen.getByText(/o que acontece agora\?/i)).toBeInTheDocument()
    expect(screen.getByText(/o síndico irá verificar seus dados/i)).toBeInTheDocument()
    expect(screen.getByText(/isso garante a segurança de todos/i)).toBeInTheDocument()
    expect(screen.getByText(/tente fazer login novamente mais tarde/i)).toBeInTheDocument()
  })

  it('tem botão para voltar ao login', () => {
    renderPendingApproval()
    
    const button = screen.getByRole('button', { name: /voltar para o login/i })
    expect(button).toBeInTheDocument()
  })

  it('faz logout e navega para login ao clicar no botão', async () => {
    const user = userEvent.setup()
    mockSignOut.mockResolvedValue(undefined)
    
    renderPendingApproval()
    
    const button = screen.getByRole('button', { name: /voltar para o login/i })
    await user.click(button)

    expect(mockSignOut).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('/login')
  })

  it('tem copyright footer com ano atual', () => {
    renderPendingApproval()
    
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Versix Solutions.*${currentYear}`, 'i'))).toBeInTheDocument()
  })

  it('tem animação fade-in no container principal', () => {
    const { container } = renderPendingApproval()
    
    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('animate-fade-in')
  })

  it('tem animação de ping no ícone', () => {
    renderPendingApproval()
    
    const iconContainer = screen.getByText('⏳').parentElement
    const pingElement = iconContainer?.querySelector('.animate-ping')
    
    expect(pingElement).toBeInTheDocument()
  })

  it('usa cores corretas no box de informações', () => {
    const { container } = renderPendingApproval()
    
    const infoBox = container.querySelector('.bg-blue-50')
    expect(infoBox).toBeInTheDocument()
    expect(infoBox).toHaveClass('border-blue-100')
  })
})
