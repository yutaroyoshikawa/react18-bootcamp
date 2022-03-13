import type { FC, FormEvent } from "react";
import { useCallback, useState } from "react";
import { css, theme } from "../../../lib/style";
import { Icon } from "../../app/components/Icon";
import { SquareButton } from "../../app/components/SquareButton";
import { TextInput } from "../../app/components/TextInput";

type SearchCommunityFormProps = {
  onClickSearch: (keyword: string) => void;
};

export const SearchCommunityForm: FC<SearchCommunityFormProps> = ({
  onClickSearch,
}) => {
  const [keyword, setKeyword] = useState("");
  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onClickSearch(keyword);
    },
    [keyword, onClickSearch]
  );

  return (
    <form className={formStyle()} onSubmit={onSubmit}>
      <TextInput
        placeholder="Search"
        onBlur={(event) => setKeyword(event.target.value)}
      />
      <SquareButton type="submit" size="default" disabled={false}>
        <Icon icon="search" variant="light" size="sm" />
      </SquareButton>
    </form>
  );
};

const formStyle = css({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  columnGap: theme(({ space }) => space[4]),
});
