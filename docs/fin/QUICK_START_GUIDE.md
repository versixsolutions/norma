# 🚀 Quick Start: Módulo Financeiro Versix Norma

**Tempo estimado**: 4-6 horas de implementação inicial  
**Resultado**: Dashboard financeiro funcionando com dados reais do Pinheiro Park

---

## ✅ CHECKLIST PRÉ-REQUISITOS

Antes de começar, certifique-se que você tem:

- [ ] Acesso ao Supabase Dashboard do projeto Versix Norma
- [ ] Demonstrativo do Pinheiro Park em mãos (PDF/Excel)
- [ ] Ambiente de desenvolvimento rodando (React + Vite)
- [ ] Autenticação já implementada no app

---

## 📋 FASE 1: DATABASE SETUP (30 minutos)

### Passo 1.1: Criar Schema no Supabase

```bash
# 1. Abra o Supabase Dashboard
# 2. Navegue até: SQL Editor → New Query
# 3. Cole o conteúdo completo de: schema_financeiro_versix.sql
# 4. Execute o script (Run)
# 5. Aguarde mensagem de sucesso
```

**Verificação:**

```sql
-- Verifique se as tabelas foram criadas
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name LIKE 'financial%';

-- Deve retornar:
-- financial_categories
-- financial_transactions
-- financial_alerts
-- financial_budgets
-- financial_comments
```

### Passo 1.2: Verificar Plano de Contas

```sql
-- Deve retornar ~60 categorias
SELECT COUNT(*) FROM financial_categories;

-- Visualizar estrutura
SELECT code, name, type
FROM financial_categories
WHERE parent_code IS NULL
ORDER BY code;
```

---

## 🔧 FASE 2: EDGE FUNCTIONS (1 hora)

### Passo 2.1: Criar Edge Function de Importação

```bash
# No terminal do projeto
cd supabase/functions
mkdir import-financial-report
touch import-financial-report/index.ts
```

**Arquivo**: `supabase/functions/import-financial-report/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  const { condominio_id, transactions } = await req.json();

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  try {
    // Inserir transações em lote
    const { data, error } = await supabase
      .from("financial_transactions")
      .insert(transactions);

    if (error) throw error;

    return new Response(
      JSON.stringify({
        success: true,
        count: data.length,
      }),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
});
```

**Deploy:**

```bash
supabase functions deploy import-financial-report
```

### Passo 2.2: Criar Edge Function de Health Check

```bash
mkdir financial-health-check
touch financial-health-check/index.ts
```

**Arquivo**: `supabase/functions/financial-health-check/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  const { condominio_id } = await req.json();

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  // Buscar saldo atual
  const { data: condominioData } = await supabase
    .from("condominios")
    .select("saldo_atual")
    .eq("id", condominio_id)
    .single();

  // Buscar transações dos últimos 12 meses
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const { data: transactions } = await supabase
    .from("financial_transactions")
    .select("amount")
    .eq("condominio_id", condominio_id)
    .eq("status", "approved")
    .gte("reference_month", oneYearAgo.toISOString());

  // Calcular indicadores
  const receitas = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const despesas = Math.abs(
    transactions
      .filter((t) => t.amount < 0)
      .reduce((sum, t) => sum + t.amount, 0),
  );

  const resultado = receitas - despesas;
  const margemOperacional = (resultado / receitas) * 100;
  const despesaMediaMensal = despesas / 12;
  const indiceLiquidez = condominioData.saldo_atual / despesaMediaMensal;

  // Calcular health score
  let healthScore = 50;
  if (margemOperacional > 5) healthScore += 20;
  else if (margemOperacional < 0) healthScore -= 30;

  if (indiceLiquidez > 3) healthScore += 20;
  else if (indiceLiquidez < 1) healthScore -= 20;

  // Classificação
  let classification = "Saudável";
  let color = "#10B981";

  if (healthScore < 40) {
    classification = "Crítico";
    color = "#EF4444";
  } else if (healthScore < 60) {
    classification = "Atenção";
    color = "#F59E0B";
  } else if (healthScore >= 80) {
    classification = "Excelente";
    color = "#10B981";
  }

  return new Response(
    JSON.stringify({
      saldo_atual: condominioData.saldo_atual,
      total_receitas: receitas,
      total_despesas: despesas,
      resultado,
      health_score: healthScore,
      classification,
      color,
      margem_operacional: margemOperacional,
      indice_liquidez: indiceLiquidez,
    }),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
});
```

**Deploy:**

```bash
supabase functions deploy financial-health-check
```

---

## 📊 FASE 3: IMPORTAR DADOS PINHEIRO PARK (1 hora)

### Passo 3.1: Preparar Dados para Importação

Crie um script Node.js para transformar o demonstrativo em JSON:

**Arquivo**: `scripts/import-pinheiro-park.ts`

```typescript
import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// Exemplo de estrutura de dados do Pinheiro Park
const transactions = [
  // Janeiro
  {
    condominio_id: "PINHEIRO_PARK_ID", // Substituir pelo ID real
    category_code: "1.1.01",
    description: "Taxa de Condomínio - Janeiro/2025",
    amount: 29250.2,
    reference_month: "2025-01-01",
    payment_date: "2025-01-10",
    status: "approved",
    created_by: null, // Importação histórica
  },
  {
    condominio_id: "PINHEIRO_PARK_ID",
    category_code: "2.1.59",
    description: "Portaria Eletrônica / Virtual - Janeiro/2025",
    amount: -5721.0,
    reference_month: "2025-01-01",
    payment_date: "2025-01-15",
    status: "approved",
  },
  {
    condominio_id: "PINHEIRO_PARK_ID",
    category_code: "2.3.01",
    description: "Energia Elétrica - Março/2025",
    amount: -2841.07,
    reference_month: "2025-03-01",
    payment_date: "2025-03-10",
    status: "approved",
  },
  // ... adicionar todas as outras transações do demonstrativo
];

async function importData() {
  console.log("🚀 Iniciando importação de dados...");

  // Inserir em lotes de 100
  for (let i = 0; i < transactions.length; i += 100) {
    const batch = transactions.slice(i, i + 100);

    const { error } = await supabase
      .from("financial_transactions")
      .insert(batch);

    if (error) {
      console.error("❌ Erro no lote", i, error);
    } else {
      console.log(
        `✅ Importado lote ${i / 100 + 1} (${batch.length} transações)`,
      );
    }
  }

  console.log("✅ Importação concluída!");
}

importData();
```

**Executar:**

```bash
# Instalar dependências
npm install @supabase/supabase-js dotenv

# Configurar variáveis de ambiente
export SUPABASE_URL="https://seu-projeto.supabase.co"
export SUPABASE_SERVICE_ROLE_KEY="sua-service-role-key"

# Executar importação
npx tsx scripts/import-pinheiro-park.ts
```

### Passo 3.2: Transformar CSV/Excel em JSON

Se você tiver o demonstrativo em CSV ou Excel:

```typescript
import * as XLSX from "xlsx";

function parseExcelToTransactions(filePath: string) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet);

  const transactions = [];

  for (const row of data) {
    // Adaptar conforme estrutura do seu Excel
    if (row["Conta"] && row["Jan/25"]) {
      transactions.push({
        category_code: row["Conta"],
        description: row["Nome da Conta"] + " - Janeiro/2025",
        amount: parseFloat(row["Jan/25"]),
        reference_month: "2025-01-01",
        status: "approved",
      });
    }
  }

  return transactions;
}
```

---

## 🎨 FASE 4: FRONTEND (2 horas)

### Passo 4.1: Instalar Dependências

```bash
npm install recharts lucide-react
```

### Passo 4.2: Adicionar Componente ao App

```typescript
// src/App.tsx ou src/routes/index.tsx

import FinancialDashboard from '@/pages/Financial/Dashboard'

// Adicionar rota
{
  path: '/financeiro',
  element: <FinancialDashboard />,
  meta: { requiresAuth: true }
}
```

### Passo 4.3: Adicionar ao Menu de Navegação

```typescript
// src/components/Navigation.tsx

const menuItems = [
  // ... outros itens
  {
    label: "Financeiro",
    icon: DollarSign,
    path: "/financeiro",
    roles: ["morador", "sindico", "admin"],
  },
];
```

---

## ✅ FASE 5: TESTAR (30 minutos)

### Checklist de Testes

```bash
# 1. Verificar dados importados
SELECT COUNT(*) FROM financial_transactions
WHERE condominio_id = 'PINHEIRO_PARK_ID';
# Deve retornar ~200-300 transações

# 2. Verificar view de demonstrativo
SELECT * FROM financial_monthly_statement
WHERE condominio_id = 'PINHEIRO_PARK_ID'
LIMIT 10;

# 3. Testar health check
curl -X POST https://seu-projeto.supabase.co/functions/v1/financial-health-check \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"condominio_id": "PINHEIRO_PARK_ID"}'

# 4. Acessar dashboard
# Abrir http://localhost:5173/financeiro
```

### O que você deve ver:

✅ 4 cards de resumo com valores reais  
✅ Gráfico de evolução mensal (9 pontos de janeiro a setembro)  
✅ Score de saúde financeira calculado  
✅ Alertas gerados automaticamente (se houver)

---

## 🐛 TROUBLESHOOTING

### Problema: "relation 'financial_categories' does not exist"

**Solução:**

```sql
-- Verificar se o schema foi executado corretamente
SELECT * FROM pg_tables WHERE tablename LIKE 'financial%';

-- Se vazio, executar novamente o schema_financeiro_versix.sql
```

### Problema: "RLS policy violation"

**Solução:**

```sql
-- Desabilitar RLS temporariamente para debug
ALTER TABLE financial_transactions DISABLE ROW LEVEL SECURITY;

-- Verificar se consegue ler dados
SELECT * FROM financial_transactions LIMIT 5;

-- Se funcionar, revisar as policies de RLS
```

### Problema: "Edge function timeout"

**Solução:**

- Reduzir o tamanho do batch de importação (de 100 para 50)
- Adicionar logs intermediários para identificar onde trava
- Verificar se a service role key está correta

### Problema: Dashboard não carrega dados

**Solução:**

```typescript
// Adicionar logs no componente
console.log('Condominio ID:', condominio?.id)
console.log('Auth user:', user)

// Verificar se o usuário está associado ao condomínio correto
SELECT * FROM users WHERE id = 'USER_ID';
```

---

## 📈 PRÓXIMOS PASSOS

Depois de ter o básico funcionando:

1. **Adicionar CRUD de Transações**
   - Formulário para síndico adicionar receitas/despesas
   - Upload de comprovantes (Supabase Storage)

2. **Sistema de Comentários**
   - Permitir moradores questionarem transações
   - Notificações para o síndico

3. **Exportar Demonstrativo**
   - Gerar PDF do demonstrativo mensal
   - Enviar por email automaticamente

4. **Alertas Inteligentes**
   - Detectar padrões anômalos
   - Sugerir economias baseado em IA

5. **Orçamento vs Realizado**
   - Dashboard comparativo
   - Projeções para próximos meses

---

## 🎯 MÉTRICAS DE SUCESSO

Após implementação, você deve conseguir:

✅ Importar 300+ transações em menos de 2 minutos  
✅ Dashboard carrega em < 2 segundos  
✅ Score de saúde calculado automaticamente  
✅ Gráficos renderizam corretamente em mobile  
✅ Wellington (síndico) consegue navegar sem ajuda

---

## 💡 DICAS PRO

1. **Teste com dados reais ASAP**: Não perca tempo com mock data, use o demonstrativo do Pinheiro Park desde o início

2. **Itere rápido**: Não tente implementar tudo de uma vez, faça funcionar o básico primeiro

3. **Valide com o usuário**: Mostre para o Wellington a cada fase, não espere estar "perfeito"

4. **Performance**: Use indexes no PostgreSQL para queries frequentes

5. **Backup**: Antes de qualquer migration, faça backup do banco

---

## 📞 SUPORTE

Se travar em algum passo:

1. Revisar logs do Supabase (Dashboard → Logs)
2. Console do navegador (F12 → Console)
3. Documentação Supabase: docs.supabase.com
4. Documentação Recharts: recharts.org

---

**Boa implementação! 🚀**

_Tempo total estimado: 4-6 horas_  
_Complexidade: Média_  
_ROI: ALTO (transparência + confiança)_
