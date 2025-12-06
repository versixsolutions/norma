-- Controle Orçamentário 2025 - Condomínio Pinheiro Park
-- Cria tabela de orçamento e visões de acompanhamento/alertas

-- 1) Tabela de orçamento por categoria
create table if not exists public.financial_budget (
    id uuid primary key default gen_random_uuid(),
    condominio_id uuid not null,
    category_code text not null,
    category_name text,
    year int not null,
    monthly_limit numeric(12,2),
    annual_limit numeric(12,2),
    notes text,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now(),
    constraint financial_budget_uniq unique (condominio_id, category_code, year)
);

-- Índices auxiliares
create index if not exists financial_budget_condo_year_idx
    on public.financial_budget (condominio_id, year);
create index if not exists financial_budget_category_idx
    on public.financial_budget (category_code);

-- 2) View de execução vs. orçamento (mensal e anual)
create or replace view public.v_budget_vs_spent as
with tx as (
    select
        condominio_id,
        category_code,
        to_char(coalesce(reference_month, payment_date, created_at), 'YYYY-MM') as month_ref,
        split_part(to_char(coalesce(reference_month, payment_date, created_at), 'YYYY-MM'), '-', 1)::int as year_ref,
        sum(case when amount < 0 then abs(amount) else 0 end) as spent_month
    from public.financial_transactions
    where status = 'approved'
    group by condominio_id, category_code, month_ref
), tx_year as (
    select
        condominio_id,
        category_code,
        year_ref,
        sum(spent_month) as spent_year
    from tx
    group by condominio_id, category_code, year_ref
)
select
    b.condominio_id,
    b.category_code,
    coalesce(b.category_name, fc.name) as category_name,
    b.year,
    b.monthly_limit,
    b.annual_limit,
    t.month_ref,
    coalesce(t.spent_month, 0) as spent_month,
    coalesce(y.spent_year, 0) as spent_year,
    case when b.monthly_limit is null or b.monthly_limit = 0 then null else coalesce(t.spent_month, 0) / b.monthly_limit end as monthly_ratio,
    case when b.annual_limit is null or b.annual_limit = 0 then null else coalesce(y.spent_year, 0) / b.annual_limit end as annual_ratio
from public.financial_budget b
left join tx t
    on t.condominio_id = b.condominio_id
    and t.category_code = b.category_code
    and t.year_ref = b.year
left join tx_year y
    on y.condominio_id = b.condominio_id
    and y.category_code = b.category_code
    and y.year_ref = b.year
left join public.financial_categories fc
    on fc.code = b.category_code;

-- 3) View de alertas (acima do previsto)
create or replace view public.v_budget_alerts as
select
    condominio_id,
    category_code,
    category_name,
    year,
    month_ref,
    monthly_limit,
    annual_limit,
    spent_month,
    spent_year,
    monthly_ratio,
    annual_ratio,
    case
        when (monthly_limit is not null and monthly_limit > 0 and monthly_ratio >= 1.0)
             or (annual_limit is not null and annual_limit > 0 and annual_ratio >= 1.0)
            then 'vermelho'
        when (monthly_limit is not null and monthly_limit > 0 and monthly_ratio >= 0.8)
             or (annual_limit is not null and annual_limit > 0 and annual_ratio >= 0.8)
            then 'amarelo'
        else 'verde'
    end as severity,
    case
        when monthly_limit is not null and monthly_limit > 0 and monthly_ratio >= 1.0 then true
        when annual_limit is not null and annual_limit > 0 and annual_ratio >= 1.0 then true
        else false
    end as is_over_budget
from public.v_budget_vs_spent;
