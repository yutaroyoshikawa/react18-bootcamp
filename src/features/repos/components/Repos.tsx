import { FC, Suspense } from "react";
import { css } from "../../../style";
import { useTheme } from "../../appSettings/modules/themeHooks";
import { useRepos } from "../modules/ReposHooks";

type ReposProps = {
  org: string;
};

export const Repos: FC<ReposProps> = ({ org }) => {
  const { data } = useRepos({ org });
  const [theme] = useTheme();

  return (
    <>
      <p>{theme}</p>

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
    </>
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
