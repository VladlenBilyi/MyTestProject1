import { ThemeName } from "../../themes/themes";

export enum TypeKeys {
  SET_THEME = "Settings.SET_THEME"
}

export type ActionTypes = SetThemeAction;

export const setTheme = (theme: ThemeName) => ({
  type: TypeKeys.SET_THEME as TypeKeys.SET_THEME,
  payload: {
    theme
  }
});

export type SetThemeAction = ReturnType<typeof setTheme>;
