import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { applyTheme } from "../../themes/themes";
import { Store } from "../../store";

import { setTheme } from "./actions";

export const toggleTheme = (): ThunkAction<
  void,
  Store,
  null,
  Action<string>
> => async (dispatch, getState) => {
  const newTheme = getState().settings.theme === "dark" ? "light" : "dark";
  dispatch(setTheme(newTheme));
  applyTheme(newTheme);
};
