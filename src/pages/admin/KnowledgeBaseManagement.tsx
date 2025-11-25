import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import LoadingSpinner from '../../components/LoadingSpinner'
import EmptyState from '../../components/EmptyState'
import Modal from '../../components/ui/Modal'
import toast from 'react-hot-toast'
import { formatDateTime } from '../../lib/utils'

interface Documento {
  id: number
  title: string
  content: string
  created_at: string
  metadata: {
    category?: string
    source?: string
    url?: string
  }
  embedding?: any // Campo opcional para verificar se tem IA processada
}

export default function KnowledgeBaseManagement() {
  const [documents, setDocuments] = useState<Documento[]>([])
  const [loading, setLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [docToDelete, setDocToDelete] = useState<Documento | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadDocuments()
  }, [])

  async function loadDocuments() {
    setLoading(true)
    try {
      // Busca documentos ordenados por data de criação
      const { data, error } = await supabase
        .from('documents')
        .select('id, title, content, created_at, metadata, embedding') // Seleciona embedding para verificar status
        .order('created_at', { ascending: false })

      if (error) throw error
      setDocuments(data || [])
    } catch (error: any) {
      console.error('Erro ao carregar documentos:', error)
      toast.error('Erro ao carregar base de conhecimento.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!docToDelete) return

    setIsDeleting(true)
    const toastId = toast.loading('Excluindo documento...')

    try {
      // 1. Excluir do Storage (se houver URL no metadata)
      if (docToDelete.metadata?.url) {
        const urlParts = docToDelete.metadata.url.split('/')
        const fileName = urlParts[urlParts.length - 1] // Extrai nome do arquivo
        
        // Tenta remover do bucket 'biblioteca' (ajuste se usar outro bucket)
        // Nota: O caminho pode precisar de ajuste dependendo de como foi salvo (com ID do condomínio, etc.)
        // Esta é uma tentativa de "best effort". Se falhar, prosseguimos com a exclusão do banco.
        // Para maior precisão, o caminho completo deveria ser salvo no banco.
        // Como o nome do arquivo gerado inclui timestamp, é único.
        
        // Buscando o caminho relativo correto se possível.
        // Se a URL for pública, precisamos extrair o path após /object/public/biblioteca/
        const pathRegex = /biblioteca\/(.*)/;
        const match = docToDelete.metadata.url.match(pathRegex);
        
        if (match && match[1]) {
             const storagePath = match[1];
             const { error: storageError } = await supabase.storage
                .from('biblioteca')
                .remove([storagePath])
             
             if (storageError) console.warn('Erro ao apagar do storage (pode já ter sido apagado):', storageError)
        }
      }

      // 2. Excluir do Banco de Dados
      const { error: dbError } = await supabase
        .from('documents')
        .delete()
        .eq('id', docToDelete.id)

      if (dbError) throw dbError

      // 3. Atualizar Lista Local
      setDocuments(prev => prev.filter(d => d.id !== docToDelete.id))
      
      toast.success('Documento excluído com sucesso!', { id: toastId })
      setDocToDelete(null)

    } catch (error: any) {
      console.error('Erro ao excluir:', error)
      toast.error('Falha ao excluir: ' + error.message, { id: toastId })
    } finally {
      setIsDeleting(false)
    }
  }

  // Filtro de busca local
  const filteredDocs = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Base de Conhecimento (IA)</h1>
          <p className="text-gray-500 text-sm">Gerencie os documentos que a Norma usa para aprender.</p>
        </div>
        
        {/* Barra de Busca */}
        <div className="relative w-full md:w-64">
            <input 
                type="text" 
                placeholder="Buscar documento..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner message="Carregando base de dados..." />
      ) : filteredDocs.length === 0 ? (
        <EmptyState 
            icon="🧠" 
            title="Nenhum documento encontrado" 
            description={searchTerm ? "Tente outro termo de busca." : "A base de conhecimento está vazia."} 
        />
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                  <th className="px-6 py-4">Documento</th>
                  <th className="px-6 py-4">Categoria / Fonte</th>
                  <th className="px-6 py-4 text-center">Status IA</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredDocs.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📄</span>
                        <div>
                            <p className="font-bold text-gray-900 text-sm line-clamp-1" title={doc.title}>{doc.title}</p>
                            <p className="text-xs text-gray-400">{formatDateTime(doc.created_at)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {doc.metadata?.category || doc.metadata?.source || 'Geral'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                        {/* Verifica se o campo embedding tem dados */}
                        {doc.embedding ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-200" title="Processado e pronto para uso">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Ativo
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-200" title="Documento antigo ou falha no processamento">
                                ⚠️ Pendente
                            </span>
                        )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        {doc.metadata?.url && (
                            <a 
                                href={doc.metadata.url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-gray-400 hover:text-blue-600 p-1.5 rounded hover:bg-blue-50 transition"
                                title="Ver PDF Original"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </a>
                        )}
                        <button 
                          onClick={() => setDocToDelete(doc)}
                          className="text-gray-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition"
                          title="Excluir da Base"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL DE CONFIRMAÇÃO DE EXCLUSÃO */}
      <Modal
        isOpen={!!docToDelete}
        onClose={() => setDocToDelete(null)}
        title="Confirmar Exclusão"
      >
        <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 text-3xl">
                🗑️
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Tem certeza?</h3>
            <p className="text-gray-600 text-sm mb-6 px-6">
                Você está prestes a remover o documento <strong>"{docToDelete?.title}"</strong>. 
                <br/><br/>
                Isso apagará o arquivo PDF e removerá o conhecimento da Norma sobre este conteúdo. Essa ação não pode ser desfeita.
            </p>
            
            <div className="flex gap-3 justify-center">
                <button 
                    onClick={() => setDocToDelete(null)}
                    className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition"
                >
                    Cancelar
                </button>
                <button 
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 shadow-md disabled:opacity-50 transition flex items-center gap-2"
                >
                    {isDeleting ? 'Excluindo...' : 'Sim, Excluir'}
                </button>
            </div>
        </div>
      </Modal>
    </div>
  )
}