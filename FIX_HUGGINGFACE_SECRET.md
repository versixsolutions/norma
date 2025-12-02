# FIX: Atualizar Secret HuggingFace no Supabase

## Problema

Edge Function `ask-ai` ainda usa token antigo `hf_wzBuJof...` (sem permissão) em vez do token público `hf_cuJMdp...`.

## Solução

### 1. Acessar Secrets no Supabase

```
https://supabase.com/dashboard/project/gjsnrrfuahfckvjlzwxw/settings/functions
```

### 2. Atualizar/Adicionar Secrets

Deletar (se existir):

- `HUGGINGFACE_TOKEN` (valor antigo `hf_wzBuJof...`)

Adicionar/Atualizar:

```
Adicionar/Atualizar (use o token real apenas nos Secrets, **nunca** em arquivos commitados no Git):
```

HUGGINGFACE_TOKEN=<HUGGINGFACE_TOKEN_AQUI>
HUGGINGFACE_ENDPOINT_URL=https://ebkpr4iqgne8jmkl.us-east-1.aws.endpoints.huggingface.cloud

````

**IMPORTANTE:** Não usar aspas nos valores dos secrets!

### 3. Redeploy Função (obrigatório após mudar secrets)

```powershell
npx supabase functions deploy ask-ai --project-ref gjsnrrfuahfckvjlzwxw
````

### 4. Validar

```powershell
$anon = "<SUPABASE_ANON_KEY_AQUI>"
$body = @{
  query = "horario silencio"
  userName = "Teste"
  filter_condominio_id = "5c624180-5fca-41fd-a5a0-a6e724f45d96"
} | ConvertTo-Json

Invoke-RestMethod -Method Post `
  -Uri 'https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/ask-ai' `
  -Headers @{
    Authorization = "Bearer $anon"
    apikey = $anon
    'Content-Type'='application/json'
  } `
  -Body $body | ConvertTo-Json -Depth 6
```

````

**Esperado:**

```json
{
  "answer": "O horário de silêncio é das 22h às 6h...",
  "search_type": "semantic", // ← Deve ser "semantic" agora!
  "sources": [
    {
      "title": "REGIMENTO INTERNO...",
      "relevance_score": 0.75,
      "excerpt": "Artigo 1º - Cumpre aos senhores..."
    }
  ]
}
````

---

## Checklist Pós-Fix

- [ ] Secret `HUGGINGFACE_TOKEN` atualizado para `hf_cuJMdp...`
- [ ] Secret `HUGGINGFACE_ENDPOINT_URL` sem aspas
- [ ] Função `ask-ai` re-deployada (v73+)
- [ ] Teste retorna `search_type: "semantic"`
- [ ] Teste retorna 1+ fontes no array `sources`

---

## Debug: Verificar Token Usado

Ver logs da função após deploy:

```
https://supabase.com/dashboard/project/gjsnrrfuahfckvjlzwxw/functions/ask-ai/logs
```

Procurar linha:

```
🔗 HuggingFace: Endpoint Dedicado
```

Se aparecer erro 403 nos logs, token ainda está incorreto.
