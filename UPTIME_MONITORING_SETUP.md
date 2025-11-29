# Uptime Monitoring Setup com Uptime Robot

## Status: ✅ PRONTO PARA CONFIGURAR

**Objetivo:** Monitorar disponibilidade de `https://app.versixnorma.com.br` com alertas de email/Slack

---

## Passo 1: Criar Conta no Uptime Robot (2 min)

1. Acesse: **https://uptimerobot.com**
2. Clique em **"Sign Up for Free"**
3. Preencha:
   - Email: seu-email@versix.com.br
   - Senha: crie uma segura
4. Confirme email (cheque inbox)
5. Faça login

**Plano:** Free (50 monitores, 5-min intervals) — perfeito para 1 URL!

---

## Passo 2: Criar Monitor (2 min)

1. No painel, clique **"+ Add Monitor"**
2. Preencha:
   - **Monitor Type:** HTTP(s)
   - **Friendly Name:** Versix Norma Production
   - **URL:** `https://app.versixnorma.com.br`
   - **Monitoring Interval:** 5 minutes
   - **Check from:** Default
3. Clique **"Create Monitor"**

✅ Monitor está ATIVO!

---

## Passo 3: Configurar Alertas (1 min)

### Via Email (recomendado):
1. Clique no monitor criado
2. Vá para **"Alert Contacts"**
3. Clique **"Add Alert Contact"**
4. Escolha **"Email"**
5. Preencha seu email
6. Clique **"Create Alert Contact"**
7. Volte ao monitor e associe o contato

### Via Slack (opcional - superior):
1. No **"Alert Contacts"**, escolha **"Slack"**
2. Clique **"Connect Slack"**
3. Autorize a app Uptime Robot no seu workspace
4. Escolha o canal (ex: #alertas ou #devops)
5. Confirme

---

## Passo 4: Ver Dashboard (real-time)

- **Status atual:** Verde (UP) ou Vermelho (DOWN)
- **Response time:** Gráfico de performance
- **Uptime %:** Percentual de disponibilidade (mensal/anual)
- **Histórico:** Últimas 60 dias

**Dashboard público (opcional):**
1. Vá para **"Settings"** do monitor
2. Ative **"Public Status Page"**
3. Compartilhe URL com stakeholders

---

## Métricas Que Você Verá

| Métrica | O Que É | Alvo |
|---------|---------|------|
| **Uptime %** | % do tempo que o site ficou online | 99.95%+ |
| **Response Time** | Tempo para responder (ms) | <500ms |
| **Checks Performed** | Quantas verificações foram feitas | Aumenta com tempo |
| **Downtime Events** | Quantas vezes ficou offline | 0 (ideal) |

---

## Alertas Automáticos

**Você receberá email/Slack quando:**
- ❌ Site ficar DOWN
- ✅ Site voltar UP
- ⚠️ Response time > threshold (configurável)

**Frequência:**
- Notificação DOWN: Imediatamente
- Notificação UP: Imediatamente
- Resumo diário: Opcional

---

## SLA Tracking (Relatórios)

1. Menu **"Reports"** (plano pago)
2. Ou use **"Statistics"** (grátis)
3. Veja uptime por período:
   - Hoje
   - Esta semana
   - Este mês
   - Ano inteiro

**Exemplo:**
```
Novembro 2025: 99.98% uptime
- Tempo total: 43.200 minutos
- Tempo de downtime: 0,86 minutos (1 incidente)
```

---

## Como Analisar Dados

### Se Downtime Ocorrer:
1. Acesse o monitor
2. Clique no evento de downtime
3. Veja:
   - Horário exato
   - Duração
   - Tentativas de reconexão
   - Response code (404, 500, etc)

### Correlacionar com Logs:
- Cheque logs do Vercel: https://vercel.com (Project → Deployments → Logs)
- Cheque logs do Sentry: https://sentry.io (se erro ocorreu)
- Cheque status do Supabase: https://status.supabase.com

---

## Comparar com Outras Soluções

| Ferramenta | Plano Free | Intervalo Min | Contatos | Setup |
|-----------|-----------|---------------|----------|-------|
| **Uptime Robot** | 50 monitores | 5 min | Email/Slack | ⭐⭐⭐ Fácil |
| Pingdom | 1 monitor | 1 min | Email | ⭐⭐ Médio |
| Better Stack | 5 monitores | 30 seg | Email/Slack/SMS | ⭐⭐ Médio |
| Datadog | Limitado | 1 min | Avançado | ⭐ Complexo |

**Recomendação:** Uptime Robot é melhor custo-benefício! ✅

---

## Links Úteis

- **Uptime Robot Dashboard:** https://uptimerobot.com/dashboard
- **Documentação:** https://uptimerobot.com/help/
- **Status Supabase:** https://status.supabase.com
- **Status Vercel:** https://vercel.com/status

---

## Próximos Passos (Opcional)

1. **Integrar com Slack** — Receba alertas direto no canal de devops
2. **Aumentar para plano pago** — Response time checks a cada 60 segundos
3. **Add mais monitores** — Monitorar endpoints da API separadamente
   - `https://app.versixnorma.com.br/api/health` (se existir)
4. **Configurar escalações** — Se offline por >30min, notificar gerente

---

## ✅ Checklist de Setup

- [ ] Conta criada no Uptime Robot
- [ ] Monitor adicionado (https://app.versixnorma.com.br)
- [ ] Alerta por email configurado
- [ ] (Opcional) Alerta por Slack configurado
- [ ] Dashboard acessível
- [ ] Recebeu primeira notificação de teste (se disponível)
- [ ] Documentar URL do status público (se ativado)

---

## Suporte

**Problema:** Monitor mostra DOWN mas site está UP
- ✅ Solução: Cheque se CSP headers estão bloqueando verificação
- ✅ Solução: Verifique CORS headers permitem origem Uptime Robot

**Problema:** Não recebendo alertas
- ✅ Cheque spam/junk email
- ✅ Confirme alert contact está associado ao monitor

**Contato Suporte:** support@uptimerobot.com

---

**Estimado de tempo:** 5 minutos ⏱️

**Resultado:** Monitoramento 24/7 de disponibilidade com alertas automáticos! 🚀

---

**Criado:** 2025-01-15
**Atualizado:** 2025-11-29
**Status:** Pronto para implementação ✅
