import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { UserAvatar } from "./UserAvatar";

const meta: ComponentMeta<typeof UserAvatar> = {
  component: UserAvatar,
};

export default meta;

export const Base: ComponentStoryObj<typeof UserAvatar> = {
  args: {
    avatarUrl: "https://picsum.photos/100/100",
    size: "default",
  },
};
