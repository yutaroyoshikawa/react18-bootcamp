import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: ComponentMeta<typeof TextInput> = {
  component: TextInput,
};

export default meta;

export const Base: ComponentStoryObj<typeof TextInput> = {
  args: {
    placeholder: "テキスト",
    breakpoint: {
      size: {
        lg: "default",
        md: "default",
        sm: "small",
      },
    },
  },
};
