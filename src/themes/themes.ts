export type ThemeName = "light" | "dark";

interface Palette {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  shadow: string;
}
interface ElementPalette {
  primary: string;
  secondary: string;
  inverted: string;
  hover?: string;
}

export interface ElementsPalette {
  text: ElementPalette;
  background: ElementPalette;
  button: ElementPalette;
}

export interface Theme {
  palette: {
    main: Palette;
    elements: ElementsPalette;
  };
}

export const themes: Record<ThemeName, Theme> = {
  light: {
    palette: {
      elements: {
        text: {
          primary: "#111",
          secondary: "#666",
          inverted: "#CCC"
        },
        background: {
          primary: "#EEE",
          secondary: "#AAA",
          inverted: "#222"
        },
        button: {
          primary: "#AAA",
          secondary: "#EEE",
          inverted: "#222",
          hover: "#BBB"
        }
      },
      main: {
        primary: "whitesmoke",
        secondary: "grey",
        success: "green",
        warning: "crimson",
        shadow: "#BBB"
      }
    }
  },
  dark: {
    palette: {
      elements: {
        text: {
          primary: "#DDD",
          secondary: "#AAA",
          inverted: "#111"
        },
        background: {
          primary: "#222",
          secondary: "#333",
          inverted: "#FFF"
        },
        button: {
          primary: "#333",
          secondary: "#222",
          inverted: "#FFF",
          hover: "#444"
        }
      },
      main: {
        primary: "whitesmoke",
        secondary: "grey",
        success: "lightgreen",
        warning: "crimson",
        shadow: "black"
      }
    }
  }
};

export const defaultTheme: ThemeName = "light";

export const applyTheme = (themeName: ThemeName = defaultTheme) => {
  const theme = themes[themeName];

  for (const colorType in theme.palette.main) {
    document.documentElement.style.setProperty(
      `--themed-main-${colorType}-color`,
      theme.palette.main[colorType as keyof Palette]
    );
  }

  for (const el in theme.palette.elements) {
    for (const colorType in theme.palette.elements[
      el as keyof ElementsPalette
    ]) {
      const value =
        theme.palette.elements[el as keyof ElementsPalette][
          colorType as keyof ElementPalette
        ];
      if (value) {
        document.documentElement.style.setProperty(
          `--themed-${el}-${colorType}-color`,
          value
        );
      }
    }
  }
};
