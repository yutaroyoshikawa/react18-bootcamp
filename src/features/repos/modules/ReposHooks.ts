import { Octokit } from "@octokit/rest";
import useSWR from "swr";
import { handleApiError } from "../../../lib/api";

type GetReposRequest = {
  org: string;
};

export const useRepos = ({ org }: GetReposRequest) => {
  const { data, error } = useSWR(getKey({ org }), fetcher, {
    revalidateIfStale: false,
  });

  return {
    data,
    loading: !data || !error,
    error,
  };
};

const getKey = ({ org }: GetReposRequest) => {
  return {
    key: `${Octokit.name}/repos/listForOrg`,
    org,
  };
};

const fetcher = async ({ org }: ReturnType<typeof getKey>) => {
  const result = await new Octokit().repos
    .listForOrg({
      org,
    })
    .catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  return result.data;
};
