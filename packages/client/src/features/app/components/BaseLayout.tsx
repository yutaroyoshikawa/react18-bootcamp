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
      <header className={headerStyle()}>
        <Navigation variant={theme} />
      </header>
      <main className={mainStyle()}>{children}</main>
    </div>
  );
};

const containerStyle = css({
  height: "100%",
});

const headerStyle = css({
  position: "fixed",
  top: 0,
  height: "100%",
});

const mainStyle = css({
  padding: `${theme(({ space }) => space[4])} ${theme(
    ({ space }) => space[6]
  )}`,
  boxSizing: "content-box",
  marginLeft: "290px",
});
