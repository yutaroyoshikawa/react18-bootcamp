import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import type { FC } from "react";
import { useState } from "react";
import type { CreateCommunityFormModalProps } from "./CreateCommunityFormModal";
import { CreateCommunityFormModal } from "./CreateCommunityFormModal";

const meta: ComponentMeta<typeof CreateCommunityFormModal> = {
  component: CreateCommunityFormModal,
};

export default meta;

const Component: FC<CreateCommunityFormModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>表示</button>
      <CreateCommunityFormModal
        {...args}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      />
    </>
  );
};

export const Base: ComponentStoryObj<typeof CreateCommunityFormModal> = {
  render: (args) => <Component {...args} />,
};
