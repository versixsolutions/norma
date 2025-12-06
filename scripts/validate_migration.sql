-- Validação da Migration de Categorias Financeiras
-- Data: 05/12/2025

-- 1. Verificar se coluna condominio_id existe
SELECT 
  column_name, 
  data_type, 
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'financial_categories' 
  AND column_name = 'condominio_id';

-- 2. Verificar índices da tabela financial_categories
SELECT 
  indexname,
  indexdef
FROM pg_indexes 
WHERE schemaname = 'public' 
  AND tablename = 'financial_categories'
ORDER BY indexname;

-- 3. Verificar se categorias foram inseridas com condominio_id
SELECT 
  code,
  name,
  type,
  condominio_id,
  is_active
FROM financial_categories
WHERE condominio_id = '5c624180-5fca-41fd-a5a0-a6e724f45d96'
ORDER BY code
LIMIT 20;

-- 4. Contar categorias por tipo
SELECT 
  type,
  COUNT(*) as total
FROM financial_categories
WHERE condominio_id = '5c624180-5fca-41fd-a5a0-a6e724f45d96'
GROUP BY type;

-- 5. Verificar se tabela financial_inadimplencia existe
SELECT 
  table_name,
  table_type
FROM information_schema.tables
WHERE table_schema = 'public' 
  AND table_name = 'financial_inadimplencia';

-- 6. Verificar estrutura da tabela financial_inadimplencia
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_schema = 'public' 
  AND table_name = 'financial_inadimplencia'
ORDER BY ordinal_position;

-- 7. Verificar índices da tabela financial_inadimplencia
SELECT 
  indexname,
  indexdef
FROM pg_indexes 
WHERE schemaname = 'public' 
  AND tablename = 'financial_inadimplencia'
ORDER BY indexname;

-- 8. Verificar constraints da tabela financial_inadimplencia
SELECT
  con.conname AS constraint_name,
  con.contype AS constraint_type,
  pg_get_constraintdef(con.oid) AS constraint_definition
FROM pg_constraint con
JOIN pg_class rel ON rel.oid = con.conrelid
JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace
WHERE nsp.nspname = 'public'
  AND rel.relname = 'financial_inadimplencia'
ORDER BY con.conname;
