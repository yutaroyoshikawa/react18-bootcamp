import { Octokit } from "@octokit/rest";
import useSWR from "swr";
import { handleApiError } from "../../../lib/api";

type GetRepoRequest = {
  owner: string;
  repo: string;
};

export const useRepo = ({ owner, repo }: GetRepoRequest) => {
  const { data, error } = useSWR(getKey({ owner, repo }), fetcher, {
    revalidateIfStale: false,
    suspense: true,
  });

  return {
    data,
    loading: !data || !error,
    error,
  };
};

const getKey = ({ owner, repo }: GetRepoRequest) => {
  return {
    key: `${Octokit.name}/repos/get`,
    owner,
    repo,
  };
};

const fetcher = async ({ owner, repo }: ReturnType<typeof getKey>) => {
  const result = await new Octokit().repos
    .get({
      owner,
      repo,
    })
    .catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  return result.data;
};
