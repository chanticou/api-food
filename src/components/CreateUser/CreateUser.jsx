import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import "./CreateUser.css";

export const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(true);

  const [input, setInput] = useState({
    userName: "",
    photo: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.userName || !input.photo || !input.email || !input.password) {
      setError(false);
    } else {
      setInput({
        userName: "",
        photo: "",
        email: "",
        password: "",
      });
      setError(true);
      dispatch(createUser(input));
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="content_form">
        <form onSubmit={(e) => handleSubmit(e)} className="form_create_user">
          <label className="form_userName" name="userName">
            User name:
          </label>
          <input
            onChange={(e) => handleChange(e)}
            name="userName"
            value={input.userName}
            placeholder="User name..."
            type="text"
          ></input>
          <label name="photo">Foto</label>
          <input
            onChange={(e) => handleChange(e)}
            name="photo"
            value={input.photo}
            type="file"
          ></input>
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

// "userName":"roberto",
// "photo":"url",
// "password":"123",
// "email":"cami@hotmail.com"
