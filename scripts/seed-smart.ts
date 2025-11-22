import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Faltam variáveis no .env')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Base de Conhecimento Enriquecida com TAGS DE CONTEXTO
const documents = [
  {
    title: "Horário de Silêncio",
    content: "Artigo 1º: É obrigatório guardar silêncio das 22h00 às 06h00. Exceção: Em Julho, Dezembro e Janeiro, o silêncio começa às 23h00.",
    tags: "barulho som alto música festa incomodar vizinho dormir furadeira obra martelo"
  },
  {
    title: "Uso da Piscina",
    content: "Artigo 28º: A piscina é exclusiva para moradores e até 4 convidados. É proibido: vidro, comer na borda, fumar, usar jeans e óleo bronzeador. Obrigatório exame médico.",
    tags: "banho nadar convidados visitante churrasco na piscina vidro bebida cerveja roupa"
  },
  {
    title: "Animais de Estimação (Pets)",
    content: "Artigo 34º: Permitido 02 animais por unidade. Proibido na área de lazer (piscina, quadra). Devem usar coleira e guia nas áreas comuns. O dono deve recolher os dejetos.",
    tags: "cachorro cão gato bicho estimação passear cocô focinheira latido morder solto"
  },
  {
    title: "Mudanças",
    content: "Artigo 44º: Mudanças permitidas de Segunda a Sexta (08h-12h e 14h-18h) e Sábado (08h-12h). Proibido Domingos e Feriados. Agendar na portaria.",
    tags: "mudar transporte caminhão móveis entrar sair chegar horário agendamento"
  },
  {
    title: "Obras e Reformas",
    content: "Artigo 44º: Obras seguem o horário: Seg-Sex (08h-18h) e Sáb (08h-12h). Proibido Domingo. Entulho deve ser retirado por caçamba.",
    tags: "construção pedreiro pintor martelo barulho furar parede quebrar piso caçamba lixo resto"
  },
  {
    title: "Coleta de Lixo",
    content: "Artigo 3º: Coleta diária às 07:30 e 15:30. Colocar na lixeira apenas nestes horários. Proibido aos domingos.",
    tags: "saco lixeira fedor resto comida reciclável orgânico descarte jogar fora"
  },
  {
    title: "Entregadores e Delivery",
    content: "Artigo 8º: Entregadores (iFood, Gás, Água) NÃO sobem. O morador deve retirar na portaria. Motoboy deve tirar o capacete.",
    tags: "ifood uber eats pizza correio encomenda pacote sedex mercado livre receber pedido portaria subir"
  },
  {
    title: "Reserva do Salão de Festas",
    content: "Artigo 23º: Reserva com 5 dias de antecedência. Taxa de 30% do condomínio. Limite de 100 pessoas. Som até 01h00.",
    tags: "alugar festa aniversário churrasco reunião evento pagar boleto lista convidados"
  },
  {
    title: "Garagem e Veículos",
    content: "Artigo 15º: Velocidade máx 10km/h. Proibido estacionar na rua. Visitante usa vaga da unidade ou estaciona fora.",
    tags: "carro moto estacionamento vaga parar visitante multa correr velocidade pneu pneu furado"
  }
]

async function seed() {
  console.log('📚 Populando base de conhecimento inteligente (Nativa)...')
  
  // Limpar tabela
  await supabase.from('documents').delete().neq('id', 0)

  for (const doc of documents) {
    const { error } = await supabase.from('documents').insert({
      title: doc.title,
      content: doc.content,
      tags: doc.tags,
      metadata: { source: 'Regimento Interno 2025' }
    })

    if (error) console.error(`❌ Erro em ${doc.title}:`, error.message)
    else console.log(`✅ ${doc.title}`)
  }
  
  console.log('✨ Finalizado! Busca inteligente ativa.')
}

seed()
```

No terminal, rode:
```bash
npx tsx scripts/seed-smart.ts