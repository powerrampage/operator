import { QueryClient } from "@tanstack/react-query";

import axios from "axios";
import { useUser } from "hooks";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function useAPIInstances() {
  const { token, logoutUser, language } = useUser();

  // General request (project request)
  const generalRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  [generalRequest].forEach(({ interceptors: { request, response } }) => {
    request.use(
      (config) => {
        if (token) {
          config.headers["Accept-Language"] = language;
          config.headers.Authorization = "Bearer " + token;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === 401 && window.location.hostname !== "localhost") {
          logoutUser();
        }

        return Promise.reject(error);
      }
    );
  });

  return {
    generalRequest,
  };
}
