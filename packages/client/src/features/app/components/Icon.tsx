import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { css, theme } from "../../../lib/style";

const icons: Record<"moon" | "sun", FontAwesomeIconProps["icon"]> = {
  moon: ["fas", "moon"],
  sun: ["fas", "sun"],
};

type IconProps = {
  icon: keyof typeof icons;
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
