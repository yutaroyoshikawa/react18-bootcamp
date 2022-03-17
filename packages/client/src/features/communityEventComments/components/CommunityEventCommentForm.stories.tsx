import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { CommunityEventCommentForm } from "./CommunityEventCommentForm";

const meta: ComponentMeta<typeof CommunityEventCommentForm> = {
  component: CommunityEventCommentForm,
};

export default meta;

export const Base: ComponentStoryObj<typeof CommunityEventCommentForm> = {
  args: {
    onSubmit: (comment) => console.log(comment),
  },
};
