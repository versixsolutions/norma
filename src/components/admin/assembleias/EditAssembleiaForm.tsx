import React from 'react'
import type { Assembleia } from '../../../types'

interface EditAss {
  titulo: string
  data_hora: string
  edital_topicos_text: string
  ata_topicos_text: string
  edital_pdf_file: File | null
  ata_pdf_file: File | null
}

interface Props {
  selected: Assembleia
  value: EditAss
  onChange: (updater: (prev: EditAss) => EditAss) => void
  onUpdate: () => void
  onDelete: () => void
  onStatus: (status: Assembleia['status']) => void
}

export function EditAssembleiaForm({ selected, value, onChange, onUpdate, onDelete, onStatus }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4" data-testid="edit-assembleia-form">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-gray-900">Editar Assembleia</h3>
        <div className="flex gap-2">
          {selected.status === 'agendada' && (
            <button onClick={() => onStatus('em_andamento')} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-bold" data-testid="btn-iniciar-assembleia">Iniciar</button>
          )}
          {selected.status !== 'encerrada' && selected.status !== 'cancelada' && (
            <button onClick={() => onStatus('encerrada')} className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm font-bold" data-testid="btn-encerrar-assembleia">Encerrar</button>
          )}
          {selected.status !== 'cancelada' && (
            <button onClick={() => onStatus('cancelada')} className="px-3 py-1.5 bg-gray-600 text-white rounded-lg text-sm font-bold" data-testid="btn-cancelar-assembleia">Cancelar</button>
          )}
          <button onClick={onDelete} className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-sm font-bold" data-testid="btn-excluir-assembleia">Excluir</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input className="border rounded-lg px-3 py-2" value={value.titulo} onChange={e => onChange(s => ({ ...s, titulo: e.target.value }))} />
        <input className="border rounded-lg px-3 py-2" type="datetime-local" value={value.data_hora} onChange={e => onChange(s => ({ ...s, data_hora: e.target.value }))} />
        <div className="md:col-span-1">
          <label className="text-xs text-gray-500">Edital (tópicos)</label>
          <textarea className="w-full border rounded-lg px-3 py-2" rows={4} value={value.edital_topicos_text} onChange={e => onChange(s => ({ ...s, edital_topicos_text: e.target.value }))} />
          <input className="w-full mt-2" type="file" accept="application/pdf" onChange={e => onChange(s => ({ ...s, edital_pdf_file: e.target.files?.[0] || null }))} />
        </div>
        <div className="md:col-span-1">
          <label className="text-xs text-gray-500">Ata (tópicos)</label>
            <textarea className="w-full border rounded-lg px-3 py-2" rows={4} value={value.ata_topicos_text} onChange={e => onChange(s => ({ ...s, ata_topicos_text: e.target.value }))} />
            <input className="w-full mt-2" type="file" accept="application/pdf" onChange={e => onChange(s => ({ ...s, ata_pdf_file: e.target.files?.[0] || null }))} />
        </div>
      </div>
      <div className="mt-3">
        <button onClick={onUpdate} className="px-4 py-2 bg-purple-600 text-white rounded-lg font-bold">Salvar Alterações</button>
      </div>
    </div>
  )
}
