import { Store } from "../../store";

export const activeThemeSelector = (state: Store) => state.settings.theme;
