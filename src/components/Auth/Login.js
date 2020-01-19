import React from "react";

import styled from "styled-components";
import { fonts, colors } from "./../../styles/styles";

import decorImage from "./../../assets/Decoration.svg";

import { AuthNav } from "./../Home/AuthNav";
import { MainNav } from "./../Home/MainNav";
import { Input } from "./../Home/HomeContactUs";

export const Login = () => {
  return (
    <Wrapper>
      <AuthNav />
      <MainNav />
      <h2>
        Zaloguj się <br />
        <img src={decorImage} alt="" />
      </h2>
      <FormWrapper>
        <div>
          <label name="email">Email </label>
          <br />
          <Input name="email" />
        </div>
        <div>
          <label name="password">Hasło</label>
          <br />
          <Input name="password" />
        </div>
      </FormWrapper>
      <ButtonWrapper>
        <button>Załóż konto</button>
        <button>Zaloguj się</button>
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

const FormWrapper = styled.form`
  margin: 0 auto;
  width: 400px;
  height: 250px;
  background-color: ${colors.backgroundGrey};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
