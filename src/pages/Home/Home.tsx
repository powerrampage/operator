import { FC } from "react";
import FilterAction from "./components/FilterAction";
import StatisticCharts from "./components/StatisticCharts";
import TableOperator from "./components/TableOperator";

const Home: FC = () => {
  return (
    <section>
      <FilterAction />
      <StatisticCharts />
      <TableOperator />
    </section>
  );
};

export default Home;
