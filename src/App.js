import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Register } from "./components/Auth/Register";
import { Login } from "./components/Auth/Login";

export const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/rejestracja" component={Register} />
      <Route path="/logowanie" exact component={Login} />
    </Router>
  );
};
