import React from 'react'
import type { AssembleiaPauta } from '../../../types'

interface PautaForm {
  titulo: string
  descricao: string
  ordem: number
  tipo_votacao: 'aberta' | 'secreta'
  opcoes_text: string
}

interface Props {
  pautas: AssembleiaPauta[]
  form: PautaForm
  onChangeForm: (updater: (prev: PautaForm) => PautaForm) => void
  onAdd: () => void
  onAbrir: (id: string) => void
  onEncerrar: (id: string) => void
  onExcluir: (id: string) => void
}

export function PautasSection({ pautas, form, onChangeForm, onAdd, onAbrir, onEncerrar, onExcluir }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4" data-testid="pautas-section">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-gray-900">Pautas de Votação</h3>
        <div className="text-sm text-gray-500">Total: {pautas.length}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <input
          className="border rounded-lg px-3 py-2 md:col-span-2"
          placeholder="Título da pauta"
          value={form.titulo}
          onChange={(e) => onChangeForm((s) => ({ ...s, titulo: e.target.value }))}
        />
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="Ordem"
          type="number"
          min={1}
          value={form.ordem}
          onChange={(e) => onChangeForm((s) => ({ ...s, ordem: Number(e.target.value) }))}
        />
        <select
          className="border rounded-lg px-3 py-2"
          value={form.tipo_votacao}
          onChange={(e) => onChangeForm((s) => ({ ...s, tipo_votacao: e.target.value as any }))}
        >
          <option value="aberta">Votação Aberta</option>
          <option value="secreta">Votação Secreta</option>
        </select>
        <textarea
          className="md:col-span-3 border rounded-lg px-3 py-2"
          rows={3}
          placeholder="Descrição (opcional)"
          value={form.descricao}
          onChange={(e) => onChangeForm((s) => ({ ...s, descricao: e.target.value }))}
        />
        <textarea
          className="md:col-span-3 border rounded-lg px-3 py-2"
          rows={3}
          placeholder="Opções (1 por linha)"
          value={form.opcoes_text}
          onChange={(e) => onChangeForm((s) => ({ ...s, opcoes_text: e.target.value }))}
        />
        <button onClick={onAdd} className="md:col-span-1 px-4 py-2 bg-green-600 text-white rounded-lg font-bold">
          Adicionar Pauta
        </button>
      </div>
      <div className="mt-4 divide-y">
        {pautas.map((p) => (
          <div key={p.id} className="py-3 flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">
                {p.ordem}. {p.titulo}
              </div>
              <div className="text-xs text-gray-600">
                {p.tipo_votacao === 'aberta' ? 'Votação aberta' : 'Votação secreta'} • {p.opcoes.join(', ')}
              </div>
            </div>
            <div className="flex gap-2">
              {p.status === 'pendente' && (
                <button
                  onClick={() => onAbrir(p.id)}
                  className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-bold"
                  data-testid="btn-abrir-votacao"
                >
                  Abrir Votação
                </button>
              )}
              {p.status === 'em_votacao' && (
                <button
                  onClick={() => onEncerrar(p.id)}
                  className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm font-bold"
                  data-testid="btn-encerrar-votacao"
                >
                  Encerrar
                </button>
              )}
              <button
                onClick={() => onExcluir(p.id)}
                className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-sm font-bold"
                data-testid="btn-excluir-pauta"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
        {pautas.length === 0 && <div className="text-sm text-gray-500">Nenhuma pauta cadastrada.</div>}
      </div>
    </div>
  )
}
