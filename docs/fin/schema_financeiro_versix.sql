-- ================================================================
-- VERSIX NORMA - MÓDULO FINANCEIRO
-- Schema SQL Completo
-- ================================================================
-- 
-- INSTRUÇÕES DE USO:
-- 1. Copie este arquivo para o Supabase SQL Editor
-- 2. Execute todo o script de uma vez
-- 3. Aguarde confirmação de sucesso
-- 4. Verifique as tabelas criadas no Table Editor
--
-- TEMPO ESTIMADO: 2-3 minutos
-- ================================================================

BEGIN;

-- ================================================================
-- 1. CATEGORIAS FINANCEIRAS (Plano de Contas)
-- ================================================================

CREATE TABLE IF NOT EXISTS public.financial_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(20) NOT NULL UNIQUE,
    name TEXT NOT NULL,
    type VARCHAR(10) NOT NULL CHECK (type IN ('RECEITA', 'DESPESA')),
    parent_code VARCHAR(20),
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_financial_categories_code ON public.financial_categories(code);
CREATE INDEX IF NOT EXISTS idx_financial_categories_type ON public.financial_categories(type);
CREATE INDEX IF NOT EXISTS idx_financial_categories_parent ON public.financial_categories(parent_code);

-- RLS
ALTER TABLE public.financial_categories ENABLE ROW LEVEL SECURITY;

-- Todos podem ler categorias (são públicas)
CREATE POLICY "Qualquer usuário pode ler categorias" ON public.financial_categories
    FOR SELECT USING (true);

-- Apenas gestores podem modificar
CREATE POLICY "Apenas gestores podem modificar categorias" ON public.financial_categories
    FOR ALL 
    USING (get_user_role() IN ('sindico', 'admin'))
    WITH CHECK (get_user_role() IN ('sindico', 'admin'));

-- ================================================================
-- 2. TRANSAÇÕES FINANCEIRAS
-- ================================================================

CREATE TABLE IF NOT EXISTS public.financial_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    condominio_id UUID NOT NULL REFERENCES public.condominios(id) ON DELETE CASCADE,
    category_code VARCHAR(20) NOT NULL REFERENCES public.financial_categories(code),
    
    -- Dados da transação
    description TEXT NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    reference_month DATE NOT NULL,
    payment_date DATE,
    
    -- Metadados
    document_url TEXT,
    document_type VARCHAR(50), -- 'nf', 'recibo', 'boleto', 'comprovante'
    notes TEXT,
    tags TEXT[],
    
    -- Aprovação
    created_by UUID REFERENCES public.users(id),
    approved_by UUID REFERENCES public.users(id),
    approved_at TIMESTAMPTZ,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'cancelled')),
    rejection_reason TEXT,
    
    -- Recorrência
    is_recurring BOOLEAN DEFAULT false,
    recurrence_frequency VARCHAR(20) CHECK (recurrence_frequency IN ('monthly', 'quarterly', 'yearly')),
    recurrence_end_date DATE,
    
    -- Auditoria
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    
    -- Constraints
    CONSTRAINT positive_receita CHECK (
        (amount > 0 AND LEFT(category_code, 1) = '1') OR 
        (amount < 0 AND LEFT(category_code, 1) = '2')
    )
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_financial_transactions_condominio ON public.financial_transactions(condominio_id);
CREATE INDEX IF NOT EXISTS idx_financial_transactions_month ON public.financial_transactions(reference_month);
CREATE INDEX IF NOT EXISTS idx_financial_transactions_category ON public.financial_transactions(category_code);
CREATE INDEX IF NOT EXISTS idx_financial_transactions_status ON public.financial_transactions(status);
CREATE INDEX IF NOT EXISTS idx_financial_transactions_created_by ON public.financial_transactions(created_by);
CREATE INDEX IF NOT EXISTS idx_financial_transactions_date_range ON public.financial_transactions(condominio_id, reference_month DESC);

-- RLS
ALTER TABLE public.financial_transactions ENABLE ROW LEVEL SECURITY;

-- Moradores do condomínio podem ver transações aprovadas
CREATE POLICY "Moradores podem ver transações aprovadas do seu condomínio" 
    ON public.financial_transactions
    FOR SELECT 
    USING (
        condominio_id = (SELECT condominio_id FROM public.users WHERE id = auth.uid())
        AND status = 'approved'
    );

-- Gestores podem ver todas as transações
CREATE POLICY "Gestores podem ver todas as transações" 
    ON public.financial_transactions
    FOR SELECT 
    USING (
        get_user_role() IN ('sindico', 'admin')
        AND condominio_id = (SELECT condominio_id FROM public.users WHERE id = auth.uid())
    );

-- Gestores podem inserir transações
CREATE POLICY "Gestores podem criar transações" 
    ON public.financial_transactions
    FOR INSERT 
    WITH CHECK (
        get_user_role() IN ('sindico', 'admin')
        AND condominio_id = (SELECT condominio_id FROM public.users WHERE id = auth.uid())
    );

-- Gestores podem atualizar transações
CREATE POLICY "Gestores podem atualizar transações" 
    ON public.financial_transactions
    FOR UPDATE 
    USING (
        get_user_role() IN ('sindico', 'admin')
        AND condominio_id = (SELECT condominio_id FROM public.users WHERE id = auth.uid())
    );

-- ================================================================
-- 3. ALERTAS FINANCEIROS
-- ================================================================

CREATE TABLE IF NOT EXISTS public.financial_alerts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    condominio_id UUID NOT NULL REFERENCES public.condominios(id) ON DELETE CASCADE,
    transaction_id UUID REFERENCES public.financial_transactions(id) ON DELETE CASCADE,
    
    alert_type VARCHAR(50) NOT NULL,
    severity VARCHAR(10) NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
    
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    suggested_action TEXT,
    
    is_resolved BOOLEAN DEFAULT false,
    resolved_by UUID REFERENCES public.users(id),
    resolved_at TIMESTAMPTZ,
    resolution_notes TEXT,
    
    created_at TIMESTAMPTZ DEFAULT now(),
    
    -- Metadata
    metadata JSONB DEFAULT '{}'
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_financial_alerts_condominio ON public.financial_alerts(condominio_id);
CREATE INDEX IF NOT EXISTS idx_financial_alerts_severity ON public.financial_alerts(severity, is_resolved);
CREATE INDEX IF NOT EXISTS idx_financial_alerts_type ON public.financial_alerts(alert_type);
CREATE INDEX IF NOT EXISTS idx_financial_alerts_unresolved ON public.financial_alerts(condominio_id, is_resolved) 
    WHERE is_resolved = false;

-- RLS
ALTER TABLE public.financial_alerts ENABLE ROW LEVEL SECURITY;

-- Todos do condomínio podem ver alertas
CREATE POLICY "Moradores podem ver alertas do seu condomínio" 
    ON public.financial_alerts
    FOR SELECT 
    USING (
        condominio_id = (SELECT condominio_id FROM public.users WHERE id = auth.uid())
    );

-- Gestores podem resolver alertas
CREATE POLICY "Gestores podem resolver alertas" 
    ON public.financial_alerts
    FOR UPDATE 
    USING (
        get_user_role() IN ('sindico', 'admin')
        AND condominio_id = (SELECT condominio_id FROM public.users WHERE id = auth.uid())
    );

-- ================================================================
-- 4. ORÇAMENTO/METAS
-- ================================================================

CREATE TABLE IF NOT EXISTS public.financial_budgets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    condominio_id UUID NOT NULL REFERENCES public.condominios(id) ON DELETE CASCADE,
    category_code VARCHAR(20) NOT NULL REFERENCES public.financial_categories(code),
    
    year INTEGER NOT NULL CHECK (year >= 2020 AND year <= 2100),
    month INTEGER CHECK (month >= 1 AND month <= 12),
    
    planned_amount DECIMAL(12,2) NOT NULL,
    actual_amount DECIMAL(12,2) DEFAULT 0,
    variance_pct DECIMAL(5,2) GENERATED ALWAYS AS (
        CASE 
            WHEN planned_amount <> 0 THEN ((actual_amount - planned_amount) / planned_amount) * 100
            ELSE 0
        END
    ) STORED,
    
    notes TEXT,
    approved_in_assembly BOOLEAN DEFAULT false,
    assembly_date DATE,
    
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    
    UNIQUE(condominio_id, category_code, year, month)
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_financial_budgets_condominio ON public.financial_budgets(condominio_id);
CREATE INDEX IF NOT EXISTS idx_financial_budgets_period ON public.financial_budgets(year, month);

-- RLS
ALTER TABLE public.financial_budgets ENABLE ROW LEVEL SECURITY;

-- Todos podem ver orçamento
CREATE POLICY "Moradores podem ver orçamento do seu condomínio" 
    ON public.financial_budgets
    FOR SELECT 
    USING (
        condominio_id = (SELECT condominio_id FROM public.users WHERE id = auth.uid())
    );

-- Gestores podem gerenciar orçamento
CREATE POLICY "Gestores podem gerenciar orçamento" 
    ON public.financial_budgets
    FOR ALL 
    USING (
        get_user_role() IN ('sindico', 'admin')
        AND condominio_id = (SELECT condominio_id FROM public.users WHERE id = auth.uid())
    );

-- ================================================================
-- 5. COMENTÁRIOS EM TRANSAÇÕES (Questionamentos)
-- ================================================================

CREATE TABLE IF NOT EXISTS public.financial_comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    transaction_id UUID NOT NULL REFERENCES public.financial_transactions(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.users(id),
    
    comment TEXT NOT NULL,
    is_question BOOLEAN DEFAULT false,
    
    parent_comment_id UUID REFERENCES public.financial_comments(id),
    
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_financial_comments_transaction ON public.financial_comments(transaction_id);
CREATE INDEX IF NOT EXISTS idx_financial_comments_user ON public.financial_comments(user_id);

-- RLS
ALTER TABLE public.financial_comments ENABLE ROW LEVEL SECURITY;

-- Todos do condomínio podem ver comentários
CREATE POLICY "Moradores podem ver comentários de transações do seu condomínio" 
    ON public.financial_comments
    FOR SELECT 
    USING (
        EXISTS (
            SELECT 1 FROM financial_transactions ft
            WHERE ft.id = transaction_id
            AND ft.condominio_id = (SELECT condominio_id FROM public.users WHERE id = auth.uid())
        )
    );

-- Qualquer morador pode comentar
CREATE POLICY "Moradores podem comentar" 
    ON public.financial_comments
    FOR INSERT 
    WITH CHECK (
        user_id = auth.uid()
        AND EXISTS (
            SELECT 1 FROM financial_transactions ft
            WHERE ft.id = transaction_id
            AND ft.condominio_id = (SELECT condominio_id FROM public.users WHERE id = auth.uid())
        )
    );

-- ================================================================
-- 6. VIEWS ÚTEIS
-- ================================================================

-- 6.1 Demonstrativo Mensal Agregado
CREATE OR REPLACE VIEW public.financial_monthly_statement AS
SELECT 
    ft.condominio_id,
    DATE_TRUNC('month', ft.reference_month) AS month,
    fc.type,
    fc.code,
    fc.name AS category_name,
    fc.parent_code,
    COUNT(ft.id) AS transaction_count,
    SUM(ft.amount) AS total_amount,
    ARRAY_AGG(ft.id ORDER BY ft.payment_date NULLS LAST) AS transaction_ids
FROM financial_transactions ft
JOIN financial_categories fc ON ft.category_code = fc.code
WHERE ft.status = 'approved'
GROUP BY ft.condominio_id, month, fc.type, fc.code, fc.name, fc.parent_code
ORDER BY month DESC, fc.code;

-- 6.2 Resumo Anual por Condomínio
CREATE OR REPLACE VIEW public.financial_annual_summary AS
SELECT 
    condominio_id,
    EXTRACT(YEAR FROM reference_month) AS year,
    SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END) AS total_receitas,
    SUM(CASE WHEN amount < 0 THEN ABS(amount) ELSE 0 END) AS total_despesas,
    SUM(amount) AS resultado,
    COUNT(DISTINCT id) AS total_transactions,
    COUNT(DISTINCT DATE_TRUNC('month', reference_month)) AS months_with_data
FROM financial_transactions
WHERE status = 'approved'
GROUP BY condominio_id, year
ORDER BY year DESC;

-- 6.3 Top 10 Despesas por Categoria
CREATE OR REPLACE VIEW public.financial_top_expenses AS
SELECT 
    ft.condominio_id,
    fc.name AS category_name,
    fc.code,
    SUM(ABS(ft.amount)) AS total_amount,
    COUNT(ft.id) AS transaction_count,
    AVG(ABS(ft.amount)) AS avg_amount
FROM financial_transactions ft
JOIN financial_categories fc ON ft.category_code = fc.code
WHERE ft.status = 'approved'
AND ft.amount < 0
AND ft.reference_month >= CURRENT_DATE - INTERVAL '12 months'
GROUP BY ft.condominio_id, fc.name, fc.code
ORDER BY total_amount DESC
LIMIT 10;

-- ================================================================
-- 7. TRIGGERS
-- ================================================================

-- 7.1 Atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_financial_transactions_updated_at 
    BEFORE UPDATE ON financial_transactions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_financial_categories_updated_at 
    BEFORE UPDATE ON financial_categories 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_financial_budgets_updated_at 
    BEFORE UPDATE ON financial_budgets 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- 7.2 Gerar alerta automático para transações acima de threshold
CREATE OR REPLACE FUNCTION generate_high_value_alert()
RETURNS TRIGGER AS $$
DECLARE
    threshold DECIMAL := 5000.00;
BEGIN
    IF ABS(NEW.amount) > threshold AND NEW.status = 'pending' THEN
        INSERT INTO financial_alerts (
            condominio_id,
            transaction_id,
            alert_type,
            severity,
            title,
            description,
            suggested_action
        ) VALUES (
            NEW.condominio_id,
            NEW.id,
            'high_value_transaction',
            'high',
            'Transação de alto valor detectada',
            format('Valor: R$ %s - %s', ABS(NEW.amount), NEW.description),
            'Verificar se esta transação foi aprovada em assembleia ou possui documentação adequada.'
        );
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_high_value_transaction
    AFTER INSERT ON financial_transactions
    FOR EACH ROW
    EXECUTE FUNCTION generate_high_value_alert();

-- ================================================================
-- 8. POPULAR PLANO DE CONTAS INICIAL
-- ================================================================

-- RECEITAS
INSERT INTO financial_categories (code, name, type, parent_code) VALUES
-- Nível 1
('1', 'RECEITAS', 'RECEITA', NULL),

-- Nível 2
('1.1', 'Receitas Operacionais', 'RECEITA', '1'),
('1.2', 'Receitas Financeiras', 'RECEITA', '1'),
('1.3', 'Transferências', 'RECEITA', '1'),
('1.4', 'Ressarcimentos', 'RECEITA', '1'),
('1.6', 'Outras Receitas', 'RECEITA', '1'),

-- Nível 3 - Receitas Operacionais
('1.1.01', 'Taxa de Condomínio', 'RECEITA', '1.1'),
('1.1.03', 'Taxa Extra', 'RECEITA', '1.1'),
('1.1.05', 'Taxa de Salão de Festas', 'RECEITA', '1.1'),
('1.1.109', 'Aluguel de Áreas de Lazer', 'RECEITA', '1.1'),
('1.1.144', 'Receita minimercado autônomo', 'RECEITA', '1.1'),
('1.1.152', 'Crédito para realização de eventos', 'RECEITA', '1.1'),
('1.1.83', 'Rep. Taxa Não Garantidas Comp.Ant', 'RECEITA', '1.1'),

-- Nível 3 - Receitas Financeiras
('1.2.02', 'Multas', 'RECEITA', '1.2'),
('1.2.03', 'Rendimentos', 'RECEITA', '1.2'),
('1.2.05', 'Empréstimos', 'RECEITA', '1.2'),
('1.2.06', 'Estornos', 'RECEITA', '1.2'),

-- Nível 3 - Transferências
('1.3.01', 'Transferências entre contas', 'RECEITA', '1.3'),
('1.3.03', 'Saldo Caixa', 'RECEITA', '1.3'),

-- Nível 3 - Ressarcimentos
('1.4.08', 'Reembolso', 'RECEITA', '1.4')

ON CONFLICT (code) DO NOTHING;

-- DESPESAS
INSERT INTO financial_categories (code, name, type, parent_code) VALUES
-- Nível 1
('2', 'DESPESAS', 'DESPESA', NULL),

-- Nível 2
('2.1', 'Despesa com Pessoal', 'DESPESA', '2'),
('2.2', 'Despesa com Impostos', 'DESPESA', '2'),
('2.3', 'Despesas Administrativas', 'DESPESA', '2'),
('2.4', 'Despesa com Aquisições', 'DESPESA', '2'),
('2.5', 'Despesa com Serviços', 'DESPESA', '2'),
('2.6', 'Despesas Com Manutenções', 'DESPESA', '2'),
('2.7', 'Despesas Financeiras', 'DESPESA', '2'),
('2.8', 'Transferências', 'DESPESA', '2'),

-- Nível 3 - Despesa com Pessoal (exemplos principais)
('2.1.13', 'Pró-Labore', 'DESPESA', '2.1'),
('2.1.20', 'Prest. Serv. de Zeladoria e Portaria', 'DESPESA', '2.1'),
('2.1.53', 'Serviços de Vigilância', 'DESPESA', '2.1'),
('2.1.54', 'Treinamentos', 'DESPESA', '2.1'),
('2.1.59', 'Portaria Eletrônica / Virtual', 'DESPESA', '2.1'),
('2.1.73', 'Serv. Zeladoria e Limpeza - Terceirização de MO', 'DESPESA', '2.1'),

-- Nível 3 - Despesa com Impostos
('2.2.01', 'INSS', 'DESPESA', '2.2'),
('2.2.15', 'Impostos, Taxas e Licenças', 'DESPESA', '2.2'),
('2.2.26', 'Retenção de PIS/COFINS/CSLL', 'DESPESA', '2.2'),
('2.2.29', 'Anotação Responsabilidade Técnica ART/RTT', 'DESPESA', '2.2'),

-- Nível 3 - Despesas Administrativas (exemplos principais)
('2.3.01', 'Energia Elétrica', 'DESPESA', '2.3'),
('2.3.02', 'Água e Esgoto', 'DESPESA', '2.3'),
('2.3.05', 'Taxa de administração', 'DESPESA', '2.3'),
('2.3.07', 'Seguro', 'DESPESA', '2.3'),
('2.3.10', 'Desp. c/ Cartório, Reg. e Autent.', 'DESPESA', '2.3'),
('2.3.108', 'Taxa da Garantidora', 'DESPESA', '2.3'),
('2.3.15', 'Garantia de Taxa Extra', 'DESPESA', '2.3'),
('2.3.22', 'Despesa c/ Confraternização', 'DESPESA', '2.3'),
('2.3.25', 'Empréstimos', 'DESPESA', '2.3'),
('2.3.35', 'Participação em Assembleia', 'DESPESA', '2.3'),

-- Nível 3 - Despesa com Aquisições (exemplos principais)
('2.4.01', 'Móveis e Utensílios', 'DESPESA', '2.4'),
('2.4.03', 'Máquinas e Equipamentos', 'DESPESA', '2.4'),
('2.4.04', 'Material de Limpeza e Conservação', 'DESPESA', '2.4'),
('2.4.05', 'Mat.de Escritório e Expediente', 'DESPESA', '2.4'),
('2.4.07', 'Mat.Elétricos e Acessórios', 'DESPESA', '2.4'),
('2.4.09', 'Mat. p/ Construção, Conserto e Reparo', 'DESPESA', '2.4'),
('2.4.21', 'Material para Piscina', 'DESPESA', '2.4'),
('2.4.75', 'Sistema de Energia Solar', 'DESPESA', '2.4'),

-- Nível 3 - Despesa com Serviços (exemplos principais)
('2.5.02', 'Honorários Advocatícios', 'DESPESA', '2.5'),
('2.5.21', 'Serviços Elétricos', 'DESPESA', '2.5'),
('2.5.23', 'Serviço de Pinturas', 'DESPESA', '2.5'),
('2.5.31', 'Desinsetização e/ou Desinfestação em Geral', 'DESPESA', '2.5'),
('2.5.35', 'Poda de Árvores, Plantas e Capina', 'DESPESA', '2.5'),

-- Nível 3 - Despesas Com Manutenções (exemplos principais)
('2.6.05', 'Manutenção de Máquinas e Equip.', 'DESPESA', '2.6'),
('2.6.08', 'Manutenção de Extintores ou Similares', 'DESPESA', '2.6'),
('2.6.09', 'Manut. Conserv. e Instalações', 'DESPESA', '2.6'),
('2.6.14', 'Manutenção de Equipamentos de Segurança', 'DESPESA', '2.6'),
('2.6.16', 'Manutenção do Portão', 'DESPESA', '2.6'),
('2.6.23', 'Manut. da Estação de Tratamento de Esgoto (ETE)', 'DESPESA', '2.6'),

-- Nível 3 - Despesas Financeiras
('2.7.01', 'Despesas Bancárias', 'DESPESA', '2.7'),
('2.7.04', 'Tarifas e Boletos', 'DESPESA', '2.7'),
('2.7.08', 'Estorno', 'DESPESA', '2.7'),
('2.7.10', 'IR s/ Poupança', 'DESPESA', '2.7'),

-- Nível 3 - Transferências
('2.8.01', 'Transferências entre contas', 'DESPESA', '2.8'),
('2.8.03', 'Saldo Caixa', 'DESPESA', '2.8')

ON CONFLICT (code) DO NOTHING;

-- ================================================================
-- 9. FUNÇÕES AUXILIARES
-- ================================================================

-- 9.1 Calcular saldo do condomínio
CREATE OR REPLACE FUNCTION calculate_condominium_balance(p_condominio_id UUID)
RETURNS DECIMAL AS $$
DECLARE
    total_balance DECIMAL;
BEGIN
    SELECT COALESCE(SUM(amount), 0)
    INTO total_balance
    FROM financial_transactions
    WHERE condominio_id = p_condominio_id
    AND status = 'approved';
    
    RETURN total_balance;
END;
$$ LANGUAGE plpgsql;

-- 9.2 Obter demonstrativo de um mês específico
CREATE OR REPLACE FUNCTION get_monthly_report(
    p_condominio_id UUID,
    p_year INTEGER,
    p_month INTEGER
)
RETURNS TABLE (
    category_code VARCHAR,
    category_name TEXT,
    type VARCHAR,
    total_amount DECIMAL,
    transaction_count BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        fc.code,
        fc.name,
        fc.type,
        COALESCE(SUM(ft.amount), 0) as total_amount,
        COUNT(ft.id) as transaction_count
    FROM financial_categories fc
    LEFT JOIN financial_transactions ft ON ft.category_code = fc.code
        AND ft.condominio_id = p_condominio_id
        AND ft.status = 'approved'
        AND EXTRACT(YEAR FROM ft.reference_month) = p_year
        AND EXTRACT(MONTH FROM ft.reference_month) = p_month
    WHERE fc.parent_code IS NOT NULL -- Apenas subcategorias
    GROUP BY fc.code, fc.name, fc.type
    ORDER BY fc.code;
END;
$$ LANGUAGE plpgsql;

-- ================================================================
-- COMMIT E FINALIZAÇÃO
-- ================================================================

COMMIT;

-- Mensagem de sucesso
DO $$
BEGIN
    RAISE NOTICE '✅ Schema do Módulo Financeiro criado com sucesso!';
    RAISE NOTICE '📊 Tabelas criadas: 6';
    RAISE NOTICE '📋 Categorias inseridas: ~60';
    RAISE NOTICE '🔍 Views criadas: 3';
    RAISE NOTICE '⚡ Triggers configurados: 4';
    RAISE NOTICE '';
    RAISE NOTICE '🚀 Próximos passos:';
    RAISE NOTICE '1. Verificar tabelas no Table Editor';
    RAISE NOTICE '2. Testar Edge Function de importação';
    RAISE NOTICE '3. Popular dados de teste do Pinheiro Park';
END $$;
