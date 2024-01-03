import { Ref, forwardRef, useRef } from "react";
import {
  Table as AntTable,
  TableProps as AntTableProps,
  TableColumnGroupType,
  TableColumnProps,
  TableColumnType,
  TableColumnsType,
  TablePaginationConfig,
} from "antd";
import cn from "classnames";
import { isArray } from "utils";
import { useItemRender } from "../Pagination";
import "./Table.scss";
import { Arrows, Download, DownloadProps, TableArrowsProps } from "./components";

type ColumnsType<T = unknown> = TableColumnsType<T>;

export interface TableProps<RecordType extends object = any>
  extends AntTableProps<RecordType> {
  download?: DownloadProps;
  arrows?: Omit<TableArrowsProps, "rootTableRef"> | undefined;
}

function fixedForwardRef<T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
): (props: P & React.RefAttributes<T>) => any {
  return forwardRef(render as any) as any;
}

export const RefTable = <TRecordType extends object = any>(
  {
    dataSource,
    size,
    pagination,
    download,
    bordered = true,
    arrows,
    ...props
  }: TableProps<TRecordType>,
  ref?: Ref<HTMLDivElement>
) => {
  const { itemRender } = useItemRender();
  const rootTableRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cn("sicnt-table")} ref={rootTableRef}>
      <AntTable<TRecordType>
        {...props}
        bordered={bordered}
        ref={ref as any}
        size={size}
        dataSource={isArray(dataSource) ? dataSource : []}
        pagination={
          pagination &&
          pagination.total! > 10 && {
            size: size !== "small" ? "default" : "small",
            itemRender,
            ...pagination,
            showSizeChanger: false,
            position: ["bottomCenter"],
            className: "sicnt-pagination",
          }
        }
      />
      {arrows && <Arrows {...arrows} rootTableRef={rootTableRef} />}
      {download?.show && !!dataSource?.length && <Download {...download} />}
    </div>
  );
};

export const Table = fixedForwardRef(RefTable);

export {
  type TableColumnGroupType,
  type TableColumnProps,
  type TableColumnType,
  type TableColumnsType,
  type TablePaginationConfig,
  type ColumnsType,
};
