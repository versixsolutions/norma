📋 DEPLOYMENT MANUAL - ALTERNATIVA AO CLI

Se o comando `supabase functions deploy ask-ai` não funcionar, siga este guia manual:

================================================================================
PASSO 1: Copiar Código da Função
================================================================================

1. Abra o arquivo: supabase/functions/ask-ai/index.ts
2. Copie TODO o conteúdo (Ctrl+A, Ctrl+C)

================================================================================
PASSO 2: Fazer Deploy no Dashboard
================================================================================

1. Acesse: https://app.supabase.com/project/gjsnrrfuahfckvjlzwxw/functions
2. Clique no nome da função "ask-ai"
3. Na aba "Code", delete tudo e cole o código copiado
4. Clique em "Deploy" (botão azul)
5. Aguarde a mensagem "Function deployed successfully"

================================================================================
PASSO 3: Configurar Variáveis de Ambiente (CRITICAL!)
================================================================================

1. Na mesma página, clique em "Secrets" (aba ao lado de "Code")
2. Clique em "+ New secret"
3. Adicione cada uma dessas variáveis:

   Nome: GROQ_API_KEY
   Valor: [Cole a chave do .env]
   ✅ Clique "Save"

   Nome: QDRANT_URL
   Valor: [Cole a URL do .env]
   ✅ Clique "Save"

   Nome: QDRANT_API_KEY
   Valor: [Cole a chave do .env]
   ✅ Clique "Save"

   Nome: SUPABASE_URL
   Valor: [Cole a URL do .env]
   ✅ Clique "Save"

   Nome: SUPABASE_ANON_KEY
   Valor: [Cole a chave do .env]
   ✅ Clique "Save"

💡 Todas as chaves estão em: .env (arquivo local do projeto)

================================================================================
PASSO 4: Validar Deploy
================================================================================

1. Volte para a aba "Code"
2. Clique no botão azul "Invoke" (canto superior direito)
3. No painel que abrir, escolha o método POST
4. Cole este JSON no Request body:

{
  "query": "Qual é a taxa de condomínio?",
  "userName": "Test User",
  "filter_condominio_id": "[seu-condominio-id-aqui]"
}

5. Clique em "Send"
6. Se receber uma resposta com "answer": "...", está funcionando! ✅

================================================================================
PASSO 5: Próximos Passos
================================================================================

Após confirmar que o deploy funcionou:

1. ✅ Vá para SETUP_SUPABASE.md
2. ✅ Execute: create-health-rpc.sql (se ainda não fez)
3. ✅ Execute: create-rate-limiting-table.sql (se ainda não fez)
4. ✅ Teste o app com: npm run dev

================================================================================
TROUBLESHOOTING
================================================================================

❌ "Function not found" ou "404"
→ Verifique que a função está habilitada
→ Vá em Functions → ask-ai → clique em "Enable function"

❌ "Unauthorized" ou "401"
→ Você precisa estar logado para testar
→ Abra o app e faça login antes de testar a função

❌ "Configurações ausentes"
→ Verifique que TODAS as 5 variáveis estão em Secrets
→ Nenhuma pode estar vazia

❌ "QDRANT error" ou "Groq error"
→ Verifique as chaves de API (estão vencidas?)
→ Teste manualmente em https://console.groq.com e https://cloud.qdrant.io

================================================================================

Questões? Veja SETUP_SUPABASE.md para mais informações!

Data: 29 de Novembro de 2025
