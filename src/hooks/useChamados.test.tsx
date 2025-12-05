import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor, act } from "@testing-library/react";
import { useChamados } from "./useChamados";
import * as AuthContext from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";
import {
  createQueryBuilder,
  enqueueTableMock,
  resetSupabaseTableQueues,
  applySupabaseFromMock,
} from "../test/utils/supabaseTableMock";

const toastSpy = vi.hoisted(() => ({
  success: vi.fn(),
  error: vi.fn(),
  info: vi.fn(),
}));

vi.mock("react-hot-toast", () => ({
  default: toastSpy,
}));

vi.mock("../contexts/AuthContext");
vi.mock("../lib/supabase");

describe("useChamados", () => {
  const supabaseFromMock = supabase.from as unknown as vi.Mock;
  const supabaseChannelMock = vi.fn();
  (supabase as any).channel = supabaseChannelMock;

  let channelHandlers: Array<(payload: any) => void>;
  let channelInstance: any;
  let subscription: { unsubscribe: ReturnType<typeof vi.fn> };

  const setupChannel = () => {
    channelHandlers = [];
    subscription = {
      unsubscribe: vi.fn(),
    };
    channelInstance = {
      on: vi.fn().mockImplementation((_event, _filter, handler) => {
        channelHandlers.push(handler);
        return channelInstance;
      }),
      subscribe: vi.fn().mockReturnValue(subscription),
      unsubscribe: subscription.unsubscribe,
    };
    supabaseChannelMock.mockReturnValue(channelInstance);
  };

  const emitRealtime = (payload: any) => {
    channelHandlers.forEach((handler) => handler(payload));
  };

  beforeEach(() => {
    vi.clearAllMocks();
    Object.values(toastSpy).forEach((fn) => fn.mockReset());
    resetSupabaseTableQueues();
    applySupabaseFromMock(supabaseFromMock);
    supabaseChannelMock.mockReset();
    setupChannel();

    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: { id: "user-1", email: "user@teste.com" },
    } as any);
  });

  it("carrega chamados iniciais e inicia canal em tempo real", async () => {
    const chamados = [
      {
        id: "chamado-1",
        user_id: "user-1",
        subject: "Dúvida",
        description: "Qual o horário da piscina?",
        status: "aberto",
        response: null,
        created_at: "2025-01-10T10:00:00Z",
        updated_at: null,
        closed_at: null,
      },
    ];
    enqueueTableMock("chamados", {
      orderResult: { data: chamados, error: null },
    });

    const { result } = renderHook(() => useChamados());
    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.chamados).toEqual(chamados);
    expect(supabaseChannelMock).toHaveBeenCalledWith("chamados-changes");
  });

  it("sincroniza inserções recebidas pelo canal", async () => {
    enqueueTableMock("chamados", { orderResult: { data: [], error: null } });
    const { result } = renderHook(() => useChamados());
    await waitFor(() => expect(result.current.loading).toBe(false));

    const novoChamado = {
      id: "chamado-2",
      user_id: "user-1",
      subject: "Manutenção",
      description: "Lâmpada queimada",
      status: "aberto",
      response: null,
      created_at: "2025-01-11T12:00:00Z",
      updated_at: null,
      closed_at: null,
    };

    await act(async () => {
      emitRealtime({ eventType: "INSERT", new: novoChamado, old: null });
      await Promise.resolve();
    });

    expect(result.current.chamados[0]).toEqual(novoChamado);
    expect(toastSpy.success).toHaveBeenCalledWith(
      "✅ Chamado criado com sucesso!",
    );
  });

  it("impede criação de chamado sem usuário logado", async () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({ user: null } as any);

    const { result } = renderHook(() => useChamados());
    await waitFor(() => expect(result.current.loading).toBe(false));

    let success = true;
    await act(async () => {
      success = await result.current.criarChamado({
        subject: "Teste",
        description: "Sem login",
      });
    });

    expect(success).toBe(false);
    expect(toastSpy.error).toHaveBeenCalledWith("❌ Você precisa estar logado");
  });

  it("atualiza status e emite toast de sucesso", async () => {
    enqueueTableMock("chamados", { orderResult: { data: [], error: null } });
    const updateBuilder = createQueryBuilder();
    enqueueTableMock("chamados", updateBuilder);

    const { result } = renderHook(() => useChamados());
    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      await result.current.atualizarStatus("chamado-1", "em_andamento");
    });

    expect(updateBuilder.update).toHaveBeenCalledWith(
      expect.objectContaining({ status: "em_andamento" }),
    );
    expect(toastSpy.success).toHaveBeenCalledWith(
      "✅ Status atualizado para em_andamento",
    );
  });

  it("fecha chamado registrando timestamps", async () => {
    enqueueTableMock("chamados", { orderResult: { data: [], error: null } });
    const closeBuilder = createQueryBuilder();
    enqueueTableMock("chamados", closeBuilder);

    const { result } = renderHook(() => useChamados());
    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      await result.current.fecharChamado("chamado-9");
    });

    expect(closeBuilder.update).toHaveBeenCalled();
    expect(toastSpy.success).toHaveBeenCalledWith("✅ Chamado fechado");
  });
});
