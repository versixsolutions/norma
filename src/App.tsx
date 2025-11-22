import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import ReloadPrompt from './components/ReloadPrompt'

// Pages Comuns
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import FAQ from './pages/FAQ'
import Despesas from './pages/Despesas'
import Votacoes from './pages/Votacoes'
import Ocorrencias from './pages/Ocorrencias'
import NovaOcorrencia from './pages/NovaOcorrencia'
import Comunicados from './pages/Comunicados'
import Profile from './pages/Profile'
import Suporte from './pages/Suporte'
import NovoChamado from './pages/NovoChamado'
import Comunicacao from './pages/Comunicacao'
import Biblioteca from './pages/Biblioteca'
import Layout from './components/Layout'
import PendingApproval from './pages/PendingApproval' // Importação Nova

// Pages Admin
import AdminLayout from './components/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import UserManagement from './pages/admin/UserManagement'

// Componente de Proteção de Rota (Lógica Atualizada)
function PrivateRoute({ children, adminOnly = false }: { children: React.ReactNode, adminOnly?: boolean }) {
  const { session, loading, profile, canManage } = useAuth()
  const location = useLocation()

  if (loading) return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  
  // 1. Não autenticado -> Login
  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // 2. Usuário Pendente -> Tela de Espera (Se tentar acessar qualquer outra coisa)
  if (profile?.role === 'pending') {
    return <Navigate to="/pending-approval" replace />
  }

  // 3. Rota Admin mas sem permissão -> Dashboard Morador
  if (adminOnly && !canManage) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

// Rota Específica para Tela de Espera (Lógica Inversa)
function PendingRoute({ children }: { children: React.ReactNode }) {
  const { session, loading, profile } = useAuth()

  if (loading) return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  
  if (!session) return <Navigate to="/login" replace />

  // Se já foi aprovado, não deve ver a tela de espera -> Dashboard
  if (profile?.role !== 'pending') {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
        <ThemeProvider>
          <ReloadPrompt />
          
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Rota de Espera (Sem Layout) */}
            <Route path="/pending-approval" element={
              <PendingRoute>
                <PendingApproval />
              </PendingRoute>
            } />

            {/* Área do Morador (Protegida + Layout) */}
            <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/suporte" element={<Suporte />} />
              <Route path="/comunicacao" element={<Comunicacao />} />
              <Route path="/transparencia" element={<Despesas />} />
              <Route path="/perfil" element={<Profile />} />

              <Route path="/faq" element={<FAQ />} />
              <Route path="/ocorrencias" element={<Ocorrencias />} />
              <Route path="/ocorrencias/nova" element={<NovaOcorrencia />} />
              <Route path="/chamados/novo" element={<NovoChamado />} />
              <Route path="/biblioteca" element={<Biblioteca />} />
              <Route path="/comunicados" element={<Comunicados />} />
              <Route path="/votacoes" element={<Votacoes />} />
              
              <Route path="/despesas" element={<Navigate to="/transparencia" replace />} />
            </Route>

            {/* Área Administrativa (Protegida + Admin Layout) */}
            {/* Nota: O AdminLayout já faz verificação interna, mas o PrivateRoute reforça */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="usuarios" element={<UserManagement />} />
              <Route path="ocorrencias" element={<div className="p-8">Módulo de Ocorrências (Em breve)</div>} />
              <Route path="comunicados" element={<div className="p-8">Módulo de Comunicados (Em breve)</div>} />
              <Route path="votacoes" element={<div className="p-8">Módulo de Votações (Em breve)</div>} />
              <Route path="financeiro" element={<div className="p-8">Módulo Financeiro (Em breve)</div>} />
              <Route path="ia" element={<div className="p-8">Treinamento de IA (Em breve)</div>} />
            </Route>

          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  )
}