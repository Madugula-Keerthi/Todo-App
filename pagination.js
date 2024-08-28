// components/pagination.js
import React from 'react';
import Link from 'next/link';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link href={`/?page=${currentPage - 1}`}>
          <a>Previous</a>
        </Link>
      )}
      {currentPage < totalPages && (
        <Link href={`/?page=${currentPage + 1}`}>
          <a>Next</a>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
