/**
 * EXEMPLO DE INTEGRAÇÃO NO DASHBOARD FINANCEIRO
 *
 * Este arquivo mostra como integrar o botão "Nova Transação"
 * e o formulário na página Dashboard.tsx existente
 */

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { TransactionForm } from "@/components/Financial/TransactionForm";

const CONDOMINIO_ID = "5c624180-5fca-41fd-a5a0-a6e724f45d96";

// ============================================
// OPÇÃO 1: Modal/Dialog com Transação
// ============================================

export const DashboardWithModalExample = () => {
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const currentMonth = new Date().toISOString().slice(0, 7);

  const handleTransactionSuccess = (transaction: any) => {
    console.log("Transação adicionada:", transaction);

    // Recarregar dados do dashboard
    setRefreshKey((prev) => prev + 1);

    // Fechar modal após 2 segundos
    setTimeout(() => {
      setShowTransactionForm(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header com botão */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Painel Financeiro</h1>

        <button
          onClick={() => setShowTransactionForm(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          Nova Transação
        </button>
      </div>

      {/* Conteúdo do dashboard */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        key={refreshKey}
      >
        {/* KPIs aqui */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-slate-600 text-sm font-medium">Saldo Período</h3>
          <p className="text-2xl font-bold text-indigo-600 mt-2">R$ 0,00</p>
        </div>
      </div>

      {/* Modal/Dialog com Formulário */}
      {showTransactionForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            {/* Header do Modal */}
            <div className="flex justify-between items-center p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">
                Nova Transação
              </h2>
              <button
                onClick={() => setShowTransactionForm(false)}
                className="text-slate-500 hover:text-slate-700 p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6">
              <TransactionForm
                condominioId={CONDOMINIO_ID}
                month={currentMonth}
                onSuccess={handleTransactionSuccess}
                onCancel={() => setShowTransactionForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================
// OPÇÃO 2: Sidebar com Transação
// ============================================

export const DashboardWithSidebarExample = () => {
  const [showForm, setShowForm] = useState(false);
  const currentMonth = new Date().toISOString().slice(0, 7);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Ações</h2>

        <button
          onClick={() => setShowForm(!showForm)}
          className="w-full flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg transition-colors mb-4"
        >
          <Plus className="w-5 h-5" />
          Nova Transação
        </button>

        {/* Formulário expandido na sidebar */}
        {showForm && (
          <div className="border-t border-slate-200 pt-4 mt-4">
            <TransactionForm
              condominioId={CONDOMINIO_ID}
              month={currentMonth}
              onSuccess={() => {
                console.log("Transação adicionada");
                setShowForm(false);
              }}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Painel Financeiro
        </h1>
        {/* Conteúdo do dashboard aqui */}
      </main>
    </div>
  );
};

// ============================================
// OPÇÃO 3: Tab com Transações
// ============================================

export const DashboardWithTabsExample = () => {
  const [activeTab, setActiveTab] = useState<"dashboard" | "adicionar">(
    "dashboard",
  );
  const currentMonth = new Date().toISOString().slice(0, 7);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Tabs */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex gap-8 px-6">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === "dashboard"
                ? "text-indigo-600 border-indigo-600"
                : "text-slate-600 border-transparent hover:text-slate-900"
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => setActiveTab("adicionar")}
            className={`py-4 px-2 font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "adicionar"
                ? "text-indigo-600 border-indigo-600"
                : "text-slate-600 border-transparent hover:text-slate-900"
            }`}
          >
            <Plus className="w-5 h-5" />
            Nova Transação
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto p-6">
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* KPIs aqui */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-slate-600 text-sm">Receita Total</h3>
              <p className="text-2xl font-bold text-emerald-600 mt-2">
                R$ 0,00
              </p>
            </div>
          </div>
        )}

        {activeTab === "adicionar" && (
          <div className="max-w-2xl mx-auto">
            <TransactionForm
              condominioId={CONDOMINIO_ID}
              month={currentMonth}
              onSuccess={() => setActiveTab("dashboard")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================
// OPÇÃO 4: Drawer (Deslizante)
// ============================================

export const DashboardWithDrawerExample = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const currentMonth = new Date().toISOString().slice(0, 7);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Painel Financeiro
          </h1>

          <button
            onClick={() => setShowDrawer(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            + Nova Transação
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto p-6">{/* Dashboard content */}</div>

      {/* Drawer deslizante */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          showDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header do Drawer */}
          <div className="flex justify-between items-center p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Nova Transação</h2>
            <button
              onClick={() => setShowDrawer(false)}
              className="text-slate-500 hover:text-slate-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Conteúdo do Drawer */}
          <div className="flex-1 overflow-y-auto p-6">
            <TransactionForm
              condominioId={CONDOMINIO_ID}
              month={currentMonth}
              onSuccess={() => setShowDrawer(false)}
              onCancel={() => setShowDrawer(false)}
            />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showDrawer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowDrawer(false)}
        />
      )}
    </div>
  );
};

// ============================================
// OPÇÃO 5: Em página separada (mais simples)
// ============================================

export const DashboardWithLinkExample = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Painel Financeiro
          </h1>

          {/* Link para página separada */}
          <a
            href="/financeiro/adicionar-transacao"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            + Nova Transação
          </a>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto p-6">{/* Dashboard content */}</div>
    </div>
  );
};

// ============================================
// RECOMENDAÇÃO
// ============================================

/**
 * MELHOR OPÇÃO: Opção 1 (Modal) ou Opção 4 (Drawer)
 *
 * Por que?
 * - Não interrompe o fluxo do usuário no dashboard
 * - Fácil adicionar múltiplas transações
 * - Interface familiar (padrão em muitas apps)
 * - Responsivo em mobile
 *
 * Implementação rápida:
 * 1. Copiar DashboardWithModalExample
 * 2. Adaptar para seu Dashboard.tsx existente
 * 3. Testar no navegador
 * 4. Pronto!
 */

export default DashboardWithModalExample;
