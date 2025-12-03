# Admin AI FAQs - Endpoint de Gerenciamento

Edge Function para CRUD da base `ai_faqs` (exclusiva da IA Norma).

## Deploy

```powershell
npx supabase functions deploy admin-ai-faqs --project-ref gjsnrrfuahfckvjlzwxw --no-verify-jwt
```

## Endpoints

**Base URL:** `https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/admin-ai-faqs`

### GET - Listar todas as AI FAQs

```powershell
$anon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqc25ycmZ1YWhmY2t2amx6d3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1OTI1MzMsImV4cCI6MjA3OTE2ODUzM30.SExRQc8Y7BcXSC0ES-prp0ty3qI1c72idekf-AAYa2E"

Invoke-RestMethod -Method Get `
  -Uri "https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/admin-ai-faqs" `
  -Headers @{ Authorization = "Bearer $anon"; apikey = $anon } | ConvertTo-Json -Depth 6
```

Filtrar por condomínio:

```powershell
Invoke-RestMethod -Method Get `
  -Uri "https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/admin-ai-faqs?condominio_id=5c624180-5fca-41fd-a5a0-a6e724f45d96" `
  -Headers @{ Authorization = "Bearer $anon"; apikey = $anon } | ConvertTo-Json -Depth 6
```

### GET - Buscar uma AI FAQ específica

```powershell
Invoke-RestMethod -Method Get `
  -Uri "https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/admin-ai-faqs?id=<UUID>" `
  -Headers @{ Authorization = "Bearer $anon"; apikey = $anon } | ConvertTo-Json -Depth 6
```

### POST - Criar nova AI FAQ

```powershell
$body = @{
  condominio_id = "5c624180-5fca-41fd-a5a0-a6e724f45d96"
  category = "area_lazer_piscina"
  question = "Qual o horário de funcionamento da piscina?"
  answer = "A piscina está aberta das 8h às 22h, todos os dias. Crianças menores de 12 anos devem estar acompanhadas de um responsável."
  article_reference = "Artigo 15 do Regimento Interno"
  tags = @("piscina", "horário", "área de lazer")
  keywords = @("horário", "piscina", "funcionamento")
  scenario_type = "simple"
  tone = "friendly"
  priority = 3
  requires_sindico_action = $false
  requires_assembly_decision = $false
  has_legal_implications = $false
  question_variations = @(
    "Que horas abre a piscina?"
    "Horário da piscina"
    "Piscina funciona até que horas?"
  )
} | ConvertTo-Json

Invoke-RestMethod -Method Post `
  -Uri "https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/admin-ai-faqs" `
  -Headers @{ Authorization = "Bearer $anon"; apikey = $anon; "Content-Type"="application/json" } `
  -Body $body | ConvertTo-Json -Depth 6
```

### PUT - Atualizar AI FAQ

```powershell
$body = @{
  answer = "A piscina está aberta das 7h às 23h, todos os dias. Crianças menores de 12 anos devem estar acompanhadas de um responsável."
  priority = 4
} | ConvertTo-Json

Invoke-RestMethod -Method Put `
  -Uri "https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/admin-ai-faqs?id=<UUID>" `
  -Headers @{ Authorization = "Bearer $anon"; apikey = $anon; "Content-Type"="application/json" } `
  -Body $body | ConvertTo-Json -Depth 6
```

### DELETE - Excluir AI FAQ

```powershell
Invoke-RestMethod -Method Delete `
  -Uri "https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/admin-ai-faqs?id=<UUID>" `
  -Headers @{ Authorization = "Bearer $anon"; apikey = $anon } | ConvertTo-Json -Depth 6
```

## Validações

- **Campos obrigatórios (POST):** `category`, `question`, `answer`
- **scenario_type:** `simple`, `conflict`, `emergency`, `procedural`, `educational`
- **tone:** `formal`, `friendly`, `warning`, `urgent`
- **priority:** 1 a 5 (default: 3)

## Reindexação

Após criar/atualizar FAQs, reindexe no Qdrant:

```powershell
npm run reindex:ai-faqs
```

## Segurança

- Usa `service_role` para bypass de RLS
- Requer token de autenticação válido
- Validação adicional de Super Admin pode ser implementada conforme necessário
