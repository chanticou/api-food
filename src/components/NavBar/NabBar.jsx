import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import imageUser from "../../assets/images/loguin.jpg";
import { useAuth0 } from "@auth0/auth0-react";

import "./NavBar.css";
import { useState } from "react";

export const NavBar = () => {
  const { userdb } = useSelector((state) => state);
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  const [mouseOver, setMouseOver] = useState({});

  const handleMouseOver = () => {
    setMouseOver({ user });
  };

  const handleMouseOut = () => {
    setMouseOver({});
  };

  return (
    <>
      <div className="content_navBar">
        <ul className="ul_navBar">
          <li>
            <h1 className="title_navBar">BENTO</h1>
            <h3 className="subtitle_navBar">Be Japonais</h3>
          </li>
          <Link className="link_navBar" to="/">
            <li>Home</li>
          </Link>
          <Link className="link_navBar" to="/recipes">
            <li>Recetas</li>
          </Link>
          <Link className="link_navBar" to="/createFood">
            <li>Crea tu receta</li>
          </Link>
          <Link className="link_navBar" to="/createUser">
            <li>SignIn</li>
          </Link>

          {userdb?.data ? (
            <Link className="link_navBar" to="/">
              <li>
                <div className="content_user_circule_navBar">
                  <div className="user_logued_navBar">
                    Logout
                    <img
                      className="image_user_navBar"
                      src={imageUser}
                      alt=""
                    ></img>
                    <div className="content_data_navBar"></div>
                  </div>
                </div>
              </li>
              <p>Bienvenid@</p>
              <p>{userdb.data.user.email}</p>
            </Link>
          ) : (
            <Link className="link_navBar" to="/login">
              <li>Login</li>
            </Link>
          )}
          {isAuthenticated ? (
            <div className="content_auth_0">
              <img
                onMouseOver={(e) => handleMouseOver(e)}
                onMouseOut={() => handleMouseOut()}
                className="image_auth_0"
                src={user.picture}
              ></img>
              <p>{mouseOver.user?.email}</p>
            </div>
          ) : (
            <button onClick={() => loginWithRedirect()}>Login email</button>
          )}
        </ul>
      </div>
    </>
  );
};
