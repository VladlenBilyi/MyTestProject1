export const FETCHABLE_KEY = "@@state";
export const ERROR_KEY = "error";

type FetchState =  "initial" | "success" | "failed" | "awaiting";

export interface Fetchable {
  [FETCHABLE_KEY]: FetchState;
}

export interface WithError<T> {
  [ERROR_KEY]: T;
}

export const createFetchableInitialState = <S>(state: S): S & Fetchable => ({
  "@@state": "initial",
  ...state
});

export const started = (): Fetchable => ({ [FETCHABLE_KEY]: "awaiting" });
export const success = (): Fetchable => ({ [FETCHABLE_KEY]: "success" });
export const failed = (): Fetchable => ({ [FETCHABLE_KEY]: "failed" });
