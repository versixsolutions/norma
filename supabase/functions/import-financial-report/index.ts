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
        count: data ? data.length : transactions.length, // data might be null if return value not requested
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
