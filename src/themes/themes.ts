export type ThemeName = "light" | "dark";

export interface Palette {
  primary: string;
}

export interface Theme {
  palette: Palette;
}

export const themes: Record<ThemeName, Theme> = {
  light: {
    palette: {
      primary: `var(--light)`
    }
  },
  dark: {
    palette: {
      primary: `var(--dark)`
    }
  }
};