import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { formatCurrency, formatDate } from '../lib/utils'
import PageLayout from '../components/PageLayout'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'

interface Despesa {
  id: string
  description: string
  amount: number
  category: string
  due_date: string    // Data de vencimento
  paid_at: string | null // Data do pagamento (se houver)
  receipt_url: string | null
  created_at: string
}

// Configuração visual baseada no Plano de Contas do PDF
const CATEGORY_CONFIG: Record<string, any> = {
  'administrativa': { label: 'Administrativa', icon: '📁', color: 'bg-purple-100 text-purple-700', iconBg: 'bg-purple-100' },
  'pessoal': { label: 'Pessoal', icon: '👥', color: 'bg-blue-100 text-blue-700', iconBg: 'bg-blue-100' },
  'serviços': { label: 'Serviços', icon: '🛠️', color: 'bg-indigo-100 text-indigo-700', iconBg: 'bg-indigo-100' },
  'manutenção': { label: 'Manutenção', icon: '🔧', color: 'bg-orange-100 text-orange-700', iconBg: 'bg-orange-100' },
  'aquisições': { label: 'Aquisições', icon: '🛒', color: 'bg-green-100 text-green-700', iconBg: 'bg-green-100' },
  'impostos': { label: 'Impostos', icon: '🏛️', color: 'bg-red-100 text-red-700', iconBg: 'bg-red-100' },
  'financeira': { label: 'Financeira', icon: '🏦', color: 'bg-yellow-100 text-yellow-700', iconBg: 'bg-yellow-100' },
  'default': { label: 'Outros', icon: '📝', color: 'bg-gray-100 text-gray-600', iconBg: 'bg-gray-100' }
}

// Helper para encontrar o estilo correto (busca parcial/insensível a caixa)
function getCategoryStyle(category: string | null) {
  if (!category) return CATEGORY_CONFIG.default
  
  const normalized = category.toLowerCase()
  
  if (normalized.includes('adm')) return CATEGORY_CONFIG['administrativa']
  if (normalized.includes('pessoal') || normalized.includes('mão de obra')) return CATEGORY_CONFIG['pessoal']
  if (normalized.includes('serviço')) return CATEGORY_CONFIG['serviços']
  if (normalized.includes('manut')) return CATEGORY_CONFIG['manutenção']
  if (normalized.includes('aquisi') || normalized.includes('material')) return CATEGORY_CONFIG['aquisições']
  if (normalized.includes('imposto') || normalized.includes('inss')) return CATEGORY_CONFIG['impostos']
  if (normalized.includes('finan') || normalized.includes('bancária')) return CATEGORY_CONFIG['financeira']

  return CATEGORY_CONFIG.default
}

export default function Despesas() {
  const [despesas, setDespesas] = useState<Despesa[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    loadDespesas()
  }, [])

  async function loadDespesas() {
    try {
      const { data, error } = await supabase
        .from('despesas')
        .select('*')
        .order('due_date', { ascending: false }) // Ordenar por vencimento (mais recente primeiro)

      if (error) throw error
      setDespesas(data || [])
    } catch (error) {
      console.error('Erro ao carregar despesas:', error)
    } finally {
      setLoading(false)
    }
  }

  // Filtra as despesas se uma categoria estiver selecionada
  const filteredDespesas = selectedCategory
    ? despesas.filter(d => {
        const style = getCategoryStyle(d.category)
        const selectedStyle = getCategoryStyle(selectedCategory)
        return style.label === selectedStyle.label
      })
    : despesas

  // Cálculos para os cards de resumo
  const totalPago = despesas
    .filter(d => d.paid_at)
    .reduce((sum, d) => sum + Number(d.amount), 0)
    
  const totalPendente = despesas
    .filter(d => !d.paid_at)
    .reduce((sum, d) => sum + Number(d.amount), 0)

  if (loading) return <LoadingSpinner message="Carregando balancete..." />

  // Extrair categorias únicas presentes nos dados para gerar os filtros dinamicamente
  const availableCategories = Array.from(new Set(despesas.map(d => getCategoryStyle(d.category).label)))

  return (
    <PageLayout
      title="Feed Financeiro"
      subtitle="Transparência total das contas do condomínio"
      icon="💰"
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Total Pago (2025)</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">{formatCurrency(totalPago)}</p>
          <p className="text-xs text-green-600 mt-1 font-semibold">Executado</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">A Pagar / Aberto</p>
          <p className="text-2xl md:text-3xl font-bold text-orange-600">{formatCurrency(totalPendente)}</p>
          <p className="text-xs text-orange-600 mt-1 font-semibold">Previsão</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Lançamentos</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">{despesas.length}</p>
          <p className="text-xs text-gray-500 mt-1">Total de registros</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6 sticky top-24 z-30">
        <p className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">Filtrar por categoria</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              !selectedCategory
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Todas
          </button>
          {availableCategories.map((catLabel) => {
            // Encontra a chave original no config baseada no label para pegar o ícone
            const configEntry = Object.values(CATEGORY_CONFIG).find(c => c.label === catLabel)
            
            return (
              <button
                key={catLabel}
                onClick={() => setSelectedCategory(catLabel)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${
                  selectedCategory === catLabel
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{configEntry?.icon}</span>
                {catLabel}
              </button>
            )
          })}
        </div>
      </div>

      {/* Feed */}
      {filteredDespesas.length > 0 ? (
        <div className="space-y-4">
          {filteredDespesas.map((despesa) => {
            const style = getCategoryStyle(despesa.category)
            const isPaid = !!despesa.paid_at
            
            return (
              <div
                key={despesa.id}
                className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition relative group ${isPaid ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-orange-400'}`}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.iconBg} flex-shrink-0 text-xl`}>
                        {style.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                           <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${style.color.replace('text-', 'bg-').replace('100', '50')} ${style.color.split(' ')[1]}`}>
                             {style.label}
                           </span>
                           <span className="text-xs text-gray-400">• {formatDate(despesa.due_date)}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-base line-clamp-1" title={despesa.description}>
                          {despesa.description}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-lg md:text-xl font-bold text-gray-900">
                        {formatCurrency(Number(despesa.amount))}
                      </span>
                      {isPaid ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                          ✅ Pago
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                          ⏳ Aberto
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer do Card */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-3">
                    {despesa.receipt_url ? (
                      <button className="flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Ver Comprovante
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400 italic">Sem anexo digital</span>
                    )}
                    
                    {isPaid && (
                       <span className="text-xs text-gray-500">
                         Pago em: {formatDate(despesa.paid_at!)}
                       </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <EmptyState
          icon="📊"
          title="Nenhum lançamento encontrado"
          description="Não há despesas para exibir com estes filtros."
          action={{
            label: 'Limpar Filtros',
            onClick: () => setSelectedCategory(null),
          }}
        />
      )}
    </PageLayout>
  )
}