import React, { Component } from "react";

import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

export default class AuthButtons extends Component {
  render() {
    return (
      <>
        <li className="navbar-item auth-button">
          <SignUpButton />
        </li>
        <li className="navbar-item auth-button">
          <LogInButton />
        </li>
        <li className="navbar-item auth-button">
          <LogOutButton />
        </li>
      </>
    );
  }
}
