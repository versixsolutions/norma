-- Schema para base de FAQs exclusiva da IA (Norma)
-- Objetivo: separar manutenção do conteúdo do chatbot do módulo FAQ público

-- Tabela: ai_faqs
CREATE TABLE IF NOT EXISTS public.ai_faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  condominio_id UUID NULL,
  category TEXT NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  article_reference TEXT NULL,
  tags TEXT[] DEFAULT '{}',
  keywords TEXT[] DEFAULT '{}',
  scenario_type TEXT NOT NULL CHECK (scenario_type IN ('simple','conflict','emergency','procedural','educational')),
  tone TEXT NOT NULL CHECK (tone IN ('formal','friendly','warning','urgent')),
  priority INTEGER NOT NULL DEFAULT 3 CHECK (priority BETWEEN 1 AND 5),
  requires_sindico_action BOOLEAN DEFAULT FALSE,
  requires_assembly_decision BOOLEAN DEFAULT FALSE,
  has_legal_implications BOOLEAN DEFAULT FALSE,
  question_variations TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID NULL
);

-- Índices
CREATE INDEX IF NOT EXISTS ai_faqs_condominio_idx ON public.ai_faqs (condominio_id);
CREATE INDEX IF NOT EXISTS ai_faqs_category_idx ON public.ai_faqs (category);
CREATE INDEX IF NOT EXISTS ai_faqs_priority_idx ON public.ai_faqs (priority);

-- Trigger para updated_at
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_ai_faqs_touch_updated ON public.ai_faqs;
CREATE TRIGGER trg_ai_faqs_touch_updated
BEFORE UPDATE ON public.ai_faqs
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- RLS: habilitar e políticas
ALTER TABLE public.ai_faqs ENABLE ROW LEVEL SECURITY;

-- Leitura: permitir SELECT para usuários autenticados e também para anônimos (Edge Functions) 
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='ai_faqs' AND policyname='ai_faqs_select_public'
  ) THEN
    CREATE POLICY ai_faqs_select_public ON public.ai_faqs
      FOR SELECT
      TO public
      USING (true);
  END IF;
END$$;

-- Insert/Update/Delete: somente Service Role (Super Admin via backend)
-- Evita dependência da tabela public.profiles
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='ai_faqs' AND policyname='ai_faqs_insert_service'
  ) THEN
    CREATE POLICY ai_faqs_insert_service ON public.ai_faqs
      FOR INSERT
      TO service_role
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='ai_faqs' AND policyname='ai_faqs_update_service'
  ) THEN
    CREATE POLICY ai_faqs_update_service ON public.ai_faqs
      FOR UPDATE
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='ai_faqs' AND policyname='ai_faqs_delete_service'
  ) THEN
    CREATE POLICY ai_faqs_delete_service ON public.ai_faqs
      FOR DELETE
      TO service_role
      USING (true);
  END IF;
END$$;

-- Comentários
COMMENT ON TABLE public.ai_faqs IS 'Base de FAQs exclusiva da IA (Norma), editada pelo Super Admin. Não impacta a tabela faqs do módulo FAQ público.';
