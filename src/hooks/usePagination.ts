import { useMemo, useState } from "react";
import { CONTENT_PER_PAGE } from "../data";

interface ReturnedData<TResponse> {
  totalPages: number;
  setPage: (page: number) => void;
  items: TResponse[];
  page: number;
  handlePageClick: (e: PageClickEvent) => void;
}

interface PageClickEvent {
  selected: number;
}

export default function usePagination<T extends { name: string }>(
  contentPerPage: number,
  items: T[],
  filter?: string
): ReturnedData<T> {
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageCount = Math.ceil(totalItems / contentPerPage);

  const itemsData = useMemo(() => {
    let computedItems = items;

    if (filter) {
      computedItems = computedItems.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    setTotalItems(computedItems.length);
    return computedItems.slice(
      (page - 1) * CONTENT_PER_PAGE,
      (page - 1) * CONTENT_PER_PAGE + CONTENT_PER_PAGE
    );
  }, [items, page, filter]);

  const handlePageClick = (e: PageClickEvent) => {
    setPage(e.selected + 1);
  };
  const setPageSAFE = (num: number) => {
    if (num > pageCount) {
      setPage(1);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };
  return {
    totalPages: pageCount,
    setPage: setPageSAFE,
    page,
    items: itemsData,
    handlePageClick,
  };
}
