import React from 'react'
import type { ResultadoVotacao } from '../../types'

interface ResultadoCardProps {
  resultado: ResultadoVotacao
}

export function ResultadoCard({ resultado }: ResultadoCardProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
      <h4 className="font-bold text-gray-900 mb-3">{resultado.titulo}</h4>
      <div className="space-y-2">
        {resultado.resultados.map((r) => (
          <div key={r.opcao}>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="font-medium">{r.opcao}</span>
              <span className="font-bold text-purple-600">
                {r.votos} voto{r.votos !== 1 ? 's' : ''} ({r.percentual.toFixed(1)}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full transition-all" style={{ width: `${r.percentual}%` }} />
            </div>
          </div>
        ))}
      </div>
      {resultado.vencedor && (
        <div className="mt-3 bg-purple-100 text-purple-900 p-2 rounded text-center font-bold text-sm">🏆 Resultado: {resultado.vencedor}</div>
      )}
    </div>
  )
}
