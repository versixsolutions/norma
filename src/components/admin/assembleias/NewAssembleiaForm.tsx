import React from 'react'

interface NewAss {
  titulo: string
  data_hora: string
  edital_topicos_text: string
  edital_pdf_file: File | null
}

interface Props {
  value: NewAss
  onChange: (updater: (prev: NewAss) => NewAss) => void
  onCreate: () => void
}

export function NewAssembleiaForm({ value, onChange, onCreate }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <h3 className="font-bold text-gray-900 mb-3">Nova Assembleia</h3>
      <div className="space-y-3">
        <input
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Título"
          value={value.titulo}
          onChange={(e) => onChange((s) => ({ ...s, titulo: e.target.value }))}
        />
        <input
          className="w-full border rounded-lg px-3 py-2"
          type="datetime-local"
          value={value.data_hora}
          onChange={(e) => onChange((s) => ({ ...s, data_hora: e.target.value }))}
        />
        <textarea
          className="w-full border rounded-lg px-3 py-2"
          rows={4}
          placeholder="Tópicos do edital (1 por linha)"
          value={value.edital_topicos_text}
          onChange={(e) => onChange((s) => ({ ...s, edital_topicos_text: e.target.value }))}
        />
        <input
          className="w-full"
          type="file"
          accept="application/pdf"
          onChange={(e) => onChange((s) => ({ ...s, edital_pdf_file: e.target.files?.[0] || null }))}
        />
        <button onClick={onCreate} className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-bold">
          Criar
        </button>
      </div>
    </div>
  )
}
