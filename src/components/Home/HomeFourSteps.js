import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./../../styles/styles";
import decorImage from "./../../assets/Decoration.svg";
import shirtIcon from "./../../assets/Icon-1.svg";
import bagIcon from "./../../assets/Icon-2.svg";
import lookingGlassIcon from "./../../assets/Icon-3.svg";
import arrowsIcon from "./../../assets/Icon-4.svg";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 80px 0;
  color: ${colors.textDarkGrey};
`;

const StyledSectionHeader = styled.h2`
  font-weight: 400;
  font-size: 38px;
`;

const StyledDecorImage = styled.img`
  margin-top: 20px;
  margin-bottom: 50px;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  background-color: ${colors.backgroundGrey};
  padding: 70px 0;
  font-size: 16px;
  width: 100%;
`;

const StyledArticle = styled.article`
  text-align: center;
  flex-basis: 11%;
`;

const StyledArticleHeader = styled.h3`
  font-weight: 400;
  font-size: 18px;
`;

const StyledIconImage = styled.img`
  max-width: 83px;
`;

const StyledLine = styled.hr`
  width: 100px;
  margin: 10px auto;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 36px;
  text-decoration: none;
  color: ${colors.textDarkGrey};
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  width: 200px;
  padding: 10px 45px;
  border: 1px solid;
  margin-top: 50px;
`;

export const HomeFourSteps = () => {
  return (
    <StyledWrapper>
      <StyledSectionHeader id="fourSteps">
        Wystarczą 4 proste kroki
      </StyledSectionHeader>
      <StyledDecorImage src={decorImage} />
      <StyledSection>
        <StyledArticle>
          <StyledIconImage src={shirtIcon} />
          <StyledArticleHeader>Wybierz rzeczy</StyledArticleHeader>
          <StyledLine />
          <p>ubrania, zabawki, sprzęt i inne</p>
        </StyledArticle>
        <StyledArticle>
          <StyledIconImage src={bagIcon} />
          <StyledArticleHeader>Spakuj je</StyledArticleHeader>
          <StyledLine />
          <p>skorzystaj z worków na śmieci</p>
        </StyledArticle>
        <StyledArticle>
          <StyledIconImage src={lookingGlassIcon} />
          <StyledArticleHeader>Zdecyduj komu chcesz pomóc</StyledArticleHeader>
          <StyledLine />
          <p>wybierz zaufane miejsce</p>
        </StyledArticle>
        <StyledArticle>
          <StyledIconImage src={arrowsIcon} />
          <StyledArticleHeader>Zamów kuriera</StyledArticleHeader>
          <StyledLine />
          <p>kurier przyjedzie w dogodnym terminie</p>
        </StyledArticle>
      </StyledSection>
      <StyledNavLink to="/logowanie">Oddaj rzeczy</StyledNavLink>
    </StyledWrapper>
  );
};
