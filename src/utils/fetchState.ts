export const FETCHABLE_KEY = "@@state";

type FetchState = "initial" | "success" | "failed" | "awaiting";

export interface Fetchable {
  [FETCHABLE_KEY]: FetchState;
}

export const createFetchableInitialState = <S>(state: S): S & Fetchable => ({
  "@@state": "initial",
  ...state
});

export const started = (): Fetchable => ({ [FETCHABLE_KEY]: "awaiting" });
export const success = (): Fetchable => ({ [FETCHABLE_KEY]: "success" });
export const failed = (): Fetchable => ({ [FETCHABLE_KEY]: "failed" });

export const isFetched = (resource: Fetchable) =>
  resource[FETCHABLE_KEY] === "success";
