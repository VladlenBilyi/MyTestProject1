import { SettingsModel, SettingsState, initialState } from "./model";
import { ActionTypes, TypeKeys } from "./actions";

export const SettingsReducer = (
  state: SettingsModel = initialState,
  action: ActionTypes
): SettingsState => {
  switch (action.type) {
    case TypeKeys.SET_THEME:
      return { ...state, theme: action.payload.theme };
    default:
      return state;
  }
};
