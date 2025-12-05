import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor, act } from "@testing-library/react";
import { useAssembleias } from "./useAssembleias";
import * as AuthContext from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";
import {
  createQueryBuilder,
  enqueueTableMock,
  resetSupabaseTableQueues,
  applySupabaseFromMock,
  type QueryResult,
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

const mockAssembleiasList = (data: any[] = [], times = 1) => {
  for (let i = 0; i < times; i += 1) {
    enqueueTableMock("assembleias", { orderResult: { data, error: null } });
  }
};

const defaultAuth = {
  user: { id: "user-123" },
  profile: { condominio_id: "condo-123" },
} as any;

const supabaseFromMock = supabase.from as unknown as vi.Mock;
const storageFromMock = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
  Object.values(toastSpy).forEach((fn) => fn.mockReset());
  resetSupabaseTableQueues();
  applySupabaseFromMock(supabaseFromMock);
  storageFromMock.mockReturnValue({
    upload: vi
      .fn()
      .mockResolvedValue({ data: { path: "mock.pdf" }, error: null }),
    getPublicUrl: vi
      .fn()
      .mockReturnValue({ data: { publicUrl: "https://files/mock.pdf" } }),
  });
  (supabase as any).storage = { from: storageFromMock };
  vi.mocked(AuthContext.useAuth).mockReturnValue(defaultAuth);
});

describe("useAssembleias", () => {
  it("carrega assembleias para o condomínio corrente", async () => {
    const lista = [
      {
        id: "asm-1",
        condominio_id: "condo-123",
        titulo: "Reunião Geral",
        data_hora: "2025-01-10T19:00:00Z",
        status: "agendada",
        edital_topicos: [],
        edital_pdf_url: null,
        ata_topicos: null,
        ata_pdf_url: null,
      },
    ];
    mockAssembleiasList(lista);

    const { result } = renderHook(() => useAssembleias());

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.assembleias).toEqual(lista);
  });

  it("impede registrar presença sem usuário autenticado", async () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: null,
      profile: null,
    } as any);
    const { result } = renderHook(() => useAssembleias());

    await waitFor(() => expect(result.current.loading).toBe(false));

    let success = true;
    await act(async () => {
      success = await result.current.registrarPresenca("asm-1");
    });

    expect(success).toBe(false);
    expect(toastSpy.error).toHaveBeenCalledWith("❌ Você precisa estar logado");
  });

  it("avisa quando a presença já foi registrada", async () => {
    mockAssembleiasList([]);
    enqueueTableMock(
      "assembleias_presencas",
      createQueryBuilder({
        singleResult: { data: { id: "presence-1" }, error: null },
      }),
    );

    const { result } = renderHook(() => useAssembleias());
    await waitFor(() => expect(result.current.loading).toBe(false));

    let success = false;
    await act(async () => {
      success = await result.current.registrarPresenca("asm-1");
    });

    expect(success).toBe(true);
    expect(toastSpy.info).toHaveBeenCalledWith("ℹ️ Presença já registrada");
  });

  it("registra presença quando não há duplicidade", async () => {
    mockAssembleiasList([]);
    enqueueTableMock(
      "assembleias_presencas",
      createQueryBuilder({ singleResult: { data: null, error: null } }),
    );
    const insertBuilder = createQueryBuilder({ insertResult: { error: null } });
    enqueueTableMock("assembleias_presencas", insertBuilder);

    const { result } = renderHook(() => useAssembleias());
    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      await result.current.registrarPresenca("asm-1");
    });

    expect(insertBuilder.insert).toHaveBeenCalledWith({
      assembleia_id: "asm-1",
      user_id: "user-123",
    });
    expect(toastSpy.success).toHaveBeenCalledWith(
      "✅ Presença registrada com sucesso!",
    );
  });

  it("impede voto duplicado na mesma pauta", async () => {
    mockAssembleiasList([]);
    enqueueTableMock(
      "assembleias_votos",
      createQueryBuilder({
        singleResult: { data: { id: "vote-1" }, error: null },
      }),
    );

    const { result } = renderHook(() => useAssembleias());
    await waitFor(() => expect(result.current.loading).toBe(false));

    let success = true;
    await act(async () => {
      success = await result.current.votar("pauta-1", "Sim");
    });

    expect(success).toBe(false);
    expect(toastSpy.error).toHaveBeenCalledWith("❌ Você já votou nesta pauta");
  });

  it("registra voto quando permitido", async () => {
    mockAssembleiasList([]);
    enqueueTableMock(
      "assembleias_votos",
      createQueryBuilder({ singleResult: { data: null, error: null } }),
    );
    const insertBuilder = createQueryBuilder({ insertResult: { error: null } });
    enqueueTableMock("assembleias_votos", insertBuilder);

    const { result } = renderHook(() => useAssembleias());
    await waitFor(() => expect(result.current.loading).toBe(false));

    let success = false;
    await act(async () => {
      success = await result.current.votar("pauta-1", "Sim");
    });

    expect(success).toBe(true);
    expect(insertBuilder.insert).toHaveBeenCalledWith({
      pauta_id: "pauta-1",
      user_id: "user-123",
      voto: "Sim",
    });
    expect(toastSpy.success).toHaveBeenCalledWith(
      "✅ Voto registrado com sucesso!",
    );
  });

  it("carrega presenças completas com dados do usuário", async () => {
    mockAssembleiasList([]);
    const presencas = [
      {
        id: "presence-1",
        assembleia_id: "asm-1",
        user_id: "user-1",
        registrado_em: "2025-02-01T10:00:00Z",
        user: { full_name: "Fulano", unit_number: "101" },
      },
    ];
    enqueueTableMock(
      "assembleias_presencas",
      createQueryBuilder({ orderResult: { data: presencas, error: null } }),
    );

    const { result } = renderHook(() => useAssembleias());
    await waitFor(() => expect(result.current.loading).toBe(false));

    const data = await result.current.loadPresencas("asm-1");
    expect(data).toEqual(presencas);
  });

  it("carrega pautas ordenadas por ordem", async () => {
    mockAssembleiasList([]);
    const pautas = [
      { id: "pauta-1", assembleia_id: "asm-1", titulo: "Orçamento", ordem: 1 },
    ];
    enqueueTableMock(
      "assembleias_pautas",
      createQueryBuilder({ orderResult: { data: pautas, error: null } }),
    );

    const { result } = renderHook(() => useAssembleias());
    await waitFor(() => expect(result.current.loading).toBe(false));

    const data = await result.current.loadPautas("asm-1");
    expect(data).toEqual(pautas);
  });

  it("calcula resultados agregando votos por opção", async () => {
    mockAssembleiasList([]);
    const pauta = {
      id: "pauta-1",
      assembleia_id: "asm-1",
      titulo: "Troca de portaria",
      opcoes: ["Sim", "Não", "Abstenção"],
    };
    const votos = [{ voto: "Sim" }, { voto: "Não" }, { voto: "Sim" }];

    enqueueTableMock(
      "assembleias_pautas",
      createQueryBuilder({ singleResult: { data: pauta, error: null } }),
    );
    enqueueTableMock(
      "assembleias_votos",
      createQueryBuilder({ thenResult: { data: votos, error: null } }),
    );

    const { result } = renderHook(() => useAssembleias());
    await waitFor(() => expect(result.current.loading).toBe(false));

    const data = await result.current.loadResultados("pauta-1");
    expect(data?.total_votos).toBe(3);
    expect(data?.resultados).toEqual([
      { opcao: "Sim", votos: 2, percentual: (2 / 3) * 100 },
      { opcao: "Não", votos: 1, percentual: (1 / 3) * 100 },
      { opcao: "Abstenção", votos: 0, percentual: 0 },
    ]);
    expect(data?.vencedor).toBe("Sim");
  });
});
