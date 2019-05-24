import { AuthenticationError } from "./model";
import { TypeKeys } from "./actions.constants";

export const loginStarted = () =>
  ({
    type: TypeKeys.AUTHENTICATION_LOGIN_STARTED
  } as const);

export const loginSuccess = () =>
  ({
    type: TypeKeys.AUTHENTICATION_LOGIN_SUCCESS
  } as const);

export const loginFailed = (error: AuthenticationError) =>
  ({
    type: TypeKeys.AUTHENTICATION_LOGIN_FAILED,
    error
  } as const);

export const setToken = (token: string) =>
  ({
    type: TypeKeys.AUTHENTICATION_SET_TOKEN,
    payload: {
      token
    }
  } as const);

export const resetState = () =>
  ({
    type: TypeKeys.AUTHENTICATION_RESET_STATE
  } as const);
