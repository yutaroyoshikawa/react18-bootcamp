import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import type { FC } from "react";
import type { ButtonProps } from "./Button";
import { Button } from "./Button";

const meta: ComponentMeta<typeof Button> = {
  component: Button,
};

export default meta;

const Component: FC<ButtonProps> = (args) => {
  return <Button {...args}>コンテンツ</Button>;
};

export const Base: ComponentStoryObj<typeof Button> = {
  render: (args) => <Component {...args} />,
  args: {
    type: "button",
    variant: "primary",
    breakpoint: {
      size: {
        lg: "default",
        md: "default",
        sm: "small",
      },
    },
    disabled: false,
  },
};
