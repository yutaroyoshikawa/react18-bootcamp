import { ApiClient, ApiError } from "api-server";

export const handleApiError = async (
  error: Error | ApiError
): Promise<Error | ApiError> => {
  if (error instanceof Error) {
    console.error(error);
    return error;
  }

  return Promise.reject(error);
};

export const apiClient = new ApiClient({
  BASE: import.meta.env.VITE_APP_API_BASE_URL,
});
