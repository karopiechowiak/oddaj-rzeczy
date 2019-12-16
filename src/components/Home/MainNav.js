import React from "react";
import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

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
  &:nth-child(1) {
    border: 0.75px solid ${colors.textDarkGrey};
  }
`;

const StyledLink = styled(Link)`
  // border: 1px solid orange;
  font-size: 18px;
  text-decoration: none;
  height: 100%;
  padding: 10px;
  color: ${colors.textDarkGrey};
`;

export const MainNav = () => {
  return (
    <nav>
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
    </nav>
  );
};
