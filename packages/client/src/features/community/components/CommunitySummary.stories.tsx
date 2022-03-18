import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { dummyCommunity } from "../../../../testdata/community";
import { CommunitySummary } from "./CommunitySummary";

const meta: ComponentMeta<typeof CommunitySummary> = {
  component: CommunitySummary,
};

export default meta;

export const Base: ComponentStoryObj<typeof CommunitySummary> = {
  args: {
    community: dummyCommunity(),
    isJoined: false,
  },
};
