import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { push } from "redux-first-history";

import { Store } from "../../store";

import { getProfileSuccess, resetProfileState } from "../profile/actions";
import { resetExamsState } from "../exams/actions";
import { resetTheme } from "../settings/actionsThunk";

import {
  loginStarted,
  loginSuccess,
  loginFailed,
  setToken,
  resetState
} from "./actions";
import { postLogin } from "./api";

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

    dispatch(setToken(token));
    window.localStorage.setItem("app:token", token);

    dispatch(getProfileSuccess(profile));
    dispatch(loginSuccess());
    dispatch(push("/dashboard/profile"));
  } else {
    dispatch(loginFailed(response.error));
  }
};

export const logout = (): ThunkAction<
  void,
  Store,
  null,
  Action<string>
> => async dispatch => {
  window.localStorage.removeItem("app:token");

  dispatch(resetState());
  dispatch(resetExamsState());
  dispatch(resetProfileState());
  dispatch(resetTheme());
  dispatch(push("/"));
};
