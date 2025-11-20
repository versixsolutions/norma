import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext'

interface PageLayoutProps {
  title: string
  subtitle?: string
  icon?: string
  children: React.ReactNode
  headerAction?: React.ReactNode
  showBackButton?: boolean
}

export default function PageLayout({
  title,
  subtitle,
  icon,
  children,
  headerAction,
  showBackButton = true,
}: PageLayoutProps) {
  const navigate = useNavigate()
  const { profile, signOut } = useAuth()
  const { theme } = useTheme() // Tema dinâmico

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-6">
      {/* Header Interno - Usa o gradiente do tema */}
      <header 
        className="text-white shadow-lg sticky top-0 z-40 transition-all duration-500"
        style={{ background: theme.gradients.header }}
      >
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {showBackButton && (
                <button
                  onClick={() => navigate('/')}
                  className="p-2 hover:bg-white/20 rounded-lg transition"
                  aria-label="Voltar"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
              )}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 drop-shadow-sm">
                  {icon && <span className="filter drop-shadow-md">{icon}</span>}
                  {title}
                </h1>
                {subtitle && <p className="text-white/90 text-sm md:text-base font-medium">{subtitle}</p>}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <p className="font-semibold text-sm">{profile?.full_name}</p>
                <p className="text-xs text-white/80 uppercase font-bold tracking-wider">
                  {profile?.role === 'sindico' ? '👑 Síndico' : '🏠 Morador'}
                </p>
              </div>
              <button
                onClick={signOut}
                className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition backdrop-blur-sm"
              >
                Sair
              </button>
            </div>
          </div>

          {headerAction && (
            <div className="mt-4 animate-slide-down">
              {headerAction}
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-6 animate-fade-in">
        {children}
      </main>
    </div>
  )
}