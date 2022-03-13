import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { css, theme } from "../../../lib/style";

type IconName = "moon" | "sun" | "search";

const icons: Record<IconName, FontAwesomeIconProps["icon"]> = {
  moon: ["fas", "moon"],
  sun: ["fas", "sun"],
  search: ["fas", "search"],
};

type IconProps = {
  icon: IconName;
  variant: "light" | "dark";
  size: "sm" | "md" | "lg";
};

export const Icon: FC<IconProps> = ({ icon, variant, size }) => {
  return (
    <div className={containerStyle()} data-size={size}>
      <FontAwesomeIcon
        icon={icons[icon]}
        style={{
          color: variant === "light" ? "#0D1C2E" : "#FFFFFF",
        }}
      />
    </div>
  );
};

const containerStyle = css({
  svg: {
    fontSize: theme(({ fontSizes }) => fontSizes[4]),
  },
});
