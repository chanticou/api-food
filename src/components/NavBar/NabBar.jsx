import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="content_navBar">
        <ul className="ul_navBar">
          <li>
            <h1>Busca, crea y simplifica!</h1>
          </li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/createFood">
            <li>
              <button className="create_recipe_button">Crea tu receta</button>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};
