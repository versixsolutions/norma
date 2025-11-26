import { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import PageLayout from '../components/PageLayout'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'
import Modal from '../components/ui/Modal'
import toast from 'react-hot-toast'

// Categorias de Documentos
const CATEGORIAS_DOCS = [
  { id: 'atas', label: 'Atas de Assembleia', icon: '📝', color: 'bg-blue-100 text-blue-700' },
  { id: 'regimento', label: 'Regimento Interno', icon: '📜', color: 'bg-purple-100 text-purple-700' },
  { id: 'convencao', label: 'Convenção', icon: '⚖️', color: 'bg-indigo-100 text-indigo-700' },
  { id: 'editais', label: 'Editais', icon: '📢', color: 'bg-orange-100 text-orange-700' },
  { id: 'financeiro', label: 'Prestação de Contas', icon: '💰', color: 'bg-green-100 text-green-700' },
  { id: 'contratos', label: 'Contratos', icon: '🤝', color: 'bg-gray-100 text-gray-700' },
  { id: 'outros', label: 'Outros', icon: '📁', color: 'bg-gray-100 text-gray-600' }
]

interface Documento {
  id: number
  title: string
  content: string
  metadata: {
    title: string
    source: string
    url?: string
    category?: string
    is_chunk?: boolean
    file_name?: string
    processed_at?: string
  }
  created_at: string
}

// Função para limpar nomes de arquivos
function sanitizeFileName(name: string) {
  return name
    .normalize('NFD')               
    .replace(/[\u0300-\u036f]/g, '') 
    .replace(/\s+/g, '_')           
    .replace(/[^a-zA-Z0-9._-]/g, '') 
    .toLowerCase()
}

// Função de fragmentação de Markdown para visualização
function splitMarkdownIntoChunks(markdown: string, docTitle: string): string[] {
    const splitRegex = /(?=\n#{1,3}\s+)|(?=\n\*\*\s*Artigo)/;
    const rawChunks = markdown.split(splitRegex);
    const chunks = rawChunks
        .map(c => c.trim())
        .filter(c => c.length > 50)
        .map(c => `Documento: ${docTitle}.\n\n${c}`); 
    if (chunks.length === 0) return [markdown];
    return chunks;
}

// Helper para extrair tópicos visuais do Markdown
function getVisualTopics(markdown: string): string[] {
    const lines = markdown.split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 20 && !l.startsWith('---') && !l.startsWith('Documento:'))
        .filter(l => l.startsWith('#') || l.startsWith('**') || l.match(/^Artigo/i));
    return lines.slice(0, 3);
}

export default function Biblioteca() {
  const { profile, canManage, user } = useAuth()
  const [docs, setDocs] = useState<Documento[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
  const [expandedDocs, setExpandedDocs] = useState<Set<number>>(new Set())
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [uploadCategory, setUploadCategory] = useState('atas')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (profile?.condominio_id) {
      loadDocs()
    }
  }, [profile?.condominio_id])

  async function loadDocs() {
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .eq('condominio_id', profile?.condominio_id)
        .is('metadata->>is_chunk', null) 
        .order('id', { ascending: false })

      if (error) throw error
      setDocs(data || [])
    } catch (error) { 
      console.error('Erro ao carregar documentos:', error) 
    } finally { 
      setLoading(false) 
    }
  }

  const toggleExpand = (id: number) => {
    setExpandedDocs(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleUpload = async () => {
    if (!selectedFile || !profile?.condominio_id || !canManage || !user) return

    setUploading(true)
    const toastId = toast.loading('Iniciando processamento inteligente...')

    try {
      const categoryLabel = CATEGORIAS_DOCS.find(c => c.id === uploadCategory)?.label || 'Documento'
      const docTitle = selectedFile.name.replace('.pdf', '');

      console.log('📤 Iniciando upload:', {
        fileName: selectedFile.name,
        size: selectedFile.size,
        category: uploadCategory,
        condominioId: profile.condominio_id
      })

      // ===== PASSO 1: UPLOAD PARA STORAGE =====
      toast.loading('Enviando arquivo para o cofre...', { id: toastId })
      const cleanName = sanitizeFileName(selectedFile.name)
      const fileName = `${profile.condominio_id}/${Date.now()}_${cleanName}`

      const { error: uploadError } = await supabase.storage
        .from('biblioteca')
        .upload(fileName, selectedFile)

      if (uploadError) {
        console.error('❌ Erro no upload:', uploadError)
        throw uploadError
      }

      const { data: { publicUrl } } = supabase.storage
        .from('biblioteca')
        .getPublicUrl(fileName)

      console.log('✅ Upload concluído:', publicUrl)

      // ===== PASSO 2: PROCESSAR COM IA (EDGE FUNCTION) =====
      toast.loading('Norma está lendo e estruturando o documento com IA...', { id: toastId })
      
      const formData = new FormData()
      formData.append('file', selectedFile)
      formData.append('condominio_id', profile.condominio_id)
      formData.append('category', uploadCategory)

      console.log('🤖 Chamando Edge Function process-document...')

      const { data: processData, error: processError } = await supabase.functions.invoke('process-document', {
        body: formData,
      })

      console.log('📥 Resposta da Edge Function:', processData)

      if (processError) {
        console.error('❌ Erro na Edge Function:', processError)
        throw new Error(`Erro ao processar: ${processError.message}`)
      }

      if (!processData?.success) {
        console.error('❌ Processamento falhou:', processData)
        throw new Error(processData?.error || 'Falha no processamento do documento')
      }

      const textContent = processData.markdown

      if (!textContent || textContent.length < 50) {
         console.error('❌ Texto extraído insuficiente:', textContent?.length)
         throw new Error('O sistema não conseguiu extrair texto suficiente deste PDF.')
      }

      console.log('✅ Texto extraído:', {
        length: textContent.length,
        preview: textContent.substring(0, 100)
      })

      // ===== PASSO 3: SALVAR DOCUMENTO PRINCIPAL NO SUPABASE =====
      toast.loading('Salvando na biblioteca...', { id: toastId })

      const { data: docData, error: insertError } = await supabase
        .from('documents')
        .insert({
          title: docTitle,
          content: textContent,
          condominio_id: profile.condominio_id,
          metadata: {
            title: docTitle,
            source: 'upload',
            url: publicUrl,
            category: uploadCategory,
            file_name: selectedFile.name,
            processed_at: new Date().toISOString()
          }
        })
        .select()
        .single()

      if (insertError) {
        console.error('❌ Erro ao salvar documento:', insertError)
        throw insertError
      }

      console.log('✅ Documento salvo no Supabase:', docData)

      // ===== PASSO 4: CRIAR CHUNKS PARA VISUALIZAÇÃO =====
      const chunks = splitMarkdownIntoChunks(textContent, docTitle)
      console.log(`📦 Criados ${chunks.length} chunks para visualização`)

      // ===== SUCESSO =====
      toast.success(
        `✅ Documento "${docTitle}" processado com sucesso! ${processData.chunks_created || chunks.length} seções indexadas para a IA.`,
        { id: toastId, duration: 5000 }
      )

      // Resetar formulário
      setIsModalOpen(false)
      setSelectedFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      
      // Recarregar lista
      loadDocs()

    } catch (error: any) {
      console.error('❌ Erro completo no upload:', error)
      toast.error(
        error.message || 'Erro ao processar documento. Tente novamente.', 
        { id: toastId, duration: 6000 }
      )
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (doc: Documento) => {
    if (!confirm(`Tem certeza que deseja deletar "${doc.title}"?`)) return

    const toastId = toast.loading('Deletando documento...')

    try {
      // Deletar do banco
      const { error } = await supabase
        .from('documents')
        .delete()
        .eq('id', doc.id)

      if (error) throw error

      // Deletar do storage se tiver URL
      if (doc.metadata?.url) {
        const filePath = doc.metadata.url.split('/').slice(-2).join('/')
        await supabase.storage.from('biblioteca').remove([filePath])
      }

      toast.success('Documento deletado com sucesso', { id: toastId })
      loadDocs()

    } catch (error: any) {
      console.error('Erro ao deletar:', error)
      toast.error('Erro ao deletar documento', { id: toastId })
    }
  }

  // Filtros
  const filteredDocs = docs.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedFilter || doc.metadata?.category === selectedFilter
    return matchesSearch && matchesCategory
  })

  // Estatísticas por categoria
  const categoryStats = CATEGORIAS_DOCS.map(cat => ({
    ...cat,
    count: docs.filter(d => d.metadata?.category === cat.id).length
  }))

  if (loading) {
    return (
      <PageLayout title="Biblioteca Digital">
        <LoadingSpinner />
      </PageLayout>
    )
  }

  return (
    <PageLayout 
      title="Biblioteca Digital" 
      subtitle="Documentos oficiais do condomínio indexados por IA"
    >
      {/* Header com busca e upload */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="🔍 Buscar documentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          {canManage && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="whitespace-nowrap px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors"
            >
              📤 Novo Documento
            </button>
          )}
        </div>

        {/* Filtros por categoria */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !selectedFilter 
                ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Todos ({docs.length})
          </button>
          {categoryStats.map(cat => (
            cat.count > 0 && (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === cat.id
                    ? `${cat.color} border-2 border-current`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.icon} {cat.label} ({cat.count})
              </button>
            )
          ))}
        </div>
      </div>

      {/* Lista de documentos */}
      {filteredDocs.length === 0 ? (
        <EmptyState
          title={searchTerm ? "Nenhum documento encontrado" : "Biblioteca vazia"}
          description={
            searchTerm 
              ? "Tente outro termo de busca" 
              : canManage 
                ? "Adicione o primeiro documento oficial do condomínio"
                : "Aguarde o síndico adicionar documentos"
          }
        />
      ) : (
        <div className="space-y-4">
          {filteredDocs.map(doc => {
            const category = CATEGORIAS_DOCS.find(c => c.id === doc.metadata?.category)
            const isExpanded = expandedDocs.has(doc.id)
            const topics = getVisualTopics(doc.content)

            return (
              <div key={doc.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {/* Header do documento */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {category && (
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                            {category.icon} {category.label}
                          </span>
                        )}
                        <span className="text-sm text-gray-500">
                          {new Date(doc.created_at).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {doc.title}
                      </h3>

                      {/* Preview de tópicos */}
                      {topics.length > 0 && (
                        <div className="text-sm text-gray-600 space-y-1 mb-3">
                          {topics.map((topic, i) => (
                            <div key={i} className="truncate">
                              {topic.startsWith('#') ? '📌' : '▸'} {topic.replace(/^#+\s*/, '').replace(/^\*\*\s*/, '')}
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>📄 {(doc.content.length / 1024).toFixed(1)} KB</span>
                        {doc.metadata?.url && (
                          <a
                            href={doc.metadata.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-700 font-medium"
                          >
                            📥 Download PDF
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleExpand(doc.id)}
                        className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-colors"
                      >
                        {isExpanded ? '▲ Ocultar' : '▼ Ver conteúdo'}
                      </button>
                      
                      {canManage && (
                        <button
                          onClick={() => handleDelete(doc)}
                          className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
                        >
                          🗑️ Deletar
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Conteúdo expandido */}
                {isExpanded && (
                  <div className="border-t bg-gray-50 p-6">
                    <div className="prose prose-sm max-w-none">
                      <div 
                        className="whitespace-pre-wrap text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: doc.content
                            .replace(/^#{1,3}\s+(.+)$/gm, '<h3 class="font-bold text-lg mt-4 mb-2">$1</h3>')
                            .replace(/^\*\*(.+?)\*\*/gm, '<strong>$1</strong>')
                            .replace(/\n/g, '<br/>')
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Modal de Upload */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedFile(null)
        }}
        title="Novo Documento Inteligente"
      >
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              💡 Este documento será lido pela Norma e aprenderá o conteúdo automaticamente.
            </p>
          </div>

          {/* Seletor de categoria */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoria do Documento
            </label>
            <select
              value={uploadCategory}
              onChange={(e) => setUploadCategory(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              {CATEGORIAS_DOCS.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Seletor de arquivo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Arquivo PDF
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            {selectedFile && (
              <p className="mt-2 text-sm text-gray-600">
                📄 {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>

          {/* Botão de envio */}
          <button
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              !selectedFile || uploading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {uploading ? '⏳ Processando...' : '📤 Enviar'}
          </button>
        </div>
      </Modal>
    </PageLayout>
  )
}