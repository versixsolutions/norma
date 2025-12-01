import React from 'react'

interface ChatHeaderProps {
  onClose: () => void
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div
      className="bg-gradient-to-r from-primary to-secondary p-3 text-white flex justify-between items-center cursor-pointer"
      onClick={onClose}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-lg backdrop-blur-sm border border-white/20">
          👩‍💻
        </div>
        <div>
          <h3 className="font-bold text-sm">Fale com a Norma</h3>
          <p className="text-[10px] opacity-90 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            Online
          </p>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded transition"
        aria-label="Fechar chat"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
