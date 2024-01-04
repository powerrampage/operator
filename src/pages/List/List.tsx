import { FC } from "react";
import FilterAction from "./components/FilterAction";
import TableList from "./components/TableList";
import { Container } from "components/shared";

const List: FC = () => {
  return (
    <section className="my40">
      <Container>
        <FilterAction />
        <TableList />
      </Container>
    </section>
  );
};

export default List;
