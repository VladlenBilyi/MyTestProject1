import { started, success, failed } from "../../utils/fetchState";

import { AuthenticationState, initialState } from "./model";
import { ActionTypes, TypeKeys } from "./actions";

export const AuthenticationReducer = (
  state: AuthenticationState = initialState,
  action: ActionTypes
): AuthenticationState => {
  switch (action.type) {
    case TypeKeys.AUTHENTICATION_LOGIN_STARTED:
      return { ...state, ...started(), token: "" };
    case TypeKeys.AUTHENTICATION_LOGIN_SUCCESS:
      return { ...state, ...success() };
    case TypeKeys.AUTHENTICATION_LOGIN_FAILED:
      return { ...state, ...failed(), error: action.error };
    case TypeKeys.AUTHENTICATION_SET_TOKEN:
      return { ...state, token: action.payload.token };
    case TypeKeys.AUTHENTICATION_RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
