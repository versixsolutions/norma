import React from 'react'
import Tooltip from '../../ui/Tooltip'
import type { Assembleia } from '../../../types'

interface Props {
  items: Assembleia[]
  loading: boolean
  selectedId?: string | null
  onSelect: (a: Assembleia) => void
}

export function AssembleiasList({ items, loading, selectedId, onSelect }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <h3 className="font-bold text-gray-900 mb-3">Assembleias</h3>
      <div className="space-y-2 max-h-[420px] overflow-auto pr-2">
        {loading && <div className="text-sm text-gray-500">Carregando...</div>}
        {!loading && items.length === 0 && <div className="text-sm text-gray-500">Nenhuma assembleia encontrada.</div>}
        {items.map((a) => (
          <button
            key={a.id}
            onClick={() => onSelect(a)}
            className={`w-full text-left px-3 py-2 rounded-lg border ${
              selectedId === a.id ? 'border-purple-400 bg-purple-50' : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-900">{a.titulo}</span>
              <Tooltip
                content={
                  a.status === 'agendada'
                    ? 'Agendada'
                    : a.status === 'em_andamento'
                    ? 'Em andamento'
                    : a.status === 'encerrada'
                    ? 'Encerrada'
                    : a.status === 'cancelada'
                    ? 'Cancelada'
                    : 'Status'
                }
              >
                <span className="text-xs px-2 py-0.5 rounded-full border" aria-label={`Status: ${a.status}`}>
                  {a.status === 'agendada' && '📅'}
                  {a.status === 'em_andamento' && '🟢'}
                  {a.status === 'encerrada' && '✅'}
                  {a.status === 'cancelada' && '❌'}
                </span>
              </Tooltip>
            </div>
            <div className="text-xs text-gray-600">{new Date(a.data_hora).toLocaleString('pt-BR')}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
