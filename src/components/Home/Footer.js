import React from "react";

import styled from "styled-components";

import instagramIcon from "./../../assets/Instagram.svg";
import facebookIcon from "./../../assets/Facebook.svg";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Footer = props => {
  return (
    <StyledFooter>
      <p>Copyright by Coders Lab</p>
      <div>
        <img src={facebookIcon} alt="" />
        <img src={instagramIcon} alt="" />
      </div>
    </StyledFooter>
  );
};
