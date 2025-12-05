import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import ChamadosManagement from "./ChamadosManagement";
import { useAdmin } from "../../contexts/AdminContext";

vi.mock("../../contexts/AdminContext", () => ({
  useAdmin: vi.fn(),
}));

vi.mock("../../components/ui/Modal", () => ({
  __esModule: true,
  default: ({ isOpen, children }: any) =>
    isOpen ? <div data-testid="modal">{children}</div> : null,
}));

const toastMock = vi.hoisted(() => ({
  success: vi.fn(),
  error: vi.fn(),
}));

vi.mock("react-hot-toast", () => ({
  __esModule: true,
  default: toastMock,
}));

const supabaseMock = vi.hoisted(() => ({
  from: vi.fn(),
}));

let chamadosResponse: any[] = [];
let lastUpdatePayload: Record<string, unknown> | null = null;
let lastUpdateEqMock: ReturnType<typeof vi.fn> | null = null;

const createQueryBuilder = () => {
  const builder: any = {
    select: vi.fn().mockReturnThis(),
    order: vi
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ data: chamadosResponse, error: null }),
      ),
    update: vi.fn().mockImplementation((payload: Record<string, unknown>) => {
      lastUpdatePayload = payload;
      const eqHandler = vi.fn().mockResolvedValue({ error: null });
      lastUpdateEqMock = eqHandler;
      return { eq: eqHandler };
    }),
  };
  return builder;
};

vi.mock("../../lib/supabase", () => ({
  supabase: supabaseMock,
}));

const mockUseAdmin = vi.mocked(useAdmin);

const baseChamados = [
  {
    id: "chamado-1",
    subject: "Lâmpada queimada",
    description: "Corredor escuro",
    status: "aberto",
    response: null,
    internal_notes: null,
    created_at: "2024-05-01T10:00:00Z",
    updated_at: null,
    closed_at: null,
    author: {
      full_name: "João Teste",
      email: "joao@test.com",
    },
  },
  {
    id: "chamado-2",
    subject: "Portão falhando",
    description: "Motor intermitente",
    status: "resolvido",
    response: "Troca agendada",
    internal_notes: null,
    created_at: "2024-05-02T10:00:00Z",
    updated_at: null,
    closed_at: null,
    author: {
      full_name: "Maria Teste",
      email: "maria@test.com",
    },
  },
];

describe("ChamadosManagement", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    chamadosResponse = baseChamados;
    lastUpdatePayload = null;
    lastUpdateEqMock = null;
    supabaseMock.from.mockImplementation(() => createQueryBuilder());
    mockUseAdmin.mockReturnValue({ selectedCondominioId: "condo-1" } as any);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza lista e aplica filtro por status", async () => {
    render(<ChamadosManagement />);

    expect(await screen.findByText("Lâmpada queimada")).toBeInTheDocument();
    expect(screen.getByText("Portão falhando")).toBeInTheDocument();

    const filterButton = screen.getByRole("button", { name: "🟢 Resolvido" });
    await user.click(filterButton);

    expect(screen.getByText("Portão falhando")).toBeInTheDocument();
    expect(screen.queryByText("Lâmpada queimada")).not.toBeInTheDocument();
  });

  it("abre modal e salva atualização do chamado", async () => {
    render(<ChamadosManagement />);

    const card = await screen.findByText("Lâmpada queimada");
    await user.click(card);

    expect(screen.getByTestId("modal")).toBeInTheDocument();

    const responseField = screen.getByPlaceholderText(
      "Escreva sua resposta aqui...",
    );
    await user.type(responseField, "Resposta registrada");

    await user.click(screen.getByRole("button", { name: /Salvar Alterações/ }));

    await waitFor(() => expect(lastUpdatePayload).not.toBeNull());
    expect(lastUpdatePayload).toMatchObject({
      response: "Resposta registrada",
    });
    expect(lastUpdateEqMock).toHaveBeenCalledWith("id", "chamado-1");
    expect(toastMock.success).toHaveBeenCalledWith(
      "✅ Chamado atualizado com sucesso!",
    );
  });
});
