// src/components/Financial/TransactionsList.tsx
// ================================================================
// LISTA DE TRANSAÇÕES COM EDIÇÃO E UPLOAD DE COMPROVANTES
// Permite anexar documentos em transações já criadas
// ================================================================

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  MoreVertical,
  Edit,
  Trash2,
  Paperclip,
  FileText,
  Upload,
  Download,
  Filter,
  Search,
  Plus,
  RefreshCw,
} from "lucide-react";
import TransactionForm from "./TransactionForm";

// ================================================================
// TYPES
// ================================================================

interface Transaction {
  id: string;
  category_code: string;
  description: string;
  amount: number;
  reference_month: string;
  payment_date: string | null;
  document_url: string | null;
  status: string;
  created_at: string;
  created_by: string;
  notes: string | null;
  // Joined data
  category_name?: string;
  category_type?: string;
  user_name?: string;
}

// ================================================================
// MAIN COMPONENT
// ================================================================

export default function TransactionsList() {
  const { user, condominio, isSindico } = useAuth();

  // State
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // Modals
  const [formOpen, setFormOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);
  const [deletingTransaction, setDeletingTransaction] =
    useState<Transaction | null>(null);
  const [uploadingDoc, setUploadingDoc] = useState<Transaction | null>(null);

  // ================================================================
  // LOAD TRANSACTIONS
  // ================================================================

  useEffect(() => {
    loadTransactions();
  }, [condominio?.id, selectedMonth, selectedType, selectedStatus]);

  async function loadTransactions() {
    setLoading(true);
    try {
      let query = supabase
        .from("financial_transactions")
        .select(
          `
          *,
          financial_categories!inner(name, type),
          users!created_by(name)
        `,
        )
        .eq("condominio_id", condominio.id)
        .order("reference_month", { ascending: false })
        .order("created_at", { ascending: false });

      // Filtros
      if (selectedMonth) {
        const [year, month] = selectedMonth.split("-");
        query = query
          .gte("reference_month", `${year}-${month}-01`)
          .lt(
            "reference_month",
            `${year}-${String(parseInt(month) + 1).padStart(2, "0")}-01`,
          );
      }

      if (selectedType !== "all") {
        query = query.eq(
          "financial_categories.type",
          selectedType.toUpperCase(),
        );
      }

      if (selectedStatus !== "all") {
        query = query.eq("status", selectedStatus);
      }

      const { data, error } = await query;

      if (error) throw error;

      // Flatten joined data
      const flattenedData = data.map((t: any) => ({
        ...t,
        category_name: t.financial_categories?.name,
        category_type: t.financial_categories?.type,
        user_name: t.users?.name,
      }));

      setTransactions(flattenedData);
    } catch (error) {
      console.error("Error loading transactions:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleRefresh() {
    setRefreshing(true);
    await loadTransactions();
    setRefreshing(false);
  }

  // ================================================================
  // ACTIONS
  // ================================================================

  function handleEdit(transaction: Transaction) {
    setEditingTransaction(transaction);
    setFormOpen(true);
  }

  function handleAddNew() {
    setEditingTransaction(null);
    setFormOpen(true);
  }

  async function handleDelete() {
    if (!deletingTransaction) return;

    try {
      const { error } = await supabase
        .from("financial_transactions")
        .delete()
        .eq("id", deletingTransaction.id);

      if (error) throw error;

      await loadTransactions();
      setDeletingTransaction(null);
    } catch (error) {
      console.error("Error deleting transaction:", error);
      alert("Erro ao excluir transação");
    }
  }

  async function handleUploadDocument(transaction: Transaction, file: File) {
    try {
      // Upload para Supabase Storage
      const fileExt = file.name.split(".").pop();
      const fileName = `${condominio.id}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("financial-documents")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Obter URL pública
      const { data: urlData } = supabase.storage
        .from("financial-documents")
        .getPublicUrl(fileName);

      // Atualizar transação com URL do documento
      const { error: updateError } = await supabase
        .from("financial_transactions")
        .update({ document_url: urlData.publicUrl })
        .eq("id", transaction.id);

      if (updateError) throw updateError;

      await loadTransactions();
      setUploadingDoc(null);
      alert("Documento anexado com sucesso!");
    } catch (error) {
      console.error("Error uploading document:", error);
      alert("Erro ao fazer upload do documento");
    }
  }

  // ================================================================
  // FILTERING
  // ================================================================

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category_name?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  // ================================================================
  // UTILS
  // ================================================================

  function formatCurrency(value: number): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  function formatDate(date: string): string {
    return new Date(date).toLocaleDateString("pt-BR");
  }

  function getStatusBadge(status: string) {
    const variants = {
      approved: { label: "Aprovado", color: "bg-green-100 text-green-800" },
      pending: { label: "Pendente", color: "bg-yellow-100 text-yellow-800" },
      rejected: { label: "Rejeitado", color: "bg-red-100 text-red-800" },
      cancelled: { label: "Cancelado", color: "bg-gray-100 text-gray-800" },
    };

    const config = variants[status] || variants.pending;

    return (
      <Badge className={config.color} variant="outline">
        {config.label}
      </Badge>
    );
  }

  // ================================================================
  // RENDER
  // ================================================================

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Transações</h2>
        {isSindico && (
          <Button onClick={handleAddNew}>
            <Plus className="h-4 w-4 mr-2" />
            Nova Transação
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 p-4 bg-gray-50 rounded-lg">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar por descrição ou categoria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Todos os meses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Todos os meses</SelectItem>
            {Array.from({ length: 12 }, (_, i) => {
              const date = new Date();
              date.setMonth(date.getMonth() - i);
              const value = date.toISOString().substring(0, 7);
              const label = date.toLocaleDateString("pt-BR", {
                month: "long",
                year: "numeric",
              });
              return (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>

        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="receita">💰 Receitas</SelectItem>
            <SelectItem value="despesa">💸 Despesas</SelectItem>
          </SelectContent>
        </Select>

        {isSindico && (
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="approved">Aprovado</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="rejected">Rejeitado</SelectItem>
            </SelectContent>
          </Select>
        )}

        <Button
          variant="outline"
          size="icon"
          onClick={handleRefresh}
          disabled={refreshing}
        >
          <RefreshCw
            className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
          />
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-lg border">
          <p className="text-sm text-gray-500">Total Transações</p>
          <p className="text-2xl font-bold">{filteredTransactions.length}</p>
        </div>
        <div className="p-4 bg-white rounded-lg border">
          <p className="text-sm text-gray-500">Receitas</p>
          <p className="text-2xl font-bold text-green-600">
            {formatCurrency(
              filteredTransactions
                .filter((t) => t.amount > 0)
                .reduce((sum, t) => sum + t.amount, 0),
            )}
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg border">
          <p className="text-sm text-gray-500">Despesas</p>
          <p className="text-2xl font-bold text-red-600">
            {formatCurrency(
              Math.abs(
                filteredTransactions
                  .filter((t) => t.amount < 0)
                  .reduce((sum, t) => sum + t.amount, 0),
              ),
            )}
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg border">
          <p className="text-sm text-gray-500">Sem Comprovante</p>
          <p className="text-2xl font-bold text-orange-600">
            {
              filteredTransactions.filter(
                (t) => !t.document_url && Math.abs(t.amount) > 500,
              ).length
            }
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Comprovante</TableHead>
              {isSindico && <TableHead className="text-right">Ações</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={isSindico ? 7 : 6}
                  className="text-center py-8"
                >
                  Carregando...
                </TableCell>
              </TableRow>
            ) : filteredTransactions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={isSindico ? 7 : 6}
                  className="text-center py-8 text-gray-500"
                >
                  Nenhuma transação encontrada
                </TableCell>
              </TableRow>
            ) : (
              filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {formatDate(transaction.reference_month)}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">
                        {transaction.category_code}
                      </span>
                      <span className="text-sm">
                        {transaction.category_name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-md">
                      <p className="text-sm truncate">
                        {transaction.description}
                      </p>
                      {transaction.notes && (
                        <p className="text-xs text-gray-500 truncate">
                          {transaction.notes}
                        </p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`font-semibold ${
                        transaction.amount > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {formatCurrency(transaction.amount)}
                    </span>
                  </TableCell>
                  <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                  <TableCell>
                    {transaction.document_url ? (
                      <a
                        href={transaction.document_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <FileText className="h-4 w-4" />
                        <span className="text-sm">Ver</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-1">
                        {isSindico ? (
                          <label className="cursor-pointer flex items-center gap-1 text-gray-400 hover:text-blue-600">
                            <Upload className="h-4 w-4" />
                            <span className="text-sm">Anexar</span>
                            <input
                              type="file"
                              className="hidden"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file)
                                  handleUploadDocument(transaction, file);
                              }}
                            />
                          </label>
                        ) : (
                          <span className="text-sm text-gray-400">Sem doc</span>
                        )}
                      </div>
                    )}
                  </TableCell>
                  {isSindico && (
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleEdit(transaction)}
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => setDeletingTransaction(transaction)}
                            className="text-red-600"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Form Modal */}
      <TransactionForm
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
          setEditingTransaction(null);
        }}
        onSuccess={loadTransactions}
        editingTransaction={editingTransaction}
      />

      {/* Delete Confirmation */}
      <AlertDialog
        open={!!deletingTransaction}
        onOpenChange={() => setDeletingTransaction(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir esta transação? Esta ação não pode
              ser desfeita.
              <div className="mt-3 p-3 bg-gray-50 rounded">
                <p className="text-sm font-medium">
                  {deletingTransaction?.description}
                </p>
                <p className="text-sm text-gray-500">
                  {formatCurrency(deletingTransaction?.amount || 0)}
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
