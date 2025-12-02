import dotenv from "dotenv";

dotenv.config();

const HF_ENDPOINT_URL = process.env.HUGGINGFACE_ENDPOINT_URL;
const HF_TOKEN = process.env.HUGGINGFACE_TOKEN;
const testQuery = "Qual o horário de silêncio?";

console.log("🧪 Teste de Embedding da Query\n");
console.log(`Query: "${testQuery}"`);
console.log(`Endpoint: ${HF_ENDPOINT_URL || "API Pública (deprecated)"}`);
console.log(
  `Token: ${HF_TOKEN ? HF_TOKEN.substring(0, 10) + "..." : "AUSENTE"}\n`,
);

async function testEmbedding() {
  if (!HF_TOKEN) {
    console.error("❌ HUGGINGFACE_TOKEN não configurado");
    process.exit(1);
  }

  const apiUrl =
    HF_ENDPOINT_URL ||
    "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2";

  console.log(`📡 Chamando: ${apiUrl}`);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: testQuery.substring(0, 512),
        options: { wait_for_model: true, use_cache: false },
      }),
    });

    console.log(`Status: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`\n❌ Erro na API:\n${errorText}`);
      process.exit(1);
    }

    const result = await response.json();
    console.log("\n✅ Resposta recebida");

    // Extrair embedding
    let embedding: number[];

    if (Array.isArray(result) && Array.isArray(result[0])) {
      // Formato: [[embedding1], [embedding2], ...] (múltiplos tokens)
      const numTokens = result.length;
      const dims = result[0].length;
      embedding = new Array(dims).fill(0);

      for (const tokenEmb of result) {
        for (let i = 0; i < dims; i++) {
          embedding[i] += tokenEmb[i] / numTokens;
        }
      }
      console.log(
        `📊 Formato: Múltiplos tokens (${numTokens} tokens, ${dims}D)`,
      );
    } else if (Array.isArray(result)) {
      // Formato: [0.1, 0.2, ...] (embedding direto)
      embedding = result;
      console.log(`📊 Formato: Embedding direto (${embedding.length}D)`);
    } else {
      console.error("❌ Formato de resposta inesperado:", result);
      process.exit(1);
    }

    // Normalizar L2
    const magnitude =
      Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0)) || 1;
    const normalized = embedding.map((v) => v / magnitude);

    // Estatísticas
    const isZero = normalized.every((v) => v === 0);
    const min = Math.min(...normalized);
    const max = Math.max(...normalized);
    const avg = normalized.reduce((sum, v) => sum + v, 0) / normalized.length;

    console.log(`\n📈 Estatísticas do Embedding:`);
    console.log(`   Dimensões: ${normalized.length}`);
    console.log(
      `   Tipo: ${isZero ? "⚠️  VETOR ZERO (problema!)" : "✅ VETOR REAL"}`,
    );
    console.log(`   Min: ${min.toFixed(6)}`);
    console.log(`   Max: ${max.toFixed(6)}`);
    console.log(`   Média: ${avg.toFixed(6)}`);
    console.log(
      `   Magnitude (normalizado): ${Math.sqrt(normalized.reduce((s, v) => s + v * v, 0)).toFixed(6)}`,
    );

    console.log(`\n🔍 Primeiros 10 valores:`);
    console.log(
      `   ${normalized
        .slice(0, 10)
        .map((v) => v.toFixed(4))
        .join(", ")}`,
    );

    if (isZero) {
      console.error(`\n❌ PROBLEMA: Embedding retornou vetor zero!`);
      console.error(`   Possíveis causas:`);
      console.error(`   - Endpoint HuggingFace pausado (auto-scale em 0)`);
      console.error(`   - Token inválido ou expirado`);
      console.error(`   - URL do endpoint incorreta`);
      process.exit(1);
    } else {
      console.log(`\n✅ Embedding válido! A busca semântica deve funcionar.`);
    }
  } catch (error) {
    console.error(`\n❌ Erro na requisição:`, error);
    process.exit(1);
  }
}

testEmbedding();
