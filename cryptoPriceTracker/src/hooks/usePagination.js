import { useMemo, useState } from "react";

export default function usePagination(items = [], initialPageSize = 10) {
  const [rawPage, setRawPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalPages = useMemo(() => {
    const total = Math.ceil((items?.length || 0) / pageSize);
    return total > 0 ? total : 1;
  }, [items, pageSize]);

  const currentPage = useMemo(() => {
    return Math.max(1, Math.min(rawPage, totalPages));
  }, [rawPage, totalPages]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min((items?.length || 0), startIndex + pageSize);

  const currentPageItems = useMemo(() => {
    return Array.isArray(items) ? items.slice(startIndex, endIndex) : [];
  }, [items, startIndex, endIndex]);

  const next = () => setRawPage((p) => Math.min(totalPages, p + 1));
  const prev = () => setRawPage((p) => Math.max(1, p - 1));

  return {
    currentPage,
    setCurrentPage: setRawPage,
    pageSize,
    setPageSize,
    totalPages,
    startIndex,
    endIndex,
    currentPageItems,
    next,
    prev,
  };
}
