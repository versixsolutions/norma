import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { AuthProvider, useAuth } from "./AuthContext";
import { supabase } from "../lib/supabase";
import type { Session, User } from "@supabase/supabase-js";
import React from "react";

// Mock Supabase
vi.mock("../lib/supabase", () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(),
      signInWithPassword: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
    },
    from: vi.fn(),
  },
}));

// Wrapper component
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe("AuthContext", () => {
  const mockUser: User = {
    id: "user-123",
    email: "test@example.com",
    aud: "authenticated",
    app_metadata: {},
    user_metadata: {},
    created_at: "2024-01-01",
  } as User;

  const mockSession: Session = {
    user: mockUser,
    access_token: "mock-token",
    refresh_token: "mock-refresh",
    expires_in: 3600,
    expires_at: Date.now() / 1000 + 3600,
    token_type: "bearer",
  } as Session;

  const mockProfile = {
    id: "user-123",
    email: "test@example.com",
    full_name: "João Silva",
    first_name: "João",
    last_name: "Silva",
    role: "morador",
    phone: "11999999999",
    unit_number: "101",
    block: "A",
    resident_type: "proprietario",
    is_whatsapp: true,
    condominio_id: "condo-123",
    condominios: { name: "Condomínio Teste" },
  };

  let unsubscribe: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    unsubscribe = vi.fn();
    vi.mocked(supabase.auth.onAuthStateChange).mockReturnValue({
      data: { subscription: { unsubscribe } },
    } as any);

    // Reset localStorage
    localStorage.clear();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("Initial Loading", () => {
    it("should start with loading state", () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: null },
        error: null,
      } as any);

      const { result } = renderHook(() => useAuth(), { wrapper });
      expect(result.current.loading).toBe(true);
    });

    it("should load session and profile on mount", async () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      } as any);

      const mockFrom = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: mockProfile,
              error: null,
            }),
          }),
        }),
      });
      vi.mocked(supabase.from).mockImplementation(mockFrom);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.user).toEqual(mockUser);
      expect(result.current.session).toEqual(mockSession);
      expect(result.current.profile?.email).toBe("test@example.com");
      expect(result.current.profile?.condominio_name).toBe("Condomínio Teste");
    });

    it("should handle no session on mount", async () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: null },
        error: null,
      } as any);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.user).toBeNull();
      expect(result.current.session).toBeNull();
      expect(result.current.profile).toBeNull();
    });
  });

  describe("signIn", () => {
    it("should call signInWithPassword with correct credentials", async () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: null },
        error: null,
      } as any);

      vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
        data: { user: mockUser, session: mockSession },
        error: null,
      } as any);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      await act(async () => {
        await result.current.signIn("test@example.com", "password123");
      });

      expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
    });

    it("should throw error on failed signIn", async () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: null },
        error: null,
      } as any);

      const mockError = new Error("Invalid credentials");
      vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
        data: { user: null, session: null },
        error: mockError,
      } as any);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      await act(async () => {
        await expect(
          result.current.signIn("wrong@example.com", "wrongpass"),
        ).rejects.toThrow("Invalid credentials");
      });
    });
  });

  describe("signUp", () => {
    it("should call signUp with correct user data", async () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: null },
        error: null,
      } as any);

      vi.mocked(supabase.auth.signUp).mockResolvedValue({
        data: { user: mockUser, session: mockSession },
        error: null,
      } as any);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      const signUpData = {
        email: "new@example.com",
        password: "password123",
        firstName: "Maria",
        lastName: "Santos",
        condominioId: "condo-456",
        phone: "11988888888",
        unitNumber: "202",
        block: "B",
        residentType: "inquilino",
        isWhatsapp: true,
      };

      await act(async () => {
        await result.current.signUp(signUpData);
      });

      expect(supabase.auth.signUp).toHaveBeenCalledWith({
        email: "new@example.com",
        password: "password123",
        options: {
          data: {
            full_name: "Maria Santos",
            first_name: "Maria",
            last_name: "Santos",
            condominio_id: "condo-456",
            phone: "11988888888",
            unit_number: "202",
            block: "B",
            resident_type: "inquilino",
            is_whatsapp: true,
            role: "pending",
          },
        },
      });
    });

    it("should throw error on failed signUp", async () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: null },
        error: null,
      } as any);

      const mockError = new Error("Email already registered");
      vi.mocked(supabase.auth.signUp).mockResolvedValue({
        data: { user: null, session: null },
        error: mockError,
      } as any);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      const signUpData = {
        email: "duplicate@example.com",
        password: "password123",
        firstName: "Pedro",
        lastName: "Costa",
        condominioId: "condo-789",
        phone: "11977777777",
        unitNumber: "303",
        block: "C",
        residentType: "proprietario",
        isWhatsapp: false,
      };

      await act(async () => {
        await expect(result.current.signUp(signUpData)).rejects.toThrow(
          "Email already registered",
        );
      });
    });
  });

  describe("signOut", () => {
    it("should clear session and profile on signOut", async () => {
      let onAuthCallback: (
        event: string,
        session: Session | null,
      ) => void = () => {};

      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      } as any);

      vi.mocked(supabase.auth.onAuthStateChange).mockImplementation(
        (callback) => {
          onAuthCallback = callback;
          return {
            data: { subscription: { unsubscribe } },
          } as any;
        },
      );

      const mockFrom = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: mockProfile,
              error: null,
            }),
          }),
        }),
      });
      vi.mocked(supabase.from).mockImplementation(mockFrom);

      vi.mocked(supabase.auth.signOut).mockImplementation(async () => {
        // Simulate auth state change event
        onAuthCallback("SIGNED_OUT", null);
        return { error: null } as any;
      });

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      // Verify user is logged in
      expect(result.current.user).toBeTruthy();
      expect(result.current.profile).toBeTruthy();

      await act(async () => {
        await result.current.signOut();
      });

      await waitFor(() => {
        expect(result.current.user).toBeNull();
      });

      expect(result.current.session).toBeNull();
      expect(result.current.profile).toBeNull();
      expect(result.current.authError).toBeNull();
      expect(supabase.auth.signOut).toHaveBeenCalled();
    });

    it("should handle signOut errors gracefully", async () => {
      let onAuthCallback: (
        event: string,
        session: Session | null,
      ) => void = () => {};

      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      } as any);

      vi.mocked(supabase.auth.onAuthStateChange).mockImplementation(
        (callback) => {
          onAuthCallback = callback;
          return {
            data: { subscription: { unsubscribe } },
          } as any;
        },
      );

      const mockFrom = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: mockProfile,
              error: null,
            }),
          }),
        }),
      });
      vi.mocked(supabase.from).mockImplementation(mockFrom);

      const mockError = new Error("Network error");
      vi.mocked(supabase.auth.signOut).mockImplementation(async () => {
        // Even with error, simulate state change (signOut clears state in finally block)
        onAuthCallback("SIGNED_OUT", null);
        return { error: mockError } as any;
      });

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      // Should not throw, just clear state
      await act(async () => {
        await result.current.signOut();
      });

      await waitFor(() => {
        expect(result.current.user).toBeNull();
      });

      expect(result.current.profile).toBeNull();
    });
  });

  describe("Role Detection", () => {
    it("should detect admin role correctly", async () => {
      const adminProfile = { ...mockProfile, role: "admin" };

      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      } as any);

      const mockFrom = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: adminProfile,
              error: null,
            }),
          }),
        }),
      });
      vi.mocked(supabase.from).mockImplementation(mockFrom);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.isAdmin).toBe(true);
      expect(result.current.isSindico).toBe(false);
      expect(result.current.canManage).toBe(true);
    });

    it("should detect sindico role correctly", async () => {
      const sindicoProfile = { ...mockProfile, role: "sindico" };

      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      } as any);

      const mockFrom = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: sindicoProfile,
              error: null,
            }),
          }),
        }),
      });
      vi.mocked(supabase.from).mockImplementation(mockFrom);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.isSindico).toBe(true);
      expect(result.current.isAdmin).toBe(false);
      expect(result.current.canManage).toBe(true);
    });

    it("should detect sub_sindico role correctly", async () => {
      const subSindicoProfile = { ...mockProfile, role: "sub_sindico" };

      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      } as any);

      const mockFrom = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: subSindicoProfile,
              error: null,
            }),
          }),
        }),
      });
      vi.mocked(supabase.from).mockImplementation(mockFrom);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.isSubSindico).toBe(true);
      expect(result.current.canManage).toBe(true);
    });

    it("should detect morador role correctly", async () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      } as any);

      const mockFrom = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: mockProfile,
              error: null,
            }),
          }),
        }),
      });
      vi.mocked(supabase.from).mockImplementation(mockFrom);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.isMorador).toBe(true);
      expect(result.current.canManage).toBe(false);
    });

    it("should detect pending role as morador", async () => {
      const pendingProfile = { ...mockProfile, role: "pending" };

      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      } as any);

      const mockFrom = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: pendingProfile,
              error: null,
            }),
          }),
        }),
      });
      vi.mocked(supabase.from).mockImplementation(mockFrom);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.isMorador).toBe(true);
      expect(result.current.canManage).toBe(false);
    });
  });

  describe("Data Integrity Error Handling", () => {
    it("should handle missing profile with auto-logout", async () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      } as any);

      const mockError = new Error("Profile not found");
      const mockFrom = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockRejectedValue(mockError),
          }),
        }),
      });
      vi.mocked(supabase.from).mockImplementation(mockFrom);

      vi.mocked(supabase.auth.signOut).mockResolvedValue({
        error: null,
      } as any);

      const consoleSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      // Should have logged error
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining("Erro de Integridade"),
        mockError,
      );

      // Should have set authError
      expect(result.current.authError).toBe(
        "Perfil de usuário não encontrado. Desconectando...",
      );

      // Should have cleared profile
      expect(result.current.profile).toBeNull();

      // Should have called signOut
      expect(supabase.auth.signOut).toHaveBeenCalled();

      consoleSpy.mockRestore();
    });
  });

  describe("Auth State Change Listener", () => {
    it("should update state when auth state changes", async () => {
      let onAuthCallback: (
        event: string,
        session: Session | null,
      ) => void = () => {};

      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: null },
        error: null,
      } as any);

      vi.mocked(supabase.auth.onAuthStateChange).mockImplementation(
        (callback) => {
          onAuthCallback = callback;
          return {
            data: { subscription: { unsubscribe } },
          } as any;
        },
      );

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      // Initially no session
      expect(result.current.session).toBeNull();

      // Simulate login event
      const mockFrom = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: mockProfile,
              error: null,
            }),
          }),
        }),
      });
      vi.mocked(supabase.from).mockImplementation(mockFrom);

      await act(async () => {
        onAuthCallback("SIGNED_IN", mockSession);
      });

      await waitFor(() => {
        expect(result.current.session).toEqual(mockSession);
      });

      // Simulate logout event
      await act(async () => {
        onAuthCallback("SIGNED_OUT", null);
      });

      await waitFor(() => {
        expect(result.current.session).toBeNull();
        expect(result.current.profile).toBeNull();
        expect(result.current.user).toBeNull();
      });
    });

    it("should unsubscribe on unmount", async () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: null },
        error: null,
      } as any);

      const { unmount } = renderHook(() => useAuth(), { wrapper });

      unmount();

      expect(unsubscribe).toHaveBeenCalled();
    });
  });

  describe("useAuth Hook Validation", () => {
    it("should throw error when used outside AuthProvider", () => {
      // Suppress console.error for this test
      const consoleSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      expect(() => {
        renderHook(() => useAuth());
      }).toThrow("useAuth must be used within an AuthProvider");

      consoleSpy.mockRestore();
    });
  });
});
