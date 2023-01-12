import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      setError(false);
    } else {
      setInput({
        email: "",
        password: "",
      });
      dispatch(loginUser(input));
      setError(true);

      navigate("/");
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="content_form">
        <form onSubmit={(e) => handleSubmit(e)} className="form_create_user">
          <label className="form_email" name="email">
            Email:
          </label>
          <input
            onChange={(e) => handleChange(e)}
            name="email"
            value={input.email}
            placeholder="Email..."
            type="email"
          ></input>
          <label className="form_password" name="password">
            Password:
          </label>
          <input
            onChange={(e) => handleChange(e)}
            name="password"
            value={input.password}
            placeholder="Password..."
            type="password"
          ></input>
          <p hidden={error}>Faltan completar datos</p>

          <input type="submit" />
        </form>
      </div>
    </>
  );
};
