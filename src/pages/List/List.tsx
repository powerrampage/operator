import { FC } from "react";
import FilterAction from "./components/FilterAction";
import TableList from "./components/TableList";
import { Container } from "components/shared";
import { usePagination } from "hooks";

const List: FC = () => {
  const pagination = usePagination();

  return (
    <section className="my40">
      <Container>
        <FilterAction {...{ pagination }} />
        <TableList {...{ pagination }} />
      </Container>
    </section>
  );
};

export default List;
