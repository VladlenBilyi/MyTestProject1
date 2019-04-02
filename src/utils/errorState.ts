export const ERROR_KEY = "error";

export interface WithError<T> {
  [ERROR_KEY]: T;
}