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
  const { logoutUser } = useUser();

  // General request (project request)
  const generalRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    auth: { username: "sms", password: "sms$?221" },
  });

  [generalRequest].forEach(({ interceptors: { request, response } }) => {
    request.use(
      (config) => {
        config.auth = { username: "sms", password: "sms$?221" };
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
