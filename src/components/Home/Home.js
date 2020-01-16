import React from "react";

import { HomeHeader } from "./HomeHeader";
import { HomeThreeColumns } from "./HomeThreeColumns";
import { HomeFourSteps } from "./HomeFourSteps";
import { HomeAboutUs } from "./HomeAboutUs";
import { HomeOrganisations } from "./HomeOrganisations";
import { HomeContactUs } from "./HomeContactUs";

import styled, { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./../../styles/styles";

const GlobalStyle = createGlobalStyle`
body{
  font-family: ${fonts.mainFont};
  background-color: ${colors.backgroundWhite}
  width: 100vw;
  color: ${colors.textDarkGrey}
}

* {
  padding: 0;
  margin: 0;
}
`;

const StyledWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
  background-color: ${colors.blue};
`;

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <HomeHeader />
        <HomeThreeColumns />
        <HomeFourSteps />
        <HomeAboutUs />
        <HomeOrganisations />
        <HomeContactUs />
      </StyledWrapper>
    </>
  );
};
