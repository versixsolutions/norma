/**
 * Script de Re-indexação das FAQs de IA no Qdrant
 * Lê public.ai_faqs e popula a collection dedicada (faqs_ai_collection)
 */

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const QDRANT_URL = process.env.QDRANT_URL!;
const QDRANT_API_KEY = process.env.QDRANT_API_KEY!;
const AI_COLLECTION =
  process.env.QDRANT_AI_COLLECTION_NAME || "faqs_ai_collection";
const HF_ENDPOINT_URL = process.env.HUGGINGFACE_ENDPOINT_URL;
const HF_API_URL =
  HF_ENDPOINT_URL ||
  "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2";
const HF_TOKEN = process.env.HUGGINGFACE_TOKEN;
const CONDOMINIO_ID =
  process.env.FILTER_CONDOMINIO_ID || "5c624180-5fca-41fd-a5a0-a6e724f45d96";
const INDEX_ALL = process.env.INDEX_ALL_AI_FAQS === "true";

if (!HF_TOKEN) {
  console.error("❌ HUGGINGFACE_TOKEN não encontrado no .env");
  process.exit(1);
}
if (!QDRANT_URL || !QDRANT_API_KEY) {
  console.error("❌ QDRANT_URL ou QDRANT_API_KEY não configurados");
  process.exit(1);
}

console.log("🔗 Configurações:");
console.log(`   - Supabase: ${process.env.VITE_SUPABASE_URL}`);
console.log(`   - Qdrant: ${QDRANT_URL}`);
console.log(`   - Collection (AI): ${AI_COLLECTION}`);
console.log(
  `   - HuggingFace: ${HF_ENDPOINT_URL ? "Endpoint Dedicado ✅" : "API Pública ⚠️"}`,
);
console.log(
  `   - Filtro: ${INDEX_ALL ? "TODAS as FAQs AI" : `Condomínio ${CONDOMINIO_ID}`}\n`,
);

async function generateEmbedding(text: string, retries = 3): Promise<number[]> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const resp = await fetch(HF_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: text.substring(0, 512),
          options: { wait_for_model: true, use_cache: true },
        }),
      });

      if (resp.status === 503) {
        const delay = Math.min(
          1000 * Math.pow(2, attempt - 1) + Math.random() * 1000,
          10000,
        );
        console.warn(
          `   ⚠️  HF 503 (tentativa ${attempt}/${retries}), aguardando ${Math.round(delay)}ms...`,
        );
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }

      if (!resp.ok) {
        const errorText = await resp.text();
        console.error(`   ⚠️  Erro HuggingFace: ${errorText}`);
        return Array(384).fill(0);
      }

      const result = await resp.json();
      let embedding: number[];
      if (Array.isArray(result) && Array.isArray(result[0])) {
        const numTokens = result.length;
        const dims = result[0].length;
        embedding = new Array(dims).fill(0);
        for (const tokenEmb of result) {
          for (let i = 0; i < dims; i++)
            embedding[i] += tokenEmb[i] / numTokens;
        }
      } else if (Array.isArray(result)) {
        embedding = result;
      } else {
        console.error("   ⚠️  Formato inesperado de resposta HuggingFace");
        return Array(384).fill(0);
      }
      const mag = Math.sqrt(embedding.reduce((s, v) => s + v * v, 0)) || 1;
      return embedding.map((v) => v / mag);
    } catch (err) {
      console.error(`   ⚠️  Exceção na tentativa ${attempt}: ${err}`);
      if (attempt === retries) return Array(384).fill(0);
      const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  return Array(384).fill(0);
}

async function ensureCollection() {
  console.log("🔍 Verificando collection AI no Qdrant...");
  const checkResp = await fetch(`${QDRANT_URL}/collections/${AI_COLLECTION}`, {
    headers: { "api-key": QDRANT_API_KEY },
  });

  if (checkResp.ok) {
    console.log(`   ✅ Collection '${AI_COLLECTION}' já existe`);
    console.log("   🗑️  Limpando dados antigos...");
    const deleteBody = INDEX_ALL
      ? { filter: { must: [] } }
      : {
          filter: {
            must: [{ key: "condominio_id", match: { value: CONDOMINIO_ID } }],
          },
        };
    await fetch(`${QDRANT_URL}/collections/${AI_COLLECTION}/points/delete`, {
      method: "POST",
      headers: {
        "api-key": QDRANT_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteBody),
    });
    return;
  }

  console.log(`   📦 Criando collection '${AI_COLLECTION}'...`);
  const resp = await fetch(`${QDRANT_URL}/collections/${AI_COLLECTION}`, {
    method: "PUT",
    headers: { "api-key": QDRANT_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      vectors: { size: 384, distance: "Cosine" },
      optimizers_config: { default_segment_number: 2 },
      replication_factor: 1,
    }),
  });
  if (!resp.ok) throw new Error(await resp.text());
  console.log("   ✅ Collection criada\n");
}

async function fetchAIFAQs() {
  console.log("📥 Buscando AI FAQs do Supabase...");
  let query = supabase
    .from("ai_faqs")
    .select("*")
    .order("created_at", { ascending: true });
  if (!INDEX_ALL) query = query.eq("condominio_id", CONDOMINIO_ID);
  const { data, error } = await query;
  if (error) throw new Error(`Erro ao buscar AI FAQs: ${error.message}`);
  if (!data || data.length === 0) throw new Error("Nenhuma AI FAQ encontrada");
  console.log(`   ✅ ${data.length} AI FAQs encontradas\n`);
  return data;
}

async function indexAIFAQs(faqs: any[]) {
  console.log("🔄 Iniciando indexação (AI) no Qdrant...\n");
  const BATCH_SIZE = 10;
  let pointId = Date.now();
  let total = 0;

  for (let i = 0; i < faqs.length; i += BATCH_SIZE) {
    const batch = faqs.slice(i, i + BATCH_SIZE);
    const points: any[] = [];
    console.log(
      `📦 Lote ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(faqs.length / BATCH_SIZE)} (FAQs ${i + 1}-${Math.min(i + BATCH_SIZE, faqs.length)})`,
    );

    for (const faq of batch) {
      const text = `${faq.question} ${faq.answer}`;
      const embedding = await generateEmbedding(text);
      points.push({
        id: pointId++,
        vector: embedding,
        payload: {
          faq_id: faq.id,
          question: faq.question,
          answer: faq.answer,
          category: faq.category,
          tags: faq.tags || [],
          keywords: faq.keywords || [],
          article_reference: faq.article_reference || null,
          scenario_type: faq.scenario_type || "simple",
          tone: faq.tone || "friendly",
          priority: faq.priority || 3,
          requires_sindico_action: faq.requires_sindico_action || false,
          requires_assembly_decision: faq.requires_assembly_decision || false,
          has_legal_implications: faq.has_legal_implications || false,
          question_variations: faq.question_variations || [],
          condominio_id: faq.condominio_id,
          created_at: faq.created_at,
        },
      });
      await new Promise((r) => setTimeout(r, 100));
    }

    console.log(`   📤 Enviando ${points.length} pontos...`);
    const resp = await fetch(
      `${QDRANT_URL}/collections/${AI_COLLECTION}/points`,
      {
        method: "PUT",
        headers: {
          "api-key": QDRANT_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ points }),
      },
    );
    if (!resp.ok) {
      console.error(`   ❌ Erro ao indexar lote: ${await resp.text()}`);
      continue;
    }
    total += points.length;
    console.log(
      `   ✅ ${points.length} pontos indexados (Total: ${total}/${faqs.length})\n`,
    );
  }
  return total;
}

async function showStats() {
  console.log("📊 Estatísticas da Collection AI:");
  const infoResp = await fetch(`${QDRANT_URL}/collections/${AI_COLLECTION}`, {
    headers: { "api-key": QDRANT_API_KEY },
  });
  if (!infoResp.ok)
    return console.log("   ⚠️  Não foi possível obter estatísticas");
  const info = await infoResp.json();
  console.log(`   - Pontos indexados: ${info.result.points_count}`);
  console.log(
    `   - Vetores: ${info.result.vectors_count || info.result.points_count}`,
  );
  console.log(`   - Status: ${info.result.status}`);
  console.log(`   - Dimensão: ${info.result.config.params.vectors.size}D`);
  console.log(
    `   - Distância: ${info.result.config.params.vectors.distance}\n`,
  );
}

async function main() {
  console.log(
    "============================================================================",
  );
  console.log("🚀 RE-INDEXAÇÃO DE AI FAQs NO QDRANT");
  console.log(
    "============================================================================\n",
  );
  try {
    await ensureCollection();
    const faqs = await fetchAIFAQs();
    const total = await indexAIFAQs(faqs);
    await showStats();
    console.log(
      "============================================================================",
    );
    console.log("✅ RE-INDEXAÇÃO (AI) CONCLUÍDA COM SUCESSO!");
    console.log(
      "============================================================================",
    );
    console.log(`   📚 AI FAQs indexadas: ${total}`);
    console.log(`   🔍 Collection: ${AI_COLLECTION}`);
    console.log(
      "\n📝 Próximos passos:\n   1. Testar chatbot com AI DB\n   2. Validar relevância\n   3. Ajustar threshold\n",
    );
  } catch (err: any) {
    console.error("\n❌ ERRO FATAL:");
    console.error(`   ${err.message}\n`);
    process.exit(1);
  }
}

main();
