import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Modal from './Modal'

// Mock dos hooks de navegação por teclado
vi.mock('../../hooks/useKeyboardNavigation', () => ({
  useFocusTrap: vi.fn(() => ({ current: null })),
  useEscapeKey: vi.fn(),
  useBodyScrollLock: vi.fn()
}))

describe('Modal', () => {
  const mockOnClose = vi.fn()

  beforeEach(() => {
    mockOnClose.mockClear()
  })

  it('não renderiza quando isOpen é false', () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose} title="Modal Fechado">
        <p>Conteúdo</p>
      </Modal>
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.queryByText('Conteúdo')).not.toBeInTheDocument()
  })

  it('renderiza quando isOpen é true', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Modal Aberto">
        <p>Conteúdo do modal</p>
      </Modal>
    )

    expect(screen.getByRole('dialog', { hidden: true })).toBeInTheDocument()
    expect(screen.getByText('Modal Aberto')).toBeInTheDocument()
    expect(screen.getByText('Conteúdo do modal')).toBeInTheDocument()
  })

  it('exibe título correto', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Título Customizado">
        <div>Corpo</div>
      </Modal>
    )

    const title = screen.getByText('Título Customizado')
    expect(title).toBeInTheDocument()
    expect(title).toHaveAttribute('id', 'modal-title')
  })

  it('chama onClose ao clicar no botão fechar', async () => {
    const user = userEvent.setup()
    
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Modal">
        <p>Teste</p>
      </Modal>
    )

    const closeButton = screen.getByRole('button', { name: /fechar modal/i, hidden: true })
    await user.click(closeButton)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('chama onClose ao clicar no backdrop', async () => {
    const user = userEvent.setup()
    
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Modal">
        <p>Teste</p>
      </Modal>
    )

    const backdrop = screen.getByRole('dialog', { hidden: true }).parentElement!
    await user.click(backdrop)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('não fecha ao clicar no conteúdo do modal', async () => {
    const user = userEvent.setup()
    
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Modal">
        <button>Botão interno</button>
      </Modal>
    )

    const dialog = screen.getByRole('dialog', { hidden: true })
    await user.click(dialog)

    expect(mockOnClose).not.toHaveBeenCalled()
  })

  it('tem atributos de acessibilidade corretos', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Modal Acessível">
        <p>Conteúdo</p>
      </Modal>
    )

    const dialog = screen.getByRole('dialog', { hidden: true })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title')
  })

  it('renderiza children complexos', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Modal com Form">
        <form>
          <input type="text" placeholder="Nome" />
          <button type="submit">Enviar</button>
        </form>
      </Modal>
    )

    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Enviar', hidden: true })).toBeInTheDocument()
  })

  it('renderiza ícone de fechar', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Modal">
        <p>Teste</p>
      </Modal>
    )

    const closeButton = screen.getByRole('button', { name: /fechar modal/i, hidden: true })
    const svg = closeButton.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
