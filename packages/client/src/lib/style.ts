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
    textDark: "text-dark",
    title: "title",
    titleDark: "title-dark",
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

export const breakpoints = {
  sm: "@media screen and (max-width:599px)",
  md: "@media screen and (min-width:600px)",
  lg: "@media screen and (min-width:1025px)",
} as const;

const {
  css,
  globalCss,
  createTheme,
  theme: lightTheme,
} = createStitches({
  theme: {
    colors: {
      [theme(({ colors }) => colors.background).key]:
        "linear-gradient(90deg, #FFF7F0, #FFF5FF)",
      [theme(({ colors }) => colors.backgroundSub).key]: "#5F5F5F",
      [theme(({ colors }) => colors.backgroundBase).key]: "#FFFFFF",
      [theme(({ colors }) => colors.accent).key]: "#FEA82F",
      [theme(({ colors }) => colors.action).key]:
        "linear-gradient(90deg, #FF9C65, #FFB884)",
      [theme(({ colors }) => colors.link).key]:
        "linear-gradient(90deg, #96CEB4, #8AB8C7)",
      [theme(({ colors }) => colors.text).key]: "#707C97",
      [theme(({ colors }) => colors.textDark).key]: "#FFFFFF",
      [theme(({ colors }) => colors.title).key]: "#0D1C2E",
      [theme(({ colors }) => colors.titleDark).key]: "#FFFFFF",
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
