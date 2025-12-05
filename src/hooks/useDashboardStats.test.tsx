import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor, act } from "@testing-library/react";
import { useDashboardStats } from "./useDashboardStats";
import * as AuthContext from "../contexts/AuthContext";

vi.mock("../contexts/AuthContext");
vi.mock("../lib/supabase");

import { supabase } from "../lib/supabase";

type SupabaseMockOptions = {
  latestExpense?: { due_date: string } | null;
  despesas?: Array<{ amount: number }>;
  despesasError?: Error;
  votacoes?: Array<{ id: string }>;
  ocorrencias?: Array<{ status: string }>;
  comunicados?: Array<{ id: string }>;
  reads?: Array<{ comunicado_id: string }>;
  faqCount?: number;
};

const setupSupabaseMock = (options: SupabaseMockOptions = {}) => {
  const fromMock = supabase.from as vi.Mock;
  let latestExpense = options.latestExpense ?? {
    due_date: "2025-10-25T00:00:00Z",
  };
  let despesasRange = options.despesas ?? [{ amount: 120.5 }, { amount: 79.5 }];
  let votacoes = options.votacoes ?? [{ id: "v1" }, { id: "v2" }];
  let ocorrencias = options.ocorrencias ?? [
    { status: "aberto" },
    { status: "em_andamento" },
    { status: "aberto" },
  ];
  let comunicados = options.comunicados ?? [
    { id: "c1" },
    { id: "c2" },
    { id: "c3" },
  ];
  let reads = options.reads ?? [{ comunicado_id: "c1" }];
  let faqCount = options.faqCount ?? 3;
  let despesasError = options.despesasError;

  fromMock.mockImplementation((table: string) => {
    if (table === "despesas") {
      return {
        select: (columns?: string) => {
          if (columns === "due_date") {
            return {
              order: () => ({
                limit: () => ({
                  maybeSingle: vi
                    .fn()
                    .mockResolvedValue({ data: latestExpense, error: null }),
                }),
              }),
            };
          }
          return {
            gte: () => ({
              lte: despesasError
                ? vi.fn().mockRejectedValue(despesasError)
                : vi
                    .fn()
                    .mockResolvedValue({ data: despesasRange, error: null }),
            }),
          };
        },
      };
    }

    if (table === "votacoes") {
      return {
        select: () => ({
          gt: vi.fn().mockResolvedValue({ data: votacoes, error: null }),
        }),
      };
    }

    if (table === "ocorrencias") {
      return {
        select: () => ({
          in: vi.fn().mockResolvedValue({ data: ocorrencias, error: null }),
        }),
      };
    }

    if (table === "faqs") {
      return {
        select: vi.fn().mockResolvedValue({ count: faqCount }),
      };
    }

    if (table === "comunicados") {
      return {
        select: vi.fn().mockResolvedValue({ data: comunicados, error: null }),
      };
    }

    if (table === "comunicado_reads") {
      return {
        select: () => ({
          eq: vi.fn().mockResolvedValue({ data: reads, error: null }),
        }),
      };
    }

    return {
      select: vi.fn().mockResolvedValue({ data: [] }),
    };
  });

  return {
    setDespesasRange(newData: Array<{ amount: number }>) {
      despesasRange = newData;
      despesasError = undefined;
    },
  };
};

describe("useDashboardStats", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: { id: "user-123" },
      profile: { condominio_id: "condo-123" },
    } as any);
  });

  it("carrega estatísticas com sucesso", async () => {
    setupSupabaseMock();

    const { result } = renderHook(() => useDashboardStats());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.stats.despesas.totalMes).toBeCloseTo(200);
    expect(result.current.stats.votacoes.ativas).toBe(2);
    expect(result.current.stats.ocorrencias.abertas).toBe(2);
    expect(result.current.stats.comunicados.nao_lidos).toBe(2);
  });

  it("não carrega sem condominio_id", async () => {
    vi.mocked(AuthContext.useAuth).mockReturnValueOnce({
      user: { id: "user-123" },
      profile: { condominio_id: undefined },
    } as any);

    const { result } = renderHook(() => useDashboardStats());

    expect(result.current.loading).toBe(true);
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(supabase.from).not.toHaveBeenCalled();
  });

  it("exibe erro gracioso quando supabase falha", async () => {
    const dbError = new Error("db error");
    setupSupabaseMock({ despesasError: dbError });
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { result } = renderHook(() => useDashboardStats());
    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.stats.despesas.totalMes).toBe(0);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Erro ao carregar estatísticas"),
      dbError,
    );

    consoleSpy.mockRestore();
  });

  it("permite recarregar manualmente via reload", async () => {
    const mockApi = setupSupabaseMock({ despesas: [{ amount: 100 }] });

    const { result } = renderHook(() => useDashboardStats());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.stats.despesas.totalMes).toBe(100);

    mockApi.setDespesasRange([{ amount: 300 }]);

    await act(async () => {
      await result.current.reload();
    });

    await waitFor(() => {
      expect(result.current.stats.despesas.totalMes).toBe(300);
    });
  });
});
