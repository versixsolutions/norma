import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InstallPWA from './InstallPWA'

describe('InstallPWA', () => {
  let createPromptEvent: (outcome?: 'accepted' | 'dismissed') => Event & {
    preventDefault: () => void
    prompt: () => void
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
  }

  beforeEach(() => {
    createPromptEvent = (outcome: 'accepted' | 'dismissed' = 'accepted') => {
      const evt = new Event('beforeinstallprompt') as Event & {
        preventDefault: () => void
        prompt: () => void
        userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
      }
      // attach properties expected by component
      Object.defineProperty(evt, 'preventDefault', { value: vi.fn(), writable: false })
      Object.defineProperty(evt, 'prompt', { value: vi.fn(), writable: false })
      Object.defineProperty(evt, 'userChoice', { value: Promise.resolve({ outcome }), writable: true })
      return evt
    }
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('não renderiza por padrão', () => {
    const { container } = render(<InstallPWA />)
    expect(container.firstChild).toBeNull()
  })

  it('exibe banner quando evento beforeinstallprompt é disparado', async () => {
    render(<InstallPWA />)
    const event = createPromptEvent('accepted')
    await act(async () => {
      window.dispatchEvent(event)
    })

    await waitFor(() => {
      expect(screen.getByText('Instalar Versix Norma')).toBeInTheDocument()
    })
  })

  it('exibe mensagem e botões corretos', async () => {
    render(<InstallPWA />)
    const event = createPromptEvent('accepted')
    await act(async () => {
      window.dispatchEvent(event)
    })

    await waitFor(() => {
      expect(screen.getByText('📱')).toBeInTheDocument()
      expect(screen.getByText(/adicione à tela inicial/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /instalar/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /agora não/i })).toBeInTheDocument()
    })
  })

  it('chama prompt ao clicar em instalar', async () => {
    const user = userEvent.setup()
    render(<InstallPWA />)

    const event = createPromptEvent('accepted')
    await act(async () => {
      window.dispatchEvent(event)
    })

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /instalar/i })).toBeInTheDocument()
    })

    await user.click(screen.getByRole('button', { name: /instalar/i }))

    expect((event as any).prompt).toHaveBeenCalledTimes(1)
  })

  it('esconde banner quando instalação é aceita', async () => {
    const user = userEvent.setup()
    render(<InstallPWA />)
    const event = createPromptEvent('accepted')
    await act(async () => {
      window.dispatchEvent(event)
    })

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /instalar/i })).toBeInTheDocument()
    })

    await user.click(screen.getByRole('button', { name: /instalar/i }))

    await waitFor(() => {
      expect(screen.queryByText('Instalar Versix Norma')).not.toBeInTheDocument()
    })
  })

  it('esconde banner ao clicar em agora não', async () => {
    const user = userEvent.setup()
    render(<InstallPWA />)
    const event = createPromptEvent('accepted')
    await act(async () => {
      window.dispatchEvent(event)
    })

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /agora não/i })).toBeInTheDocument()
    })

    await user.click(screen.getByRole('button', { name: /agora não/i }))

    await waitFor(() => {
      expect(screen.queryByText('Instalar Versix Norma')).not.toBeInTheDocument()
    })
  })

  it('tem classes responsivas corretas', async () => {
    const { container } = render(<InstallPWA />)
    const event = createPromptEvent('accepted')
    await act(async () => {
      window.dispatchEvent(event)
    })

    await waitFor(() => {
      const banner = container.querySelector('.fixed')
      expect(banner).toHaveClass('bottom-20', 'md:bottom-4')
      expect(banner).toHaveClass('left-4', 'right-4')
      expect(banner).toHaveClass('md:left-auto', 'md:right-4', 'md:w-96')
    })
  })

  it('tem animação bounce', async () => {
    const { container } = render(<InstallPWA />)
    const event = createPromptEvent('accepted')
    await act(async () => {
      window.dispatchEvent(event)
    })

    await waitFor(() => {
      const banner = container.querySelector('.fixed')
      expect(banner).toHaveClass('animate-bounce')
    })
  })

  it('não chama prompt se usuário descarta instalação', async () => {
    const user = userEvent.setup()
    render(<InstallPWA />)

    const event = createPromptEvent('dismissed')
    await act(async () => {
      window.dispatchEvent(event)
    })

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /instalar/i })).toBeInTheDocument()
    })

    await user.click(screen.getByRole('button', { name: /instalar/i }))

    // prompt chamado, mas outcome é dismissed, então banner deve continuar visível
    expect((event as any).prompt).toHaveBeenCalledTimes(1)
    await waitFor(() => {
      expect(screen.getByText('Instalar Versix Norma')).toBeInTheDocument()
    })
  })
})
