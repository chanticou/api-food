import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/index";
import { createUser } from "../../redux/actions";
import "./Auth_0.css";

export const Auth_0 = () => {
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect, logout, isLoading } = useAuth0();

  const [mouseOver, setMouseOver] = useState({});

  const handleMouseOver = () => {
    setMouseOver({ user });
  };

  const handleMouseOut = () => {
    setMouseOver({});
  };

  useEffect(() => {
    if (user) {
      dispatch(loginUser(user));
    }
  }, [user]);
  // console.log(user);
  // if (user?.email_verified) {
  //   dispatch(createUser(user));
  // }
  // useEffect(() => {
  //   const getUserMetadata = async () => {
  //     const domain = "YOUR_DOMAIN";

  //     try {
  //       const accessToken = await getAccessTokenSilently({
  //         audience: `https://${domain}/api/v2/`,
  //         scope: "read:current_user",
  //       });

  //       const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

  //       const metadataResponse = await fetch(userDetailsByIdUrl, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });

  //       const { user_metadata } = await metadataResponse.json();

  //       setUserMetadata(user_metadata);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };

  //   getUserMetadata();
  // }, [getAccessTokenSilently, user?.sub]);
  return (
    <>
      {isAuthenticated ? (
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
          {/* {handleSubmit()} */}
          <div className="onMouseOver">
            <span>{mouseOver.user?.given_name}</span>
            <span>{mouseOver.user?.email}</span>
          </div>
        </div>
      ) : (
        <button className="logout_button" onClick={() => loginWithRedirect()}>
          Login email
        </button>
      )}
    </>
  );
};
