import type { FC } from "react";
import { css, keyframes, theme } from "../../../lib/style";

type SquareSkelectonProps = {
  width: number;
  height: number;
};

export const SquareSkeleton: FC<SquareSkelectonProps> = ({ width, height }) => {
  return (
    <div
      className={skeletonStyle()}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      aria-label="progressbar"
    />
  );
};

const loading = keyframes({
  to: {
    backgroundPosition: "350% 0",
  },
});

const skeletonStyle = css({
  backgroundColor: "#FFF",
  borderRadius: theme(({ radii }) => radii.radius1),
  "&:empty::after": {
    content: '""',
    display: "block",
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(90deg, rgba(150, 150, 150, 0) 0, rgba(150, 150, 150, .4) 50%, rgba(150, 150, 150, 0) 100%)",
    backgroundSize: "80px 100%",
    backgroundPosition: "-150% 0",
    backgroundRepeat: "no-repeat",
    animation: `${loading} 1.5s infinite`,
  },
});
