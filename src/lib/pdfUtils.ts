import * as pdfjsLib from 'pdfjs-dist'

// --- CORREÇÃO DO WORKER ---
// Usamos 'unpkg' para garantir que o worker (.mjs) seja compatível com a versão instalada.
// O erro 404 acontecia porque o cdnjs não tinha o arquivo no caminho esperado.
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`

export async function extractTextFromPDF(file: File): Promise<string> {
  try {
    const arrayBuffer = await file.arrayBuffer()
    
    // Carrega o documento PDF
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
    const pdf = await loadingTask.promise
    
    let fullText = ''

    // Extrai texto página por página
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i)
      const textContent = await page.getTextContent()
      
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(' ')
      
      fullText += `\n--- PÁGINA ${i} ---\n${pageText}`
    }

    return fullText

  } catch (error: any) {
    console.error('Erro detalhado no PDF:', error)
    
    if (error.name === 'MissingPDFException') {
      throw new Error('Arquivo PDF inválido ou corrompido.')
    }
    if (error.name === 'PasswordException') {
      throw new Error('O PDF está protegido por senha.')
    }
    
    throw new Error('Falha ao processar o PDF. Tente recarregar a página.')
  }
}