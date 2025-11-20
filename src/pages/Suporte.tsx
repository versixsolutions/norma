import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

export default function Suporte() {
  const navigate = useNavigate()

  const services = [
    {
      title: 'Perguntas Frequentes',
      description: 'Tire suas dúvidas sobre o regimento e normas.',
      icon: '❓',
      link: '/faq',
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      title: 'Abrir Ocorrência',
      description: 'Reporte problemas, barulhos ou solicite manutenção.',
      icon: '🚨',
      link: '/ocorrencias',
      color: 'bg-orange-50 text-orange-600 border-orange-100'
    },
    {
      title: 'Biblioteca Oficial',
      description: 'Acesse o Regimento Interno, Convenção e Atas.',
      icon: '📚',
      link: '/biblioteca',
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      title: 'Falar com o Síndico',
      description: 'Canal direto para assuntos administrativos.',
      icon: '💬',
      // Link fictício para WhatsApp ou tela de contato
      link: '#', 
      action: () => alert('Funcionalidade de Chat direto em breve!'),
      color: 'bg-green-50 text-green-600 border-green-100'
    }
  ]

  return (
    <PageLayout 
      title="Central de Suporte" 
      subtitle="Como podemos ajudar você hoje?" 
      icon="🤝"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div 
            key={service.title}
            onClick={() => service.action ? service.action() : navigate(service.link)}
            className={`
              relative p-6 rounded-xl border cursor-pointer transition-all duration-300
              hover:shadow-md hover:scale-[1.02] active:scale-95 bg-white
              ${service.color.replace('text-', 'border-')} 
            `}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 ${service.color}`}>
              {service.icon}
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
            
            <div className="mt-4 flex items-center text-sm font-semibold opacity-80">
              Acessar <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        ))}
      </div>

      {/* Banner de Ajuda Extra */}
      <div className="mt-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-bold text-lg mb-2">Emergência no Condomínio?</h3>
          <p className="text-gray-300 text-sm mb-4 max-w-md">
            Para casos graves como vazamento de gás, incêndio ou segurança, entre em contato imediatamente com a portaria 24h.
          </p>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition">
            Ligar para Portaria (Ramal 9000)
          </button>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 text-9xl transform translate-x-10 translate-y-10">
          ☎️
        </div>
      </div>
    </PageLayout>
  )
}