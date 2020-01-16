import React from "react";

import { Footer } from "./Footer";

import styled from "styled-components";
import { colors } from "./../../styles/styles";

import formImage from "./../../assets/Background-Contact-Form.jpg";
import decorImage from "./../../assets/Decoration.svg";

export const HomeContactUs = () => {
  return (
    <Wrapper>
      <h2 id="contactUs">Skontaktuj się z nami</h2>
      <img src={decorImage} />
      <form>
        <label name="name">Wpisz swoje imię</label>
        <input type="text" name="name" placeholder="Krzysztof" />
        <label name="mail">Wpisz swój email</label>
        <input type="email" name="mail" placeholder="abc@xyz.pl" />
        <label name="message">Wpisz swoją wiadomość</label>
        <textarea type="text" name="message" placeholder="Lorem ipsum" />
        <input type="submit" value="Wyślij" />
      </form>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;

  ::after {
    background-image: url(${formImage});
    content: "";
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
