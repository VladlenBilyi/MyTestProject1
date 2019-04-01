import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { Store } from "../../store";

import { getExams as getExamsApi, ExamsRequestParams } from "./api";
import { getExamsStarted, getExamsSuccess, getExamsFailed } from "./actions";
import { prepareServerData } from './model';

export const getExams = (
  params: ExamsRequestParams
): ThunkAction<void, Store, null, Action<string>> => async (
  dispatch,
  getState
) => {
  dispatch(getExamsStarted());
  const response = await getExamsApi(getState().authentication.token, params);
  if (response.success) {
    const { data } = response;
    dispatch(getExamsSuccess(prepareServerData(data)));
  } else {
    dispatch(getExamsFailed(response.error));
  }
};
