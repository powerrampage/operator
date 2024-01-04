import { ThemeConfig } from "antd/es/config-provider/context";

// https://ant.design/docs/react/customize-theme#api
export const globalAntdConfig: ThemeConfig = {
  token: {
    colorPrimary: "#325ecd",
    colorError: "#e9573f",
    colorTextDisabled: "#717C8C",
    fontWeightStrong: 700,
    fontFamily: `PT Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif`,
    colorSplit: "#4D6EFF",
  },
};

export const languages = ["cyril", "ru", "latin"] as const;
