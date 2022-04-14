import {
  ApiError,
  CommunityEvent,
  CommunityEventComment,
  CommunityEventService,
  CommunityMember,
} from "api-server";
import useSWRInfinite from "swr/infinite";
import { apiClient, handleApiError } from "../../../lib/api";

type ListCommunityEventResponse = {
  events: {
    communityEvent: CommunityEvent;
    representativeComment: CommunityEventComment[];
  }[];
  includes: {
    communityMembers: CommunityMember[];
  };
  beforeSize: number;
  totalSize: number;
};

export const useListCommunityEvent = ({
  communityId,
  requestSize,
}: {
  communityId: string;
  requestSize: number;
}) => {
  const { data, error, setSize, size } = useSWRInfinite<
    ListCommunityEventResponse,
    Error | ApiError
  >(
    (pageIndex, prevPageData) =>
      getKey({ communityId, requestSize, pageIndex, prevPageData }),
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
  communityId,
  requestSize,
  prevPageData,
  pageIndex,
}: {
  communityId: string;
  requestSize: number;
  pageIndex: number;
  prevPageData?: ListCommunityEventResponse | null;
}) => {
  if (
    typeof prevPageData?.totalSize === "number" &&
    prevPageData.totalSize >= requestSize * pageIndex
  ) {
    return null;
  }

  const key = `${CommunityEventService.name}/${CommunityEventService.prototype.listCommunityEvent.name}`;

  if (!prevPageData?.events) {
    return {
      key,
      communityId,
      requestSize,
    };
  }

  return {
    key,
    communityId,
    requestSize,
    beginCursor:
      prevPageData.events[prevPageData.events.length - 1].communityEvent.id,
  };
};

const fetcher = async ({
  communityId,
  requestSize,
  beginCursor,
}: NonNullable<ReturnType<typeof getKey>>) => {
  const result = await apiClient.communityEvent
    .listCommunityEvent({
      communityId,
      requestSize,
      beginCursor,
    })
    .catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  return result;
};
