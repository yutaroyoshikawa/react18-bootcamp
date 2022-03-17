import type { FC, FormEvent } from "react";
import { useCallback, useRef } from "react";
import { css, theme } from "../../../lib/style";
import { SquareButton } from "../../app/components/SquareButton";
import { Textarea } from "../../app/components/Textarea";

type CommunityEventCommentFormProps = {
  onSubmit: (comment: string) => void;
};

export const CommunityEventCommentForm: FC<CommunityEventCommentFormProps> = ({
  onSubmit,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onSubmitHandle = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(textAreaRef.current?.value ?? "");
    },
    [onSubmit]
  );

  return (
    <form onSubmit={onSubmitHandle} className={formStyle()}>
      <Textarea ref={textAreaRef} rows={1} />
      <SquareButton type="submit" size="default" disabled={false}>
        送信
      </SquareButton>
    </form>
  );
};

const formStyle = css({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  columnGap: theme(({ space }) => space[2]),
});
