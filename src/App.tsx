import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'

// Pages
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import FAQ from './pages/FAQ'
import Despesas from './pages/Despesas'
import Votacoes from './pages/Votacoes'
import Ocorrencias from './pages/Ocorrencias'
import Comunicados from './pages/Comunicados'
import Profile from './pages/Profile' // Importação Nova
import Layout from './components/Layout'

// Componente de Rota Privada
function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth()

  if (loading) return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  
  if (!session) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Rotas Privadas com Layout */}
            <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/despesas" element={<Despesas />} />
              <Route path="/votacoes" element={<Votacoes />} />
              <Route path="/ocorrencias" element={<Ocorrencias />} />
              <Route path="/comunicados" element={<Comunicados />} />
              <Route path="/perfil" element={<Profile />} /> {/* Rota Nova */}
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  )
}