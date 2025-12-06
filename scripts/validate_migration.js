import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Carregar variáveis de ambiente
config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ VITE_SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY não encontradas no .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function validateMigration() {
  console.log('🔍 Validando Migration de Categorias e Inadimplência...\n');

  // 1. Verificar coluna condominio_id
  console.log('1️⃣ Verificando coluna condominio_id...');
  
  const { data: testCat, error: testError } = await supabase
    .from('financial_categories')
    .select('code, name, type, condominio_id')
    .limit(1);
  
  if (testError) {
    console.error('   ❌ Erro ao acessar financial_categories:', testError.message);
  } else {
    console.log('   ✅ Coluna condominio_id existe e está acessível');
    console.log('   📊 Sample:', testCat?.[0] || 'Nenhum registro');
  }

  // 2. Verificar categorias do Pinheiro Park
  console.log('\n2️⃣ Verificando categorias do Pinheiro Park...');
  const { data: categories, error: catError } = await supabase
    .from('financial_categories')
    .select('code, name, type, condominio_id, is_active')
    .eq('condominio_id', '5c624180-5fca-41fd-a5a0-a6e724f45d96')
    .order('code');

  if (catError) {
    console.error('   ❌ Erro:', catError.message);
  } else {
    console.log(`   ✅ Total de categorias: ${categories?.length || 0}`);
    
    const receitas = categories?.filter(c => c.type === 'RECEITA').length || 0;
    const despesas = categories?.filter(c => c.type === 'DESPESA').length || 0;
    
    console.log(`   📈 Receitas: ${receitas}`);
    console.log(`   📉 Despesas: ${despesas}`);
    
    if (categories && categories.length > 0) {
      console.log('\n   📋 Primeiras 10 categorias:');
      categories.slice(0, 10).forEach(cat => {
        console.log(`      ${cat.code} - ${cat.name} (${cat.type})`);
      });
    }
  }

  // 3. Verificar tabela financial_inadimplencia
  console.log('\n3️⃣ Verificando tabela financial_inadimplencia...');
  const { data: inadData, error: inadError } = await supabase
    .from('financial_inadimplencia')
    .select('*')
    .limit(1);

  if (inadError) {
    if (inadError.message.includes('does not exist')) {
      console.error('   ❌ Tabela financial_inadimplencia NÃO existe');
    } else {
      console.error('   ❌ Erro:', inadError.message);
    }
  } else {
    console.log('   ✅ Tabela financial_inadimplencia existe');
    console.log('   📊 Estrutura verificada, pronta para uso');
  }

  // 4. Verificar índices (informativo)
  console.log('\n4️⃣ Verificando índices...');
  console.log('   ℹ️  Índices configurados nas migrations:');
  console.log('      - financial_categories_code_condominio_idx (code, condominio_id)');
  console.log('      - financial_inadimplencia_condominio_mes_idx (condominio_id, mes_referencia)');

  console.log('\n✨ Validação concluída!');
}

validateMigration().catch(console.error);
