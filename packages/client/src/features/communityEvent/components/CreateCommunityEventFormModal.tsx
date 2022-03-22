import type { FC } from "react";
import { css, theme } from "../../../lib/style";
import { Button } from "../../app/components/Button";
import { DateTimePicker } from "../../app/components/DateTimePicker";
import type { ModalProps } from "../../app/components/Modal";
import { Modal } from "../../app/components/Modal";
import { ModalBody } from "../../app/components/ModalBody";
import { ModalFooter } from "../../app/components/ModalFooter";
import { Selector } from "../../app/components/Selector";
import { Textarea } from "../../app/components/Textarea";
import { TextInput } from "../../app/components/TextInput";

const categoryOptions: { label: string; value: "" }[] = [
  {
    label: "カテゴリを選択",
    value: "",
  },
];

export type CreateCommunityEventFormModalProps = Pick<
  ModalProps,
  "isOpen" | "onRequestClose" | "onAfterClose"
>;

export const CreateCommunityEventFormModal: FC<
  CreateCommunityEventFormModalProps
> = ({ ...modalProps }) => {
  return (
    <Modal
      {...modalProps}
      title="イベントを作成"
      contentLabel="新規イベント作成フォーム"
    >
      <form className={formStyle()}>
        <ModalBody>
          <div className={inputsWrapperStyle()}>
            <label className={labelStyle()}>
              <span className={labelTextStyle()}>イベント名</span>
              <TextInput
                placeholder="新規イベント名"
                breakpoint={{
                  size: {
                    lg: "default",
                    md: "default",
                    sm: "small",
                  },
                }}
              />
            </label>
            <label className={labelStyle()}>
              <span className={labelTextStyle()}>開催日時</span>
              <DateTimePicker min={new Date().toString()} />
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
