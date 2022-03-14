import type { ReactNode, VFC } from "react";
import { css, theme } from "../../../lib/style";

export type ModalFooterProps = {
  children: ReactNode;
};

export const ModalFooter: VFC<ModalFooterProps> = ({ children }) => {
  return (
    <div className={footerStyle()}>
      <div>{children}</div>
    </div>
  );
};

const footerStyle = css({
  width: "100%",
  position: "absolute",
  bottom: theme(({ space }) => space[5]),
  right: 0,
  height: "60px",
  display: "flex",
  justifyContent: "center",
  padding: `0 ${theme(({ space }) => space[4])}`,
  boxSizing: "border-box",
});
