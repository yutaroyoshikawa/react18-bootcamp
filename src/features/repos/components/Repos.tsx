import Link from "next/link";
import { FC } from "react";
import { pagePath } from "../../../pagePath";
import { css } from "../../../style";
import { useRepos } from "../modules/ReposHooks";

type ReposProps = {
  org: string;
};

export const Repos: FC<ReposProps> = ({ org }) => {
  const { data } = useRepos({ org });

  if (!data) {
    return null;
  }

  return (
    <ul className={styles.list()}>
      {data.map((repo) => (
        <li key={repo.id} className={styles.item()}>
          <Link href={pagePath.repo(repo.name)}>{repo.name}</Link>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: css({
    listStyle: "none",
  }),
  item: css({
    color: "red",
  }),
};
