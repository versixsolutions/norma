import { useEffect, useState } from 'react'
import Tooltip from '../../components/ui/Tooltip'
import PageLayout from '../../components/PageLayout'
// QRCode será carregado dinamicamente quando necessário
import { useAssembleias } from '../../hooks/useAssembleias'
import { useAuth } from '../../contexts/AuthContext'
import type { Assembleia, AssembleiaPauta } from '../../types'
import LoadingSpinner from '../../components/LoadingSpinner'
import { NewAssembleiaForm } from '../../components/admin/assembleias/NewAssembleiaForm'
import { AssembleiasList } from '../../components/admin/assembleias/AssembleiasList'
import { useAssembleiasQuery } from '../../hooks/queries/assembleias'
import { EditAssembleiaForm } from '../../components/admin/assembleias/EditAssembleiaForm'
import { QrPresencaSection } from '../../components/admin/assembleias/QrPresencaSection'
import { PautasSection } from '../../components/admin/assembleias/PautasSection'

export default function AdminAssembleias() {
  const { canManage, profile } = useAuth()
  const {
    reload,
    createAssembleia,
    updateAssembleia,
    deleteAssembleia,
    setStatusAssembleia,
    loadPautas,
    addPauta,
    updatePauta,
    deletePauta,
    abrirVotacao,
    encerrarVotacao,
  } = useAssembleias()
  const { data: assembleias = [], isLoading: loading } = useAssembleiasQuery()

  const [selected, setSelected] = useState<Assembleia | null>(null)
  const [pautas, setPautas] = useState<AssembleiaPauta[]>([])
  const [QRCodeComp, setQRCodeComp] = useState<React.ComponentType<any> | null>(null)

  // Form state for new/edit assembleia
  const [newAss, setNewAss] = useState({
    titulo: '',
    data_hora: '',
    edital_topicos_text: '', // textarea with one topic per line
    edital_pdf_file: null as File | null,
  })

  const [editAss, setEditAss] = useState({
    titulo: '',
    data_hora: '',
    edital_topicos_text: '',
    ata_topicos_text: '',
    edital_pdf_file: null as File | null,
    ata_pdf_file: null as File | null,
  })

  // Pauta form
  const [pautaForm, setPautaForm] = useState({
    titulo: '',
    descricao: '',
    ordem: 1,
    tipo_votacao: 'aberta' as 'aberta' | 'secreta',
    opcoes_text: 'Sim\nNão',
  })

  useEffect(() => {
    if (selected) {
      loadPautas(selected.id).then(setPautas)
      setEditAss({
        titulo: selected.titulo,
        data_hora: selected.data_hora.substring(0,16),
        edital_topicos_text: (selected.edital_topicos || []).join('\n'),
        ata_topicos_text: (selected.ata_topicos || []).join('\n'),
        edital_pdf_file: null,
        ata_pdf_file: null,
      })
    } else {
      setPautas([])
    }
  }, [selected, loadPautas])

  if (!canManage) return <div className="p-6">Acesso restrito.</div>

  async function handleCreate() {
    const edital_topicos = newAss.edital_topicos_text
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean)

    const created = await createAssembleia({
      titulo: newAss.titulo,
      data_hora: newAss.data_hora,
      edital_topicos,
      edital_pdf_file: newAss.edital_pdf_file,
    })

    if (created) {
      setNewAss({ titulo: '', data_hora: '', edital_topicos_text: '', edital_pdf_file: null })
      setSelected(created)
      await reload()
    }
  }

  async function handleUpdate() {
    if (!selected) return

    const edital_topicos = editAss.edital_topicos_text.split('\n').map(s=>s.trim()).filter(Boolean)
    const ata_topicos = editAss.ata_topicos_text.split('\n').map(s=>s.trim()).filter(Boolean)

    await updateAssembleia(selected.id, {
      titulo: editAss.titulo,
      data_hora: editAss.data_hora,
      edital_topicos,
      ata_topicos,
      edital_pdf_file: editAss.edital_pdf_file,
      ata_pdf_file: editAss.ata_pdf_file,
    })

    await reload()
  }

  async function handleAddPauta() {
    if (!selected) return
    const opcoes = pautaForm.opcoes_text.split('\n').map(s=>s.trim()).filter(Boolean)
    const ok = await addPauta(selected.id, {
      assembleia_id: selected.id,
      titulo: pautaForm.titulo,
      descricao: pautaForm.descricao,
      ordem: pautaForm.ordem,
      tipo_votacao: pautaForm.tipo_votacao,
      opcoes,
    })
    if (ok) {
      setPautaForm({ titulo: '', descricao: '', ordem: 1, tipo_votacao: 'aberta', opcoes_text: 'Sim\nNão' })
      setPautas(await loadPautas(selected.id))
    }
  }

  return (
    <PageLayout title="Assembleias (Admin)" subtitle={profile?.condominio_id ? 'Gestão do condomínio' : ''} icon="🛠️">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coluna esquerda: lista e criação */}
        <div className="lg:col-span-1 space-y-6">
          <NewAssembleiaForm value={newAss} onChange={setNewAss} onCreate={handleCreate} />

          <AssembleiasList items={assembleias} loading={loading} selectedId={selected?.id ?? null} onSelect={setSelected} />
        </div>

        {/* Coluna direita: detalhes e gestão */}
        <div className="lg:col-span-2">
          {!selected && (
            <div className="h-full min-h-[480px] border-2 border-dashed rounded-xl flex items-center justify-center text-gray-500">Selecione uma assembleia à esquerda para gerenciar.</div>
          )}

          {selected && (
            <div className="space-y-6">
              <EditAssembleiaForm
                selected={selected}
                value={editAss}
                onChange={setEditAss}
                onUpdate={handleUpdate}
                onDelete={() => { if (confirm('Excluir assembleia?')) deleteAssembleia(selected.id).then(() => setSelected(null)) }}
                onStatus={(status) => setStatusAssembleia(selected.id, status)}
              />

              <QrPresencaSection
                assembleiaId={selected.id}
                loadQRCode={() => import('qrcode.react').then(mod => setQRCodeComp(() => mod.QRCodeCanvas))}
                QRCodeComp={QRCodeComp}
              />

              <PautasSection
                pautas={pautas}
                form={pautaForm}
                onChangeForm={setPautaForm}
                onAdd={handleAddPauta}
                onAbrir={(id) => abrirVotacao(id).then(() => loadPautas(selected.id).then(setPautas))}
                onEncerrar={(id) => encerrarVotacao(id).then(() => loadPautas(selected.id).then(setPautas))}
                onExcluir={(id) => { if (confirm('Excluir pauta?')) deletePauta(id).then(() => loadPautas(selected.id).then(setPautas)) }}
              />
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}
