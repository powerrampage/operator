import { FC } from "react";

import "./Pagination.scss";
import useItemRender from "./useItemRender";
import { Pagination, PaginationProps } from "antd";

type Props = PaginationProps & {};

const AntPagination: FC<Props> = ({ ...props }) => {
  const { itemRender } = useItemRender();

  return <Pagination itemRender={itemRender} {...props} />;
};

export default AntPagination;
