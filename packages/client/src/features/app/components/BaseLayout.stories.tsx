import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import type { FC } from "react";
import type { BaseLayoutProps } from "./BaseLayout";
import { BaseLayout } from "./BaseLayout";

const meta: ComponentMeta<typeof BaseLayout> = {
  component: BaseLayout,
};

export default meta;

const Component: FC<BaseLayoutProps> = (args) => {
  return (
    <BaseLayout {...args}>
      <div>コンテンツ</div>
    </BaseLayout>
  );
};

export const Base: ComponentStoryObj<typeof BaseLayout> = {
  render: (args) => <Component {...args} />,
  args: {
    breakpoints: {
      layout: {
        lg: "horizontal",
        md: "vertical",
        sm: "vertical",
      },
    },
  },
};
