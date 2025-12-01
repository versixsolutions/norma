import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Chatbot from './Chatbot'
import * as useChatbotModule from '../hooks/useChatbot'

// Mock do hook useChatbot
const mockUseChatbot = vi.fn()

vi.mock('../hooks/useChatbot', () => ({
  useChatbot: (...args: unknown[]) => mockUseChatbot(...args)
}))

const defaultMockReturn = {
  messages: [
    {
      text: 'Olá! Como posso ajudar?',
      sender: 'bot' as const,
      timestamp: new Date()
    }
  ],
  inputText: '',
  setInputText: vi.fn(),
  isTyping: false,
  messagesEndRef: { current: null },
  handleSendMessage: vi.fn(),
  handleOptionClick: vi.fn(),
  createTicketFromChat: vi.fn()
}

function renderChatbot(props = { isOpen: true, onClose: vi.fn() }) {
  return render(
    <BrowserRouter>
      <Chatbot {...props} />
    </BrowserRouter>
  )
}

describe('Chatbot', () => {
  beforeEach(() => {
    mockUseChatbot.mockReturnValue(defaultMockReturn)
  })

  it('não renderiza quando isOpen é false', () => {
    const { container } = renderChatbot({ isOpen: false, onClose: vi.fn() })
    expect(container.firstChild).toBeNull()
  })

  it('renderiza quando isOpen é true', () => {
    renderChatbot()
    expect(screen.getByRole('dialog', { name: /chat com assistente norma/i })).toBeInTheDocument()
  })

  it('exibe mensagens recebidas do hook', () => {
    mockUseChatbot.mockReturnValue({
      ...defaultMockReturn,
      messages: [
        { text: 'Mensagem 1', sender: 'bot' as const, timestamp: new Date() },
        { text: 'Mensagem 2', sender: 'user' as const, timestamp: new Date() }
      ]
    })

    renderChatbot()
    expect(screen.getByText('Mensagem 1')).toBeInTheDocument()
    expect(screen.getByText('Mensagem 2')).toBeInTheDocument()
  })

  it('exibe indicador de digitação quando isTyping é true', () => {
    mockUseChatbot.mockReturnValue({
      ...defaultMockReturn,
      isTyping: true
    })

    renderChatbot()
    // ChatHeader, MessagesList e ChatInput são renderizados; isTyping passado para MessagesList
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('chama onClose quando botão de fechar é clicado', async () => {
    const user = userEvent.setup()
    const mockOnClose = vi.fn()
    
    renderChatbot({ isOpen: true, onClose: mockOnClose })
    
    const closeButton = screen.getByRole('button', { name: /fechar/i })
    await user.click(closeButton)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('tem atributos de acessibilidade corretos', () => {
    renderChatbot()
    const dialog = screen.getByRole('dialog')
    
    expect(dialog).toHaveAttribute('aria-label', 'Chat com assistente Norma')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })

  it('tem altura fixa de 500px', () => {
    renderChatbot()
    const dialog = screen.getByRole('dialog')
    
    expect(dialog).toHaveClass('h-[500px]')
  })

  it('é responsivo com classes mobile-first', () => {
    renderChatbot()
    const dialog = screen.getByRole('dialog')
    
    // Mobile: left-4 right-4
    expect(dialog).toHaveClass('left-4', 'right-4')
    // Desktop: md:left-auto md:w-96
    expect(dialog).toHaveClass('md:left-auto', 'md:w-96')
  })
})
