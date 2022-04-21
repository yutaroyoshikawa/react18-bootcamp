import { ApiError, CommunityEvent } from "api-server";
import { useCallback, useState, useTransition } from "react";
import { apiClient, handleApiError } from "../../../lib/api";

type CreateCommunityEventState =
  | {
      status: "initial";
      error: undefined;
    }
  | {
      status: "loading";
      error?: Error | ApiError;
    }
  | {
      status: "success";
      error: undefined;
    }
  | {
      status: "failed";
      error: Error | ApiError;
    };

const initialState: CreateCommunityEventState = {
  status: "initial",
  error: undefined,
};

export const useCreateCommunityEvent = () => {
  const [state, setState] = useState<CreateCommunityEventState>(initialState);
  const [isPending, startTransition] = useTransition();

  const createCommunityEvent = useCallback(
    async ({
      communityId,
      name,
      details,
      holdAt,
      category,
    }: {
      communityId: string;
      name: string;
      details: string;
      holdAt: Date;
      category: CommunityEvent["category"];
    }) => {
      startTransition(() => {
        setState((prev) => ({
          ...prev,
          status: "loading",
        }));
      });

      const res = await apiClient.communityEvent
        .createCommunityEvent({
          communityId,
          requestBody: {
            name,
            details,
            holdAt: holdAt.getTime(),
            category,
          },
        })
        .catch(handleApiError);

      if (res instanceof Error) {
        startTransition(() => {
          setState({
            status: "failed",
            error: res,
          });
        });

        return res;
      }

      startTransition(() => {
        setState({
          status: "success",
          error: undefined,
        });
      });

      return res;
    },
    []
  );

  return {
    state,
    createCommunityEvent,
    isPending,
  };
};