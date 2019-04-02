import { ThemeName, defaultTheme } from '../../themes/themes';

export interface SettingsModel {
  theme: ThemeName;
}

export type SettingsState = SettingsModel;

export const initialState: SettingsState = {
  theme: defaultTheme
};
