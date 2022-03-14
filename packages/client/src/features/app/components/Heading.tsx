import type { HTMLAttributes, PropsWithChildren, VFC } from "react";
import { css, theme } from "../../../lib/style";

export type HeadingProps = PropsWithChildren<
  {
    tag: "h1" | "h2";
    variant: "light" | "dark";
  } & Omit<HTMLAttributes<HTMLHeadingElement>, "className">
>;

export const Heading: VFC<HeadingProps> = ({
  children,
  tag,
  variant,
  ...headingProps
}) => {
  switch (tag) {
    case "h1":
      return (
        <h1 {...headingProps} className={h1Style()} data-variant={variant}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...headingProps} className={h2Style()} data-variant={variant}>
          {children}
        </h2>
      );
  }
};

const h1Style = css({
  margin: 0,
  color: theme(({ colors }) => colors.title),
  fontSize: theme(({ fontSizes }) => fontSizes[4]),
  fontFamily: theme(({ fonts }) => fonts.base),
  '&[data-variant="dark"]': {
    color: theme(({ colors }) => colors.titleDark),
  },
});

const h2Style = css({
  margin: 0,
  color: theme(({ colors }) => colors.title),
  fontSize: theme(({ fontSizes }) => fontSizes[2]),
  fontFamily: theme(({ fonts }) => fonts.base),
  '&[data-variant="dark"]': {
    color: theme(({ colors }) => colors.titleDark),
  },
});
