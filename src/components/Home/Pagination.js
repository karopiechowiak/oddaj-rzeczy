import React, { useEffect } from "react";
import { fonts } from "../../styles/styles";

export const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  setCurrentPage,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // if (currentPage !== pageNumbers) {
  //   setCurrentPage(1);
  // }

  return (
    <nav>
      {pageNumbers.map(number => (
        <button key={number} onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </nav>
  );
};
