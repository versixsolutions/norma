import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.5.0';
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};
// Singleton para o modelo de embedding
class EmbeddingPipeline {
  static task = 'feature-extraction';
  static model = 'Supabase/gte-small';
  static instance = null;
  static async getInstance() {
    if (this.instance === null) {
      this.instance = await pipeline(this.task, this.model);
    }
    return this.instance;
  }
}
serve(async (req)=>{
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: corsHeaders
    });
  }
  try {
    const { query, userName } = await req.json();
    // 1. Gerar Embedding (Gratuito)
    const generateEmbedding = await EmbeddingPipeline.getInstance();
    const output = await generateEmbedding(query, {
      pooling: 'mean',
      normalize: true
    });
    const embedding = Array.from(output.data);
    // 2. Conectar ao Supabase
    const supabase = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '');
    // 3. Buscar Contexto
    const { data: documents, error: matchError } = await supabase.rpc('match_documents', {
      query_embedding: embedding,
      match_threshold: 0.70,
      match_count: 3
    });
    if (matchError) throw matchError;
    let answer = '';
    if (!documents || documents.length === 0) {
      answer = `Olá ${userName}, pesquisei em nossa base de conhecimento mas não encontrei uma regra específica sobre isso. Recomendo verificar com a administração.`;
    } else {
      // 4. Montar Resposta
      const topDoc = documents[0];
      const source = topDoc.metadata?.source || 'Regimento Interno';
      const title = topDoc.metadata?.title || 'Norma';
      answer = `Olá ${userName}! Encontrei informações relevantes no **${title}**:\n\n"${topDoc.content}"\n\n📄 Fonte: ${source}`;
      if (documents.length > 1) {
        answer += `\n\nTambém pode ser útil:\n"${documents[1].content}"`;
      }
    }
    return new Response(JSON.stringify({
      answer
    }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: error.message
    }), {
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  }
});
