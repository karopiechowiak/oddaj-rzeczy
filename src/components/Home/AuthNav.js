import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./../../styles/styles";

const StyledUl = styled.ul`
  list-style: none;
  margin-right: 30px
  display: flex;
  justify-content: flex-end;
  // border: 1px solid red;

`;

const StyledLi = styled.li`
  margin: 10px;
  padding: 10px 0;
  &:nth-child(2) {
    border: 0.75px solid ${colors.backgroundYellow};
  }
`;
const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  text-decoration: none;
  color: ${colors.textLightGrey};
  // border: 1px solid orange;
  height: 100%;
  padding: 10px;
`;

export const AuthNav = () => {
  return (
    <nav>
      <StyledUl>
        <StyledLi>
          <StyledNavLink to="/logowanie">Zaloguj</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/rejestracja">Załóż konto</StyledNavLink>
        </StyledLi>
      </StyledUl>
    </nav>
  );
};
