export type PromiseType<T extends PromiseLike<unknown>> = T extends PromiseLike<
  infer P
>
  ? P
  : never;
