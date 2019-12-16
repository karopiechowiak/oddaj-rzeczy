import React from "react";
import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import decorImage from "./../../assets/Decoration.svg";
import signatureImage from "./../../assets/Signature.svg";
import peopleImage from "./../../assets/People.jpg";

const StyledSection = styled.section`
  background-color: ${colors.backgroundGrey};
  display: flex;
`;

const TextWrapper = styled.div`
  box-sizing: border-box;
  flex-basis: 50%;
  padding: 100px;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h2`
  font-weight: 400;
  font-size: 38px;
`;

const StyledDecorImage = styled.img`
  margin: 20px 0;
`;

const StyledSignatureImage = styled.img`
  width: 150px;
  align-self: flex-end;
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
  background-image: url(${peopleImage});
  background-size: cover;
  background-repeat: no-repeat;
  flex-basis: 50%;
`;

export const HomeAboutUs = () => {
  return (
    <StyledSection id="aboutUs">
      <TextWrapper>
        <StyledHeader>O nas</StyledHeader>
        <StyledDecorImage src={decorImage} />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <StyledSignatureImage src={signatureImage} />
      </TextWrapper>
      <ImageWrapper></ImageWrapper>
    </StyledSection>
  );
};
