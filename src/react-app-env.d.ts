/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_ENV: "prod" | "dev";
    REACT_APP_YANDEX_API_KEY: string;

    REACT_APP_DOMAIN_URL: string;
    REACT_APP_API_URL: string;
  }
}
