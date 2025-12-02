# Deploy e Troubleshooting: Função ask-ai

## Deploy da Função

### Pré-requisitos

- Node.js 18+ instalado
- Supabase CLI: `npm install -g supabase`
- Login: `npx supabase login`

### Secrets Necessários no Supabase

Configure em **Project Settings > Edge Functions > Secrets**:

```bash
GROQ_API_KEY=gsk_xxxxx
QDRANT_URL=https://xxxxx.aws.cloud.qdrant.io
QDRANT_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx
QDRANT_COLLECTION_NAME=norma_knowledge_base
SUPABASE_URL=https://gjsnrrfuahfckvjlzwxw.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx
HUGGINGFACE_ENDPOINT_URL=https://xxxxx.us-east-1.aws.endpoints.huggingface.cloud
HUGGINGFACE_TOKEN=hf_xxxxx
```

### Comando de Deploy

```powershell
npx supabase functions deploy ask-ai --project-ref gjsnrrfuahfckvjlzwxw
```

### Verificar Deploy

```powershell
npx supabase functions list
```

Versão atual esperada: **v71+**

---

## Teste da Função

### PowerShell

```powershell
$anon = "SEU_SUPABASE_ANON_KEY"
$body = @{
  query = "Qual o horário de silêncio?"
  userName = "Teste"
  filter_condominio_id = "5c624180-5fca-41fd-a5a0-a6e724f45d96"
} | ConvertTo-Json

Invoke-RestMethod -Method Post `
  -Uri "https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/ask-ai" `
  -Headers @{
    Authorization = "Bearer $anon"
    apikey = $anon
    "Content-Type" = "application/json"
  } `
  -Body $body | ConvertTo-Json -Depth 6
```

### Resposta Esperada

```json
{
  "answer": "O horário de silêncio é das 22h às 6h, exceto...",
  "search_type": "semantic",
  "sources": [
    {
      "title": "REGIMENTO INTERNO...",
      "type": "document",
      "relevance_score": 0.78,
      "excerpt": "Artigo 1º - Cumpre aos senhores..."
    }
  ]
}
```

---

## Troubleshooting

### 1. Resposta Sem Fontes (`sources: []`)

**Sintomas:**

- `search_type: "keyword"`
- `sources` vazio
- Resposta genérica

**Causas Possíveis:**

1. **Coleção Qdrant vazia ou sem pontos para o `condominio_id`**

   ```powershell
   npm run diagnose:upload
   ```

   - Verificar: "Pontos indexados: 151+" (se 0, reindexar)

2. **Embeddings não gerados (HuggingFace endpoint inativo)**
   - Testar endpoint manualmente:

   ```powershell
   $headers = @{ Authorization = "Bearer hf_xxxxx"; "Content-Type" = "application/json" }
   $body = '{"inputs":"teste silêncio"}'
   Invoke-RestMethod -Method Post -Uri "https://xxxxx.endpoints.huggingface.cloud" -Headers $headers -Body $body
   ```

   - Esperado: Array de 384 floats (embedding)

3. **Score threshold muito alto (0.35)**
   - Ajuste atual: **0.25** (v71+)
   - Se ainda sem resultados, reduzir para **0.20**

4. **Filtro `condominio_id` incorreto**
   - Validar UUID no banco:
   ```sql
   SELECT id, nome FROM condominios LIMIT 5;
   ```

### 2. Erro 500

**Causas:**

- Tabela `ai_requests` ausente (rate limit)
  - Criar: executar `scripts/create-rate-limiting-table.sql` no SQL Editor
- Secrets ausentes no Supabase
- Endpoint HuggingFace expirado ou pausado

**Debug:**

```powershell
# Ver logs no dashboard
https://supabase.com/dashboard/project/gjsnrrfuahfckvjlzwxw/functions/ask-ai/logs
```

### 3. Search Type Sempre "keyword"

**Causa:** Embeddings retornando vetor zero (todos valores = 0)

**Solução:**

1. **CRÍTICO: Endpoint HuggingFace pausado (erro 503)**
   - Dashboard: https://ui.endpoints.huggingface.co
   - Auto-scale Min=0 desliga o endpoint quando inativo
   - Solução: Alterar Min para 1 (custo ~$0.06/h sempre ativo)
   - Ou: Aguardar cold start (pode levar 30-60s na primeira chamada)
2. Verificar `HUGGINGFACE_ENDPOINT_URL` sem aspas no secret
3. Validar token com permissão `inference.endpoints.infer.write`
   - Usar o mesmo token público (não criar token específico do endpoint)
4. Testar manualmente:

```powershell
npm run test:query
```

**Erro 403 (Forbidden):**

- Token sem permissão de escrita no endpoint
- Solução: Usar token público geral (`hf_cuJMdp...`), não token específico do endpoint

---

## Reindexação

### Quando Reindexar

- Coleção vazia (0 pontos)
- Documentos novos adicionados
- Troca de modelo de embeddings

### Comando

```powershell
npm run reindex:qdrant
```

**Tempo estimado:** ~30s para 35 chunks (1 documento)

### Validação Pós-Reindex

```powershell
npm run diagnose:upload
```

Esperado:

- ✅ Qdrant: 151+ pontos
- ✅ HuggingFace: Endpoint Dedicado ativo
- ✅ Condomínio: 1 documento encontrado

---

## Checklist de Deploy Completo

- [ ] Secrets configurados no Supabase
- [ ] Endpoint HuggingFace ativo (não pausado)
- [ ] Coleção Qdrant com pontos > 0
- [ ] Tabela `ai_requests` criada
- [ ] Função deployada (v71+)
- [ ] Teste retorna `sources` com pelo menos 1 item
- [ ] `.env` sanitizado (sem chaves reais commitadas)

---

## Parâmetros Ajustáveis

| Parâmetro         | Localização               | Valor Atual | Efeito                                    |
| ----------------- | ------------------------- | ----------- | ----------------------------------------- |
| `score_threshold` | `ask-ai/index.ts:139`     | 0.25        | Mínimo de similaridade (↓ aumenta recall) |
| `limit`           | `ask-ai/index.ts:138`     | 5           | Máximo de documentos retornados           |
| `chunk_size`      | `migrate-to-qdrant.ts:40` | 1000        | Tamanho de cada chunk de documento        |
| `max_tokens`      | `ask-ai/index.ts:267`     | 500         | Tamanho máximo da resposta Groq           |

---

## Histórico de Versões

- **v71** (01/12/2025): Threshold 0.25, normalização acentos keyword, search_type no response
- **v70** (01/12/2025): Fallback Groq, logging melhorado
- **v69** (01/12/2025): Suporte a endpoint HuggingFace dedicado
- **v68** (30/11/2025): Rate limiting (50 req/h)
