import React from "react";

import styled from "styled-components";
import { fonts, colors } from "./../../styles/styles";

import decorImage from "./../../assets/Decoration.svg";

import { AuthNav } from "./../Home/AuthNav";
import { MainNav } from "./../Home/MainNav";
import { Input } from "./../Home/HomeContactUs";

export const Logout = () => {
  return (
    <Wrapper>
      <AuthNav />
      <MainNav />
      <TextWrapper>
        <h2>
          Wylogowanie nastąpiło pomyślnie! <br />
          <img src={decorImage} alt="" />
        </h2>
      </TextWrapper>
      <ButtonWrapper>
        <button>Strona główna</button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  font-family: ${fonts.mainFont};
  color: ${colors.textDarkGrey};
  h2 {
    text-align: center;

    img {
      margin-top: 10px;
    }
  }
`;

const TextWrapper = styled.div`
  margin: 200px auto 0;
  width: 400px;
`;

const ButtonWrapper = styled.div`
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
  width: 600px;

  button {
    width: 150px;
    height: 50px;
    font-size: 18px;
    background: transparent;
    border: 1px solid ${colors.textDarkGrey};
    font-family: ${fonts.mainFont};
  }
`;
