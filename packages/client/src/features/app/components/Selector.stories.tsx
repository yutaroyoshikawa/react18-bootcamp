import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Selector } from "./Selector";

const meta: ComponentMeta<typeof Selector> = {
  component: Selector,
};

export default meta;

export const Base: ComponentStoryObj<typeof Selector> = {
  args: {
    options: [
      {
        label: "項目1",
        value: "値1",
      },
      {
        label: "項目2",
        value: "値2",
      },
      {
        label: "項目3",
        value: "値3",
      },
      {
        label: "項目4",
        value: "値4",
      },
    ],
  },
};
