import { ThemeName } from "../../themes/themes";

import { TypeKeys } from "./actions.constants";

export const setTheme = (theme: ThemeName) =>
  ({
    type: TypeKeys.SET_THEME as TypeKeys.SET_THEME,
    payload: {
      theme
    }
  } as const);

export const resetThemeState = () =>
  ({
    type: TypeKeys.RESET_THEME_STATE as TypeKeys.RESET_THEME_STATE
  } as const);
