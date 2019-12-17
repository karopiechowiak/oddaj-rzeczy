import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./../../styles/styles";

const StyledNav = styled.nav`
  margin-top: 50px;
`;

const StyledUl = styled.ul`
  list-style: none;
  margin-right: 30px
  display: flex;
  justify-content: center;
  width: 100%
`;

const StyledLi = styled.li`
  margin: 10px;
  border: 0.75px solid ${colors.textDarkGrey};
  display: flex;
  width: 300px;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 200px;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 36px;
  text-decoration: none;
  color: ${colors.textDarkGrey};
  height: 100%;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  width: 100%;
  @media (max-width: 1024px) {
    font-size: 26px;
  }
`;

export const ActionsNav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledNavLink to="/logowanie">
            Oddaj <br /> rzeczy
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/logowanie">Zorganizuj zbiórkę</StyledNavLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};
