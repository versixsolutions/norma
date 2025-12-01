import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import EmptyState from './EmptyState'

describe('EmptyState', () => {
  it('renderiza com props básicas', () => {
    render(
      <EmptyState
        title="Nenhum resultado"
        description="Não encontramos nada com esses critérios."
      />
    )

    expect(screen.getByRole('heading', { name: 'Nenhum resultado' })).toBeInTheDocument()
    expect(screen.getByText('Não encontramos nada com esses critérios.')).toBeInTheDocument()
    expect(screen.getByText('📝')).toBeInTheDocument()
  })

  it('renderiza ícone customizado', () => {
    render(
      <EmptyState
        icon="🔍"
        title="Busca vazia"
        description="Tente outros termos."
      />
    )

    expect(screen.getByText('🔍')).toBeInTheDocument()
  })

  it('renderiza ilustração customizada', () => {
    render(
      <EmptyState
        illustration={<svg data-testid="custom-illustration" />}
        title="Sem dados"
        description="Nenhum registro disponível."
      />
    )

    expect(screen.getByTestId('custom-illustration')).toBeInTheDocument()
    expect(screen.queryByText('📝')).not.toBeInTheDocument()
  })

  it('renderiza sugestão customizada', () => {
    render(
      <EmptyState
        title="Sem itens"
        description="Lista vazia."
        suggestion="Tente ajustar os filtros ou adicionar novos itens."
      />
    )

    expect(screen.getByText('Tente ajustar os filtros ou adicionar novos itens.')).toBeInTheDocument()
  })

  it('renderiza sugestão baseada na variant', () => {
    render(
      <EmptyState
        title="Sem comunicados"
        description="Nenhum comunicado no momento."
        variant="faq"
      />
    )

    expect(screen.getByText('Tente buscar palavras-chave diferentes ou abra o chatbot.')).toBeInTheDocument()
  })

  it('renderiza action (backward compatibility)', async () => {
    const user = userEvent.setup()
    const handleAction = vi.fn()

    render(
      <EmptyState
        title="Sem chamados"
        description="Você ainda não abriu nenhum chamado."
        action={{ label: 'Abrir chamado', onClick: handleAction }}
      />
    )

    const button = screen.getByRole('button', { name: 'Abrir chamado' })
    expect(button).toBeInTheDocument()

    await user.click(button)
    expect(handleAction).toHaveBeenCalledTimes(1)
  })

  it('renderiza múltiplas actions', async () => {
    const user = userEvent.setup()
    const primaryAction = vi.fn()
    const secondaryAction = vi.fn()

    render(
      <EmptyState
        title="Sem votações"
        description="Nenhuma votação ativa no momento."
        actions={[
          { label: 'Criar votação', onClick: primaryAction, variant: 'primary' },
          { label: 'Ver histórico', onClick: secondaryAction, variant: 'secondary' }
        ]}
      />
    )

    const primaryBtn = screen.getByRole('button', { name: 'Criar votação' })
    const secondaryBtn = screen.getByRole('button', { name: 'Ver histórico' })

    expect(primaryBtn).toHaveClass('bg-primary')
    expect(secondaryBtn).toHaveClass('border-primary/40')

    await user.click(primaryBtn)
    await user.click(secondaryBtn)

    expect(primaryAction).toHaveBeenCalledTimes(1)
    expect(secondaryAction).toHaveBeenCalledTimes(1)
  })

  it('tem atributos de acessibilidade corretos', () => {
    render(
      <EmptyState
        title="Sem ocorrências"
        description="Nenhuma ocorrência registrada."
        variant="occurrences"
      />
    )

    const section = screen.getByRole('status')
    expect(section).toHaveAttribute('aria-live', 'polite')
    expect(section).toHaveAttribute('aria-labelledby')
  })

  it('renderiza sem suggestion quando variant é default', () => {
    render(
      <EmptyState
        title="Vazio"
        description="Nada aqui."
        variant="default"
      />
    )

    const suggestion = screen.queryByTestId('empty-suggestion')
    expect(suggestion).not.toBeInTheDocument()
  })

  it('renderiza todas as variants conhecidas', () => {
    const variants: Array<'dashboard' | 'financial' | 'occurrences' | 'chamados' | 'faq' | 'documents' | 'votacoes' | 'transparency'> = [
      'dashboard',
      'financial',
      'occurrences',
      'chamados',
      'faq',
      'documents',
      'votacoes',
      'transparency'
    ]

    variants.forEach((variant) => {
      const { unmount, container } = render(
        <EmptyState
          title={`Empty ${variant}`}
          description="Test"
          variant={variant}
        />
      )

      const suggestion = container.querySelector('[data-empty-suggestion]')
      expect(suggestion).toBeInTheDocument()
      unmount()
    })
  })
})
