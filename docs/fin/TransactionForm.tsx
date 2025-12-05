// src/components/Financial/TransactionForm.tsx
// ================================================================
// FORMULÁRIO PARA ADICIONAR TRANSAÇÃO MANUALMENTE
// Usado pelo síndico para input conta por conta
// ================================================================

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, Check, X, Loader2 } from "lucide-react";

// ================================================================
// TYPES
// ================================================================

interface Category {
  code: string;
  name: string;
  type: "RECEITA" | "DESPESA";
}

interface TransactionFormProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  editingTransaction?: any; // Se passar, é edição; senão, é criação
}

// ================================================================
// MAIN COMPONENT
// ================================================================

export default function TransactionForm({
  open,
  onClose,
  onSuccess,
  editingTransaction,
}: TransactionFormProps) {
  const { user, condominio } = useAuth();
  const isEditing = !!editingTransaction;

  // State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [uploadingFile, setUploadingFile] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    category_code: "",
    description: "",
    amount: "",
    reference_month: "",
    payment_date: "",
    notes: "",
    document_file: null as File | null,
    document_url: "",
  });

  // ================================================================
  // LOAD CATEGORIES
  // ================================================================

  useEffect(() => {
    if (open) {
      loadCategories();

      if (isEditing) {
        // Preencher formulário com dados da transação
        setFormData({
          category_code: editingTransaction.category_code,
          description: editingTransaction.description,
          amount: Math.abs(editingTransaction.amount).toString(),
          reference_month: editingTransaction.reference_month,
          payment_date: editingTransaction.payment_date || "",
          notes: editingTransaction.notes || "",
          document_file: null,
          document_url: editingTransaction.document_url || "",
        });
      } else {
        // Reset form para nova transação
        resetForm();
      }
    }
  }, [open, editingTransaction]);

  async function loadCategories() {
    const { data, error } = await supabase
      .from("financial_categories")
      .select("code, name, type")
      .not("parent_code", "is", null) // Apenas subcategorias
      .eq("is_active", true)
      .order("code");

    if (error) {
      console.error("Error loading categories:", error);
      return;
    }

    setCategories(data || []);
  }

  // ================================================================
  // FILE UPLOAD
  // ================================================================

  async function handleFileUpload(file: File): Promise<string | null> {
    setUploadingFile(true);

    try {
      // Nome único para o arquivo
      const fileExt = file.name.split(".").pop();
      const fileName = `${condominio.id}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      // Upload para Supabase Storage
      const { data, error } = await supabase.storage
        .from("financial-documents")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) throw error;

      // Obter URL pública
      const { data: urlData } = supabase.storage
        .from("financial-documents")
        .getPublicUrl(fileName);

      return urlData.publicUrl;
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Erro ao fazer upload do arquivo");
      return null;
    } finally {
      setUploadingFile(false);
    }
  }

  // ================================================================
  // FORM HANDLERS
  // ================================================================

  function resetForm() {
    setFormData({
      category_code: "",
      description: "",
      amount: "",
      reference_month: new Date().toISOString().substring(0, 7) + "-01",
      payment_date: "",
      notes: "",
      document_file: null,
      document_url: "",
    });
    setError(null);
  }

  function handleInputChange(field: string, value: any) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tamanho (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("Arquivo muito grande. Máximo 10MB.");
      return;
    }

    // Validar tipo
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];
    if (!allowedTypes.includes(file.type)) {
      setError("Tipo de arquivo não permitido. Use PDF, JPG ou PNG.");
      return;
    }

    setFormData((prev) => ({ ...prev, document_file: file }));
  }

  // ================================================================
  // SUBMIT
  // ================================================================

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validações
      if (!formData.category_code) {
        throw new Error("Selecione uma categoria");
      }
      if (!formData.description) {
        throw new Error("Descrição é obrigatória");
      }
      if (!formData.amount || parseFloat(formData.amount) <= 0) {
        throw new Error("Valor inválido");
      }
      if (!formData.reference_month) {
        throw new Error("Mês de referência é obrigatório");
      }

      // Upload do arquivo se houver
      let documentUrl = formData.document_url;
      if (formData.document_file) {
        const uploadedUrl = await handleFileUpload(formData.document_file);
        if (!uploadedUrl) {
          throw new Error("Falha ao fazer upload do documento");
        }
        documentUrl = uploadedUrl;
      }

      // Determinar tipo da categoria para sinal do valor
      const category = categories.find(
        (c) => c.code === formData.category_code,
      );
      if (!category) {
        throw new Error("Categoria não encontrada");
      }

      // Receita = positivo, Despesa = negativo
      const amount = parseFloat(formData.amount);
      const signedAmount = category.type === "RECEITA" ? amount : -amount;

      // Preparar payload
      const payload = {
        condominio_id: condominio.id,
        category_code: formData.category_code,
        description: formData.description,
        amount: signedAmount,
        reference_month: formData.reference_month,
        payment_date: formData.payment_date || null,
        notes: formData.notes || null,
        document_url: documentUrl || null,
        status: "approved", // Síndico pode aprovar direto
        created_by: user.id,
        approved_by: user.id,
        approved_at: new Date().toISOString(),
      };

      if (isEditing) {
        // Atualizar transação existente
        const { error } = await supabase
          .from("financial_transactions")
          .update(payload)
          .eq("id", editingTransaction.id);

        if (error) throw error;
      } else {
        // Criar nova transação
        const { error } = await supabase
          .from("financial_transactions")
          .insert([payload]);

        if (error) throw error;
      }

      // Sucesso!
      onSuccess();
      onClose();
      resetForm();
    } catch (error: any) {
      console.error("Error saving transaction:", error);
      setError(error.message || "Erro ao salvar transação");
    } finally {
      setLoading(false);
    }
  }

  // ================================================================
  // RENDER
  // ================================================================

  const selectedCategory = categories.find(
    (c) => c.code === formData.category_code,
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Editar Transação" : "Nova Transação"}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Edite os dados da transação e anexe comprovantes."
              : "Adicione uma nova receita ou despesa manualmente."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Categoria */}
          <div className="space-y-2">
            <Label htmlFor="category">Categoria *</Label>
            <Select
              value={formData.category_code}
              onValueChange={(value) =>
                handleInputChange("category_code", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                <div className="p-2 text-xs text-gray-500 font-semibold">
                  RECEITAS
                </div>
                {categories
                  .filter((c) => c.type === "RECEITA")
                  .map((category) => (
                    <SelectItem key={category.code} value={category.code}>
                      {category.code} - {category.name}
                    </SelectItem>
                  ))}
                <div className="p-2 text-xs text-gray-500 font-semibold border-t mt-2">
                  DESPESAS
                </div>
                {categories
                  .filter((c) => c.type === "DESPESA")
                  .map((category) => (
                    <SelectItem key={category.code} value={category.code}>
                      {category.code} - {category.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            {selectedCategory && (
              <p className="text-xs text-gray-500">
                Tipo:{" "}
                {selectedCategory.type === "RECEITA"
                  ? "💰 Receita"
                  : "💸 Despesa"}
              </p>
            )}
          </div>

          {/* Descrição */}
          <div className="space-y-2">
            <Label htmlFor="description">Descrição *</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Ex: Taxa de condomínio - Outubro/2025"
              maxLength={200}
            />
          </div>

          {/* Valor e Datas */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Valor (R$) *</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                min="0"
                value={formData.amount}
                onChange={(e) => handleInputChange("amount", e.target.value)}
                placeholder="0.00"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reference_month">Mês Referência *</Label>
              <Input
                id="reference_month"
                type="date"
                value={formData.reference_month}
                onChange={(e) =>
                  handleInputChange("reference_month", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="payment_date">Data Pagamento</Label>
              <Input
                id="payment_date"
                type="date"
                value={formData.payment_date}
                onChange={(e) =>
                  handleInputChange("payment_date", e.target.value)
                }
              />
            </div>
          </div>

          {/* Notas */}
          <div className="space-y-2">
            <Label htmlFor="notes">Observações</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              placeholder="Informações adicionais..."
              rows={3}
            />
          </div>

          {/* Upload de Documento */}
          <div className="space-y-2">
            <Label htmlFor="document">Comprovante (PDF, JPG, PNG)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="document"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                disabled={uploadingFile}
              />
              {uploadingFile && <Loader2 className="h-4 w-4 animate-spin" />}
            </div>
            {formData.document_file && (
              <p className="text-xs text-green-600 flex items-center gap-1">
                <Check className="h-3 w-3" />
                {formData.document_file.name}
              </p>
            )}
            {formData.document_url && !formData.document_file && (
              <p className="text-xs text-blue-600">
                <a
                  href={formData.document_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver documento anexado
                </a>
              </p>
            )}
            <p className="text-xs text-gray-500">
              ⚠️ Comprovante é obrigatório para despesas acima de R$ 500
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Footer */}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading || uploadingFile}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Salvando...
                </>
              ) : (
                <>{isEditing ? "Salvar Alterações" : "Adicionar Transação"}</>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
