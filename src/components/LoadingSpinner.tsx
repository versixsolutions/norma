import { useTheme } from '../contexts/ThemeContext'

export default function LoadingSpinner({ message = 'Carregando...' }: { message?: string }) {
  let color = '#4F46E5' // Cor padrão (Indigo) fallback

  try {
    // Tenta pegar a cor do tema, se falhar usa o padrão
    const context = useTheme()
    if (context && context.theme) {
      color = context.theme.colors.primary.DEFAULT
    }
  } catch (e) {
    // Silenciosamente ignora erro de contexto (comum durante inicialização)
  }

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div 
          className="inline-block w-16 h-16 border-4 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: `${color} transparent ${color} ${color}` }}
        ></div>
        <p className="text-gray-600 mt-4 font-semibold animate-pulse">{message}</p>
      </div>
    </div>
  )
}