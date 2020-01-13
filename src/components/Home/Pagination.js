import React, { useEffect } from "react";

import styled from "styled-components";
import { colors, fonts } from "../../styles/styles";

const StyledButton = styled.button`
  background: transparent;
  font-family: ${fonts.mainFont};
  height: 40px;
  width: 30px;
  margin: 40px 20px;
  border: none;
  font-size: 18px;
  box-sizing: border-box;

  &:focus {
    border: 1px solid ${colors.textDarkGrey};
  }
`;

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length === 1) return null;

  return (
    <nav>
      {pageNumbers.map(number => (
        <StyledButton key={number} onClick={() => paginate(number)}>
          {number}
        </StyledButton>
      ))}
    </nav>
  );
};
