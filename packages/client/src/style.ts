import { createStitches } from "@stitches/core";

type Theme = {
  colors: {
    background: string;
  };
};

const { css, globalCss, createTheme } = createStitches();

export { css };

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

export const globalStyles = globalCss({
  body: {
    backgroundColor: "#FFF",
  },
});
