import { AuthenticationError } from "./model";

export enum TypeKeys {
  AUTHENTICATION_LOGIN_STARTED = "Authentication.LOGIN_STARTED",
  AUTHENTICATION_LOGIN_SUCCESS = "Authentication.LOGIN_SUCCESS",
  AUTHENTICATION_LOGIN_FAILED = "Authentication.LOGIN_FAILED",
  AUTHENTICATION_SET_TOKEN = "Authentication.SET_TOKEN",

  AUTHENTICATION_RESET_STATE = "Authentication.RESET_STATE"
}

export type ActionTypes =
  | LoginStartedAction
  | LoginSuccessAction
  | LoginFailedAction
  | SetTokenAction
  | ResetStateAction

export const loginStarted = () => ({
  type: TypeKeys.AUTHENTICATION_LOGIN_STARTED as TypeKeys.AUTHENTICATION_LOGIN_STARTED
});

export const loginSuccess = () => ({
  type: TypeKeys.AUTHENTICATION_LOGIN_SUCCESS as TypeKeys.AUTHENTICATION_LOGIN_SUCCESS
});

export const setToken = (token: string) => ({
  type: TypeKeys.AUTHENTICATION_SET_TOKEN as TypeKeys.AUTHENTICATION_SET_TOKEN,
  payload: {
    token
  }
});

export const loginFailed = (error: AuthenticationError) => ({
  type: TypeKeys.AUTHENTICATION_LOGIN_FAILED as TypeKeys.AUTHENTICATION_LOGIN_FAILED,
  error
});

export const resetState = () => ({
  type: TypeKeys.AUTHENTICATION_RESET_STATE as TypeKeys.AUTHENTICATION_RESET_STATE
});

export type LoginStartedAction = ReturnType<typeof loginStarted>;
export type LoginSuccessAction = ReturnType<typeof loginSuccess>;
export type LoginFailedAction = ReturnType<typeof loginFailed>;
export type SetTokenAction = ReturnType<typeof setToken>;
export type ResetStateAction = ReturnType<typeof resetState>;
