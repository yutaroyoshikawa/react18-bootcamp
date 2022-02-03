import { FC, Suspense } from "react";
import { css } from "../../../style";
import { useRepos } from "../modules/ReposHooks";

type ReposProps = {
  org: string;
};

export const Repos: FC<ReposProps> = ({ org }) => {
  const { data } = useRepos({ org });

  return (
    <Suspense fallback={ReposSkeleton}>
      {data && (
        <ul className={styles.list()}>
          {data.map((repo) => (
            <li key={repo.id} className={styles.item()}>
              {repo.name}
            </li>
          ))}
        </ul>
      )}
    </Suspense>
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

const ReposSkeleton: FC = () => {
  return <p>loading...</p>;
};
