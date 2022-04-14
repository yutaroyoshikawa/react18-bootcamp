import { ApiError, Community, CommunityService } from "api-server";
import useSWRInfinite from "swr/infinite";
import { apiClient, handleApiError } from "../../../lib/api";

type ListCommunityResponse = {
  communities: {
    community: Community;
    isJoined?: boolean | null | undefined;
  }[];
  beforeSize: number;
  totalSize: number;
};

export const useCommunities = ({
  requestSize,
  keyword,
}: {
  requestSize: number;
  keyword?: string;
}) => {
  const { data, error, setSize, size } = useSWRInfinite<
    ListCommunityResponse,
    Error | ApiError
  >(
    (pageIndex, prevPageData) =>
      getKey({ requestSize, pageIndex, prevPageData, keyword }),
    fetcher,
    {
      suspense: true,
    }
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
  keyword,
}: {
  requestSize: number;
  pageIndex: number;
  prevPageData?: ListCommunityResponse | null;
  keyword?: string;
}) => {
  if (
    typeof prevPageData?.totalSize === "number" &&
    prevPageData.totalSize >= requestSize * pageIndex
  ) {
    return null;
  }

  if (!prevPageData?.communities) {
    return {
      key: `${CommunityService.name}/${CommunityService.prototype.listCommunity.name}`,
      requestSize,
      keyword,
    };
  }

  return {
    key: `${CommunityService.name}/${CommunityService.prototype.listCommunity.name}`,
    requestSize,
    keyword,
    beginCursor:
      prevPageData.communities[prevPageData.communities.length - 1].community
        ?.id,
  };
};

const fetcher = async ({
  requestSize,
  beginCursor,
  keyword,
}: NonNullable<ReturnType<typeof getKey>>) => {
  const result = await apiClient.community
    .listCommunity({
      requestSize,
      beginCursor,
      keyword,
    })
    .catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  return result;
};
