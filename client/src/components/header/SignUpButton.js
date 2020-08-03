import React from "react";
import { Link } from "react-router-dom";

export default function LogInButton() {
  return (
    <Link to="/signup" className="nav-link">
      Sign Up
    </Link>
  );
}
