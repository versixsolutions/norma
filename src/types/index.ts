// src/types/index.ts

// ============================================
// TABELA: CONDOMINIOS
// ============================================
export interface Condominio {
  id: string
  name: string
  slug: string
  theme_config: any // JSONB no banco
}

// ============================================
// TABELA: USERS
// ============================================
export type UserRole = 'morador' | 'sindico' | 'admin' | 'pending'

export interface User {
  id: string // Referencia auth.users
  email: string
  full_name: string | null
  role: UserRole
  unit_number: string | null
  phone: string | null
  condominio_id: string | null
  created_at: string
  // Campos virtuais (joins que você pode fazer no frontend)
  condominio_name?: string 
}

// ============================================
// TABELA: COMUNICADOS & RELACIONADOS
// ============================================
export type ComunicadoType = 'geral' | 'financeiro' | 'urgente'

export interface Comunicado {
  id: string
  title: string
  content: string
  type: ComunicadoType
  priority: number
  published_at: string | null
  author_id: string | null
  // Campos virtuais
  attachments?: ComunicadoAttachment[]
  is_read?: boolean
}

export interface ComunicadoAttachment {
  id: string
  comunicado_id: string | null
  file_url: string
  file_name: string
}

export interface ComunicadoRead {
  id: string
  comunicado_id: string | null
  user_id: string | null
  read_at: string
}

// ============================================
// TABELA: DESPESAS
// ============================================
export interface Despesa {
  id: string
  description: string // No código anterior era 'title', no banco é 'description'
  amount: number
  due_date: string
  paid_at: string | null
  category: string | null // Texto livre no banco
  created_at: string
  author_id: string | null
}

// Para gráficos/dashboard (Calculados no front ou via RPC)
export interface DespesasStats {
  total: number
  count: number
  totalMes: number
}

// ============================================
// TABELA: OCORRENCIAS
// ============================================
export type OcorrenciaStatus = 'aberto' | 'em_andamento' | 'resolvido' | 'arquivado'

export interface Ocorrencia {
  id: string
  title: string
  description: string
  status: OcorrenciaStatus
  created_at: string
  resolved_at: string | null
  author_id: string | null // Quem abriu
  handler_id: string | null // Quem está resolvendo
}

export interface OcorrenciasStats {
  abertas: number
  em_andamento: number
  total: number
}

// ============================================
// TABELA: VOTACOES & VOTOS
// ============================================
export interface VotacaoOption {
  id: number // índice ou ID dentro do JSONB
  text: string
}

export interface Votacao {
  id: string
  title: string
  description: string
  options: VotacaoOption[] | any // JSONB no banco
  start_date: string | null
  end_date: string
  is_secret: boolean
  created_at: string
  author_id: string | null
  // Front-end status helper
  status?: 'ativa' | 'encerrada' | 'future'
}

export interface Voto {
  id: string
  votacao_id: string | null
  user_id: string | null
  option_id: number
  voted_at: string
}

// ============================================
// TABELA: FAQS
// ============================================
export interface FAQ {
  id: string
  question: string
  answer: string
  category: string | null
  created_at: string
  author_id: string | null
}