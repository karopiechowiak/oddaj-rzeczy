import React from "react";

import instagramIcon from "./../../assets/Instagram.svg";
import facebookIcon from "./../../assets/Facebook.svg";

export const Footer = props => {
  return (
    <footer>
      <p>Copyright by Coders Lab</p>
      <img src={facebookIcon} />
      <img src={instagramIcon} />
    </footer>
  );
};
