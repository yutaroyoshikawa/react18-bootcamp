import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { CommunitySummarySkeleton } from "./CommunitySummarySkeleton";

const meta: ComponentMeta<typeof CommunitySummarySkeleton> = {
  component: CommunitySummarySkeleton,
};

export default meta;

export const Base: ComponentStoryObj<typeof CommunitySummarySkeleton> = {
  args: {
    breakpoint: {
      layout: {
        lg: "horizontal",
        md: "horizontal",
        sm: "vertical",
      },
    },
  },
};
