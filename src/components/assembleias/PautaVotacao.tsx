import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import type { AssembleiaPauta } from '../../types'

interface PautaVotacaoProps {
  pauta: AssembleiaPauta
  onVotar: (pautaId: string, opcao: string) => void
  userId: string
}

export function PautaVotacao({ pauta, onVotar, userId }: PautaVotacaoProps) {
  const [jaVotou, setJaVotou] = useState(false)
  const [votando, setVotando] = useState(false)

  useEffect(() => {
    checkIfVoted()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pauta.id, userId])

  async function checkIfVoted() {
    if (!userId) return

    const { data } = await supabase
      .from('assembleias_votos')
      .select('id')
      .eq('pauta_id', pauta.id)
      .eq('user_id', userId)
      .single()

    setJaVotou(!!data)
  }

  async function handleVoto(opcao: string) {
    setVotando(true)
    await onVotar(pauta.id, opcao)
    setJaVotou(true)
    setVotando(false)
  }

  return (
    <div className="bg-white rounded-xl p-5 border border-purple-200">
      <h4 className="font-bold text-gray-900 mb-2">{pauta.titulo}</h4>
      <p className="text-sm text-gray-600 mb-4">{pauta.descricao}</p>

      {jaVotou ? (
        <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center font-bold">✅ Voto registrado com sucesso</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {pauta.opcoes.map((opcao) => (
            <button
              key={opcao}
              onClick={() => handleVoto(opcao)}
              disabled={votando}
              className="py-3 px-4 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-lg font-bold transition disabled:opacity-50"
            >
              {opcao}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
