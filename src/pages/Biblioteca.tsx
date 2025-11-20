import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import PageLayout from '../components/PageLayout'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'

interface Documento {
  id: number
  content: string
  metadata: {
    title: string
    source: string
  }
}

export default function Biblioteca() {
  const [docs, setDocs] = useState<Documento[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDocs() {
      try {
        // Busca os documentos da tabela que usamos para a IA
        const { data, error } = await supabase
          .from('documents')
          .select('*')
          .order('id', { ascending: true })

        if (error) throw error
        setDocs(data || [])
      } catch (error) {
        console.error('Erro ao carregar documentos:', error)
      } finally {
        setLoading(false)
      }
    }
    loadDocs()
  }, [])

  if (loading) return <LoadingSpinner message="Carregando acervo..." />

  return (
    <PageLayout title="Biblioteca Oficial" subtitle="Regimento, Convenção e Normas" icon="📚">
      {docs.length > 0 ? (
        <div className="grid gap-4">
          {docs.map((doc) => (
            <div key={doc.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-primary transition">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  {doc.metadata?.source || 'Documento Oficial'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.metadata?.title || 'Trecho do Regulamento'}</h3>
              <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100 italic">
                "{doc.content}"
              </p>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState icon="📭" title="Biblioteca Vazia" description="Nenhum documento digitalizado encontrado." />
      )}
    </PageLayout>
  )
}