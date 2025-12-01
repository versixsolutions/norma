import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import PageLayout from './PageLayout'
import { ThemeProvider } from '../contexts/ThemeContext'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate
  }
})

function renderPageLayout(props: React.ComponentProps<typeof PageLayout>) {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        <PageLayout {...props} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

describe('PageLayout', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
  })

  it('renderiza título corretamente', () => {
    renderPageLayout({ title: 'Meu Título', children: <div>Conteúdo</div> })
    expect(screen.getByText('Meu Título')).toBeInTheDocument()
  })

  it('renderiza subtitle quando fornecido', () => {
    renderPageLayout({
      title: 'Título',
      subtitle: 'Descrição da página',
      children: <div>Conteúdo</div>
    })
    expect(screen.getByText('Descrição da página')).toBeInTheDocument()
  })

  it('renderiza ícone quando fornecido', () => {
    renderPageLayout({
      title: 'Título',
      icon: '📊',
      children: <div>Conteúdo</div>
    })
    expect(screen.getByText('📊')).toBeInTheDocument()
  })

  it('renderiza children corretamente', () => {
    renderPageLayout({
      title: 'Título',
      children: <div data-testid="content">Conteúdo do Layout</div>
    })
    expect(screen.getByTestId('content')).toHaveTextContent('Conteúdo do Layout')
  })

  it('exibe botão voltar por padrão', () => {
    renderPageLayout({ title: 'Título', children: <div>Conteúdo</div> })
    expect(screen.getByRole('button', { name: /voltar ao início/i })).toBeInTheDocument()
  })

  it('esconde botão voltar quando showBackButton é false', () => {
    renderPageLayout({
      title: 'Título',
      showBackButton: false,
      children: <div>Conteúdo</div>
    })
    expect(screen.queryByRole('button', { name: /voltar ao início/i })).not.toBeInTheDocument()
  })

  it('navega para home ao clicar no botão voltar', async () => {
    const user = userEvent.setup()
    renderPageLayout({ title: 'Título', children: <div>Conteúdo</div> })
    
    const backButton = screen.getByRole('button', { name: /voltar ao início/i })
    await user.click(backButton)

    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  it('renderiza headerAction quando fornecido', () => {
    renderPageLayout({
      title: 'Título',
      headerAction: <button>Ação</button>,
      children: <div>Conteúdo</div>
    })
    // PageLayout renderiza ação 2x: desktop (hidden md:block) e mobile (md:hidden)
    const actions = screen.getAllByRole('button', { name: 'Ação' })
    expect(actions).toHaveLength(2) // desktop + mobile
  })

  it('tem classes responsivas corretas', () => {
    const { container } = renderPageLayout({
      title: 'Título',
      children: <div>Conteúdo</div>
    })
    const main = container.firstChild as HTMLElement
    expect(main).toHaveClass('min-h-screen', 'bg-gray-50', 'pb-20', 'md:pb-6')
  })

  it('header tem sticky positioning', () => {
    renderPageLayout({ title: 'Título', children: <div>Conteúdo</div> })
    const headers = screen.getAllByRole('banner')
    const pageHeader = headers.find(h => h.classList.contains('sticky'))
    expect(pageHeader).toHaveClass('sticky', 'top-0', 'z-40')
  })
})
