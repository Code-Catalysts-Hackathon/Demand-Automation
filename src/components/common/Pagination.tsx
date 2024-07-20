import React, { useCallback, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getPaginationList } from '../../utils';
export default function Pagination({ totalEntries, perPage, currentPage, onChange }: any) {
  const totalPages = useMemo(() => Math.ceil(totalEntries / perPage), [perPage, totalEntries]);

  const onChangePage = useCallback(
    (pageNumber: number) => {
      onChange(pageNumber);
    },
    [onChange, perPage]
  );

  const pages = useMemo(() => {
    return getPaginationList(currentPage, totalPages, perPage);
  }, [totalPages, currentPage]);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white py-3">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          to="#"
          onClick={currentPage > 0 ? () => onChangePage(currentPage - 1) : undefined}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </Link>
        <Link
          to="#"
          onClick={currentPage < totalPages - 1 ? () => onChangePage(currentPage + 1) : undefined}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 hidden">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">10</span> of <span className="font-medium">97</span>{' '}
            results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <Link
              to="#"
              onClick={currentPage > 0 ? () => onChangePage(currentPage - 1) : undefined}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Previous</span>
              <FaChevronLeft aria-hidden="true" className="h-5 w-5" />
            </Link>
            {pages.map((pageItem: number) => {
              return (
                <Link
                  to="#"
                  onClick={() => onChangePage(pageItem)}
                  aria-current="page"
                  className={`ring-1 ring-inset ring-gray-300 relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${pageItem === currentPage ? 'bg-primary-dark text-white focus-visible:outline-primary-dark' : 'bg-white text-primary-dark'}`}>
                  {pageItem + 1}
                </Link>
              );
            })}
            <Link
              to="#"
              onClick={
                currentPage < totalPages - 1 ? () => onChangePage(currentPage + 1) : undefined
              }
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Next</span>
              <FaChevronRight aria-hidden="true" className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
