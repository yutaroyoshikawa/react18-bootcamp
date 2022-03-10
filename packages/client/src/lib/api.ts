import { Configuration } from "api-server";

export const handleApiError = (error: Error) => {
  console.error(error);
  return error;
};

export const getApiConfig = () => {
  return new Configuration({
    basePath: import.meta.env.VITE_APP_API_BASE_URL,
  });
};
