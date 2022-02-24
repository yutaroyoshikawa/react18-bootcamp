import { FC } from "react";
import { css } from "../../../style";
import { useRepo } from "../modules/RepoHooks";

type RepoProps = {
  org: string;
  repo: string;
};

export const Repo: FC<RepoProps> = ({ org, repo }) => {
  const { data } = useRepo({ owner: org, repo });

  if (!data) {
    return null;
  }

  return <div>{data.name}</div>;
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
