import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import LoadingSpinner from './LoadingSpinner'

// Mock ThemeContext
vi.mock('../contexts/ThemeContext', () => ({
  useTheme: () => ({
    theme: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5'
        }
      }
    }
  })
}))

describe('LoadingSpinner', () => {
  it('renderiza com mensagem padrão', () => {
    render(<LoadingSpinner />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  it('renderiza com mensagem customizada', () => {
    render(<LoadingSpinner message="Processando dados..." />)
    expect(screen.getByText('Processando dados...')).toBeInTheDocument()
  })

  it('aplica animação de spin no elemento', () => {
    const { container } = render(<LoadingSpinner />)
    const spinner = container.querySelector('.animate-spin')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('rounded-full', 'border-4', 'border-t-transparent')
  })

  it('aplica animação de pulse no texto', () => {
    render(<LoadingSpinner />)
    const text = screen.getByText('Carregando...')
    expect(text).toHaveClass('animate-pulse')
  })

  it('tem altura mínima definida', () => {
    const { container } = render(<LoadingSpinner />)
    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('min-h-[400px]')
  })

  it('centraliza conteúdo', () => {
    const { container } = render(<LoadingSpinner />)
    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('flex', 'items-center', 'justify-center')
  })
})
