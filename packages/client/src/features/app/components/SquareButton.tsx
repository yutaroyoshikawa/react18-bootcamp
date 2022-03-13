import type { ButtonHTMLAttributes, VFC } from "react";
import { css, theme } from "../../../lib/style";

export type SquareButtonProps = {
  size: "default" | "small";
  type: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["type"]>;
  disabled: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export const SquareButton: VFC<SquareButtonProps> = ({
  size,
  children,
  ...buttonProps
}) => {
  return (
    <button {...buttonProps} data-size={size} className={buttonStyle()}>
      {children}
    </button>
  );
};

const buttonStyle = css({
  margin: 0,
  padding: 0,
  border: "none",
  appearance: "none",
  cursor: "pointer",
  width: "70px",
  height: "70px",
  borderRadius: theme(({ radii }) => radii.radius1),
  boxShadow: theme(({ shadows }) => shadows.elevationMid),
  backgroundColor: theme(({ colors }) => colors.backgroundBase),
  transition: "filter 0.2s ease",
  "&:hover": {
    filter: "contrast(90%)",
  },
  "&:disabled": {
    cursor: "not-allowed",
    filter: "contrast(50%)",
  },
});
