import React from "react";
import { fonts } from "../../styles/styles";

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  console.log(itemsPerPage, totalItems);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

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
