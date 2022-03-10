import type { HTMLAttributes, PropsWithChildren, VFC } from "react";
import { css } from "../../../style";

export type HeadingProps = PropsWithChildren<
  {
    tag: "h1" | "h2";
  } & Omit<HTMLAttributes<HTMLHeadingElement>, "className">
>;

export const Heading: VFC<HeadingProps> = ({
  children,
  tag,
  ...headingProps
}) => {
  switch (tag) {
    case "h1":
      return (
        <h1 {...headingProps} className={h1Style()}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...headingProps} className={h2Style()}>
          {children}
        </h2>
      );
  }
};

const h1Style = css({
  background: "$background",
});

const h2Style = css();
