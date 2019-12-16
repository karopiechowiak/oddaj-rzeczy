import React from "react";
import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import decorImage from "./../../assets/Decoration.svg";
import signatureImage from "./../../assets/Signature.svg";
import peopleImage from "./../../assets/People.jpg";

const StyledSection = styled.section`
  background-color: ${colors.backgroundGrey};
`;

const TextWrapper = styled.div``;

const StyledDecorImage = styled.img`
  margin-top: 20px;
  margin-bottom: 50px;
`;

const ImageWrapper = styled.div`
  backround-image: url(${peopleImage});
  width: 50%;
  height: 100px;
`;

export const HomeAboutUs = () => {
  return (
    <StyledSection id="aboutUs">
      <TextWrapper>
        <h2>O nas</h2>
        <StyledDecorImage src={decorImage} />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img src={signatureImage} />
      </TextWrapper>
      <ImageWrapper></ImageWrapper>
    </StyledSection>
  );
};
