import React from "react";

import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import decorImage from "./../../assets/Decoration.svg";

const StyledLi = styled.li`
  display: flex;
  width: 80%;
  margin: 0 auto;

  div {
    flex-basis: 50%;
  }

  h3 {
    text-align: left;
  }

  p {
    margin-bottom: 0;
    text-align: left;
  }
`;

const StyledLine = styled.hr`
  width: 80%;
  margin: 15px auto;

  &:last-child {
    display: none;
  }
`;

const StyledNeeds = styled.p`
  font-size: 14px;
  margin: 0 0 0 auto;
`;

export const Organisations = ({ organisations, loading }) => {
  if (loading) return null;

  return (
    <ul>
      {organisations.map(item => (
        <>
          <StyledLi key={item.id}>
            <div>
              <h3>
                {organisations.type} {item.name}
              </h3>
              <p>{item.goal}</p>
            </div>
            <StyledNeeds>{item.needs}</StyledNeeds>
          </StyledLi>
          <StyledLine />
        </>
      ))}
    </ul>
  );
};
