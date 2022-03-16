import { ApiError, Community, CommunityService } from "api-server";
import useSWRInfinite from "swr/infinite";
import { apiClient, handleApiError } from "../../../lib/api";

type ListCommunityResponse = {
  communities?: {
    community?: Community;
    isJoined?: boolean | null;
  }[];
  before_size?: number;
  total_size?: number;
};

export const useCommunities = ({ requestSize }: { requestSize: number }) => {
  const { data, error, setSize, size } = useSWRInfinite<
    ListCommunityResponse | undefined,
    Error | ApiError
  >(
    (pageIndex, prevPageData) =>
      getKey({ requestSize, pageIndex, prevPageData }),
    fetcher
  );

  return {
    data,
    error,
    loading: !error && !data,
    size,
    setSize,
  };
};

const getKey = ({
  requestSize,
  pageIndex,
  prevPageData,
}: {
  requestSize: number;
  pageIndex: number;
  prevPageData?: ListCommunityResponse | null;
}) => {
  if (
    typeof prevPageData?.total_size === "number" &&
    prevPageData.total_size >= requestSize * pageIndex
  ) {
    return null;
  }

  if (!prevPageData?.communities) {
    return {
      key: `${CommunityService.name}/${CommunityService.prototype.listCommunity.name}`,
      requestSize,
    };
  }

  return {
    key: `${CommunityService.name}/${CommunityService.prototype.listCommunity.name}`,
    requestSize,
    beginCursor:
      prevPageData.communities[prevPageData.communities.length - 1].community
        ?.id,
  };
};

const fetcher = async ({
  requestSize,
  beginCursor,
}: NonNullable<ReturnType<typeof getKey>>) => {
  const result = await apiClient.community
    .listCommunity({
      requestSize,
      beginCursor,
    })
    .catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  return result;
};
