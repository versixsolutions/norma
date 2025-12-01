import React from 'react'

interface Props {
  assembleiaId: string
  loadQRCode: () => void
  QRCodeComp: React.ComponentType<any> | null
}

export function QrPresencaSection({ assembleiaId, loadQRCode, QRCodeComp }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4" data-testid="qr-presenca-section">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-gray-900">QR de Presença</h3>
        <div className="text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-700 border">Somente durante a assembleia</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-1 flex items-center justify-center">
          <div className="p-3 bg-white border rounded-xl">
            {QRCodeComp ? (
              <QRCodeComp value={`${window.location.origin}/transparencia/assembleias/${assembleiaId}/presenca`} size={180} includeMargin={true} />
            ) : (
              <button
                onClick={loadQRCode}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700"
              >
                Carregar QR Code
              </button>
            )}
          </div>
        </div>
        <div className="md:col-span-2 space-y-2">
          <div className="text-sm text-gray-700 break-all">
            <span className="font-bold text-gray-900">Link:</span>{' '}
            {`${window.location.origin}/transparencia/assembleias/${assembleiaId}/presenca`}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigator.clipboard.writeText(`${window.location.origin}/transparencia/assembleias/${assembleiaId}/presenca`)}
              className="px-3 py-2 bg-gray-800 text-white rounded-lg text-sm font-bold"
            >
              Copiar Link
            </button>
            <a
              href={`/transparencia/assembleias/${assembleiaId}/presenca`}
              target="_blank"
              className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold"
            >
              Abrir em Nova Aba
            </a>
          </div>
          <p className="text-xs text-gray-500">Peça para os moradores escanearem o QR durante a assembleia para registrar presença automaticamente.</p>
        </div>
      </div>
    </div>
  )
}
