import type { ButtonHTMLAttributes, VFC } from "react";
import { css, theme } from "../../../lib/style";

export type ButtonProps = {
  variant: "primary" | "secondary";
  size: "default" | "small";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: VFC<ButtonProps> = ({
  variant,
  size,
  children,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      data-variant={variant}
      data-size={size}
      className={buttonStyle()}
    >
      {children}
    </button>
  );
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
  '&[data-size="small"]': {
    width: "170px",
    height: "40px",
  },
  '&[data-variant="secondary"': {},
});
