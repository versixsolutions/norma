import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config();

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ SUPABASE_URL ou SERVICE_ROLE não configurados");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Em ambiente ESM, precisamos simular __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Mapeamento manual da planilha -> categorias do app
 * Preencha/ajuste os códigos conforme as categorias já cadastradas.
 */
const CATEGORY_MAP: Record<string, string> = {
  "1.1 - Contrato Terceirizada": "2.1.20", // Serv. Zeladoria e Portaria
  "1.2 - Certificado Digital": "2.3.10", // Desp. c/ Cartório, Reg. e Autent.
  "3.1 - Luz / Força (Área Comum)": "2.3.01", // Energia Elétrica
  "3.2 - Água / Esgoto": "2.3.02", // Água e Esgoto
  "4.1 - Recarga de Extintores": "2.6.08",
  "4.2 - Material de Limpeza": "2.4.04",
  "4.3 - Seguro do Predio": "2.3.07",
  "4.5 - Material de Limpeza - Piscina": "2.4.04",
  "4.6 - Manutenção do Portão": "2.6.16",
  "4.7 - Manutenção do Cerca Elétrica": "2.6.14",
  "4.8 - Manutenção ETE E ELEVATÓRIA": "2.6.23",
  "4.10 - Limpeza e roço áreas": "2.6.09",
  "4.11 - Sistema de Câmeras": "2.5.68",
  "4.12 - Dedetizações": "2.5.31",
  "5.1 - Taxa de compensação bancária": "2.7.04",
  "5.2 - Tarifa de Manutenção da Conta": "2.7.04",
  "5.3 - Sindico Pró-labore": "2.1.13",
  "5.4 - Taxa de Administração + Garantia": "2.3.05",
  "5.5 - Material Expediente": "2.4.05",
  "5.6 - Transmissão em Videoconferência": "2.3.07",
  "5.7 - Despesas Cartorárias": "2.3.10",
  "5.8 - Jurídico": "2.5.02",
  "5.9 - Presença representação adm/ju": "2.5.02",
  "7.2 - Fundo de Manutenção": "2.4.09",
  "7.3 - Fundo de Reserva": "2.8.03",
};

const CONDOMINIO_ID = "5c624180-5fca-41fd-a5a0-a6e724f45d96";
const YEAR = 2025;

function parseNumberBR(raw: string): number {
  if (!raw) return 0;
  return parseFloat(raw.replace(/\./g, "").replace(/,/, ".")) || 0;
}

interface BudgetRow {
  label: string;
  monthly: number;
  annual: number;
}

interface ConsolidatedBudget {
  category_code: string;
  labels: Set<string>;
  monthly: number;
  annual: number;
}

function parseCsv(filePath: string): BudgetRow[] {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split(/\r?\n/);
  const rows: BudgetRow[] = [];

  for (const line of lines) {
    const parts = line.split(";").map((p) => p.trim());
    // Espera 3 colunas: label; mensal; anual
    if (parts.length >= 3 && parts[1] && parts[2]) {
      const label = parts[0].replace(/\s+/g, " ").trim();
      const monthly = parseNumberBR(parts[1]);
      const annual = parseNumberBR(parts[2]);
      if (!Number.isNaN(monthly) || !Number.isNaN(annual)) {
        rows.push({ label, monthly, annual });
      }
    }
  }

  return rows;
}

async function upsertBudget(rows: BudgetRow[]) {
  const grouped: Record<string, ConsolidatedBudget> = {};

  for (const row of rows) {
    const category_code = CATEGORY_MAP[row.label];
    if (!category_code) continue;

    if (!grouped[category_code]) {
      grouped[category_code] = {
        category_code,
        labels: new Set([row.label]),
        monthly: row.monthly,
        annual: row.annual,
      };
    } else {
      grouped[category_code].labels.add(row.label);
      grouped[category_code].monthly += row.monthly;
      grouped[category_code].annual += row.annual;
    }
  }

  const payload = Object.values(grouped).map((item) => ({
    condominio_id: CONDOMINIO_ID,
    category_code: item.category_code,
    category_name: Array.from(item.labels).join(" | "),
    year: YEAR,
    monthly_limit: item.monthly,
    annual_limit: item.annual,
    notes: "Importado da Planilha Orçamentária 2025",
  }));

  if (payload.length === 0) {
    console.warn("⚠️ Nenhum item mapeado. Preencha CATEGORY_MAP.");
    return;
  }

  const { error } = await supabase.from("financial_budget").upsert(payload, {
    onConflict: "condominio_id,category_code,year",
  });

  if (error) throw error;
  console.log(`✅ Orçamento importado: ${payload.length} linhas`);
}

async function main() {
  const csvPath = path.resolve(
    __dirname,
    "../docs/fin/Planilha Orçamentária PP 2025.csv",
  );
  const rows = parseCsv(csvPath);
  console.log(`Encontradas ${rows.length} linhas no CSV.`);
  await upsertBudget(rows);
}

main().catch((err) => {
  console.error("❌ Erro na importação:", err.message || err);
  process.exit(1);
});
