import React from "react";
import { Link } from "react-router-dom";

export default function ArticulosButton() {
  return (
    <Link to="/articulos" className="nav-link">
      Artículos
    </Link>
  );
}
