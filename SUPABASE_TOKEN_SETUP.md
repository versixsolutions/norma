🔑 COMO GERAR SUPABASE ACCESS TOKEN

Se receber o erro "Invalid access token format", siga estes passos:

================================================================================
PASSO 1: Acessar Supabase Dashboard
================================================================================

1. Vá para: https://app.supabase.com
2. Clique no seu ícone de perfil (canto superior direito)
3. Selecione "Settings" → "Access Tokens"

================================================================================
PASSO 2: Gerar Novo Token
================================================================================

1. Clique em "+ New token"
2. Nome: "CLI Token" (ou qualquer nome descritivo)
3. Escolha o escopo (recomendado: "Full access")
4. Clique em "Generate Token"

⚠️  IMPORTANTE: Copie o token IMEDIATAMENTE (ele não será mostrado novamente!)

================================================================================
PASSO 3: Usar o Token com CLI
================================================================================

Opção A: Variável de Ambiente
```powershell
$env:SUPABASE_ACCESS_TOKEN="sbp_..."  # Cole o token aqui
npx supabase functions deploy ask-ai
```

Opção B: Login Interativo
```powershell
npx supabase login
# Cola o token quando solicitado
```

Opção C: Arquivo de Configuração
```powershell
# Criar arquivo ~/.supabase/access-token
New-Item -Path $env:USERPROFILE -Name ".supabase" -ItemType Directory -Force
Add-Content -Path "$env:USERPROFILE\.supabase\access-token" -Value "sbp_..."
```

================================================================================
PASSO 4: Validar Token
================================================================================

Se o token foi aceito, você verá:
```
You are now logged in. Happy coding!
```

Agora pode fazer deploy:
```powershell
npx supabase functions deploy ask-ai
```

================================================================================
ALTERNATIVA: Usar Dashboard Diretamente
================================================================================

Se continuar com problemas, use o método manual (RECOMENDADO):

1. Vá para: https://app.supabase.com/project/gjsnrrfuahfckvjlzwxw/functions
2. Clique em "ask-ai"
3. Cola o código de: supabase/functions/ask-ai/index.ts
4. Clique "Deploy"
5. Configure as Secrets (veja DEPLOYMENT_MANUAL.md)

Este método é mais seguro e evita problemas com CLI!

================================================================================

Dúvidas? Veja DEPLOYMENT_MANUAL.md para o método alternativo.
