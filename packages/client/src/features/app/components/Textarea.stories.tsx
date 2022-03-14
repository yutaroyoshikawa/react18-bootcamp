import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: ComponentMeta<typeof Textarea> = {
  component: Textarea,
};

export default meta;

export const Base: ComponentStoryObj<typeof Textarea> = {
  args: {
    cols: 10,
  },
};
