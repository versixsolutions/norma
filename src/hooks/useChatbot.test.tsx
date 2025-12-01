import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, act } from '@testing-library/react'
import React, { useEffect } from 'react'
import { useChatbot } from './useChatbot'

// Mocks dinâmicos
vi.mock('../contexts/AuthContext', () => ({
  useAuth: () => ({
    profile: { full_name: 'Teste User', condominio_id: 'condo-123' },
    user: { id: 'user-1' }
  })
}))

vi.mock('../lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: async () => ({ data: { session: { access_token: 'token' } } })
    },
    functions: {
      invoke: async () => ({ data: { answer: 'Resposta simulada segura <script>alert(1)</script>' }, error: null })
    },
    from: () => ({
      insert: async () => ({ error: null })
    })
  }
}))

// Harness para expor o hook
function HookHarness({ isOpen, onReady }: { isOpen: boolean; onReady: (h: ReturnType<typeof useChatbot>) => void }) {
  const hook = useChatbot({ isOpen })
  useEffect(() => { onReady(hook) }, [hook, onReady])
  return null
}

describe('useChatbot', () => {
  let current: ReturnType<typeof useChatbot> | null = null

  beforeEach(() => {
    current = null
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  function setup(isOpen = true) {
    render(<HookHarness isOpen={isOpen} onReady={(h) => { current = h }} />)
    expect(current).toBeTruthy()
  }

  it('inicializa com mensagem de saudação', () => {
    setup(true)
    const first = current!.messages[0]
    expect(first.sender).toBe('bot')
    expect(first.text).toMatch(/Sou a \*\*Norma\*\*/)
  })

  it('envia mensagem válida e adiciona resposta sanitizada', async () => {
    setup(true)
    act(() => {
      current!.setInputText('Qual é o horário da piscina?')
    })
    await act(async () => {
      await current!.handleSendMessage(null)
    })
    // Esperado: 3 mensagens (saudação, usuário, bot)
    expect(current!.messages.length).toBeGreaterThanOrEqual(3)
    const last = current!.messages[current!.messages.length - 1]
    expect(last.sender).toBe('bot')
    // Sanitização: script deve ter sido removido
    expect(last.text).not.toMatch(/<script>/)
  })

  it('valida envio vazio', async () => {
    setup(true)
    await act(async () => {
      await current!.handleSendMessage(null, '')
    })
    const last = current!.messages[current!.messages.length - 1]
    expect(last.isError).toBe(true)
    expect(last.text).toMatch(/Por favor, digite/)
  })

  it('bloqueia envio sem condominio_id', async () => {
    // Para este teste vamos simular diretamente removendo condominio_id via manipulação interna:
    // Re-render usando um mock estático redefinindo o módulo antes do import.
    vi.resetModules()
    vi.doMock('../contexts/AuthContext', () => ({
      useAuth: () => ({ profile: { full_name: 'Sem Condominio', condominio_id: undefined }, user: { id: 'user-1' } })
    }))
    const { useChatbot: useChatbotNoCondo } = await import('./useChatbot')

    function HarnessNoCondo({ onReady }: { onReady: (h: ReturnType<typeof useChatbotNoCondo>) => void }) {
      const hook = useChatbotNoCondo({ isOpen: true })
      useEffect(() => { onReady(hook) }, [hook, onReady])
      return null
    }
    render(<HarnessNoCondo onReady={(h) => { current = h }} />)
    await act(async () => { await current!.handleSendMessage(null, 'Pergunta sem condominio') })
    const last = current!.messages[current!.messages.length - 1]
    expect(last.isError).toBe(true)
    expect(last.text).toMatch(/Seu perfil não está vinculado/)
  })
})
