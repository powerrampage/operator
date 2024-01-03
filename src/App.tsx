import { Suspense, useEffect } from "react";
import { ConfigProvider } from "antd";
import { globalAntdConfig } from "config";
import { CommonInfoProvider } from "context/commonInfo";
import locale from "antd/locale/ru_RU";
import { Layout, PageLoader } from "components/shared";
import AllRoutes from "Routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "assets/styles/index.scss";
import "assets/styles/abstracts/_functions.scss";
// import { startApi } from "services/eimzo";
import axios from "axios";

function App() {
  // useEffect(() => {
  // 	startApi();
  // }, []);

  return (
    <CommonInfoProvider>
      <ConfigProvider theme={globalAntdConfig} locale={locale}>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <AllRoutes />
            <ReactQueryDevtools initialIsOpen={false} />
          </Suspense>
        </Layout>
      </ConfigProvider>
    </CommonInfoProvider>
  );
}

export default App;
