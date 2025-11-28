import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import PageLayout from '../components/PageLayout'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'
import Chatbot from '../components/Chatbot'
import Modal from '../components/ui/Modal'
import toast from 'react-hot-toast'

interface FAQ {
  id: string
  category: string
  question: string
  answer: string
  article_reference?: string
  votes_helpful: number | null
  votes_not_helpful: number | null
}

const CATEGORIES: Record<string, any> = {
  'geral': { label: 'Geral', icon: '📋', color: 'bg-blue-100 text-blue-700', iconBg: 'bg-blue-100' },
  'convivência': { label: 'Convivência', icon: '🤝', color: 'bg-purple-100 text-purple-700', iconBg: 'bg-purple-100' },
  'limpeza': { label: 'Limpeza', icon: '✨', color: 'bg-green-100 text-green-700', iconBg: 'bg-green-100' },
  'lazer': { label: 'Lazer', icon: '⚽', color: 'bg-orange-100 text-orange-700', iconBg: 'bg-orange-100' },
  'segurança': { label: 'Segurança', icon: '🛡️', color: 'bg-indigo-100 text-indigo-700', iconBg: 'bg-indigo-100' },
  'financeiro': { label: 'Financeiro', icon: '💰', color: 'bg-teal-100 text-teal-700', iconBg: 'bg-teal-100' },
  'default': { label: 'Outros', icon: '❓', color: 'bg-gray-100 text-gray-700', iconBg: 'bg-gray-100' }
}

function getCategoryStyle(category: string | null) {
  if (!category) return CATEGORIES.default
  const normalized = category.toLowerCase()
  const key = Object.keys(CATEGORIES).find(k => normalized.includes(k))
  return key ? CATEGORIES[key] : CATEGORIES.default
}

export default function FAQ() {
  const { canManage, profile } = useAuth()
  const navigate = useNavigate()
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isChatOpen, setIsChatOpen] = useState(false)
  
  // Estados do Modal de Importação
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const [importPreview, setImportPreview] = useState<any[]>([])
  const [isImporting, setIsImporting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { 
    if (profile?.condominio_id) loadFAQs() 
  }, [profile?.condominio_id])

  async function loadFAQs() {
    try {
      const { data, error } = await supabase
        .from('faqs')
        .select('*')
        .eq('condominio_id', profile?.condominio_id) // Filtra pelo condomínio do usuário
        .order('question', { ascending: true })
        
      if (error) throw error
      setFaqs(data || [])
    } catch (error) { 
      console.error(error) 
    } finally { 
      setLoading(false) 
    }
  }

  // --- Lógica de Importação CSV ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.name.endsWith('.csv')) {
      toast.error('Apenas arquivos .csv são permitidos')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      parseCSV(text)
    }
    reader.readAsText(file)
  }

  const parseCSV = (text: string) => {
    try {
      const lines = text.split('\n')
      const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''))
      const data = []
      
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim()
        if (!line) continue
        
        // Regex para separar por vírgula ignorando aspas
        const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)?.map(v => v.replace(/"/g, '')) || line.split(',')
        
        if (values.length >= 2) {
            const entry: any = {}
            headers.forEach((header, index) => {
                if (values[index]) entry[header] = values[index].trim()
            })
            if (entry.question && entry.answer) data.push(entry)
        }
      }
      setImportPreview(data)
    } catch (err) {
      toast.error('Erro ao ler CSV. Verifique o formato.')
    }
  }

  const confirmImport = async () => {
    if (!profile?.condominio_id) return
    setIsImporting(true)
    const toastId = toast.loading('Importando perguntas...')

    try {
      const faqsToInsert = importPreview.map(item => ({
        condominio_id: profile.condominio_id,
        question: item.question,
        answer: item.answer,
        category: item.category || 'geral',
        priority: item.priority ? parseInt(item.priority) : 3,
        article_reference: item.article_reference || null
      }))

      const { error } = await supabase.from('faqs').insert(faqsToInsert)
      if (error) throw error

      toast.success(`${faqsToInsert.length} perguntas importadas!`, { id: toastId })
      setIsImportModalOpen(false)
      setImportPreview([])
      loadFAQs() // Recarrega a lista
    } catch (err: any) {
      console.error(err)
      toast.error('Erro na importação: ' + err.message, { id: toastId })
    } finally {
      setIsImporting(false)
    }
  }
  // -------------------------------

  const filtered = faqs.filter(f => {
    const matchesSearch = f.question.toLowerCase().includes(searchTerm.toLowerCase()) || f.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || getCategoryStyle(f.category).label === CATEGORIES[selectedCategory]?.label
    return matchesSearch && matchesCategory
  })

  if (loading) return <LoadingSpinner />

  return (
    <PageLayout title="Perguntas Frequentes" subtitle="Tire suas dúvidas sobre o condomínio" icon="❓">
      
      {/* --- Header de Ações --- */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        
        {/* Barra de Busca */}
        <div className="relative flex-1">
          <input 
            type="text" 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)} 
            placeholder="Buscar dúvida..." 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-sm shadow-sm" 
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>

        {/* Botão Importar (Apenas Admin/Síndico) - Agora abre Modal */}
        {canManage && (
          <button 
            onClick={() => { setIsImportModalOpen(true); setImportPreview([]); }}
            className="bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-xl text-sm font-bold hover:bg-gray-50 transition flex items-center justify-center gap-2 shadow-sm shrink-0"
          >
            <span>📥</span> <span className="hidden sm:inline">Importar CSV</span>
          </button>
        )}
      </div>
      
      {/* --- Filtros de Categoria --- */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
        <button onClick={() => setSelectedCategory(null)} className={`px-4 py-2 rounded-full text-xs font-bold border transition shrink-0 ${!selectedCategory ? 'bg-gray-800 text-white border-gray-800 shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>Todas</button>
        {Object.keys(CATEGORIES).filter(k => k !== 'default').map(key => (
          <button key={key} onClick={() => setSelectedCategory(key)} className={`px-4 py-2 rounded-full text-xs font-bold border transition shrink-0 flex items-center gap-1 ${selectedCategory === key ? 'bg-primary text-white border-primary shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
            <span>{CATEGORIES[key].icon}</span> {CATEGORIES[key].label}
          </button>
        ))}
      </div>

      {/* --- Lista de FAQs --- */}
      {filtered.length > 0 ? (
        <div className="space-y-3 pb-20">
          {filtered.map(f => {
            const style = getCategoryStyle(f.category)
            return (
              <div key={f.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition group">
                <div className="p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-base ${style.iconBg}`}>
                      {style.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${style.color}`}>
                          {style.label}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{f.question}</h3>
                      <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
                        {f.answer}
                      </p>
                      {f.article_reference && (
                        <p className="text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-wider flex items-center gap-1">
                          📚 Fonte: {f.article_reference}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <EmptyState 
          icon="🔍" 
          title="Nada encontrado" 
          description="Tente outro termo ou use nossa Assistente Virtual." 
          action={{ label: 'Limpar Filtros', onClick: () => { setSearchTerm(''); setSelectedCategory(null) } }} 
        />
      )}

      {/* --- Botão Flutuante Chatbot --- */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition transform hover:scale-110 z-50 group border-2 border-white"
        title="Falar com Norma"
      >
        <span className="text-2xl group-hover:animate-pulse">🤖</span>
      </button>
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* --- MODAL DE IMPORTAÇÃO --- */}
      <Modal isOpen={isImportModalOpen} onClose={() => setIsImportModalOpen(false)} title="Importar FAQs">
        {!importPreview.length ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:bg-gray-50 transition"
          >
            <div className="text-4xl mb-2">📂</div>
            <p className="text-sm font-bold text-gray-700">Clique para selecionar o CSV</p>
            <p className="text-xs text-gray-500 mt-1">Colunas: question, answer, category, article_reference</p>
            <input type="file" ref={fileInputRef} accept=".csv" className="hidden" onChange={handleFileChange} />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg border border-green-100">
              <span className="text-sm font-bold text-green-800">✅ {importPreview.length} perguntas encontradas</span>
              <button onClick={() => setImportPreview([])} className="text-xs text-red-600 underline">Trocar arquivo</button>
            </div>
            
            <div className="max-h-60 overflow-y-auto border rounded-lg text-xs">
              <table className="w-full text-left">
                <thead className="bg-gray-50 sticky top-0">
                  <tr><th className="p-2">Pergunta</th><th className="p-2">Categoria</th></tr>
                </thead>
                <tbody>
                  {importPreview.slice(0, 10).map((item, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2 truncate max-w-[150px]">{item.question}</td>
                      <td className="p-2">{item.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {importPreview.length > 10 && <div className="p-2 text-center text-gray-400 italic">... e mais {importPreview.length - 10} itens</div>}
            </div>

            <button 
              onClick={confirmImport} 
              disabled={isImporting}
              className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition disabled:opacity-50"
            >
              {isImporting ? 'Importando...' : 'Confirmar Importação'}
            </button>
          </div>
        )}
      </Modal>

    </PageLayout>
  )
}