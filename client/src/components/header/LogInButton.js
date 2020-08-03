import React from "react";
import { Link } from "react-router-dom";

export default function LogInButton() {
  return (
    <Link to="/login" className="nav-link">
      Log In
    </Link>
  );
}
