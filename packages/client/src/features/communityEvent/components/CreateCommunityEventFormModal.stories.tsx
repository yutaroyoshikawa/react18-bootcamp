import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import type { FC } from "react";
import { useState } from "react";
import type { CreateCommunityEventFormModalProps } from "./CreateCommunityEventFormModal";
import { CreateCommunityEventFormModal } from "./CreateCommunityEventFormModal";

const meta: ComponentMeta<typeof CreateCommunityEventFormModal> = {
  component: CreateCommunityEventFormModal,
};

export default meta;

const Component: FC<CreateCommunityEventFormModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>表示</button>
      <CreateCommunityEventFormModal
        {...args}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      />
    </>
  );
};

export const Base: ComponentStoryObj<typeof CreateCommunityEventFormModal> = {
  render: (args) => <Component {...args} />,
};
