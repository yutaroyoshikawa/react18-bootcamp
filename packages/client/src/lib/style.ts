import { createStitches } from "@stitches/core";

type Theme = {
  colors: {
    background: string;
  };
};

const themeKey = {
  media: {
    bpSm: "bp-sm",
    bpMd: "bp-md",
    bpLg: "bp-lg",
  },
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
    backgroundSubDark: "background-sub-dark",
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
  space: {
    4: "4",
    5: "5",
  },
} as const;

export const theme = <T extends string>(
  selector: (props: typeof themeKey) => T
) => {
  const key = selector(themeKey);

  return `$${key}` as const;
};

const {
  css,
  globalCss,
  createTheme,
  theme: baseTheme,
} = createStitches({
  theme: {
    media: {
      [themeKey.media.bpSm]: "(max-width:599px)",
      [themeKey.media.bpMd]: "(min-width:600px)",
      [themeKey.media.bpLg]: "(min-width:1025px)",
    },
    colors: {
      [themeKey.colors.background]: "linear-gradient(90deg, #FFF7F0, #FFF5FF)",
      [themeKey.colors.backgroundSub]: "#F8F8F8",
      [themeKey.colors.backgroundSubDark]: "#515050",
      [themeKey.colors.backgroundBase]: "#FFFFFF",
      [themeKey.colors.accent]: "#FEA82F",
      [themeKey.colors.action]: "linear-gradient(90deg, #FF9C65, #FFB884)",
      [themeKey.colors.link]: "linear-gradient(90deg, #96CEB4, #8AB8C7)",
      [themeKey.colors.text]: "#707C97",
      [themeKey.colors.textDark]: "#FFFFFF",
      [themeKey.colors.title]: "#0D1C2E",
      [themeKey.colors.titleDark]: "#FFFFFF",
    },
    fontSizes: {
      [themeKey.fontSizes[1]]: "16px",
      [themeKey.fontSizes[2]]: "18px",
      [themeKey.fontSizes[3]]: "24px",
      [themeKey.fontSizes[4]]: "36px",
    },
    fonts: {
      [themeKey.fonts.base]: "'Noto Sans JP', sans-serif",
    },
    space: {
      [themeKey.space[4]]: "40px",
      [themeKey.space[5]]: "90px",
    },
  },
});

export { css, baseTheme };

export const darkTheme = createTheme<Theme, string>({
  colors: {
    background: "linear-gradient(90deg, #715133, #4E324E)",
  },
});

export const globalStyles = globalCss({
  "html, body, #root": {
    height: "100%",
    margin: 0,
  },
  body: {
    background: theme(({ colors }) => colors.background),
  },
});
