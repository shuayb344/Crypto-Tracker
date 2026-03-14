interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (updater: (prev: number) => number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <button
        className="px-3 py-1 bg-neutral-800 cursor-pointer rounded disabled:opacity-50"
        disabled={prevDisabled}
        onClick={() => onPageChange((p) => p - 1)}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="px-3 py-1 bg-neutral-800 cursor-pointer rounded disabled:opacity-50"
        disabled={nextDisabled}
        onClick={() => onPageChange((p) => p + 1)}
      >
        Next
      </button>
    </div>
  );
}
