import { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { versixTheme } from '../../config/theme-versix'
import AdminSidebar from './AdminSidebar'
import LoadingSpinner from '../LoadingSpinner'

export default function AdminLayout() {
  const { user, profile, loading, canManage } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  if (loading) return <LoadingSpinner message="Verificando permissões..." />

  // Proteção de Rota: Apenas Admins e Síndicos
  if (!user || !canManage) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex">
      
      {/* Sidebar Desktop */}
      <aside className="hidden lg:block w-64 fixed inset-y-0 left-0 z-50 shadow-xl">
        <AdminSidebar />
      </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Mobile */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <AdminSidebar onClose={() => setIsMobileMenuOpen(false)} />
      </aside>

      {/* Main Content Wrapper */}
      {/* CORREÇÃO: Adicionado 'min-w-0' e 'overflow-x-hidden' para impedir que conteúdos largos (como tabelas ou cards) quebrem o layout mobile */}
      <div className="flex-1 flex flex-col lg:ml-64 min-h-screen transition-all duration-300 min-w-0 overflow-x-hidden">
        
        {/* Topbar Administrativa */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30 px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              {/* Toggle Mobile */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              
              {/* Breadcrumb ou Título Dinâmico (Placeholder) */}
              <h2 className="text-lg font-bold text-gray-800 hidden sm:block">
                Painel Administrativo
              </h2>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">{profile?.full_name}</p>
                <p className="text-xs text-blue-600 font-bold uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full inline-block">
                  {profile?.role}
                </p>
              </div>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md"
                style={{ background: versixTheme.colors.primary.DEFAULT }}
              >
                {profile?.full_name?.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full animate-fade-in">
          <Outlet />
        </main>

      </div>
    </div>
  )
}