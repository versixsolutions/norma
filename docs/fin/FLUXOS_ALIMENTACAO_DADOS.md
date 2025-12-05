# 📊 Fluxos de Alimentação de Dados - Módulo Financeiro

**Versix Norma - Documentação Técnica**  
**Data**: Dezembro 2024  
**Versão**: 1.0

---

## 🎯 VISÃO GERAL

O módulo financeiro suporta **3 fluxos distintos** de alimentação de dados, cada um otimizado para uma fase específica do ciclo de vida do condomínio:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      FLUXOS DE ALIMENTAÇÃO                             │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  1️⃣  IMPORTAÇÃO INICIAL                                               │
│      Via Demonstrativo Completo (Jan-Set 2025)                        │
│      ➜ Dados históricos em lote                                       │
│      ➜ Comprovantes anexados DEPOIS                                   │
│                                                                        │
│  2️⃣  ANEXAR COMPROVANTES                                              │
│      Pós-importação (fase de conformidade GRC)                        │
│      ➜ Edição de transações existentes                                │
│      ➜ Upload de NF/recibos/boletos                                   │
│                                                                        │
│  3️⃣  GESTÃO MENSAL (Out/2025 em diante)                               │
│      Operação normal do sistema                                       │
│      ➜ Opção A: Input manual (conta por conta)                        │
│      ➜ Opção B: Importação via demonstrativo mensal                   │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 1️⃣ FLUXO 1: IMPORTAÇÃO INICIAL (Dados Históricos)

### **Objetivo**

Carregar todos os dados financeiros de **janeiro a setembro de 2025** de uma única vez, para que o sistema tenha histórico completo desde o início.

### **Quando Usar**

- ✅ Primeira vez ativando o módulo financeiro
- ✅ Condomínio já tem dados do sistema anterior (Classecon, Excel, etc)
- ✅ Precisa de histórico para análises e gráficos

### **Como Funciona**

#### Passo 1: Preparar Arquivo de Importação

**Formato aceito**: JSON, CSV ou Excel

**Estrutura do JSON:**

```json
{
  "condominio_id": "uuid-do-pinheiro-park",
  "transactions": [
    {
      "category_code": "1.1.01",
      "description": "Taxa de Condomínio - Janeiro/2025",
      "amount": 29250.2,
      "reference_month": "2025-01-01",
      "payment_date": "2025-01-10",
      "status": "approved",
      "notes": "Importado do Classecon"
    },
    {
      "category_code": "2.3.01",
      "description": "Energia Elétrica - Janeiro/2025",
      "amount": -2841.07,
      "reference_month": "2025-01-01",
      "payment_date": "2025-01-15",
      "status": "approved"
    }
    // ... mais transações
  ]
}
```

#### Passo 2: Executar Importação

**Via API (Edge Function):**

```bash
curl -X POST https://seu-projeto.supabase.co/functions/v1/import-financial-report \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d @pinheiro-park-import.json
```

**Via Interface (Admin):**

```
1. Acessar: /financeiro/admin/importar
2. Fazer upload do arquivo JSON/CSV/Excel
3. Revisar preview das transações
4. Confirmar importação
5. Aguardar processamento (1-2 minutos para 300 transações)
```

#### Passo 3: Validar Importação

```sql
-- Verificar total de transações importadas
SELECT COUNT(*)
FROM financial_transactions
WHERE condominio_id = 'PINHEIRO_PARK_ID';
-- Esperado: ~300 transações (9 meses × ~35 categorias)

-- Verificar saldo por mês
SELECT
  DATE_TRUNC('month', reference_month) AS mes,
  SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END) AS receitas,
  SUM(CASE WHEN amount < 0 THEN ABS(amount) ELSE 0 END) AS despesas,
  SUM(amount) AS resultado
FROM financial_transactions
WHERE condominio_id = 'PINHEIRO_PARK_ID'
GROUP BY mes
ORDER BY mes;
```

### **Características Importantes**

✅ **Comprovantes são opcionais** na importação inicial  
✅ **Status já vem como "approved"** (dados históricos)  
✅ **Campo `created_by` fica NULL** (importação automática)  
✅ **Campo `document_url` fica NULL** (será preenchido no Fluxo 2)

### **Script de Importação Pronto**

Ver arquivo: `scripts/import-pinheiro-park.ts`

---

## 2️⃣ FLUXO 2: ANEXAR COMPROVANTES (Conformidade GRC)

### **Objetivo**

Após a importação inicial, anexar **comprovantes** (NF, recibos, boletos) às transações já criadas, para atingir **100% de conformidade GRC**.

### **Quando Usar**

- ✅ Após concluir o Fluxo 1 (importação inicial)
- ✅ Sistema está operando mas faltam documentos
- ✅ Preparação para auditoria ou assembleia

### **Como Funciona**

#### Interface: Lista de Transações

**Componente**: `TransactionsList.tsx`

**Recursos:**

- ✅ Filtrar transações **sem comprovante**
- ✅ Ordenar por valor (priorizar maiores)
- ✅ Upload direto na lista (arrasta e solta)
- ✅ Indicador visual de conformidade

**Exemplo de uso:**

```tsx
// 1. Acessar lista de transações
<TransactionsList />

// 2. Filtrar transações sem documento
// Coluna "Sem Comprovante" mostra quantidade

// 3. Clicar em "Anexar" na transação desejada
// OU arrastar arquivo direto para a linha

// 4. Sistema faz upload automaticamente
// URL do documento é salvo na transação
```

#### Regras de Conformidade

**Obrigatório anexar comprovante quando:**

- Despesa > R$ 500,00
- Categoria: Aquisições (2.4.x)
- Categoria: Serviços (2.5.x)
- Marcado como "requer_comprovante" na categoria

**Opcional mas recomendado:**

- Todas as despesas administrativas
- Receitas de fontes externas (aluguel, eventos)

#### Validação Automática

O sistema gera **alertas** para transações sem comprovante:

```typescript
// Trigger automático ao inserir transação
if (transaction.amount < -500 && !transaction.document_url) {
  createAlert({
    type: "missing_document",
    severity: "high",
    title: "Comprovante pendente",
    description: `Transação de ${formatCurrency(transaction.amount)} sem comprovante`,
    suggested_action: "Anexar nota fiscal ou recibo",
  });
}
```

### **Dashboard de Conformidade**

**Indicadores visualizados:**

- % de transações com comprovante
- Valor total sem comprovante
- Prazo médio de anexação
- Categorias com menor conformidade

---

## 3️⃣ FLUXO 3: GESTÃO MENSAL (Operação Normal)

### **Objetivo**

A partir de **outubro/2025**, alimentar o sistema com dados **do mês corrente**, de forma contínua.

### **Quando Usar**

- ✅ Sistema já está operando (pós-importação inicial)
- ✅ Mês fechou e precisa registrar movimentações
- ✅ Operação do dia a dia do síndico

### **OPÇÃO A: Input Manual (Conta por Conta)**

#### **Quando Usar Opção A**

- Poucas transações no mês (< 20)
- Precisa de controle granular
- Quer anexar comprovante junto

#### **Como Funciona**

**Componente**: `TransactionForm.tsx`

**Passo a passo:**

```
1. Wellington acessa: /financeiro/transacoes
2. Clica em: "➕ Nova Transação"
3. Preenche formulário:
   ├─ Categoria: [dropdown com ~60 opções]
   ├─ Descrição: "Energia Elétrica - Outubro/2025"
   ├─ Valor: R$ 2.850,00
   ├─ Mês Referência: 2025-10-01
   ├─ Data Pagamento: 2025-10-10
   ├─ Observações: (opcional)
   └─ Comprovante: [upload de PDF/JPG]
4. Clica em: "Adicionar Transação"
5. Sistema valida e salva
6. Dashboard atualiza automaticamente
```

**Validações automáticas:**

- ✅ Categoria obrigatória
- ✅ Descrição obrigatória
- ✅ Valor > 0
- ✅ Mês de referência obrigatório
- ✅ Comprovante obrigatório se > R$ 500

**Exemplo de código:**

```typescript
// Uso do componente
<TransactionForm
  open={formOpen}
  onClose={() => setFormOpen(false)}
  onSuccess={() => {
    loadTransactions()
    showToast('Transação adicionada com sucesso!')
  }}
/>
```

#### **Vantagens da Opção A**

✅ Controle total sobre cada transação  
✅ Comprovante anexado imediatamente  
✅ Validação em tempo real  
✅ Reduz erros de digitação (dropdowns)

#### **Desvantagens da Opção A**

❌ Trabalhoso se tiver muitas transações (> 50/mês)  
❌ Wellington precisa digitar uma por uma

---

### **OPÇÃO B: Importação via Demonstrativo Mensal**

#### **Quando Usar Opção B**

- Muitas transações no mês (> 20)
- Já tem demonstrativo gerado por outro sistema
- Quer economizar tempo do síndico

#### **Como Funciona**

**Mesma Edge Function do Fluxo 1**, mas com **1 mês** de dados:

```json
{
  "condominio_id": "uuid-do-pinheiro-park",
  "transactions": [
    {
      "category_code": "1.1.01",
      "description": "Taxa de Condomínio - Outubro/2025",
      "amount": 40115.28,
      "reference_month": "2025-10-01",
      "status": "approved"
    }
    // ... demais categorias de outubro
  ]
}
```

**Passo a passo:**

```
1. Wellington gera demonstrativo mensal no Classecon (ou sistema atual)
2. Exporta para CSV/Excel
3. Converte para JSON usando script:
   → node scripts/convert-monthly-report.js outubro-2025.csv
4. Acessa: /financeiro/admin/importar-mensal
5. Faz upload do arquivo JSON
6. Sistema processa e cria transações
7. Wellington revisa e anexa comprovantes importantes
```

**Script de Conversão:**

```typescript
// scripts/convert-monthly-report.js

const fs = require("fs");
const csv = require("csv-parser");

const results = [];
const condominioId = process.env.CONDOMINIO_ID;

fs.createReadStream(process.argv[2])
  .pipe(csv())
  .on("data", (row) => {
    // Adaptar conforme formato do CSV
    if (row.Conta && row["Out/25"]) {
      results.push({
        category_code: row.Conta,
        description: row["Nome da Conta"] + " - Outubro/2025",
        amount: parseFloat(row["Out/25"].replace(",", ".")),
        reference_month: "2025-10-01",
        status: "approved",
      });
    }
  })
  .on("end", () => {
    const output = {
      condominio_id: condominioId,
      transactions: results,
    };

    fs.writeFileSync("output.json", JSON.stringify(output, null, 2));
    console.log("✅ Conversão concluída! Arquivo: output.json");
  });
```

#### **Vantagens da Opção B**

✅ Rápido (300 transações em 2 minutos)  
✅ Aproveita trabalho já feito em outro sistema  
✅ Reduz chance de erro manual

#### **Desvantagens da Opção B**

❌ Requer conversão de formato  
❌ Comprovantes precisam ser anexados depois  
❌ Menos controle granular

---

## 🔄 FLUXO HÍBRIDO (Recomendado)

Na prática, a **melhor abordagem** é combinar as duas opções:

### **Mês Típico de Wellington:**

```
DIA 1-5: Recebe demonstrativo do Classecon
├─ Importa via Opção B (lote)
├─ 30 categorias importadas em 2 minutos
└─ Economiza 1-2 horas de digitação

DIA 6-15: Revisa transações importadas
├─ Anexa comprovantes das despesas > R$ 500
├─ Usa lista de transações (TransactionsList)
└─ Prioriza categorias de Aquisições e Serviços

DIA 16-30: Transações pontuais
├─ Despesa urgente que apareceu
├─ Usa Opção A (input manual)
├─ Já anexa comprovante junto
└─ Mantém controle em tempo real

FIM DO MÊS: Sistema 100% atualizado
├─ Dashboard reflete realidade
├─ Moradores têm transparência
└─ Pronto para assembleia
```

---

## 📊 COMPARAÇÃO DOS FLUXOS

| Critério              | Fluxo 1 (Inicial)   | Fluxo 2 (Comprovantes) | Fluxo 3A (Manual)  | Fluxo 3B (Mensal)  |
| --------------------- | ------------------- | ---------------------- | ------------------ | ------------------ |
| **Quando usar**       | Primeira vez        | Pós-importação         | Poucos lançamentos | Muitos lançamentos |
| **Velocidade**        | ⚡⚡⚡ Muito rápido | 🐢 Lento               | 🐢🐢 Muito lento   | ⚡⚡ Rápido        |
| **Precisão**          | ⭐⭐⭐ Alta         | ⭐⭐⭐ Alta            | ⭐⭐⭐ Muito alta  | ⭐⭐ Média         |
| **Esforço**           | Baixo (1x)          | Alto (N docs)          | Alto (N txs)       | Médio              |
| **Conformidade**      | 0% inicial          | 100% objetivo          | 100% imediato      | 0% → depois 100%   |
| **Requer script**     | ✅ Sim              | ❌ Não                 | ❌ Não             | ✅ Sim             |
| **Interface gráfica** | ⚠️ Admin            | ✅ Morador vê          | ✅ Síndico usa     | ⚠️ Admin           |

---

## 🎯 RECOMENDAÇÃO FINAL PARA PINHEIRO PARK

### **Cronograma Sugerido:**

```
SEMANA 1 (Implementação)
├─ Segunda: Criar schema no Supabase
├─ Terça: Deploy Edge Functions
├─ Quarta: Importar dados Jan-Set via Fluxo 1
└─ Quinta: Validar importação com Wellington

SEMANA 2-3 (Conformidade)
├─ Identificar 50 transações críticas (> R$ 500)
├─ Wellington anexa comprovantes via Fluxo 2
├─ Meta: 80% de conformidade em 2 semanas
└─ Priorizar categorias: 2.4.x, 2.5.x, 2.6.x

SEMANA 4+ (Operação Normal)
├─ Outubro/2025: Testar Fluxo 3A (manual) com 10 transações
├─ Novembro/2025: Testar Fluxo 3B (mensal) se funcionar bem
├─ Dezembro/2025: Definir processo padrão
└─ 2026: Sistema rodando 100% operacional
```

---

## 🛠️ ARQUIVOS NECESSÁRIOS

Para implementar todos os 3 fluxos, você precisa:

| Arquivo                             | Fluxo | Status      |
| ----------------------------------- | ----- | ----------- |
| `schema_financeiro_versix.sql`      | Todos | ✅ Pronto   |
| `import-financial-report/index.ts`  | 1, 3B | ✅ Pronto   |
| `TransactionsList.tsx`              | 2, 3A | ✅ Pronto   |
| `TransactionForm.tsx`               | 3A    | ✅ Pronto   |
| `scripts/import-pinheiro-park.ts`   | 1     | ⚠️ Template |
| `scripts/convert-monthly-report.js` | 3B    | ⚠️ Criar    |
| Interface admin de importação       | 1, 3B | ❌ Falta    |

**Próximos passos:**

1. Adaptar script de importação para dados reais do Pinheiro Park
2. Criar script de conversão mensal
3. (Opcional) Criar interface admin de importação

---

## 📞 SUPORTE

**Dúvidas sobre qual fluxo usar?**

- Primeira vez configurando? → **Fluxo 1**
- Sistema já tem dados? → **Fluxo 2**
- Operação mensal com < 20 transações? → **Fluxo 3A**
- Operação mensal com > 20 transações? → **Fluxo 3B**
- Não tem certeza? → **Use Fluxo Híbrido** (3B + 3A)

---

**Versix Norma | Gestão Financeira Inteligente**  
_3 fluxos, 1 objetivo: Transparência Total_
