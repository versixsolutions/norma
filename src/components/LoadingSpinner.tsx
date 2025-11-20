import { useTheme } from '../contexts/ThemeContext'

export default function LoadingSpinner({ message = 'Carregando...' }: { message?: string }) {
  // Tentamos usar o hook, mas se falhar (fora do provider), usa fallback seguro
  let color = '#4F46E5' // Cor padrão (Indigo)
  try {
    const { theme } = useTheme()
    color = theme.colors.primary.DEFAULT
  } catch (e) {
    // Fallback silencioso se usado fora do contexto
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
```

### 5. Configuração Importante no `App.tsx` (Instrução)
Você precisará garantir que o `ThemeProvider` envolva sua aplicação, de preferência **dentro** do `AuthProvider` (pois ele precisa do usuário logado para decidir o tema).

No seu arquivo `src/App.tsx` (ou `src/main.tsx`), a estrutura deve ficar assim:

```tsx
// Exemplo de como deve ficar seu App.tsx
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext' // <--- Importe isso

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider> {/* <--- Adicione isso AQUI, dentro do AuthProvider */}
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  )
}