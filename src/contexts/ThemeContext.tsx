import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useAuth } from './AuthContext'
import { supabase } from '../lib/supabase'
import pinheiroParkTheme, { Theme } from '../config/theme-pinheiropark'
import versixTheme from '../config/theme-versix'

interface ThemeContextType {
  theme: Theme
  loading: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { user, profile } = useAuth()
  const [currentTheme, setCurrentTheme] = useState<Theme>(versixTheme) // Tema padrão
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTheme() {
      if (!user || !profile?.condominio_id) {
        setCurrentTheme(versixTheme)
        setLoading(false)
        return
      }

      try {
        // Busca o slug do condomínio do usuário
        const { data, error } = await supabase
          .from('condominios')
          .select('slug, theme_config')
          .eq('id', profile.condominio_id)
          .single()

        if (error) throw error

        // LÓGICA DE SELEÇÃO DE TEMA
        // Mapeia o slug do banco de dados para o arquivo de tema importado
        switch (data?.slug) {
          case 'pinheiropark':
            setCurrentTheme(pinheiroParkTheme)
            break
          case 'versix':
            setCurrentTheme(versixTheme)
            break
          default:
            // Se tiver config JSON no banco, poderia usar aqui. 
            // Por enquanto, fallback para Versix.
            setCurrentTheme(versixTheme)
        }
      } catch (err) {
        console.error('Erro ao carregar tema:', err)
        setCurrentTheme(versixTheme)
      } finally {
        setLoading(false)
      }
    }

    loadTheme()
  }, [user, profile?.condominio_id])

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, loading }}>
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