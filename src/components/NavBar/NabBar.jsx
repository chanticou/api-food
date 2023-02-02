import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Auth_0 } from "../Auth_0/Auth_0";
import { CartIcon } from "../CartIcon/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import "./NavBar.css";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { totalProducts } = useSelector((state) => state);

  return (
    <>
      <div className="red_line"></div>
      <div className="content_navBar">
        <ul className="ul_navBar">
          <div className="title_navBar">
            <li>BENTO</li>
          </div>
          <Link className="link_navBar" to="/">
            <li>Home</li>
          </Link>
          <Link className="link_navBar" to="/recipes">
            <li>Menu</li>
          </Link>
          <div className="link_navBar">
            <li>
              <Auth_0 />
            </li>
          </div>

          <li>
            <Link to="/cart">
              <CartIcon />
              <span>{totalProducts}</span>
            </Link>
          </li>
        </ul>
        <div className="grey_line"></div>
      </div>
    </>
  );
};

{
  /* <Link className="link_navBar" to="/createFood">
            <li>Crea tu receta</li>
          </Link> */
}
{
  /* <Link className="link_navBar" to="/createUser">
            <li>SignIn</li>
          </Link> */
}

{
  /* {userdb?.data ? (
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
          )} */
}

{
  /* {isAuthenticated ? (
            <div
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseOut={() => handleMouseOut()}
              className="content_auth_0"
            >
              <div className="content_image">
                <button className="logout_button" onClick={() => logout()}>
                  Logout
                </button>
                <img className="image_auth_0" src={user?.picture}></img>
              </div>

              <div className="onMouseOver">
                <span>{mouseOver.user?.given_name}</span>
                <span>{mouseOver.user?.email}</span>
              </div>
            </div>
          ) : (
            <button
              className="logout_button"
              onClick={() => loginWithRedirect()}
            >
              Login email
            </button>
          )} */
}
