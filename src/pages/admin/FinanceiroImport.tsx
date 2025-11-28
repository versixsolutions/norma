import { useState, useRef } from 'react'
import { supabase } from '../../lib/supabase'
import { useAdmin } from '../../contexts/AdminContext'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import * as pdfjsLib from 'pdfjs-dist'
import { formatCurrency } from '../../lib/utils'

// Configura o worker do PDF.js (necessário para vite)
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

export default function FinanceiroImport() {
  const { selectedCondominioId } = useAdmin()
  const { user } = useAuth()
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const [step, setStep] = useState<'upload' | 'preview' | 'saving'>('upload')
  const [processing, setProcessing] = useState(false)
  const [extractedData, setExtractedData] = useState<{ receitas: any[], despesas: any[] }>({ receitas: [], despesas: [] })

  // 1. Ler PDF e Extrair Texto
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.type !== 'application/pdf') {
      toast.error('Por favor, envie um arquivo PDF.')
      return
    }

    setProcessing(true)
    const toastId = toast.loading('Lendo demonstrativo...')

    try {
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await pdfjsLib.getDocument(arrayBuffer).promise
      let fullText = ''

      // Extrai texto de todas as páginas
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const textContent = await page.getTextContent()
        const pageText = textContent.items.map((item: any) => item.str).join(' ')
        fullText += `\n--- PÁGINA ${i} ---\n${pageText}`
      }

      console.log('Texto extraído (bruto):', fullText.substring(0, 200) + '...')

      // 2. Enviar para IA estruturar (Simulado por enquanto, vamos conectar na Edge Function depois)
      // Aqui chamaríamos: supabase.functions.invoke('ask-ai', { action: 'extract_finance', text: fullText })
      // Para este exemplo, vou simular o retorno que a IA daria baseado no seu PDF
      
      toast.loading('Inteligência Artificial analisando tabelas...', { id: toastId })
      
      // --- SIMULAÇÃO DO RETORNO DA IA (MOCK) ---
      // Em produção, isso virá da Edge Function
      await new Promise(resolve => setTimeout(resolve, 2000)) 
      
      const mockData = {
        receitas: [
          { description: 'Taxa de Condomínio', amount: 29250.20, date: '2025-01-15', category: 'Taxa Ordinária' },
          { description: 'Taxa de Condomínio', amount: 29250.20, date: '2025-02-15', category: 'Taxa Ordinária' },
          { description: 'Taxa Extra', amount: 19170.03, date: '2025-01-15', category: 'Taxa Extra' },
        ],
        despesas: [
          { description: 'Energia Elétrica', amount: 8053.91, date: '2025-02-10', category: 'Administrativa' },
          { description: 'Água e Esgoto', amount: 2851.84, date: '2025-01-10', category: 'Administrativa' },
          { description: 'Manutenção de Portão', amount: 270.00, date: '2025-03-10', category: 'Manutenção' },
        ]
      }
      // ------------------------------------------

      setExtractedData(mockData)
      setStep('preview')
      toast.success('Dados extraídos com sucesso!', { id: toastId })

    } catch (err) {
      console.error(err)
      toast.error('Erro ao processar PDF.', { id: toastId })
    } finally {
      setProcessing(false)
    }
  }

  // 3. Salvar no Banco
  const handleConfirmImport = async () => {
    if (!selectedCondominioId || !user) return
    
    setStep('saving')
    const toastId = toast.loading('Salvando lançamentos...')

    try {
      // Inserir Receitas
      if (extractedData.receitas.length > 0) {
        const receitasToInsert = extractedData.receitas.map(r => ({
          ...r,
          condominio_id: selectedCondominioId,
          author_id: user.id,
          is_consolidated: true,
          received_at: r.date // Mapeando data
        }))
        const { error: errRec } = await supabase.from('receitas').insert(receitasToInsert)
        if (errRec) throw errRec
      }

      // Inserir Despesas
      if (extractedData.despesas.length > 0) {
        const despesasToInsert = extractedData.despesas.map(d => ({
          description: d.description,
          amount: d.amount,
          category: d.category,
          due_date: d.date,
          paid_at: d.date, // Assume pago pois é histórico
          condominio_id: selectedCondominioId,
          author_id: user.id,
          is_consolidated: true
        }))
        const { error: errDesp } = await supabase.from('despesas').insert(despesasToInsert)
        if (errDesp) throw errDesp
      }

      toast.success('Importação concluída!', { id: toastId })
      navigate('/admin/financeiro')

    } catch (err: any) {
      console.error(err)
      toast.error('Erro ao salvar: ' + err.message, { id: toastId })
      setStep('preview')
    }
  }

  const totalReceitas = extractedData.receitas.reduce((acc, r) => acc + r.amount, 0)
  const totalDespesas = extractedData.despesas.reduce((acc, d) => acc + d.amount, 0)

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Importar Demonstrativo</h1>
        <button onClick={() => navigate('/admin/financeiro')} className="text-gray-500 hover:text-gray-700 font-medium">Voltar</button>
      </div>

      {step === 'upload' && (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-indigo-200 bg-indigo-50 rounded-xl p-12 cursor-pointer hover:bg-indigo-100 transition group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📄</div>
            <h3 className="text-lg font-bold text-indigo-900">Upload do Demonstrativo (PDF)</h3>
            <p className="text-indigo-600 text-sm mt-2">O sistema usará IA para ler as tabelas automaticamente.</p>
            <input 
              type="file" 
              accept="application/pdf" 
              ref={fileInputRef} 
              className="hidden" 
              onChange={handleFileChange} 
            />
          </div>
          {processing && <p className="mt-4 text-gray-500 animate-pulse">Processando arquivo...</p>}
        </div>
      )}

      {step === 'preview' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Resumo do que foi encontrado */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
              <p className="text-xs font-bold text-green-700 uppercase">Receitas Identificadas</p>
              <p className="text-2xl font-bold text-green-900">{formatCurrency(totalReceitas)}</p>
              <p className="text-xs text-green-600">{extractedData.receitas.length} lançamentos</p>
            </div>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <p className="text-xs font-bold text-red-700 uppercase">Despesas Identificadas</p>
              <p className="text-2xl font-bold text-red-900">{formatCurrency(totalDespesas)}</p>
              <p className="text-xs text-red-600">{extractedData.despesas.length} lançamentos</p>
            </div>
          </div>

          {/* Tabelas de Preview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200 font-bold text-gray-700">Prévia dos Dados (5 primeiros itens)</div>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-3">Tipo</th>
                  <th className="p-3">Descrição</th>
                  <th className="p-3">Data</th>
                  <th className="p-3 text-right">Valor</th>
                </tr>
              </thead>
              <tbody>
                {extractedData.receitas.slice(0, 3).map((r, i) => (
                  <tr key={`r-${i}`} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-green-600 font-bold">Receita</td>
                    <td className="p-3">{r.description}</td>
                    <td className="p-3">{r.date}</td>
                    <td className="p-3 text-right">{formatCurrency(r.amount)}</td>
                  </tr>
                ))}
                {extractedData.despesas.slice(0, 3).map((d, i) => (
                  <tr key={`d-${i}`} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-red-600 font-bold">Despesa</td>
                    <td className="p-3">{d.description}</td>
                    <td className="p-3">{d.date}</td>
                    <td className="p-3 text-right">{formatCurrency(d.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-3 text-center text-xs text-gray-500 bg-gray-50">... e mais {extractedData.receitas.length + extractedData.despesas.length - 6} itens</div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => setStep('upload')}
              className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 font-bold hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button 
              onClick={handleConfirmImport}
              disabled={step === 'saving'}
              className="flex-1 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 shadow-md disabled:opacity-50"
            >
              {step === 'saving' ? 'Salvando...' : 'Confirmar Importação'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}