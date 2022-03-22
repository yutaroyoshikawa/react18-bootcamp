import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import type { FC } from "react";
import type { LinkProps } from "./Link";
import { Link } from "./Link";

const meta: ComponentMeta<typeof Link> = {
  component: Link,
};

export default meta;

const Component: FC<LinkProps> = (args) => {
  return <Link {...args}>リンク</Link>;
};

export const Base: ComponentStoryObj<typeof Link> = {
  render: (args) => <Component {...args} />,
  args: {
    to: "#",
    breakpoint: {
      size: {
        lg: "default",
        md: "default",
        sm: "small",
      },
    },
  },
};
