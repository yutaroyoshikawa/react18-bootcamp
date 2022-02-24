import { createStitches } from "@stitches/core";

type Theme = {
  colors: {
    background: string;
  };
};

export const { getCssText, css, globalCss, createTheme } = createStitches();

export const lightTheme = createTheme<Theme, string>({
  colors: {
    background: "#FFF",
  },
});

export const darkTheme = createTheme<Theme, string>({
  colors: {
    background: "#000",
  },
});

export const lightGlobalStyles = globalCss({
  body: {
    backgroundColor: "#FFF",
  },
});

export const darkGlobalStyles = globalCss({
  body: {
    backgroundColor: "#000",
  },
});
