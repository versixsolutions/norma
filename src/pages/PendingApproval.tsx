import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function PendingApproval() {
  const { signOut, profile } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
        {/* Ícone Animado */}
        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 relative">
          <span className="text-4xl z-10">⏳</span>
          <div className="absolute inset-0 border-4 border-orange-100 rounded-full animate-ping opacity-50"></div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Cadastro em Análise
        </h1>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Olá, <strong>{profile?.full_name}</strong>! <br/>
          Seu cadastro foi recebido e está na fila de aprovação da administração do condomínio.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8 text-sm text-blue-900 text-left">
          <p className="font-bold mb-2 flex items-center gap-2">
            <span className="text-lg">ℹ️</span> O que acontece agora?
          </p>
          <ul className="space-y-2 opacity-90 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              O síndico irá verificar seus dados e unidade.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Isso garante a segurança de todos os moradores.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Tente fazer login novamente mais tarde.
            </li>
          </ul>
        </div>

        <button 
          onClick={handleLogout}
          className="w-full bg-white border border-gray-300 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition shadow-sm"
        >
          Voltar para o Login
        </button>
      </div>
      
      <p className="mt-8 text-xs text-gray-400">
        Versix Solutions &copy; {new Date().getFullYear()}
      </p>
    </div>
  )
}