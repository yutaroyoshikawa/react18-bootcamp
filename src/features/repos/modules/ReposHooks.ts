import useSWR from "swr";
import { API_ENDPOINTS, handleApiError, ORIGIN } from "../../../lib/api";
import { getRepos, GetReposRequest } from "./reposApi";

export const useRepos = ({ org, type }: GetReposRequest) => {
  const { data, error } = useSWR(getKey({ org, type }), fetcher, {
    revalidateIfStale: false,
  });

  return {
    data,
    loading: !data || !error,
    error,
  };
};

const getKey = ({ org, type }: GetReposRequest) => {
  return {
    key: `${ORIGIN}/${API_ENDPOINTS.orgs.orgsRepos(org)}`,
    org,
    type,
  };
};

const fetcher = async ({ org, type }: ReturnType<typeof getKey>) => {
  const result = await getRepos({ org, type }).catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  return result;
};
