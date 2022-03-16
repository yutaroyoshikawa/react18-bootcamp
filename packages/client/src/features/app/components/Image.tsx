import type { ImgHTMLAttributes, VFC } from "react";
import { css } from "../../../lib/style";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "className">;

export const Image: VFC<ImageProps> = ({ ...imageProps }) => {
  return <img loading="lazy" {...imageProps} className={imageStyle()} />;
};

const imageStyle = css({
  width: "100%",
});
