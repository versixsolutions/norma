import { vi } from "vitest";

export type QueryResult<T = any> = { data: T; error: Error | null };

export type MutationResult = { error: Error | null };

export interface BuilderOptions {
  orderResult?: QueryResult;
  singleResult?: QueryResult;
  maybeSingleResult?: QueryResult;
  thenResult?: QueryResult;
  insertResult?: MutationResult;
  updateResult?: MutationResult;
  deleteResult?: MutationResult;
  custom?: (builder: any) => void;
}

export const createQueryBuilder = (options: BuilderOptions = {}) => {
  const builder: any = {};
  let nextResult: any;

  const setNextResult = (value: any) => {
    nextResult = value;
    return builder;
  };

  const resolveNextResult = () => {
    if (nextResult !== undefined) {
      const value = nextResult;
      nextResult = undefined;
      return value;
    }
    return options.thenResult ?? { data: [], error: null };
  };

  builder.select = vi.fn().mockReturnValue(builder);
  builder.insert = vi
    .fn()
    .mockImplementation(() =>
      setNextResult(options.insertResult ?? { error: null }),
    );
  builder.update = vi
    .fn()
    .mockImplementation(() =>
      setNextResult(options.updateResult ?? { error: null }),
    );
  builder.delete = vi
    .fn()
    .mockImplementation(() =>
      setNextResult(options.deleteResult ?? { error: null }),
    );
  builder.eq = vi.fn().mockReturnValue(builder);
  builder.order = vi
    .fn()
    .mockImplementation(() =>
      setNextResult(options.orderResult ?? { data: [], error: null }),
    );
  builder.single = vi
    .fn()
    .mockImplementation(() =>
      setNextResult(options.singleResult ?? { data: null, error: null }),
    );
  builder.maybeSingle = vi
    .fn()
    .mockImplementation(() =>
      setNextResult(
        options.maybeSingleResult ??
          options.singleResult ?? { data: null, error: null },
      ),
    );
  builder.limit = vi.fn().mockReturnValue(builder);
  builder.is = vi.fn().mockReturnValue(builder);
  builder.in = vi.fn().mockReturnValue(builder);
  builder.gte = vi.fn().mockReturnValue(builder);
  builder.lte = vi.fn().mockReturnValue(builder);
  builder.then = vi.fn((onFulfilled: any, onRejected?: any) => {
    const result = Promise.resolve(resolveNextResult());
    return onRejected
      ? result.then(onFulfilled, onRejected)
      : result.then(onFulfilled);
  });

  options.custom?.(builder);
  return builder;
};

let tableQueues: Record<string, any[]> = {};

export const resetSupabaseTableQueues = () => {
  tableQueues = {};
};

export const enqueueTableMock = (
  table: string,
  builderOrOptions?: BuilderOptions | ReturnType<typeof createQueryBuilder>,
) => {
  if (!tableQueues[table]) {
    tableQueues[table] = [];
  }
  const builder =
    builderOrOptions && "select" in builderOrOptions
      ? (builderOrOptions as ReturnType<typeof createQueryBuilder>)
      : createQueryBuilder(builderOrOptions as BuilderOptions);
  tableQueues[table].push(builder);
  return builder;
};

export const applySupabaseFromMock = (supabaseFrom: vi.Mock) => {
  supabaseFrom.mockImplementation((table: string) => {
    const queue = tableQueues[table];
    if (!queue || queue.length === 0) {
      throw new Error(`No mock registered for table "${table}"`);
    }
    return queue.shift();
  });
};
