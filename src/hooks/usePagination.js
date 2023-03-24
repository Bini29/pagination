import { dotts } from "../components/Pagination/Pagination";

const getPages = (length, inc = 1) => Array.from({ length }, (_, i) => i + inc);

export default function usePagination(totalItems, currentPage, itemsPerPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 5) {
    return getPages(totalPages);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, dotts, totalPages];
  }

  if (currentPage < totalPages - 2) {
    return [
      1,
      dotts,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      dotts,
      totalPages,
    ];
  }
  return [1, dotts, ...getPages(4, totalPages - 3)];
}
