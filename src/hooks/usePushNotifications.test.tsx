import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { usePushNotifications } from "./usePushNotifications";
import * as AuthContext from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";
import {
  enqueueTableMock,
  resetSupabaseTableQueues,
  applySupabaseFromMock,
} from "../test/utils/supabaseTableMock";

vi.mock("../contexts/AuthContext");
vi.mock("../lib/supabase");

const supabaseFromMock = supabase.from as unknown as vi.Mock;

const alertMock = vi.fn();
const requestPermissionMock = vi.fn();

const setNotificationEnv = (permission: NotificationPermission = "default") => {
  requestPermissionMock.mockResolvedValue(permission);
  const notificationStub = {
    permission,
    requestPermission: requestPermissionMock,
  };
  Object.defineProperty(global, "Notification", {
    writable: true,
    value: notificationStub,
  });
  (window as any).Notification = notificationStub;
};

const mockRegistration = () => {
  const subscription = {
    endpoint: "https://push.test/sub",
    toJSON: () => ({
      endpoint: "https://push.test/sub",
      keys: { p256dh: "k", auth: "a" },
    }),
    unsubscribe: vi.fn().mockResolvedValue(true),
  };
  const registration = {
    pushManager: {
      getSubscription: vi.fn().mockResolvedValue(null),
      subscribe: vi.fn().mockResolvedValue(subscription),
    },
  };
  Object.defineProperty(window.navigator, "serviceWorker", {
    value: { ready: Promise.resolve(registration) },
    configurable: true,
  });
  Object.defineProperty(window.navigator, "userAgent", {
    value: "vitest-agent",
    configurable: true,
  });
  return { registration, subscription };
};

describe("usePushNotifications", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    alertMock.mockReset();
    requestPermissionMock.mockReset();
    resetSupabaseTableQueues();
    applySupabaseFromMock(supabaseFromMock);
    (window as any).alert = alertMock;
    setNotificationEnv("default");
    mockRegistration();
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      user: { id: "user-1" },
    } as any);
  });

  it("assina notificações quando permissão é concedida", async () => {
    setNotificationEnv("granted");
    const { registration } = mockRegistration();
    enqueueTableMock("push_subscriptions", { insertResult: { error: null } });

    const { result } = renderHook(() => usePushNotifications());
    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      await result.current.subscribe();
    });

    expect(registration.pushManager.subscribe).toHaveBeenCalledWith(
      expect.objectContaining({ userVisibleOnly: true }),
    );
    expect(supabaseFromMock).toHaveBeenCalledWith("push_subscriptions");
    expect(result.current.isSubscribed).toBe(true);
  });

  it("alerta quando permissão é negada", async () => {
    setNotificationEnv("denied");
    const { result } = renderHook(() => usePushNotifications());
    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      await result.current.subscribe();
    });

    expect(alertMock).toHaveBeenCalledWith(
      "Não foi possível ativar as notificações.",
    );
    expect(result.current.isSubscribed).toBe(false);
  });

  it("ignora erro de duplicidade ao salvar assinatura", async () => {
    setNotificationEnv("granted");
    enqueueTableMock("push_subscriptions", {
      insertResult: { error: { code: "23505" } as any },
    });

    const { result } = renderHook(() => usePushNotifications());
    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      await result.current.subscribe();
    });

    expect(result.current.isSubscribed).toBe(true);
  });

  it("cancela assinatura existente", async () => {
    setNotificationEnv("granted");
    const { subscription, registration } = mockRegistration();
    registration.pushManager.getSubscription.mockResolvedValue(subscription);
    enqueueTableMock("push_subscriptions", { insertResult: { error: null } });

    const { result } = renderHook(() => usePushNotifications());
    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      await result.current.subscribe();
    });

    alertMock.mockClear();

    await act(async () => {
      await result.current.unsubscribe();
    });

    expect(subscription.unsubscribe).toHaveBeenCalled();
    expect(result.current.isSubscribed).toBe(false);
    expect(alertMock).toHaveBeenCalledWith("Notificações desativadas.");
  });
});
