import type { Community } from "api-server";
import type { FC } from "react";
import { css, theme } from "../../../lib/style";
import { Button } from "../../app/components/Button";
import { Modal, ModalProps } from "../../app/components/Modal";
import { ModalBody } from "../../app/components/ModalBody";
import { ModalFooter } from "../../app/components/ModalFooter";
import { Selector } from "../../app/components/Selector";
import { Textarea } from "../../app/components/Textarea";
import { TextInput } from "../../app/components/TextInput";
import { categoryNames } from "../modules/communityUtils";

const categoryOptions: { label: string; value: Community["category"] | "" }[] =
  [
    {
      label: "カテゴリを選択",
      value: "",
    },
    {
      label: categoryNames["anime"],
      value: "anime",
    },
    {
      label: categoryNames["geek"],
      value: "geek",
    },
    {
      label: categoryNames["gurmand"],
      value: "gurmand",
    },
    {
      label: categoryNames["sports"],
      value: "sports",
    },
  ];

export type CreateCommunityFormModalProps = Pick<
  ModalProps,
  "isOpen" | "onRequestClose" | "onAfterClose"
>;

export const CreateCommunityFormModal: FC<CreateCommunityFormModalProps> = ({
  ...modalProps
}) => {
  return (
    <Modal
      {...modalProps}
      title="新規コミュニティ"
      contentLabel="新規コミュニティ作成フォーム"
    >
      <form className={formStyle()}>
        <ModalBody>
          <div className={inputsWrapperStyle()}>
            <label className={labelStyle()}>
              <span className={labelTextStyle()}>コミュニティ名</span>
              <TextInput placeholder="新規コミュニティ名" />
            </label>
            <label className={labelStyle()}>
              <span className={labelTextStyle()}>詳細</span>
              <Textarea rows={6} />
            </label>
            <label className={labelStyle()}>
              <span className={labelTextStyle()}>カテゴリ</span>
              <Selector options={categoryOptions} />
            </label>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            variant="primary"
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
          >
            作成
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

const formStyle = css({
  display: "grid",
  gridTemplateRows: "minmax(0, 1fr) auto",
  rowGap: theme(({ space }) => space[1]),
});

const inputsWrapperStyle = css({
  padding: `${theme(({ space }) => space[1])} ${theme(
    ({ space }) => space[2]
  )}`,
  display: "grid",
  rowGap: theme(({ space }) => space[4]),
  boxSizing: "border-box",
});

const labelStyle = css({
  display: "grid",
  rowGap: theme(({ space }) => space[1]),
});

const labelTextStyle = css({
  color: theme(({ colors }) => colors.text),
  fontFamily: theme(({ fonts }) => fonts.base),
  fontSize: theme(({ fontSizes }) => fontSizes[2]),
});
