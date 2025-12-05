import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor, act } from "@testing-library/react";
import toast from "react-hot-toast";
import { useVotacoes } from "./useVotacoes";
import * as AuthContext from "../contexts/AuthContext";

// Mock a nível de módulo
vi.mock("../contexts/AuthContext");
vi.mock("react-hot-toast");
vi.mock("../lib/supabase"); // Agora usamos o mock de __mocks__/supabase.ts

import { supabase } from "../lib/supabase";

const mockVotacoes = [
  {
    id: "vot-1",
    title: "Pauta 1",
    description: "Desc",
    start_date: "2025-11-01T00:00:00Z",
    end_date: "2025-12-30T00:00:00Z", // ativa
    total_voters: 100,
    is_secret: false,
    options: [
      { id: 1, text: "Sim" },
      { id: 2, text: "Não" },
    ],
    condominio_id: "condo-123",
  },
  {
    id: "vot-2",
    title: "Pauta 2",
    description: "Desc",
    start_date: "2025-10-01T00:00:00Z",
    end_date: "2025-11-01T00:00:00Z", // encerrada
    total_voters: 80,
    is_secret: true,
    options: [
      { id: 3, text: "A" },
      { id: 4, text: "B" },
    ],
    condominio_id: "condo-123",
  },
];

describe("useVotacoes", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Mock do useAuth
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: { id: "user-123" },
      profile: { condominio_id: "condo-123" },
    } as any);
  });

  it("carrega votações e enriquece com resultados e voto do usuário", async () => {
    // Setup mocks específicos para este teste
    const fromMock = supabase.from as vi.Mock;
    fromMock.mockImplementation((table: string) => {
      if (table === "votacoes") {
        return {
          select: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
          order: vi.fn().mockResolvedValue({ data: mockVotacoes, error: null }),
        };
      }
      if (table === "votos") {
        return {
          select: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
          maybeSingle: vi
            .fn()
            .mockResolvedValue({ data: { option_id: 1 }, error: null }),
        };
      }
      return {};
    });
    vi.mocked(supabase.rpc).mockResolvedValue({
      data: { "1": 60, "2": 40 },
      error: null,
    });

    const { result } = renderHook(() => useVotacoes("all"));

    expect(result.current.loading).toBe(true);
    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.votacoes.length).toBe(2);
    const [ativa, encerrada] = result.current.votacoes;

    expect(ativa.status).toBe("ativa");
    expect(encerrada.status).toBe("encerrada");
    expect(ativa.results).toEqual({ "1": 60, "2": 40 });
    expect(ativa.user_vote).toBe("Sim");
    expect(ativa.user_already_voted).toBe(true);
  });

  it("não faz nada se não houver profile", async () => {
    vi.mocked(AuthContext.useAuth).mockReturnValueOnce({
      user: null,
      profile: null,
    } as any);

    const { result } = renderHook(() => useVotacoes());

    // O hook é chamado, mas o useEffect não deve disparar o load
    expect(result.current.loading).toBe(true); // Estado inicial
    expect(result.current.votacoes.length).toBe(0);
    // Pequeno delay para garantir que o useEffect não foi chamado
    await new Promise((r) => setTimeout(r, 50));
    expect(supabase.from).not.toHaveBeenCalled();
  });

  it("trata erro ao carregar votações", async () => {
    const dbError = new Error("db error");
    vi.mocked(supabase.from).mockImplementation(() => ({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      order: vi.fn().mockResolvedValue({ error: dbError }),
    }));

    const { result } = renderHook(() => useVotacoes("all"));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe(dbError);
    expect(toast.error).toHaveBeenCalledWith("Erro ao carregar votações");
  });

  it("impede voto duplo e voto em votação encerrada", async () => {
    const votesByVotacao: Record<
      string,
      { data: { option_id: number } | null; error: null }
    > = {
      "vot-1": { data: { option_id: 1 }, error: null },
      "vot-2": { data: null, error: null },
    };

    vi.mocked(supabase.from).mockImplementation((table: string) => {
      if (table === "votacoes") {
        return {
          select: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
          order: vi.fn().mockResolvedValue({ data: mockVotacoes, error: null }),
        };
      }
      if (table === "votos") {
        return {
          select: () => ({
            eq: vi.fn().mockImplementation((column, value) => {
              if (column === "votacao_id") {
                const votacaoId = value as string;
                return {
                  eq: vi.fn().mockReturnValue({
                    maybeSingle: vi.fn().mockResolvedValue(
                      votesByVotacao[votacaoId] ?? {
                        data: null,
                        error: null,
                      },
                    ),
                  }),
                };
              }
              return {
                maybeSingle: vi
                  .fn()
                  .mockResolvedValue({ data: null, error: null }),
              };
            }),
          }),
        };
      }
      return {};
    });
    vi.mocked(supabase.rpc).mockResolvedValue({ data: {}, error: null });

    const { result } = renderHook(() => useVotacoes("all"));
    await waitFor(() => expect(result.current.loading).toBe(false));

    let success;
    await act(async () => {
      success = await result.current.votar("vot-1", 1);
    });
    expect(success).toBe(false);

    await act(async () => {
      success = await result.current.votar("vot-2", 3);
    });
    expect(success).toBe(false);

    expect(toast.error).toHaveBeenNthCalledWith(
      1,
      "❌ Você já votou nesta pauta! Cada pessoa vota uma única vez.",
    );
    expect(toast.error).toHaveBeenNthCalledWith(
      2,
      "❌ Esta votação foi encerrada. Não é mais possível votar.",
    );
  });

  it("registra voto e recarrega dados", async () => {
    const newVotacao = { ...mockVotacoes[0], id: "vot-3" };

    // Carga inicial: sem voto
    vi.mocked(supabase.from).mockImplementation((table: string) => {
      if (table === "votacoes") {
        return {
          select: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
          order: vi.fn().mockResolvedValue({ data: [newVotacao], error: null }),
        };
      }
      if (table === "votos") {
        return {
          select: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
          maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null }), // Não votou ainda
          insert: vi.fn().mockResolvedValue({ error: null }), // Insert com sucesso
        };
      }
      return {};
    });
    vi.mocked(supabase.rpc).mockResolvedValue({ data: {}, error: null });

    const { result } = renderHook(() => useVotacoes("all"));
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.votacoes[0].user_already_voted).toBe(false);

    // Após o voto, a recarga vai acontecer. Mockamos o novo estado.
    vi.mocked(supabase.from).mockImplementation((table: string) => {
      if (table === "votacoes") {
        return {
          select: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
          order: vi.fn().mockResolvedValue({ data: [newVotacao], error: null }),
        };
      }
      if (table === "votos") {
        return {
          select: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
          maybeSingle: vi
            .fn()
            .mockResolvedValue({ data: { option_id: 1 }, error: null }), // Agora o voto existe
          insert: vi.fn().mockResolvedValue({ error: null }),
        };
      }
      return {};
    });

    let success;
    await act(async () => {
      success = await result.current.votar("vot-3", 1);
    });

    expect(success).toBe(true);
    expect(toast.loading).toHaveBeenCalledWith("Registrando seu voto...");
    expect(toast.success).toHaveBeenCalledWith(
      "✅ Seu voto foi registrado com sucesso!",
    );

    await waitFor(() => {
      expect(result.current.votacoes[0].user_already_voted).toBe(true);
      expect(result.current.votacoes[0].user_vote).toBe("Sim");
    });
  });

  it("trata erro de voto duplicado vindo do banco de dados", async () => {
    vi.mocked(supabase.from).mockImplementation((table: string) => {
      if (table === "votacoes") {
        return {
          select: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
          order: vi
            .fn()
            .mockResolvedValue({ data: [mockVotacoes[0]], error: null }),
        };
      }
      if (table === "votos") {
        return {
          select: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
          maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null }), // UI acha que não votou
          insert: vi.fn().mockResolvedValue({ error: { code: "23505" } }), // DB acusa duplicata
        };
      }
      return {};
    });
    vi.mocked(supabase.rpc).mockResolvedValue({ data: {}, error: null });

    const { result } = renderHook(() => useVotacoes());
    await waitFor(() => expect(result.current.loading).toBe(false));

    let success;
    await act(async () => {
      success = await result.current.votar("vot-1", 1);
    });

    expect(success).toBe(false);
    expect(toast.error).toHaveBeenCalledWith("Você já votou nesta pauta!");
  });
});
