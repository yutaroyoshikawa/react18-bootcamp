import { createStitches } from "@stitches/core";

type Theme = {
  colors: {
    background: string;
  };
};

const {
  css,
  globalCss,
  createTheme,
  theme: lightTheme,
} = createStitches({
  theme: {
    colors: {
      background: "linear-gradient(45deg, #FFF7F0, #FFF5FF)",
    },
    fontSizes: {
      1: "16px",
      2: "18px",
      3: "24px",
      4: "36px",
    },
    fonts: {
      base: "'Noto Sans JP', sans-serif",
    },
  },
});

export { css, lightTheme };

export const darkTheme = createTheme<Theme, string>({
  colors: {
    background: "linear-gradient(45deg, #715133, #4E324E)",
  },
});

export const globalStyles = globalCss({
  body: {
    background: "$background",
  },
});
