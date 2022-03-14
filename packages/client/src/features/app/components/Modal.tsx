import type { PropsWithChildren, VFC } from "react";
import ReactModal from "react-modal";
import { css, theme } from "../../../lib/style";
import { Heading } from "./Heading";
import { Icon } from "./Icon";

const TIMEOUT_DURATION = 300;

export type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  title: string;
  footerArea: JSX.Element;
  onAfterClose?: () => void;
}>;

export const Modal: VFC<ModalProps> = ({
  children,
  title,
  footerArea,
  ...modalProps
}) => {
  return (
    <ReactModal
      {...modalProps}
      className={{
        base: modalBaseStyle(),
        afterOpen: modalAfterOpenStyle(),
        beforeClose: modalBeforeCloseStyle(),
      }}
      overlayClassName={{
        base: overlayBaseStyle(),
        afterOpen: overlayAfterOpenStyle(),
        beforeClose: overlayBeforeCloseStyle(),
      }}
      closeTimeoutMS={TIMEOUT_DURATION}
    >
      <div className={titleWrapperStyle()}>
        <div className={closeWrapperStyle()}>
          <button
            className={closeButtonStyle()}
            type="button"
            onClick={modalProps.onRequestClose}
            area-label={`${modalProps.contentLabel}を閉じる`}
          >
            <Icon icon="search" variant="light" size="sm" />
          </button>
        </div>
        <Heading tag="h2" variant="light">
          {title}
        </Heading>
      </div>
      <div className={contentsWrapperStyle()}>{children}</div>
      <div>{footerArea}</div>
    </ReactModal>
  );
};

const modalBaseStyle = css({
  width: "100%",
  maxWidth: "800px",
  height: "100%",
  position: "fixed",
  top: 0,
  right: 0,
  backgroundColor: theme(({ colors }) => colors.backgroundSub),
  borderRadius: `${theme(({ radii }) => radii.radius1)} 0 0 ${theme(
    ({ radii }) => radii.radius1
  )}`,
  boxShadow: theme(({ shadows }) => shadows.elevationMid),
  padding: `${theme(({ space }) => space[5])} ${theme(
    ({ space }) => space[4]
  )}`,
  boxSizing: "border-box",
  transition: `transform ${TIMEOUT_DURATION}ms ease`,
  transform: "translateX(100%)",
});

const modalAfterOpenStyle = css({
  transform: "translateX(0)",
});

const modalBeforeCloseStyle = css({
  transform: "translateX(100%)",
});

const overlayBaseStyle = css({
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  position: "fixed",
  top: 0,
  left: 0,
  opacity: 0,
  transition: `opacity ${TIMEOUT_DURATION}ms ease`,
});

const overlayAfterOpenStyle = css({
  opacity: 1,
});

const overlayBeforeCloseStyle = css({
  opacity: 0,
});

const closeWrapperStyle = css({
  position: "fixed",
  left: theme(({ space }) => space[4]),
});

const closeButtonStyle = css({
  margin: 0,
  padding: 0,
  border: "none",
  appearance: "none",
  cursor: "pointer",
  background: "transparent",
});

const titleWrapperStyle = css({
  height: "54px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const contentsWrapperStyle = css({
  height: "calc(100% - 108px)",
  overflowY: "auto",
});