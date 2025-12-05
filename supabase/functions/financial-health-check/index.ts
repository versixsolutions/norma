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
  const margemOperacional = receitas > 0 ? (resultado / receitas) * 100 : 0;
  const despesaMediaMensal = despesas / 12;
  const indiceLiquidez =
    despesaMediaMensal > 0
      ? (condominioData?.saldo_atual || 0) / despesaMediaMensal
      : 0;

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
      saldo_atual: condominioData?.saldo_atual || 0,
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
