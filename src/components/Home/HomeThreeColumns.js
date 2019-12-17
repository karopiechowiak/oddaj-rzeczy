import React from "react";
import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import threeColumnsBackgroundImage from "./../../assets/3ColumnsBackground.png";

const StyledSection = styled.section`
  display: flex;
  background-color: ${colors.backgroundYellow};
  background-image: url(${threeColumnsBackgroundImage});
  justify-content: space-evenly;
  text-align: center;
  color: ${colors.textBrown};
  padding: 80px 0;
`;

const StyledArticle = styled.article`
  flex-basis: 25%;
`;

const StyledHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 18px;
`;

const StyledNumberSpan = styled.span`
  font-weight: 300;
  font-size: 90px;
`;

const StyledP = styled.p`
  font-family: ${fonts.altFont};
  font-weight: 300;
  font-size: 16px;
  padding: 10px 10px 30px;
`;

export const HomeThreeColumns = () => {
  return (
    <StyledSection id="threeColumns">
      <StyledArticle>
        <StyledHeader>
          <StyledNumberSpan>10</StyledNumberSpan>
          <br />
          oddanych worków
        </StyledHeader>
        <StyledP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus,
          sem nec congue elementum, massa ex iaculis.{" "}
        </StyledP>
      </StyledArticle>
      <StyledArticle>
        <StyledHeader>
          <StyledNumberSpan>5</StyledNumberSpan>
          <br />
          wspartych organizacji
        </StyledHeader>
        <StyledP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus,
          sem nec congue elementum, massa ex iaculis.
        </StyledP>
      </StyledArticle>
      <StyledArticle>
        <StyledHeader>
          <StyledNumberSpan>7</StyledNumberSpan>
          <br />
          zorganizowanych zbiórek
        </StyledHeader>
        <StyledP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus,
          sem nec congue elementum, massa ex iaculis.
        </StyledP>
      </StyledArticle>
    </StyledSection>
  );
};
