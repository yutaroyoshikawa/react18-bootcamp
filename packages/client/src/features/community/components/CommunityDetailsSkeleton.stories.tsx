import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { CommunityDetailsSkeleton } from "./CommunityDetailsSkeleton";

const meta: ComponentMeta<typeof CommunityDetailsSkeleton> = {
  component: CommunityDetailsSkeleton,
};

export default meta;

export const Base: ComponentStoryObj<typeof CommunityDetailsSkeleton> = {};
