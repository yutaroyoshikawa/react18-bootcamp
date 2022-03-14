import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import type { FC } from "react";
import { useState } from "react";
import type { ModalProps } from "./Modal";
import { Modal } from "./Modal";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";

const meta: ComponentMeta<typeof Modal> = {
  component: Modal,
};

export default meta;

const Component: FC<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>表示</button>
      <Modal {...args} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <ModalBody>
          <p>コンテンツ</p>
        </ModalBody>
        <ModalFooter>
          <p>フッター</p>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Base: ComponentStoryObj<typeof Modal> = {
  render: (args) => <Component {...args} />,
  args: {
    contentLabel: "テスト",
    title: "ダミータイトル",
  },
};
