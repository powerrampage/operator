import { FC, Suspense, lazy } from "react";
import FilterAction from "./components/FilterAction";
import { Container } from "components/shared";
import { Skeleton } from "antd";

import StatisticChartsLoading from "./components/StatisticCharts/StatisticCharts.loading";
const TableOperator = lazy(() => import("./components/TableOperator"));
const StatisticCharts = lazy(() => import("./components/StatisticCharts"));

const Home: FC = () => {
  return (
    <section className="my40">
      <Container>
        <FilterAction />
        <Suspense fallback={<StatisticChartsLoading />}>
          <StatisticCharts />
        </Suspense>
        <Suspense fallback={<Skeleton active />}>
          <TableOperator />
        </Suspense>
      </Container>
    </section>
  );
};

export default Home;
