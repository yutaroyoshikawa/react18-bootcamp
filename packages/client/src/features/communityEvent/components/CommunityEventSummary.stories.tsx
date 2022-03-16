import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { dummyCommunityEvent } from "../../../../testdata/communityEvent";
import { CommunityEventSummary } from "./CommunityEventSummary";

const meta: ComponentMeta<typeof CommunityEventSummary> = {
  component: CommunityEventSummary,
};

export default meta;

export const Base: ComponentStoryObj<typeof CommunityEventSummary> = {
  args: {
    communityEvent: dummyCommunityEvent(),
  },
};
