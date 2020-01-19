import React from "react";
import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import { Link, animateScroll as scroll } from "react-scroll";

const StyledNav = styled.nav`
  align-self: flex-end;
`;

const StyledUl = styled.ul`
  list-style: none;
  margin-right: 30px
  display: flex;
  justify-content: flex-end;
  // border: 1px solid red;
`;

const StyledLi = styled.li`
  // border: 1px solid purple;
  margin: 10px;
  padding: 10px 0;
  height: 40px;
  display: flex;
  align-items: center;
  &:nth-child(1) {
    border: 0.75px solid ${colors.textDarkGrey};
    padding: 10px;
  }
`;

const StyledLink = styled(Link)`
  // border: 1px solid orange;
  font-size: 18px;
  text-decoration: none;
  width: 100%;
  padding: 10px;
  color: ${colors.textDarkGrey};
  &:hover {
    cursor: pointer;
  }
`;

export const MainNav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="threeColumns" smooth duration={1000}>
            Start
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="fourSteps" smooth duration={1000}>
            O co chodzi?
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="aboutUs" smooth duration={1000}>
            O nas
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="organisations" smooth duration={1000}>
            Fundacja i organizacje
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="contactUs" smooth duration={1000}>
            Kontakt
          </StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};
