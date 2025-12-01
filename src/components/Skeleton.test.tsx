import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  CardSkeleton,
  TableSkeleton,
  FormSkeleton,
  ListSkeleton,
  StatCardSkeleton,
  DashboardSkeleton,
  PageSkeleton
} from './Skeleton'

describe('Skeleton Components', () => {
  describe('CardSkeleton', () => {
    it('renderiza skeleton de card', () => {
      const { container } = render(<CardSkeleton />)
      expect(container.querySelector('.animate-pulse')).toBeInTheDocument()
      expect(container.querySelector('.bg-white')).toBeInTheDocument()
    })

    it('tem elementos de placeholder', () => {
      const { container } = render(<CardSkeleton />)
      const placeholders = container.querySelectorAll('.bg-gray-200')
      expect(placeholders.length).toBeGreaterThan(0)
    })
  })

  describe('TableSkeleton', () => {
    it('renderiza com número padrão de linhas e colunas', () => {
      const { container } = render(<TableSkeleton />)
      const rows = container.querySelectorAll('.border-b')
      // 1 header + 5 rows default = 6 total
      expect(rows.length).toBe(6)
    })

    it('renderiza com linhas customizadas', () => {
      const { container } = render(<TableSkeleton rows={3} />)
      const rows = container.querySelectorAll('.border-b')
      // 1 header + 3 rows = 4 total
      expect(rows.length).toBe(4)
    })

    it('renderiza com colunas customizadas', () => {
      const { container } = render(<TableSkeleton columns={6} />)
      expect(container.querySelector('.animate-pulse')).toBeInTheDocument()
    })
  })

  describe('FormSkeleton', () => {
    it('renderiza skeleton de formulário', () => {
      const { container } = render(<FormSkeleton />)
      expect(container.querySelector('.space-y-6')).toBeInTheDocument()
    })

    it('tem elementos de campos e botões', () => {
      const { container } = render(<FormSkeleton />)
      const fields = container.querySelectorAll('.h-10')
      expect(fields.length).toBeGreaterThan(0)
    })
  })

  describe('ListSkeleton', () => {
    it('renderiza com número padrão de items', () => {
      const { container } = render(<ListSkeleton />)
      const items = container.querySelectorAll('.bg-white')
      expect(items.length).toBe(5) // default
    })

    it('renderiza com items customizados', () => {
      const { container } = render(<ListSkeleton items={3} />)
      const items = container.querySelectorAll('.bg-white')
      expect(items.length).toBe(3)
    })

    it('cada item tem avatar e texto placeholder', () => {
      const { container } = render(<ListSkeleton items={1} />)
      const avatar = container.querySelector('.rounded-full')
      expect(avatar).toBeInTheDocument()
      expect(avatar).toHaveClass('w-12', 'h-12')
    })
  })

  describe('StatCardSkeleton', () => {
    it('renderiza skeleton de stat card', () => {
      const { container } = render(<StatCardSkeleton />)
      expect(container.querySelector('.animate-pulse')).toBeInTheDocument()
      expect(container.querySelector('.rounded-xl')).toBeInTheDocument()
    })
  })

  describe('DashboardSkeleton', () => {
    it('renderiza skeleton completo de dashboard', () => {
      const { container } = render(<DashboardSkeleton />)
      expect(container.querySelector('.space-y-6')).toBeInTheDocument()
    })

    it('contém grid de stat cards', () => {
      const { container } = render(<DashboardSkeleton />)
      const grid = container.querySelector('.grid')
      expect(grid).toBeInTheDocument()
      expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4')
    })

    it('renderiza múltiplos componentes skeleton', () => {
      render(<DashboardSkeleton />)
      // Verifica que renderiza sem erros e estrutura existe
      expect(screen.queryByText('error')).not.toBeInTheDocument()
    })
  })

  describe('PageSkeleton', () => {
    it('renderiza skeleton de página completa', () => {
      const { container } = render(<PageSkeleton />)
      expect(container.querySelector('.animate-pulse')).toBeInTheDocument()
      expect(container.querySelector('.max-w-7xl')).toBeInTheDocument()
    })

    it('tem header e content sections', () => {
      const { container } = render(<PageSkeleton />)
      const sections = container.querySelectorAll('.space-y-6, .space-y-4')
      expect(sections.length).toBeGreaterThan(0)
    })
  })

  describe('Animações', () => {
    it('todos os skeletons têm animação pulse', () => {
      const components = [
        <CardSkeleton />,
        <TableSkeleton />,
        <FormSkeleton />,
        <ListSkeleton />,
        <StatCardSkeleton />,
        <DashboardSkeleton />,
        <PageSkeleton />
      ]

      components.forEach((component) => {
        const { container, unmount } = render(component)
        expect(container.querySelector('.animate-pulse')).toBeInTheDocument()
        unmount()
      })
    })
  })

  describe('Responsividade', () => {
    it('DashboardSkeleton tem classes responsivas', () => {
      const { container } = render(<DashboardSkeleton />)
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('md:grid-cols-2', 'lg:grid-cols-4')
    })

    it('PageSkeleton tem max-width responsivo', () => {
      const { container } = render(<PageSkeleton />)
      const page = container.querySelector('.max-w-7xl')
      expect(page).toBeInTheDocument()
    })
  })
})
