import React from "react";
import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import headerImage from "./../../assets/Home-Hero-Image.jpg";
import decorImage from "./../../assets/Decoration.svg";
import { AuthNav } from "./AuthNav";
import { ActionsNav } from "./ActionsNav";
import { MainNav } from "./MainNav";

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
        <MainNav />
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
