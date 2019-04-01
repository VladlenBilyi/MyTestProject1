import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { Store } from "../../store";

import { getProfile as getProfileApi } from "./api";
import {
  getProfileStarted,
  getProfileSuccess,
  getProfileFailed
} from "./actions";

export const getProfile = (): ThunkAction<
  void,
  Store,
  null,
  Action<string>
> => async (dispatch, getState) => {
  dispatch(getProfileStarted());
  const response = await getProfileApi(getState().authentication.token);
  if (response.success) {
    const { data } = response;
    dispatch(getProfileSuccess(data));
  } else {
    dispatch(getProfileFailed(response.error));
  }
};
