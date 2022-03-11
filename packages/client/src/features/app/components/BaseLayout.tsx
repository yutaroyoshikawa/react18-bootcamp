import type { ReactNode, VFC } from "react";
import { css, theme } from "../../../lib/style";
import { useTheme } from "../modules/themeHooks";
import { Navigation } from "./Navigation";

export type BaseLayoutProps = {
  children?: ReactNode;
};

export const BaseLayout: VFC<BaseLayoutProps> = ({ children }) => {
  const [theme] = useTheme();

  return (
    <div className={containerStyle()}>
      <header>
        <Navigation variant={theme} />
      </header>
      <main className={mainStyle()}>{children}</main>
    </div>
  );
};

const containerStyle = css({
  display: "flex",
  height: "100%",
});

const mainStyle = css({
  padding: `${theme(({ space }) => space[4])} ${theme(
    ({ space }) => space[6]
  )}`,
});
