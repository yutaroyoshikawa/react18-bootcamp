import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Image } from "./Image";

const meta: ComponentMeta<typeof Image> = {
  component: Image,
};

export default meta;

export const Base: ComponentStoryObj<typeof Image> = {
  args: {
    src: "https://picsum.photos/200/300",
    alt: "ダミー画像",
    width: 200,
    height: 300,
  },
};
