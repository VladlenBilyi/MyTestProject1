export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
