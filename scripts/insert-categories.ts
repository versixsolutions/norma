import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const CONDOMINIO_ID = "5c624180-5fca-41fd-a5a0-a6e724f45d96"; // Pinheiro Park

interface Category {
  code: string;
  name: string;
  type: "receita" | "despesa";
  parent_code?: string;
}

// Estrutura completa das categorias do Pinheiro Park
const categories: Category[] = [
  // 1. RECEITAS
  { code: "1", name: "Receitas", type: "receita" },

  // 1.1 - Receitas Operacionais
  {
    code: "1.1",
    name: "Receitas Operacionais",
    type: "receita",
    parent_code: "1",
  },
  {
    code: "1.1.01",
    name: "Taxa de Condomínio",
    type: "receita",
    parent_code: "1.1",
  },
  { code: "1.1.03", name: "Taxa Extra", type: "receita", parent_code: "1.1" },
  {
    code: "1.1.05",
    name: "Taxa de Salão de Festas",
    type: "receita",
    parent_code: "1.1",
  },
  {
    code: "1.1.109",
    name: "Aluguel de Áreas de Lazer",
    type: "receita",
    parent_code: "1.1",
  },
  {
    code: "1.1.144",
    name: "Receita minimercado autônomo",
    type: "receita",
    parent_code: "1.1",
  },
  {
    code: "1.1.152",
    name: "Crédito para realização de eventos",
    type: "receita",
    parent_code: "1.1",
  },
  {
    code: "1.1.83",
    name: "Rep. Taxa Não Garantidas Comp Ant",
    type: "receita",
    parent_code: "1.1",
  },

  // 1.2 - Receitas Financeiras
  {
    code: "1.2",
    name: "Receitas Financeiras",
    type: "receita",
    parent_code: "1",
  },
  { code: "1.2.02", name: "Multas", type: "receita", parent_code: "1.2" },
  { code: "1.2.03", name: "Rendimentos", type: "receita", parent_code: "1.2" },
  { code: "1.2.05", name: "Empréstimos", type: "receita", parent_code: "1.2" },
  { code: "1.2.06", name: "Estornos", type: "receita", parent_code: "1.2" },

  // 1.3 - Transferências
  { code: "1.3", name: "Transferências", type: "receita", parent_code: "1" },
  {
    code: "1.3.01",
    name: "Transferências entre contas",
    type: "receita",
    parent_code: "1.3",
  },
  { code: "1.3.03", name: "Saldo Caixa", type: "receita", parent_code: "1.3" },

  // 1.4 - Ressarcimentos
  { code: "1.4", name: "Ressarcimentos", type: "receita", parent_code: "1" },
  { code: "1.4.08", name: "Reembolso", type: "receita", parent_code: "1.4" },

  // 1.6 - Outras Receitas
  { code: "1.6", name: "Outras Receitas", type: "receita", parent_code: "1" },

  // 2. DESPESAS
  { code: "2", name: "Despesas", type: "despesa" },

  // 2.1 - Despesa com Pessoal
  {
    code: "2.1",
    name: "Despesa com Pessoal",
    type: "despesa",
    parent_code: "2",
  },
  { code: "2.1.13", name: "Pró-Labore", type: "despesa", parent_code: "2.1" },
  {
    code: "2.1.20",
    name: "Serv. de Zeladoria e Portaria",
    type: "despesa",
    parent_code: "2.1",
  },
  {
    code: "2.1.33",
    name: "Serviços de Vigilância",
    type: "despesa",
    parent_code: "2.1",
  },
  { code: "2.1.54", name: "Treinamento", type: "despesa", parent_code: "2.1" },
  {
    code: "2.1.59",
    name: "Portaria Eletrônica / Virtual",
    type: "despesa",
    parent_code: "2.1",
  },
  {
    code: "2.1.73",
    name: "Serv. Zeladoria e Limpeza -Terceirização de MO",
    type: "despesa",
    parent_code: "2.1",
  },

  // 2.2 - Despesa com Impostos
  {
    code: "2.2",
    name: "Despesa com Impostos",
    type: "despesa",
    parent_code: "2",
  },
  { code: "2.2.01", name: "INSS", type: "despesa", parent_code: "2.2" },
  {
    code: "2.2.15",
    name: "Impostos, Taxas e Licenças",
    type: "despesa",
    parent_code: "2.2",
  },
  {
    code: "2.2.26",
    name: "Retenção de PIS.COFINS.CSLL",
    type: "despesa",
    parent_code: "2.2",
  },
  {
    code: "2.2.29",
    name: "Anotação Responsabilidade Técnica ART/RTT",
    type: "despesa",
    parent_code: "2.2",
  },

  // 2.3 - Despesas Administrativas
  {
    code: "2.3",
    name: "Despesas Administrativas",
    type: "despesa",
    parent_code: "2",
  },
  {
    code: "2.3.01",
    name: "Energia Elétrica",
    type: "despesa",
    parent_code: "2.3",
  },
  {
    code: "2.3.02",
    name: "Água e Esgoto",
    type: "despesa",
    parent_code: "2.3",
  },
  {
    code: "2.3.05",
    name: "Taxa de administração",
    type: "despesa",
    parent_code: "2.3",
  },
  { code: "2.3.07", name: "Seguro", type: "despesa", parent_code: "2.3" },
  {
    code: "2.3.10",
    name: "Desp. c/ Cartório, Reg. e Autent.",
    type: "despesa",
    parent_code: "2.3",
  },
  {
    code: "2.3.104",
    name: "Recarga celular pré pago",
    type: "despesa",
    parent_code: "2.3",
  },
  {
    code: "2.3.105",
    name: "Pagamento incorreto a reembolsar",
    type: "despesa",
    parent_code: "2.3",
  },
  {
    code: "2.3.108",
    name: "Taxa de Juros",
    type: "despesa",
    parent_code: "2.3",
  },
  {
    code: "2.3.15",
    name: "Garantia de Taxa Extra",
    type: "despesa",
    parent_code: "2.3",
  },
  {
    code: "2.3.22",
    name: "Despesa c/ Confraternização",
    type: "despesa",
    parent_code: "2.3",
  },
  { code: "2.3.24", name: "Antecipação", type: "despesa", parent_code: "2.3" },
  { code: "2.3.25", name: "Empréstimos", type: "despesa", parent_code: "2.3" },
  {
    code: "2.3.35",
    name: "Participação em Assembleia",
    type: "despesa",
    parent_code: "2.3",
  },
  { code: "2.3.45", name: "Descontos", type: "despesa", parent_code: "2.3" },
  { code: "2.3.48", name: "Reembolso", type: "despesa", parent_code: "2.3" },
  {
    code: "2.3.53",
    name: "Confecção de Adesivos",
    type: "despesa",
    parent_code: "2.3",
  },
  {
    code: "2.3.62",
    name: "Taxa Não Garantidas em Aberto",
    type: "despesa",
    parent_code: "2.3",
  },
  {
    code: "2.3.71",
    name: "Confraternização Festa Junina",
    type: "despesa",
    parent_code: "2.3",
  },
  {
    code: "2.3.80",
    name: "Palestrra c/ Sindico e identificação",
    type: "despesa",
    parent_code: "2.3",
  },

  // 2.4 - Despesa com Aquisições
  {
    code: "2.4",
    name: "Despesa com Aquisições",
    type: "despesa",
    parent_code: "2",
  },
  {
    code: "2.4.01",
    name: "Móveis e Utensílios",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.03",
    name: "Máquinas e Equipamentos",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.04",
    name: "Material de Limpeza e Conservação",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.05",
    name: "Mat de Escritório e Expediente",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.07",
    name: "Mat Elétricos e Acessórios",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.09",
    name: "Mat. p/ Construção, Conserto e Reparo",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.13",
    name: "Confecção de chaves",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.14",
    name: "Material Esportivo",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.17",
    name: "Material Para Sinalização",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.21",
    name: "Material para EPI",
    type: "despesa",
    parent_code: "2.4",
  },
  { code: "2.4.28", name: "Ferramentas", type: "despesa", parent_code: "2.4" },
  {
    code: "2.4.29",
    name: "Tintas e Acessórios",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.33",
    name: "Compra de persianas e cortinas portão",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.36",
    name: "Confecção de Faixas e Placas",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.52",
    name: "Aquisição de Piso de Grama",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.68",
    name: "Compra de Material de Jardim",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.75",
    name: "Compra de Persianas",
    type: "despesa",
    parent_code: "2.4",
  },
  {
    code: "2.4.80",
    name: "Aquisição de Eletrodomésticos",
    type: "despesa",
    parent_code: "2.4",
  },

  // 2.5 - Despesa com Serviços
  {
    code: "2.5",
    name: "Despesa com Serviços",
    type: "despesa",
    parent_code: "2",
  },
  {
    code: "2.5.02",
    name: "Honorários Advocatícios",
    type: "despesa",
    parent_code: "2.5",
  },
  {
    code: "2.5.19",
    name: "Manutenção do Playground e parquinho",
    type: "despesa",
    parent_code: "2.5",
  },
  {
    code: "2.5.21",
    name: "Serviços Elétricos",
    type: "despesa",
    parent_code: "2.5",
  },
  {
    code: "2.5.23",
    name: "Serviço de Pintura",
    type: "despesa",
    parent_code: "2.5",
  },
  {
    code: "2.5.31",
    name: "Desinsetização e ou Desinfestação em Geral",
    type: "despesa",
    parent_code: "2.5",
  },
  {
    code: "2.5.35",
    name: "Poda de Árvores e Capina",
    type: "despesa",
    parent_code: "2.5",
  },
  {
    code: "2.5.36",
    name: "Reformas de Móveis e Eletrodomésticos",
    type: "despesa",
    parent_code: "2.5",
  },
  {
    code: "2.5.62",
    name: "Confecção de Segurança",
    type: "despesa",
    parent_code: "2.5",
  },
  {
    code: "2.5.68",
    name: "Serviço de Segurança",
    type: "despesa",
    parent_code: "2.5",
  },
  {
    code: "2.5.102",
    name: "Aplicação de grama sintética",
    type: "despesa",
    parent_code: "2.5",
  },
  {
    code: "2.5.121",
    name: "Manutenção financeiro Mobills",
    type: "despesa",
    parent_code: "2.5",
  },
  {
    code: "2.5.124",
    name: "Serviço de Mudanças",
    type: "despesa",
    parent_code: "2.5",
  },

  // 2.6 - Despesas Com Manutenções
  {
    code: "2.6",
    name: "Despesas Com Manutenções",
    type: "despesa",
    parent_code: "2",
  },
  {
    code: "2.6.05",
    name: "Manutenção de Máquinas e Equip.",
    type: "despesa",
    parent_code: "2.6",
  },
  {
    code: "2.6.08",
    name: "Manutenção de Extintores ou similares",
    type: "despesa",
    parent_code: "2.6",
  },
  {
    code: "2.6.09",
    name: "Manutenção Corretiva e Instalações",
    type: "despesa",
    parent_code: "2.6",
  },
  {
    code: "2.6.14",
    name: "Manutenção de Equipamentos de Segurança",
    type: "despesa",
    parent_code: "2.6",
  },
  {
    code: "2.6.16",
    name: "Manutenção do Portão",
    type: "despesa",
    parent_code: "2.6",
  },
  {
    code: "2.6.23",
    name: "Manut da Estação de Tratamento de Esgoto (ETE)",
    type: "despesa",
    parent_code: "2.6",
  },

  // 2.7 - Despesas Financeiras
  {
    code: "2.7",
    name: "Despesas Financeiras",
    type: "despesa",
    parent_code: "2",
  },
  {
    code: "2.7.01",
    name: "Despesas Bancárias",
    type: "despesa",
    parent_code: "2.7",
  },
  {
    code: "2.7.04",
    name: "Tarifas e Boletos",
    type: "despesa",
    parent_code: "2.7",
  },
  { code: "2.7.08", name: "Empréstimo", type: "despesa", parent_code: "2.7" },
  {
    code: "2.7.10",
    name: "IR s/ Poupança",
    type: "despesa",
    parent_code: "2.7",
  },

  // 2.8 - Transferências
  { code: "2.8", name: "Transferências", type: "despesa", parent_code: "2" },
  {
    code: "2.8.01",
    name: "Transferências entre contas",
    type: "despesa",
    parent_code: "2.8",
  },
  { code: "2.8.03", name: "Saldo Caixa", type: "despesa", parent_code: "2.8" },
];

async function insertCategories() {
  console.log("🚀 Iniciando inserção de categorias do Pinheiro Park...\n");

  try {
    // 1. Verificar se já existem categorias
    const { data: existing } = await supabase
      .from("financial_categories")
      .select("code")
      .eq("condominio_id", CONDOMINIO_ID);

    if (existing && existing.length > 0) {
      console.log(`⚠️  Já existem ${existing.length} categorias cadastradas.`);
      console.log("Deseja continuar e sobrescrever? (Ctrl+C para cancelar)\n");
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    // 2. Inserir categorias em ordem hierárquica
    let inserted = 0;
    let errors = 0;

    for (const cat of categories) {
      const { error } = await supabase.from("financial_categories").upsert(
        {
          code: cat.code,
          name: cat.name,
          type: cat.type,
          parent_code: cat.parent_code || null,
          condominio_id: CONDOMINIO_ID,
          is_active: true,
        },
        {
          onConflict: "code,condominio_id",
        },
      );

      if (error) {
        console.error(`❌ Erro ao inserir ${cat.code}: ${error.message}`);
        errors++;
      } else {
        inserted++;
        if (inserted % 10 === 0) {
          process.stdout.write(
            `✓ ${inserted}/${categories.length} categorias inseridas...\r`,
          );
        }
      }
    }

    console.log(`\n\n✅ Inserção concluída!`);
    console.log(`   ✓ ${inserted} categorias inseridas`);
    if (errors > 0) {
      console.log(`   ❌ ${errors} erros`);
    }

    // 3. Exibir resumo
    const { data: summary } = await supabase
      .from("financial_categories")
      .select("type")
      .eq("condominio_id", CONDOMINIO_ID);

    if (summary) {
      const receitas = summary.filter((c) => c.type === "receita").length;
      const despesas = summary.filter((c) => c.type === "despesa").length;
      console.log(`\n📊 Resumo:`);
      console.log(`   • ${receitas} categorias de Receitas`);
      console.log(`   • ${despesas} categorias de Despesas`);
      console.log(`   • ${receitas + despesas} Total`);
    }

    // 4. Exportar JSON para uso no frontend
    const categoriesJSON = JSON.stringify(categories, null, 2);
    fs.writeFileSync(
      path.join(__dirname, "../src/data/categories-pinheiro-park.json"),
      categoriesJSON,
    );
    console.log(
      `\n💾 Arquivo JSON exportado: src/data/categories-pinheiro-park.json`,
    );
  } catch (error) {
    console.error("❌ Erro geral:", error);
    process.exit(1);
  }
}

insertCategories();
