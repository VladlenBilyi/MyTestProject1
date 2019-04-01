import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { push } from "redux-first-history";

import { Store } from "../../store";

import { getProfileSuccess } from "../profile/actions";

import { postLogin } from "./api";
import { loginStarted, loginSuccess, loginFailed, setToken } from "./actions";

export const login = (
  phone: string,
  password: string
): ThunkAction<void, Store, null, Action<string>> => async dispatch => {
  dispatch(loginStarted());
  const response = await postLogin(phone, password);
  if (response.success) {
    const {
      data: { token, profile }
    } = response;
    dispatch(loginSuccess());
    dispatch(setToken(token));
    dispatch(getProfileSuccess(profile));
    dispatch(push("/dashboard/profile"));
    window.localStorage.setItem('app:token', token);
  } else {
    dispatch(loginFailed(response.error));
  }
};
