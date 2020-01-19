import React, { useState } from "react";

import axios from "axios";

import { Footer } from "./Footer";

import styled from "styled-components";
import { colors } from "./../../styles/styles";

import formImage from "./../../assets/Background-Contact-Form.jpg";
import decorImage from "./../../assets/Decoration.svg";

export const HomeContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);

  const sendMessage = async e => {
    e.preventDefault();
    setError([]);

    if (name.trim().length < 2) {
      setError(error => [
        ...error,
        "Imię powinno zawierać przynajmniej 2 znaki!"
      ]);
      console.log(error);
    }
    if (email.trim().length < 5) {
      setError(error => [...error, "Podaj poprawny adres email!"]);
      console.log(error);
    }
    if (message.trim().length < 2) {
      setError(error => [
        ...error,
        "Twoja wiadomość powinna zawierać przynajmniej 2 znaki!"
      ]);
    }
    if (error.length) return;

    const data = JSON.stringify({ name: name, email: email, message: message });

    await axios({
      method: "POST",
      url: "https://fer-api.coderslab.pl/v1/portfolio/contact",
      headers: { "Content-Type": "application/json" },
      data: data
    })
      .then(res => {
        console.log(res);
        alert("Wysłano wiadomość!");
      })
      .catch(err => console.log(err));
  };

  return (
    <Wrapper>
      <FormWrapper>
        <h2 id="contactUs">Skontaktuj się z nami</h2>
        <img src={decorImage} />
        {error.map(item => (
          <p>{item}</p>
        ))}
        <form onSubmit={sendMessage}>
          <InputContainer>
            <div>
              <label name="name">Wpisz swoje imię</label> <br />
              <Input
                type="text"
                name="name"
                placeholder="Krzysztof"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label name="mail">Wpisz swój email</label>
              <br />
              <Input
                type="email"
                name="mail"
                placeholder="abc@xyz.pl"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </InputContainer>
          <div>
            <label name="message">Wpisz swoją wiadomość</label>
            <br />
            <Textarea
              type="text"
              name="message"
              placeholder="Lorem ipsum"
              rows={10}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <Button type="submit" value="Wyślij" />
        </form>
      </FormWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  font-size: 14px;

  ::after {
    background-image: url(${formImage});
    content: "";
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const FormWrapper = styled.div`
  width: 60%;
  position: absolute;
  top: 0;
  right: 0;
  margin: 150px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 2rem;
  }

  h2 + img {
    margin: 30px 0;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${colors.textDarkGrey};
  height: 30px;
  width: 240px;
`;

const InputContainer = styled.div`
  display: flex;
  div:first-child {
    margin-right: 20px;
  }
`;

const Textarea = styled.textarea`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${colors.textDarkGrey};
  width: 500px;
`;

export const Button = styled.input`
  width: 150px;
  height: 50px;
  font-size: 18px;
  background: transparent;
  border: 1px solid ${colors.textDarkGrey};
  align-self: flex-end;
`;
