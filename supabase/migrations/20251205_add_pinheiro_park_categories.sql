alter table public.financial_categories
	add column if not exists condominio_id uuid;

-- Índice único opcional por código + condomínio (ajuste se já houver outra PK/constraint)
create unique index if not exists financial_categories_code_condominio_idx
	on public.financial_categories (code, condominio_id);

-- 1. RECEITAS (type = 'RECEITA')
INSERT INTO financial_categories (code, name, type, parent_code, condominio_id, is_active) VALUES
('1', 'Receitas', 'RECEITA', NULL, '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.1', 'Receitas Operacionais', 'RECEITA', '1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.1.01', 'Taxa de Condomínio', 'RECEITA', '1.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.1.03', 'Taxa Extra', 'RECEITA', '1.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.1.05', 'Taxa de Salão de Festas', 'RECEITA', '1.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.1.109', 'Aluguel de Áreas de Lazer', 'RECEITA', '1.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.1.144', 'Receita minimercado autônomo', 'RECEITA', '1.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.1.152', 'Crédito para realização de eventos', 'RECEITA', '1.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.1.83', 'Rep. Taxa Não Garantidas Comp Ant', 'RECEITA', '1.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

('1.2', 'Receitas Financeiras', 'RECEITA', '1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.2.02', 'Multas', 'RECEITA', '1.2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.2.03', 'Rendimentos', 'RECEITA', '1.2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.2.05', 'Empréstimos', 'RECEITA', '1.2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.2.06', 'Estornos', 'RECEITA', '1.2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

('1.3', 'Transferências', 'RECEITA', '1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.3.01', 'Transferências entre contas', 'RECEITA', '1.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.3.03', 'Saldo Caixa', 'RECEITA', '1.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

('1.4', 'Ressarcimentos', 'RECEITA', '1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('1.4.08', 'Reembolso', 'RECEITA', '1.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

('1.6', 'Outras Receitas', 'RECEITA', '1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true)
ON CONFLICT (code) DO UPDATE SET
	name = EXCLUDED.name,
	type = EXCLUDED.type,
	parent_code = EXCLUDED.parent_code,
	condominio_id = EXCLUDED.condominio_id,
	is_active = EXCLUDED.is_active;

-- 2. DESPESAS (type = 'DESPESA')
INSERT INTO financial_categories (code, name, type, parent_code, condominio_id, is_active) VALUES
('2', 'Despesas', 'DESPESA', NULL, '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

-- 2.1 - Despesa com Pessoal
('2.1', 'Despesa com Pessoal', 'DESPESA', '2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.1.13', 'Pró-Labore', 'DESPESA', '2.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.1.20', 'Serv. de Zeladoria e Portaria', 'DESPESA', '2.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.1.33', 'Serviços de Vigilância', 'DESPESA', '2.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.1.54', 'Treinamento', 'DESPESA', '2.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.1.59', 'Portaria Eletrônica / Virtual', 'DESPESA', '2.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.1.73', 'Serv. Zeladoria e Limpeza -Terceirização de MO', 'DESPESA', '2.1', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

-- 2.2 - Despesa com Impostos
('2.2', 'Despesa com Impostos', 'DESPESA', '2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.2.01', 'INSS', 'DESPESA', '2.2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.2.15', 'Impostos, Taxas e Licenças', 'DESPESA', '2.2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.2.26', 'Retenção de PIS.COFINS.CSLL', 'DESPESA', '2.2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.2.29', 'Anotação Responsabilidade Técnica ART/RTT', 'DESPESA', '2.2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

-- 2.3 - Despesas Administrativas
('2.3', 'Despesas Administrativas', 'DESPESA', '2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.01', 'Energia Elétrica', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.02', 'Água e Esgoto', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.05', 'Taxa de administração', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.07', 'Seguro', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.10', 'Desp. c/ Cartório, Reg. e Autent.', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.104', 'Recarga celular pré pago', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.105', 'Pagamento incorreto a reembolsar', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.108', 'Taxa de Juros', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.15', 'Garantia de Taxa Extra', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.22', 'Despesa c/ Confraternização', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.24', 'Antecipação', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.25', 'Empréstimos', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.35', 'Participação em Assembleia', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.45', 'Descontos', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.48', 'Reembolso', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.53', 'Confecção de Adesivos', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.62', 'Taxa Não Garantidas em Aberto', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.71', 'Confraternização Festa Junina', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.3.80', 'Palestrra c/ Sindico e identificação', 'DESPESA', '2.3', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

-- 2.4 - Despesa com Aquisições
('2.4', 'Despesa com Aquisições', 'DESPESA', '2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.01', 'Móveis e Utensílios', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.03', 'Máquinas e Equipamentos', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.04', 'Material de Limpeza e Conservação', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.05', 'Mat de Escritório e Expediente', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.07', 'Mat Elétricos e Acessórios', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.09', 'Mat. p/ Construção, Conserto e Reparo', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.13', 'Confecção de chaves', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.14', 'Material Esportivo', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.17', 'Material Para Sinalização', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.21', 'Material para EPI', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.28', 'Ferramentas', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.29', 'Tintas e Acessórios', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.33', 'Compra de persianas e cortinas portão', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.36', 'Confecção de Faixas e Placas', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.52', 'Aquisição de Piso de Grama', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.68', 'Compra de Material de Jardim', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.75', 'Compra de Persianas', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.4.80', 'Aquisição de Eletrodomésticos', 'DESPESA', '2.4', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

-- 2.5 - Despesa com Serviços
('2.5', 'Despesa com Serviços', 'DESPESA', '2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.02', 'Honorários Advocatícios', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.19', 'Manutenção do Playground e parquinho', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.102', 'Aplicação de grama sintética', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.121', 'Manutenção financeiro Mobills', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.20', 'Serviço de Mudanças', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.21', 'Serviços Elétricos', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.23', 'Serviço de Pintura', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.31', 'Desinsetização e ou Desinfestação em Geral', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.35', 'Poda de Árvores e Capina', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.36', 'Reformas de Móveis e Eletrodomésticos', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.62', 'Confecção de Segurança', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.5.68', 'Serviço de Segurança', 'DESPESA', '2.5', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

-- 2.6 - Despesas Com Manutenções
('2.6', 'Despesas Com Manutenções', 'DESPESA', '2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.6.05', 'Manutenção de Máquinas e Equip.', 'DESPESA', '2.6', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.6.08', 'Manutenção de Extintores ou similares', 'DESPESA', '2.6', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.6.09', 'Manutenção Corretiva e Instalações', 'DESPESA', '2.6', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.6.14', 'Manutenção de Equipamentos de Segurança', 'DESPESA', '2.6', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.6.16', 'Manutenção do Portão', 'DESPESA', '2.6', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.6.23', 'Manut da Estação de Tratamento de Esgoto (ETE)', 'DESPESA', '2.6', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

-- 2.7 - Despesas Financeiras
('2.7', 'Despesas Financeiras', 'DESPESA', '2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.7.01', 'Despesas Bancárias', 'DESPESA', '2.7', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.7.04', 'Tarifas e Boletos', 'DESPESA', '2.7', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.7.08', 'Empréstimo', 'DESPESA', '2.7', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.7.10', 'IR s/ Poupança', 'DESPESA', '2.7', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),

-- 2.8 - Transferências (não contabilizadas como despesa real)
('2.8', 'Transferências', 'DESPESA', '2', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.8.01', 'Transferências entre contas', 'DESPESA', '2.8', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true),
('2.8.03', 'Saldo Caixa', 'DESPESA', '2.8', '5c624180-5fca-41fd-a5a0-a6e724f45d96', true)
ON CONFLICT (code) DO UPDATE SET
	name = EXCLUDED.name,
	type = EXCLUDED.type,
	parent_code = EXCLUDED.parent_code,
	condominio_id = EXCLUDED.condominio_id,
	is_active = EXCLUDED.is_active;
