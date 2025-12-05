import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import UserManagement from "./UserManagement";
import { useAuth } from "../../contexts/AuthContext";
import { useAdmin } from "../../contexts/AdminContext";

vi.mock("../../contexts/AuthContext", () => ({
  useAuth: vi.fn(),
}));

vi.mock("../../contexts/AdminContext", () => ({
  useAdmin: vi.fn(),
}));

vi.mock("../../components/ui/Modal", () => ({
  __esModule: true,
  default: ({ isOpen, children, title }: any) =>
    isOpen ? (
      <div data-testid="modal">
        <h2>{title}</h2>
        {children}
      </div>
    ) : null,
}));

const toastMock = vi.hoisted(() => ({
  loading: vi.fn().mockReturnValue("toast-id"),
  success: vi.fn(),
  error: vi.fn(),
}));

vi.mock("react-hot-toast", () => ({
  __esModule: true,
  default: toastMock,
}));

const supabaseMock = vi.hoisted(() => ({
  from: vi.fn(),
  functions: {
    invoke: vi.fn(),
  },
}));

let usersResponse: any[] = [];
let lastUpdatePayload: Record<string, unknown> | null = null;
let lastUpdateEqMock: ReturnType<typeof vi.fn> | null = null;

const createQueryBuilder = () => {
  const builder: any = {
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    order: vi
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ data: usersResponse, error: null }),
      ),
    update: vi.fn().mockImplementation((payload: Record<string, unknown>) => {
      lastUpdatePayload = payload;
      const eqHandler = vi.fn().mockResolvedValue({ error: null });
      lastUpdateEqMock = eqHandler;
      return { eq: eqHandler };
    }),
    delete: vi.fn().mockReturnValue({
      eq: vi.fn().mockResolvedValue({ error: null }),
    }),
  };
  return builder;
};

vi.mock("../../lib/supabase", () => ({
  supabase: supabaseMock,
}));

const mockUseAuth = vi.mocked(useAuth);
const mockUseAdmin = vi.mocked(useAdmin);

const baseUsers = [
  {
    id: "pending-1",
    email: "pending@test.com",
    full_name: "Alice Pendências",
    role: "pending",
    unit_number: "101",
    phone: "(11) 99999-1111",
    created_at: "2024-01-01",
    condominio_id: "condo-1",
  },
  {
    id: "active-1",
    email: "ativo@test.com",
    full_name: "Bruno Ativo",
    role: "morador",
    unit_number: "202",
    phone: "(11) 99999-2222",
    created_at: "2024-01-02",
    condominio_id: "condo-1",
  },
];

describe("UserManagement", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    usersResponse = baseUsers;
    lastUpdatePayload = null;
    lastUpdateEqMock = null;
    supabaseMock.from.mockImplementation(() => createQueryBuilder());
    supabaseMock.functions.invoke.mockResolvedValue({
      data: { success: true },
      error: null,
    });
    mockUseAuth.mockReturnValue({
      user: { id: "admin-1" },
      profile: {},
      isAdmin: true,
    } as any);
    mockUseAdmin.mockReturnValue({
      selectedCondominioId: "condo-1",
    } as any);
    vi.spyOn(window, "confirm").mockReturnValue(true);
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  it("exibe pendentes por padrão e alterna para usuários ativos", async () => {
    render(<UserManagement />);

    await waitFor(() =>
      expect(supabaseMock.from).toHaveBeenCalledWith("users"),
    );

    expect(await screen.findByText("Alice Pendências")).toBeInTheDocument();
    expect(screen.queryByText("Bruno Ativo")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Ativos/ }));

    expect(await screen.findByText("Bruno Ativo")).toBeInTheDocument();
    expect(screen.queryByText("Alice Pendências")).not.toBeInTheDocument();
  });

  it("aprova usuário pendente quando confirmação é aceita", async () => {
    render(<UserManagement />);

    await screen.findByText("Alice Pendências");

    await user.click(screen.getByRole("button", { name: /Aprovar/ }));

    await waitFor(() =>
      expect(toastMock.success).toHaveBeenCalledWith("Usuário aprovado!", {
        id: "toast-id",
      }),
    );

    expect(screen.getByText(/Nenhum registro encontrado/)).toBeInTheDocument();
  });

  it("abre modal de edição e salva alterações", async () => {
    render(<UserManagement />);

    await screen.findByText("Alice Pendências");
    await user.click(screen.getByRole("button", { name: /Ativos/ }));
    await screen.findByText("Bruno Ativo");

    await user.click(screen.getByRole("button", { name: /Editar/ }));
    const modal = await screen.findByTestId("modal");
    const nameInput = within(modal).getByDisplayValue("Bruno Ativo");
    await user.clear(nameInput);
    await user.type(nameInput, "Bruno Atualizado");

    const saveButton = screen.getByRole("button", {
      name: /Salvar Alterações/,
    });
    await user.click(saveButton);

    await waitFor(() => expect(lastUpdatePayload).not.toBeNull());
    expect(lastUpdatePayload).toMatchObject({
      full_name: "Bruno Atualizado",
    });
    expect(lastUpdateEqMock).toHaveBeenCalledWith("id", "active-1");
    expect(toastMock.success).toHaveBeenCalledWith("Dados atualizados!", {
      id: "toast-id",
    });
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });
});
