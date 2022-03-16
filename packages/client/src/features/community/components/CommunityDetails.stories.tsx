import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { dummyCommunity } from "../../../../testdata/community";
import { CommunityDetails } from "./CommunityDetails";

const meta: ComponentMeta<typeof CommunityDetails> = {
  component: CommunityDetails,
};

export default meta;

export const Base: ComponentStoryObj<typeof CommunityDetails> = {
  args: {
    community: dummyCommunity(),
  },
};
