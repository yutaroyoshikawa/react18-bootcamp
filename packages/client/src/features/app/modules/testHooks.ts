import { Configuration, DefaultApi } from "api-server";
import { useCallback, useEffect, useState } from "react";
import { handleApiError } from "../../../lib/api";

type TestState =
  | {
      status: "initial";
      payload: undefined;
      error: undefined;
    }
  | {
      status: "loading";
      payload?: string;
      error?: Error;
    }
  | {
      status: "success";
      payload: string;
      error: undefined;
    }
  | {
      status: "failed";
      payload: undefined;
      error: Error;
    };

export const useTest = () => {
  const [state, setState] = useState<TestState>({
    status: "initial",
    payload: undefined,
    error: undefined,
  });

  const fetchTest = useCallback(async () => {
    setState((prev) => ({
      ...prev,
      status: "loading",
    }));

    const config = new Configuration({
      basePath: "http://localhost:3000",
    });

    const result = await new DefaultApi(config)
      .getTest({
        name: "hello world",
      })
      .catch(handleApiError);

    if (result instanceof Error) {
      setState({
        status: "failed",
        payload: undefined,
        error: result,
      });
      return;
    }

    setState({
      status: "success",
      payload: result,
      error: undefined,
    });

    console.log(result);
  }, []);

  useEffect(() => {
    fetchTest();
  }, [fetchTest]);

  return state;
};
