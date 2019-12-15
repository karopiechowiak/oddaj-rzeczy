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
  // border: 1px solid red;
`;

const StyledLi = styled.li`
  margin: 10px;
  border: 0.75px solid ${colors.textDarkGrey};
  display: flex;
  width: 30%;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 36px;
  text-decoration: none;
  color: ${colors.textDarkGrey};
  height: 100%;
  text-transform: uppercase;
  font-weight: 300;
  // border: 1px solid red;
  text-align: center;
  width: 100%;
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
