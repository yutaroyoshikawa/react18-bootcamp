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
    button: "button",
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
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
  },
  shadows: {
    elevationLow: "elevation-low",
    elevationMid: "elevation-mid",
    elevationHigh: "elevation-high",
  },
  radii: {
    radius1: "radius-1",
  },
} as const;

export const theme = <T extends string>(
  selector: (props: typeof themeKey) => T
) => {
  const key = selector(themeKey);

  return `$${key}` as const;
};

const shadowColor = "0deg 0% 0%";

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
      [themeKey.colors.button]: "#FFFFFF",
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
      [themeKey.space[1]]: "8px",
      [themeKey.space[2]]: "16px",
      [themeKey.space[3]]: "20px",
      [themeKey.space[4]]: "40px",
      [themeKey.space[5]]: "60px",
      [themeKey.space[6]]: "90px",
      [themeKey.space[7]]: "100px",
    },
    shadows: {
      [themeKey.shadows
        .elevationLow]: `-0.6px 0px 0.7px hsl(${shadowColor} / 0.16),-0.9px 0px 1.1px -1.1px hsl(${shadowColor} / 0.18),-2px 0.1px 2.4px -2.1px hsl(${shadowColor} / 0.2)`,
      [themeKey.shadows
        .elevationMid]: `-0.6px 0px 0.7px hsl(${shadowColor} / 0.17),-1.8px 0.1px 2.1px -0.7px hsl(${shadowColor} / 0.19),-4.2px 0.2px 5px -1.4px hsl(${shadowColor} / 0.2),-9.8px 0.5px 11.6px -2.1px hsl(${shadowColor} / 0.22)`,
      [themeKey.shadows
        .elevationHigh]: `-0.6px 0px 0.7px hsl(${shadowColor} / 0.18),-2.9px 0.1px 3.4px -0.4px hsl(${shadowColor} / 0.19),-5.2px 0.3px 6.1px -0.7px hsl(${shadowColor} / 0.2),-8.7px 0.4px 10.3px -1.1px hsl(${shadowColor} / 0.21),-14.3px 0.7px 16.9px -1.4px hsl(${shadowColor} / 0.22),-22.9px 1.1px 27px -1.8px hsl(${shadowColor} / 0.23),-35.6px 1.7px 42px -2.1px hsl(${shadowColor} / 0.23)`,
    },
    radii: {
      [themeKey.radii.radius1]: "6px",
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
