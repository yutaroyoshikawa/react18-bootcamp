import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { css, theme } from "../../../lib/style";
import { useTheme } from "../modules/themeHooks";
import { Heading } from "./Heading";

type NavigationProps = {
  variant: "light" | "dark";
};

export const Navigation: FC<NavigationProps> = ({ variant }) => {
  const [, setTheme] = useTheme();

  return (
    <nav className={containerStyle()} data-variant={variant}>
      <Heading tag="h1" variant={variant}>
        コミュニティ
      </Heading>
      <ToggleThemeButton
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
        variant={variant}
      />
    </nav>
  );
};

const containerStyle = css({
  margin: 0,
  width: "290px",
  height: "100%",
  minHeight: "320px",
  padding: `${theme(({ space }) => space[5])} ${theme(
    ({ space }) => space[4]
  )}`,
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  backgroundColor: theme(({ colors }) => colors.backgroundSub),
  '&[data-variant="dark"]': {
    backgroundColor: theme(({ colors }) => colors.backgroundSubDark),
  },
});

type ToggleThemeButtonProps = {
  onClick: () => void;
  variant: "light" | "dark";
};

const ToggleThemeButton: FC<ToggleThemeButtonProps> = ({
  onClick,
  variant,
}) => {
  return (
    <button
      type="button"
      className={themeButtonStyle()}
      onClick={onClick}
      data-variant={variant}
    >
      <FontAwesomeIcon
        icon={variant === "light" ? ["fas", "moon"] : ["fas", "sun"]}
        style={{
          color: variant === "light" ? "#0D1C2E" : "#FFFFFF",
        }}
      />
    </button>
  );
};

const themeButtonStyle = css({
  margin: 0,
  padding: 0,
  border: "none",
  appearance: "none",
  cursor: "pointer",
  backgroundColor: "transparent",
  svg: {
    fontSize: theme(({ fontSizes }) => fontSizes[4]),
  },
});
