import React from "react";
import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import headerImage from "./../../assets/Home-Hero-Image.jpg";

const StyledHeader = styled.header`
  height: 60vh;
  background-image: url(${headerImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: -170px 15px;
`;

export const HomeHeader = () => {
  return (
    <StyledHeader>
      <h1>Hi there!</h1>
    </StyledHeader>
  );
};
