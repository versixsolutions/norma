import { createClient } from '@supabase/supabase-js'
// Usando versão específica e configurações de ambiente
import { pipeline, env } from '@xenova/transformers'
import * as dotenv from 'dotenv'

// Configurações para evitar erro de WASM em ambiente Node
env.useBrowserCache = false;
env.allowLocalModels = false;

// Carrega variáveis do .env
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Erro: Verifique se SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY estão no .env')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// --- O CONHECIMENTO DA ÍSIS (Baseado nos seus PDFs) ---
const documents = [
  {
    title: "Horário de Silêncio",
    content: "Artigo 1º: É obrigatório guardar silêncio das 22h00 às 06h00. Exceção: Em Julho, Dezembro e Janeiro, o silêncio começa às 23h00."
  },
  {
    title: "Uso de Som",
    content: "Artigo 2º: O uso de som, instrumentos musicais ou qualquer ruído não deve perturbar os vizinhos em nenhum horário."
  },
  {
    title: "Coleta de Lixo",
    content: "Artigo 3º: A coleta é feita diariamente pelo zelador: Manhã (07:30 às 08:30) e Tarde (15:30 às 16:00), exceto domingos e feriados. O lixo deve estar na frente da unidade nestes horários."
  },
  {
    title: "Horário Área de Lazer",
    content: "Artigo 4º: A área de lazer (piscina, quadra, playground) funciona das 06h00 às 23h00. É proibido o uso fora deste horário."
  },
  {
    title: "Festas e Salão",
    content: "Artigo 5º: O uso do salão de festas é permitido até 01h00 da manhã. O som deve respeitar os limites para não incomodar a vizinhança."
  },
  {
    title: "Entrega de Encomendas",
    content: "Artigo 8º: Entregadores (iFood, Gás, Correios) NÃO podem entrar no condomínio. O morador deve receber sua encomenda na portaria. Obrigatória a retirada do capacete pelo entregador."
  },
  {
    title: "Velocidade",
    content: "Artigo 13º: A velocidade máxima permitida para veículos dentro do condomínio é de 10 km/h."
  },
  {
    title: "Estacionamento",
    content: "Artigo 15º: É proibido estacionar nas ruas ou calçadas. Visitantes devem estacionar na garagem da unidade visitada (se houver vaga) ou fora do condomínio."
  },
  {
    title: "Reserva do Salão",
    content: "Artigo 23º: Para reservar, é necessário estar em dia com o condomínio, assinar termo de responsabilidade e pagar taxa de 30% do valor do condomínio (limpeza)."
  },
  {
    title: "Regras da Piscina",
    content: "Artigo 30º: Na piscina é PROIBIDO: usar roupas jeans, comer na borda, usar copos de vidro, usar bronzeador (apenas protetor solar é permitido) e fumar."
  },
  {
    title: "Visitantes na Piscina",
    content: "Artigo 28º: A piscina é exclusiva para moradores. Cada unidade pode levar no máximo 04 convidados. Empregados não podem usar a piscina."
  },
  {
    title: "Animais de Estimação (Pets)",
    content: "Artigo 34º: Permitido 02 animais por casa. Proibido animais de grande porte ou agressivos. Proibida a circulação na área de lazer (piscina, quadra). Devem usar coleira nas áreas comuns."
  },
  {
    title: "Mudanças",
    content: "Artigo 44º: Mudanças permitidas de Segunda a Sexta (08h-12h e 14h-18h) e Sábado (08h-12h). Proibido em domingos e feriados."
  },
  {
    title: "Obras e Reformas",
    content: "Artigo 44º: Obras seguem o mesmo horário das mudanças: Seg-Sex (08h-18h) e Sáb (08h-12h). Entulhos devem ser retirados pelo morador."
  },
  {
    title: "Multas",
    content: "Artigo 79º: Infrações geram advertência escrita. Reincidência gera multa de 1 taxa condominial. Casos graves (barulho excessivo) podem gerar multa direta."
  }
]

async function seed() {
  console.log('🧠 Iniciando treinamento da Ísis (Modelo Gratuito)...')
  
  // Carrega o modelo gratuito localmente
  // Usando 'Xenova/gte-small' que é mais estável
  const generateEmbedding = await pipeline('feature-extraction', 'Xenova/gte-small');

  for (const doc of documents) {
    process.stdout.write(`Processando: ${doc.title}... `)
    
    try {
      // Gera vetor (384 dimensões)
      const output = await generateEmbedding(doc.content, { pooling: 'mean', normalize: true });
      const embedding = Array.from(output.data);

      // Salva no Supabase
      const { error } = await supabase.from('documents').insert({
        content: doc.content,
        metadata: { title: doc.title, source: 'Regimento Interno 2025' },
        embedding: embedding
      })

      if (error) console.log('❌ Erro:', error.message)
      else console.log('✅ Ok!')

    } catch (e) {
      console.log('❌ Falha:', e)
    }
  }
  console.log('\n✨ Tudo pronto! A Ísis já aprendeu as regras do condomínio.')
}

seed()