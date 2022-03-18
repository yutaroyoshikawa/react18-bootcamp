import type { FC, FormEvent } from "react";
import { useCallback, useState } from "react";
import { css, theme } from "../../../lib/style";
import { SquareButton } from "../../app/components/SquareButton";
import { Textarea } from "../../app/components/Textarea";

type CommunityEventCommentFormProps = {
  onSubmit: (comment: string) => void;
};

export const CommunityEventCommentForm: FC<CommunityEventCommentFormProps> = ({
  onSubmit,
}) => {
  const [comment, setComment] = useState("");

  const onSubmitHandle = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(comment);
    },
    [comment, onSubmit]
  );

  return (
    <form onSubmit={onSubmitHandle} className={formStyle()}>
      <Textarea
        onBlur={(event) => setComment(event.target.value)}
        rows={1}
        placeholder="コメントを追加"
      />
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
