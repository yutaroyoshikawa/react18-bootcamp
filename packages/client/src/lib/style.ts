import { createStitches } from "@stitches/core";

type Theme = {
  colors: {
    background: string;
  };
};

const themeKey = {
  colors: {
    accent: "accent",
    action: "action",
    link: "link",
    text: "text",
    background: "background",
    backgroundSub: "background-sub",
    backgroundBase: "background-base",
  },
  fontSizes: {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
  },
  fonts: {
    base: "base",
  },
} as const;

export const theme = <T extends string>(
  selector: (props: typeof themeKey) => T
) => {
  const key = selector(themeKey);

  const value = `$${key}` as const;

  return {
    key,
    value,
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
      [theme(({ colors }) => colors.background).key]:
        "linear-gradient(45deg, #FFF7F0, #FFF5FF)",
      [theme(({ colors }) => colors.backgroundSub).key]: "#5F5F5F",
      [theme(({ colors }) => colors.backgroundBase).key]: "#FFFFFF",
      [theme(({ colors }) => colors.accent).key]: "#FEA82F",
      [theme(({ colors }) => colors.action).key]:
        "linear-gradient(45deg, #FF9C65, #FFB884)",
      [theme(({ colors }) => colors.link).key]:
        "linear-gradient(45deg, #96CEB4, #8AB8C7)",
      [theme(({ colors }) => colors.text).key]: "#707C97",
    },
    fontSizes: {
      [theme(({ fontSizes }) => fontSizes[1]).key]: "16px",
      [theme(({ fontSizes }) => fontSizes[2]).key]: "18px",
      [theme(({ fontSizes }) => fontSizes[3]).key]: "24px",
      [theme(({ fontSizes }) => fontSizes[4]).key]: "36px",
    },
    fonts: {
      [theme(({ fonts }) => fonts.base).key]: "'Noto Sans JP', sans-serif",
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
    background: theme(({ colors }) => colors.background).value,
  },
});
