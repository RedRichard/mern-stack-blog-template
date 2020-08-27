import React from "react";
import { Link } from "react-router-dom";

export default function ArticlesButton() {
  return (
    <Link to="/articles" className="nav-link">
      Articles
    </Link>
  );
}
