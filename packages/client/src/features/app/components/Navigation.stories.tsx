import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";

const meta: ComponentMeta<typeof Navigation> = {
  component: Navigation,
};

export default meta;

export const Base: ComponentStoryObj<typeof Navigation> = {
  args: {
    variant: "light",
  },
};
