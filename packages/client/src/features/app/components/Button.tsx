import type { ButtonHTMLAttributes, CSSProperties, VFC } from "react";
import {
  breakpointAttributes,
  breakpointsStyle,
  css,
  theme,
} from "../../../lib/style";

type Size = "default" | "small";

const breakpointKey = "size";

export type ButtonProps = {
  variant: "primary" | "secondary";
  breakpoint: {
    [breakpointKey]: {
      lg: Size;
      md: Size;
      sm: Size;
    };
  };
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: VFC<ButtonProps> = ({
  variant,
  breakpoint,
  children,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      data-variant={variant}
      className={buttonStyle()}
      {...breakpointAttributes({
        key: breakpointKey,
        breakpoints: breakpoint[breakpointKey],
      })}
    >
      {children}
    </button>
  );
};

const smallSizeStyle: CSSProperties = {
  width: "176px",
  height: "40px",
};

const buttonStyle = css({
  width: "290px",
  height: "60px",
  margin: 0,
  padding: 0,
  border: "none",
  appearance: "none",
  cursor: "pointer",
  transition: "filter 0.2s ease",
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  boxShadow: theme(({ shadows }) => shadows.elevationLow),
  color: theme(({ colors }) => colors.button),
  fontFamily: theme(({ fonts }) => fonts.base),
  borderRadius: theme(({ radii }) => radii.radius1),
  background: theme(({ colors }) => colors.action),
  "&:hover": {
    filter: "contrast(130%)",
  },
  "&:disabled": {
    cursor: "not-allowed",
    filter: "contrast(50%)",
  },
  ...breakpointsStyle({
    key: breakpointKey,
    style: {
      small: smallSizeStyle,
    },
  }),
});
