// src/__mocks__/supabase.ts
import { vi } from "vitest";

// Crie um mock encadeável genérico
const createChainableMock = () => {
  const mock = vi.fn().mockImplementation(() => {
    return new Proxy(mock, {
      get: (target, prop) => {
        if (prop === "then") {
          // Permite que o mock seja 'awaitable'
          return (resolve: any) => resolve({ data: [], error: null });
        }
        // Retorna o próprio mock para encadeamento
        return mock;
      },
    });
  });
  return mock;
};

const from = createChainableMock();
const rpc = vi.fn().mockResolvedValue({ data: {}, error: null });

// Mock do objeto supabase
const supabase = {
  from: from,
  rpc: rpc,
};

export { supabase, from as mockFrom, rpc as mockRpc };
