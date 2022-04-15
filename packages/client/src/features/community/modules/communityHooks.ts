import {
  ApiError,
  Community,
  CommunityMember,
  CommunityService,
} from "api-server";
import { useCallback } from "react";
import useSWR from "swr";
import { apiClient, handleApiError } from "../../../lib/api";

type CommunityResponse = {
  community: Community;
  isJoined?: boolean | null | undefined;
  members: CommunityMember[];
};

export const useCommunity = ({ communityId }: { communityId: string }) => {
  const { data, error, mutate } = useSWR<CommunityResponse, Error | ApiError>(
    getKey({ communityId }),
    fetcher,
    {
      suspense: true,
    }
  );

  const fetchCommunity = useCallback(async () => {
    return await mutate();
  }, [mutate]);

  return {
    data,
    error,
    loading: !data && !error,
    fetchCommunity,
  };
};

const getKey = ({ communityId }: { communityId: string }) => {
  return {
    key: `${CommunityService.name}/${CommunityService.prototype.getCommunity.name}`,
    communityId,
  };
};

const fetcher = async ({ communityId }: ReturnType<typeof getKey>) => {
  const result = await apiClient.community
    .getCommunity({ communityId })
    .catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  return result;
};
