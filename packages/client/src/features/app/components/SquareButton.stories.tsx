import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import type { FC } from "react";
import { Icon } from "./Icon";
import type { SquareButtonProps } from "./SquareButton";
import { SquareButton } from "./SquareButton";

const meta: ComponentMeta<typeof SquareButton> = {
  component: SquareButton,
};

export default meta;

const Component: FC<SquareButtonProps> = (args) => {
  return (
    <SquareButton {...args}>
      <Icon icon="moon" variant="light" size="md" />
    </SquareButton>
  );
};

export const Base: ComponentStoryObj<typeof SquareButton> = {
  render: (args) => <Component {...args} />,
  args: {
    type: "button",
    disabled: false,
    breakpoint: {
      size: {
        lg: "default",
        md: "default",
        sm: "small",
      },
    },
  },
};
