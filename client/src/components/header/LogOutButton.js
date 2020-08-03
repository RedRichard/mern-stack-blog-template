import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../context/UserContext";

export default function LogOutButton() {
  let { setUserData } = useContext(UserContext);

  let logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <Link onClick={logout} to="/" className="nav-link">
      Log Out
    </Link>
  );
}
