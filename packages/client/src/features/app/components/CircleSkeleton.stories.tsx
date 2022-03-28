import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { CircleSkeleton } from "./CircleSkeleton";

const meta: ComponentMeta<typeof CircleSkeleton> = {
  component: CircleSkeleton,
};

export default meta;

export const Base: ComponentStoryObj<typeof CircleSkeleton> = {
  args: {
    size: 50,
  },
};
