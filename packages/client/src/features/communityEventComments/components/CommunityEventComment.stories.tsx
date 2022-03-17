import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { dummuCommunityEventComment } from "../../../../testdata/communityEventComment";
import { CommunityEventComment } from "./CommunityEventComment";

const meta: ComponentMeta<typeof CommunityEventComment> = {
  component: CommunityEventComment,
};

export default meta;

export const Base: ComponentStoryObj<typeof CommunityEventComment> = {
  args: {
    communityEventComment: dummuCommunityEventComment(),
  },
};
