import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import type { FC } from "react";
import type { HeadingProps } from "./Heading";
import { Heading } from "./Heading";

const meta: ComponentMeta<typeof Heading> = {
  component: Heading,
};

export default meta;

const Component: FC<HeadingProps> = (args) => {
  return <Heading {...args}>タイトル</Heading>;
};

export const h1: ComponentStoryObj<typeof Heading> = {
  render: (args) => <Component {...args} />,
  args: {
    tag: "h1",
  },
};

export const h2: ComponentStoryObj<typeof Heading> = {
  render: (args) => <Component {...args} />,
  args: {
    tag: "h2",
  },
};
