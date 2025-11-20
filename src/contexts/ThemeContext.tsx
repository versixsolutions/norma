import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { AuthContext } from './AuthContext' 
import { supabase } from '../lib/supabase'

import pinheiroParkTheme from '../config/theme-pinheiropark'
// CORREÇÃO: Usar 'import type' previne o erro de SyntaxError no navegador
import type { Theme } from '../config/theme-pinheiropark'
import versixTheme from '../config/theme-versix'

interface ThemeContextType {
  theme: Theme
  loading: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Usamos o contexto diretamente para maior segurança
  const auth = useContext(AuthContext)
  
  const [currentTheme, setCurrentTheme] = useState<Theme>(versixTheme)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTheme() {
      // Se o usuário não estiver logado ou contexto não carregou, mantém tema padrão
      if (!auth || !auth.user || !auth.profile?.condominio_id) {
        setCurrentTheme(versixTheme)
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('condominios')
          .select('slug, theme_config')
          .eq('id', auth.profile.condominio_id)
          .single()

        if (error) throw error

        switch (data?.slug) {
          case 'pinheiropark':
            setCurrentTheme(pinheiroParkTheme)
            break
          case 'versix':
          default:
            setCurrentTheme(versixTheme)
            break
        }
      } catch (err) {
        console.error('Erro ao carregar tema:', err)
        setCurrentTheme(versixTheme)
      } finally {
        setLoading(false)
      }
    }

    loadTheme()
  }, [auth?.user, auth?.profile?.condominio_id])

  const toggleTheme = () => {
    console.log('Troca manual desativada em favor do tema do condomínio')
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, loading, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }
  return context
}