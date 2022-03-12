import type { ImgHTMLAttributes, VFC } from "react";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "className">;

export const Image: VFC<ImageProps> = ({ ...imageProps }) => {
  return <img loading="lazy" {...imageProps} />;
};
