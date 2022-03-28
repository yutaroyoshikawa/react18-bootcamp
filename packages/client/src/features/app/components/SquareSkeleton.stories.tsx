import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { SquareSkeleton } from "./SquareSkeleton";

const meta: ComponentMeta<typeof SquareSkeleton> = {
  component: SquareSkeleton,
};

export default meta;

export const Base: ComponentStoryObj<typeof SquareSkeleton> = {
  args: {
    width: 200,
    height: 30,
  },
};
