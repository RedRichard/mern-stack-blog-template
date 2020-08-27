import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Context:
import UserContext from "./components/context/UserContext";

import Header from "./components/header/Header";
import MainMenu from "./components/pages/MainMenu";
import ArticlesIndex from "./components/articles/ArticlesIndex";
import ArticlesNew from "./components/articles/ArticlesNew";
import ArticlesId from "./components/articles/ArticlesId";
import ArticlesEdit from "./components/articles/ArticlesEdit";
import UserSignUpForm from "./components/usuarios/UserSignUpForm";
import UserLogInForm from "./components/usuarios/UserLogInForm";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:9000/usuarios/isTokenValid",
        null,
        {
          headers: { "x-auth-token": token },
        }
      ).catch((err) => {
        console.log(err);
      });

      if (tokenRes && tokenRes.data) {
        await Axios.get("http://localhost:9000/usuarios/", {
          headers: { "x-auth-token": token },
        }).then(
          (res) => {
            setUserData({
              token,
              user: res.data,
            });
          },
          (err) => {
            console.log(err);
          }
        );
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Switch>
          <Route path="/" exact component={MainMenu} />
          <Route path="/articles" exact component={ArticlesIndex} />
          <Route path="/articles/new" exact component={ArticlesNew} />
          <Route path="/articles/:id" exact component={ArticlesId} />
          <Route path="/articles/:id/edit" exact component={ArticlesEdit} />

          <Route path="/signup" exact component={UserSignUpForm} />
          <Route path="/login" exact component={UserLogInForm} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
