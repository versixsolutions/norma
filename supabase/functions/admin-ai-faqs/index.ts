// supabase/functions/admin-ai-faqs/index.ts
// Endpoint para Super Admin gerenciar ai_faqs (CRUD) via service_role

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://versixnorma.com.br",
  "https://www.versixnorma.com.br",
  "https://app.versixnorma.com.br",
  "http://localhost:5173",
  "http://localhost:3000",
];

function getCorsHeaders(origin?: string): Record<string, string> {
  const allowedOrigin =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Max-Age": "3600",
    "Content-Type": "application/json",
  };
}

serve(async (req) => {
  const origin = req.headers.get("origin") || undefined;
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Configuração do Supabase ausente");
    }

    // Usar service_role para bypass de RLS
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Validar se usuário é Super Admin (via JWT do header)
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Não autorizado" }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // Opcional: verificar se o token vindo é de Super Admin
    // (Depende de como você valida role no seu sistema)
    // Por segurança, você pode adicionar verificação adicional aqui

    const url = new URL(req.url);
    const method = req.method;
    const id = url.searchParams.get("id");

    // GET: listar todas ou uma específica
    if (method === "GET") {
      if (id) {
        const { data, error } = await supabase
          .from("ai_faqs")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        return new Response(JSON.stringify(data), { headers: corsHeaders });
      }

      const condominioId = url.searchParams.get("condominio_id");
      let query = supabase
        .from("ai_faqs")
        .select("*")
        .order("created_at", { ascending: false });

      if (condominioId) {
        query = query.eq("condominio_id", condominioId);
      }

      const { data, error } = await query;
      if (error) throw error;
      return new Response(JSON.stringify(data || []), { headers: corsHeaders });
    }

    // POST: criar nova AI FAQ
    if (method === "POST") {
      const body = await req.json();
      const {
        condominio_id,
        category,
        question,
        answer,
        article_reference,
        tags,
        keywords,
        scenario_type,
        tone,
        priority,
        requires_sindico_action,
        requires_assembly_decision,
        has_legal_implications,
        question_variations,
      } = body;

      // Validações
      if (!category || !question || !answer) {
        return new Response(
          JSON.stringify({
            error: "Campos obrigatórios: category, question, answer",
          }),
          { status: 400, headers: corsHeaders },
        );
      }

      const validScenarios = [
        "simple",
        "conflict",
        "emergency",
        "procedural",
        "educational",
      ];
      const validTones = ["formal", "friendly", "warning", "urgent"];

      if (scenario_type && !validScenarios.includes(scenario_type)) {
        return new Response(
          JSON.stringify({
            error: `scenario_type inválido. Permitidos: ${validScenarios.join(", ")}`,
          }),
          { status: 400, headers: corsHeaders },
        );
      }

      if (tone && !validTones.includes(tone)) {
        return new Response(
          JSON.stringify({
            error: `tone inválido. Permitidos: ${validTones.join(", ")}`,
          }),
          { status: 400, headers: corsHeaders },
        );
      }

      const { data, error } = await supabase
        .from("ai_faqs")
        .insert({
          condominio_id: condominio_id || null,
          category,
          question,
          answer,
          article_reference: article_reference || null,
          tags: tags || [],
          keywords: keywords || [],
          scenario_type: scenario_type || "simple",
          tone: tone || "friendly",
          priority: priority || 3,
          requires_sindico_action: requires_sindico_action || false,
          requires_assembly_decision: requires_assembly_decision || false,
          has_legal_implications: has_legal_implications || false,
          question_variations: question_variations || [],
        })
        .select()
        .single();

      if (error) throw error;

      return new Response(
        JSON.stringify({ message: "AI FAQ criada com sucesso", data }),
        { status: 201, headers: corsHeaders },
      );
    }

    // PUT: atualizar AI FAQ existente
    if (method === "PUT") {
      if (!id) {
        return new Response(
          JSON.stringify({ error: "ID obrigatório para atualização" }),
          { status: 400, headers: corsHeaders },
        );
      }

      const body = await req.json();
      const {
        condominio_id,
        category,
        question,
        answer,
        article_reference,
        tags,
        keywords,
        scenario_type,
        tone,
        priority,
        requires_sindico_action,
        requires_assembly_decision,
        has_legal_implications,
        question_variations,
      } = body;

      const validScenarios = [
        "simple",
        "conflict",
        "emergency",
        "procedural",
        "educational",
      ];
      const validTones = ["formal", "friendly", "warning", "urgent"];

      if (scenario_type && !validScenarios.includes(scenario_type)) {
        return new Response(
          JSON.stringify({
            error: `scenario_type inválido. Permitidos: ${validScenarios.join(", ")}`,
          }),
          { status: 400, headers: corsHeaders },
        );
      }

      if (tone && !validTones.includes(tone)) {
        return new Response(
          JSON.stringify({
            error: `tone inválido. Permitidos: ${validTones.join(", ")}`,
          }),
          { status: 400, headers: corsHeaders },
        );
      }

      const updateData: any = {};
      if (condominio_id !== undefined) updateData.condominio_id = condominio_id;
      if (category) updateData.category = category;
      if (question) updateData.question = question;
      if (answer) updateData.answer = answer;
      if (article_reference !== undefined)
        updateData.article_reference = article_reference;
      if (tags !== undefined) updateData.tags = tags;
      if (keywords !== undefined) updateData.keywords = keywords;
      if (scenario_type) updateData.scenario_type = scenario_type;
      if (tone) updateData.tone = tone;
      if (priority !== undefined) updateData.priority = priority;
      if (requires_sindico_action !== undefined)
        updateData.requires_sindico_action = requires_sindico_action;
      if (requires_assembly_decision !== undefined)
        updateData.requires_assembly_decision = requires_assembly_decision;
      if (has_legal_implications !== undefined)
        updateData.has_legal_implications = has_legal_implications;
      if (question_variations !== undefined)
        updateData.question_variations = question_variations;

      const { data, error } = await supabase
        .from("ai_faqs")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      return new Response(
        JSON.stringify({ message: "AI FAQ atualizada com sucesso", data }),
        { headers: corsHeaders },
      );
    }

    // DELETE: remover AI FAQ
    if (method === "DELETE") {
      if (!id) {
        return new Response(
          JSON.stringify({ error: "ID obrigatório para exclusão" }),
          { status: 400, headers: corsHeaders },
        );
      }

      const { error } = await supabase.from("ai_faqs").delete().eq("id", id);

      if (error) throw error;

      return new Response(
        JSON.stringify({ message: "AI FAQ excluída com sucesso" }),
        { headers: corsHeaders },
      );
    }

    return new Response(JSON.stringify({ error: "Método não suportado" }), {
      status: 405,
      headers: corsHeaders,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("❌ Erro:", errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
