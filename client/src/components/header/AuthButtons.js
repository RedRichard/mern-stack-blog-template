import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../context/UserContext";

import Nav from "react-bootstrap/Nav";

export default function AuthButtons() {
  let { userData, setUserData } = useContext(UserContext);

  let logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <>
      {userData.user ? (
        <Nav.Link as={Link} to="/" onClick={logout}>
          Log Out
        </Nav.Link>
      ) : (
        <>
          <Nav.Link as={Link} to="/signup">
            Sign Up
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Log In
          </Nav.Link>
        </>
      )}
    </>
  );
}
