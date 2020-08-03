import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Context:
import UserContext from "./components/context/UserContext";

import Header from "./components/header/Header";
import MenuPrincipal from "./components/pages/MenuPrincipal";
import ArticulosIndex from "./components/articulos/ArticulosIndex";
import ArticulosNew from "./components/articulos/ArticulosNew";
import ArticulosId from "./components/articulos/ArticulosId";
import ArticulosEdit from "./components/articulos/ArticulosEdit";
import UsuarioSignUpForm from "./components/usuarios/UsuarioSignUpForm";
import UsuarioLogInForm from "./components/usuarios/UsuarioLogInForm";

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
          <Route path="/" exact component={MenuPrincipal} />
          <Route path="/articulos" exact component={ArticulosIndex} />
          <Route path="/articulos/new" exact component={ArticulosNew} />
          <Route path="/articulos/:id" exact component={ArticulosId} />
          <Route path="/articulos/:id/edit" exact component={ArticulosEdit} />

          <Route path="/signup" exact component={UsuarioSignUpForm} />
          <Route path="/login" exact component={UsuarioLogInForm} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
