import React, { useContext } from "react";
import UserContext from "../context/UserContext";

import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

export default function AuthButtons() {
  let { userData } = useContext(UserContext);

  return (
    <>
      {userData.user ? (
        <li className="navbar-item auth-button">
          <LogOutButton />
        </li>
      ) : (
        <>
          <li className="navbar-item auth-button">
            <SignUpButton />
          </li>
          <li className="navbar-item auth-button">
            <LogInButton />
          </li>{" "}
        </>
      )}
    </>
  );
}
