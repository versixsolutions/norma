# Script de teste end-to-end para AI FAQs
# 1. Criar FAQ via admin-ai-faqs
# 2. Reindexar no Qdrant
# 3. Testar consulta no chatbot

Write-Host "============================================================================" -ForegroundColor Cyan
Write-Host "🧪 TESTE END-TO-END: AI FAQS FLOW" -ForegroundColor Cyan
Write-Host "============================================================================`n" -ForegroundColor Cyan

$anon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqc25ycmZ1YWhmY2t2amx6d3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1OTI1MzMsImV4cCI6MjA3OTE2ODUzM30.SExRQc8Y7BcXSC0ES-prp0ty3qI1c72idekf-AAYa2E"
$condominioId = "5c624180-5fca-41fd-a5a0-a6e724f45d96"

# Passo 1: Criar AI FAQ de teste
Write-Host "📝 Passo 1: Criando AI FAQ de teste..." -ForegroundColor Yellow

$createBody = @{
  condominio_id = $condominioId
  category = "area_lazer_piscina"
  question = "Qual o horário de funcionamento da piscina?"
  answer = "A piscina está aberta das 8h às 22h, todos os dias da semana. Crianças menores de 12 anos devem estar acompanhadas de um responsável adulto. É obrigatório o uso de touca e chinelos."
  article_reference = "Artigo 15 do Regimento Interno"
  tags = @("piscina", "horário", "área de lazer")
  keywords = @("horário", "piscina", "funcionamento", "aberta")
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
    "Quando posso usar a piscina?"
  )
} | ConvertTo-Json

try {
  $createResult = Invoke-RestMethod -Method Post `
    -Uri "https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/admin-ai-faqs" `
    -Headers @{ 
      Authorization = "Bearer $anon"
      apikey = $anon
      "Content-Type" = "application/json"
    } `
    -Body $createBody

  Write-Host "   ✅ AI FAQ criada com sucesso!" -ForegroundColor Green
  Write-Host "   ID: $($createResult.data.id)" -ForegroundColor Gray
  Write-Host ""
  
  $faqId = $createResult.data.id
} catch {
  Write-Host "   ❌ Erro ao criar AI FAQ: $($_.Exception.Message)" -ForegroundColor Red
  Write-Host "   Verifique se o schema foi aplicado no Supabase SQL Editor" -ForegroundColor Yellow
  exit 1
}

# Passo 2: Listar AI FAQs
Write-Host "📋 Passo 2: Listando AI FAQs do condomínio..." -ForegroundColor Yellow

try {
  $listResult = Invoke-RestMethod -Method Get `
    -Uri "https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/admin-ai-faqs?condominio_id=$condominioId" `
    -Headers @{ 
      Authorization = "Bearer $anon"
      apikey = $anon
    }

  Write-Host "   ✅ Total de AI FAQs: $($listResult.Count)" -ForegroundColor Green
  Write-Host ""
} catch {
  Write-Host "   ⚠️  Erro ao listar: $($_.Exception.Message)" -ForegroundColor Yellow
}

# Passo 3: Reindexar no Qdrant
Write-Host "🔄 Passo 3: Reindexando AI FAQs no Qdrant..." -ForegroundColor Yellow
Write-Host "   (Isto pode demorar alguns minutos devido aos embeddings...)`n" -ForegroundColor Gray

try {
  npm run reindex:ai-faqs
  Write-Host "`n   ✅ Reindexação concluída!" -ForegroundColor Green
  Write-Host ""
} catch {
  Write-Host "   ⚠️  Erro na reindexação. Continue manualmente: npm run reindex:ai-faqs" -ForegroundColor Yellow
  Write-Host ""
}

# Passo 4: Testar consulta no chatbot
Write-Host "🤖 Passo 4: Testando consulta no chatbot..." -ForegroundColor Yellow

$queries = @(
  "Qual o horário da piscina?",
  "Que horas abre a piscina?",
  "Piscina funciona até que horas?"
)

foreach ($query in $queries) {
  Write-Host "`n   🔍 Pergunta: '$query'" -ForegroundColor Cyan
  
  $chatBody = @{
    query = $query
    userName = "Teste"
    filter_condominio_id = $condominioId
  } | ConvertTo-Json

  try {
    $chatResult = Invoke-RestMethod -Method Post `
      -Uri "https://gjsnrrfuahfckvjlzwxw.functions.supabase.co/ask-ai" `
      -Headers @{ 
        Authorization = "Bearer $anon"
        apikey = $anon
        "Content-Type" = "application/json"
      } `
      -Body $chatBody

    Write-Host "   📝 Resposta:" -ForegroundColor Green
    Write-Host "      $($chatResult.answer)" -ForegroundColor White
    
    if ($chatResult.sources -and $chatResult.sources.Count -gt 0) {
      Write-Host "`n   📚 Fontes:" -ForegroundColor Green
      foreach ($source in $chatResult.sources) {
        Write-Host "      - Tipo: $($source.type) | Ref: $($source.article_reference)" -ForegroundColor Gray
        Write-Host "        Score: $([math]::Round($source.relevance_score, 4))" -ForegroundColor Gray
      }
    }
    
    Write-Host "   ✅ Teste OK`n" -ForegroundColor Green
  } catch {
    Write-Host "   ❌ Erro: $($_.Exception.Message)" -ForegroundColor Red
  }
}

Write-Host "`n============================================================================" -ForegroundColor Cyan
Write-Host "✅ TESTE CONCLUÍDO" -ForegroundColor Cyan
Write-Host "============================================================================`n" -ForegroundColor Cyan

Write-Host "📊 Resumo:" -ForegroundColor Yellow
Write-Host "   - AI FAQ criada: ✅" -ForegroundColor Green
Write-Host "   - Reindexação Qdrant: Verifique logs acima" -ForegroundColor Gray
Write-Host "   - Chatbot respondendo: Verifique respostas acima" -ForegroundColor Gray
Write-Host "`n🔗 Próximos passos:" -ForegroundColor Yellow
Write-Host "   1. Adicione mais AI FAQs via endpoint admin-ai-faqs" -ForegroundColor White
Write-Host "   2. Reindexe após mudanças: npm run reindex:ai-faqs" -ForegroundColor White
Write-Host "   3. Monitore metricas no dashboard IAManagement`n" -ForegroundColor White
