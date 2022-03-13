import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { SearchCommunityForm } from "./SearchCommunityForm";

const meta: ComponentMeta<typeof SearchCommunityForm> = {
  component: SearchCommunityForm,
};

export default meta;

export const Base: ComponentStoryObj<typeof SearchCommunityForm> = {
  args: {
    onClickSearch: (keyword) => console.log(keyword),
  },
};
