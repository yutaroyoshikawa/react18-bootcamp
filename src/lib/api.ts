export const httpClient = async (
  path: ReturnType<
    typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS][keyof typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS]]
  >,
  config?: RequestInit
) => {
  const request = new Request(`${ORIGIN}${path}`, config);
  return await fetch(request);
};

export const handleApiError = (error: Error) => {
  console.error(error);
  return error;
};

export const ORIGIN = "https://api.github.com";

export const API_ENDPOINTS = {
  orgs: {
    orgsRepos: <T extends string>(org: T) => `/orgs/${org}/repos` as const,
  },
} as const;
