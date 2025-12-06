-- Alterar tipo de inadimplência de percentual para valor monetário
alter table public.financial_inadimplencia
  alter column inadimplencia_mes type numeric(12,2),
  alter column inadimplencia_total type numeric(12,2);

-- Comentários explicativos
comment on column public.financial_inadimplencia.inadimplencia_mes is 'Valor em R$ da inadimplência do mês';
comment on column public.financial_inadimplencia.inadimplencia_total is 'Valor em R$ da inadimplência acumulada total';
