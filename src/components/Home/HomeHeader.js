import React from "react";
import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import headerImage from "./../../assets/Home-Hero-Image.jpg";
import decorImage from "./../../assets/Decoration.svg";
import { AuthNav } from "./AuthNav";
import { ActionsNav } from "./ActionsNav";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const StyledHeader = styled.header`
  height: 100vh;
  background-image: url(${headerImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: -300px 15px;
`;

const StyledContentWrapper = styled.div`
  margin-left: 50vh;
  // border: 1px solid royalblue;
  height: 100%;
  display: flex;
  flex-direction: column;
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

const StyledH1 = styled.h1`
  font-size: 38px;
  text-align: center;
  font-weight: 400;
  margin-top: 100px;
  color: ${colors.textDarkGrey};
`;

const StyledDecorImage = styled.img`
  margin-top: 20px;
`;

export const HomeHeader = () => {
  return (
    <StyledHeader>
      <StyledContentWrapper>
        <AuthNav />
        <nav>
          <StyledUl>
            <StyledLi>
              <StyledLink to="example">Start</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/rejestracja">O co chodzi?</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/rejestracja">O nas</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/rejestracja">Fundacja i organizacje</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/rejestracja">Kontakt</StyledLink>
            </StyledLi>
          </StyledUl>
        </nav>
        <StyledH1>
          Zacznij pomagać!
          <br /> Oddaj niechciane rzeczy w zaufane ręce
        </StyledH1>
        <StyledDecorImage src={decorImage} />
        <ActionsNav />
      </StyledContentWrapper>
    </StyledHeader>
  );
};
