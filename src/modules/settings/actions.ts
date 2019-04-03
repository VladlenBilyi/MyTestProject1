import { ThemeName } from "../../themes/themes";

export enum TypeKeys {
  SET_THEME = "Settings.SET_THEME",

  RESET_THEME_STATE = "Setttings.RESET_THEME_STATE"
}

export type ActionTypes = SetThemeAction | ResetThemeStateAction;

export const setTheme = (theme: ThemeName) => ({
  type: TypeKeys.SET_THEME as TypeKeys.SET_THEME,
  payload: {
    theme
  }
});

export const resetThemeState = () => ({
  type: TypeKeys.RESET_THEME_STATE as TypeKeys.RESET_THEME_STATE
});

export type SetThemeAction = ReturnType<typeof setTheme>;
export type ResetThemeStateAction = ReturnType<typeof resetThemeState>;
