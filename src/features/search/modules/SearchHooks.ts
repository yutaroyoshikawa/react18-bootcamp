import { Octokit } from "@octokit/rest";
import useSWR from "swr";
import { handleApiError } from "../../../lib/api";

type SearchRequest = {
  query: string;
};

export const useSearch = ({ query }: SearchRequest) => {
  const { data, error } = useSWR(getKey({ query }), fetcher, {
    revalidateIfStale: false,
    suspense: true,
  });

  return {
    data,
    loading: !data || !error,
    error,
  };
};

const getKey = ({ query }: SearchRequest) => {
  return {
    key: `${Octokit.name}/search/get`,
    query,
  };
};

const fetcher = async ({ query }: ReturnType<typeof getKey>) => {
  const result = await new Octokit().search
    .users({
      q: query,
    })
    .catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  return result.data;
};
