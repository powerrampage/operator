/* eslint-disable */

import { useCallback, useId, useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export type PaginationType = "state" | "param" | "storage";

export type UsePaginationProps = (
  | { type?: "state" | "param" }
  | { type?: "storage"; _storagePersist?: Storage; _paginationStorageName?: string }
) & {
  initialPageSize?: number;
  initialPage?: number;
};

const DEFAULT_STORAGE_NAME = "pagination";

export const usePagination = ({
  initialPage = 0,
  initialPageSize = 10,
  type = "state",
  ...props
}: UsePaginationProps = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const PAGINATION_KEY = useGenerateKeys();

  const PAGINATION_STORAGE_NAME =
    "_paginationStorageName" in props
      ? props._paginationStorageName!
      : DEFAULT_STORAGE_NAME;
  const storage = "_storagePersist" in props ? props._storagePersist! : sessionStorage;

  const setPageHandler = useCallback((page: number) => setPage(page), []);
  const setPageSizeHandler = useCallback((pageSize: number) => setPageSize(pageSize), []);
  const clearStorage = () => storage?.removeItem(PAGINATION_STORAGE_NAME);

  useEffect(() => {
    if (type === "param") {
      const page = +(searchParams.get(PAGINATION_KEY.page) ?? initialPage);
      const pageSize = +(searchParams.get(PAGINATION_KEY.pageSize) ?? initialPageSize);

      setPage(page);
      setPageSize(pageSize);
    }

    if (type === "storage") {
      const paginationStorage = JSON.parse(
        storage?.getItem(PAGINATION_STORAGE_NAME) ?? "{}"
      );

      const page = +(paginationStorage?.[PAGINATION_KEY.page] ?? initialPage);
      const pageSize = +(paginationStorage?.[PAGINATION_KEY.pageSize] ?? initialPageSize);

      setPage(page);
      setPageSize(pageSize);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (type === "param") {
        searchParams.set(PAGINATION_KEY.page, String(page));
        searchParams.set(PAGINATION_KEY.pageSize, String(pageSize));
        setSearchParams(searchParams, { replace: true });
      }

      if (type === "storage") {
        const prevPaginationStorage = JSON.parse(
          storage?.getItem(PAGINATION_STORAGE_NAME) ?? "{}"
        );

        storage?.setItem(
          PAGINATION_STORAGE_NAME,
          JSON.stringify({
            ...prevPaginationStorage,
            [PAGINATION_KEY.page]: String(page),
            [PAGINATION_KEY.pageSize]: String(pageSize),
          })
        );
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [page, pageSize]);

  return {
    page,
    pageSize,
    setPage: setPageHandler,
    setPageSize: setPageSizeHandler,
    PAGINATION_KEY,
    clearStorage,
  };
};

const useGenerateKeys = () => {
  const id = useId().slice(1, -1);

  return useMemo(
    () => ({
      pageSize: "pageSize-" + id,
      page: "page-" + id,
    }),
    [id]
  );
};
