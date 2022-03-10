import { ApiClient, ApiError } from "api-server";

export const handleApiError = (error: Error | ApiError) => {
  console.error(error);
  return error;
};

export const apiClient = new ApiClient({
  BASE: import.meta.env.VITE_APP_API_BASE_URL,
  HEADERS: {
    "Access-Control-Allow-Origin": "no-cors",
  },
});
