import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import StatCard from './StatCard'

describe('StatCard', () => {
  it('renderiza corretamente com props básicas', () => {
    render(
      <StatCard
        title="Total de Despesas"
        value="R$ 12.345,67"
        icon={<span data-testid="icon">💰</span>}
        color="bg-blue-100"
      />
    )

    expect(screen.getByText('Total de Despesas')).toBeInTheDocument()
    expect(screen.getByText('R$ 12.345,67')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renderiza subtitle quando fornecido', () => {
    render(
      <StatCard
        title="Votações Ativas"
        value={3}
        subtitle="Aguardando seu voto"
        icon={<span>🗳️</span>}
        color="bg-green-100"
      />
    )

    expect(screen.getByText('Aguardando seu voto')).toBeInTheDocument()
  })

  it('renderiza trend positivo', () => {
    render(
      <StatCard
        title="Ocorrências"
        value={5}
        icon={<span>⚠️</span>}
        color="bg-yellow-100"
        trend={{ value: 12.5, isPositive: true }}
      />
    )

    const trendElement = screen.getByRole('img', { name: /cresceu 12.5%/i })
    expect(trendElement).toHaveTextContent('↗ 12.5%')
    expect(trendElement).toHaveClass('text-green-600')
  })

  it('renderiza trend negativo', () => {
    render(
      <StatCard
        title="Comunicados"
        value={8}
        icon={<span>📢</span>}
        color="bg-purple-100"
        trend={{ value: -5.2, isPositive: false }}
      />
    )

    const trendElement = screen.getByRole('img', { name: /caiu 5.2%/i })
    expect(trendElement).toHaveTextContent('↘ 5.2%')
    expect(trendElement).toHaveClass('text-red-600')
  })

  it('chama onClick quando clicável', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(
      <StatCard
        title="Chamados"
        value={10}
        icon={<span>🎫</span>}
        color="bg-red-100"
        onClick={handleClick}
      />
    )

    const card = screen.getByText('Chamados').closest('div')
    expect(card).toHaveClass('cursor-pointer')

    await user.click(card!)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('não aplica estilos de hover quando onClick não é fornecido', () => {
    render(
      <StatCard
        title="Total"
        value={100}
        icon={<span>📊</span>}
        color="bg-gray-100"
      />
    )

    const card = screen.getByText('Total').closest('div')
    expect(card).not.toHaveClass('cursor-pointer')
  })

  it('exibe valor numérico corretamente', () => {
    render(
      <StatCard
        title="Contagem"
        value={42}
        icon={<span>🔢</span>}
        color="bg-indigo-100"
      />
    )

    expect(screen.getByText('42')).toBeInTheDocument()
  })
})
