import React, { useRef } from "react";
import swal from "sweetalert";
import "./CreateRecipe.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const CreateRecipe = () => {
  const [errors, setErrors] = useState(true);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  console.log(user);
  const [input, setInput] = useState({
    title: "",
    photo: "",
    preparationTime: "",
    ingredients: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(input);
  };

  const postData = async (input) => {
    try {
      if (
        !input.title ||
        !input.photo ||
        !input.preparationTime ||
        !input.ingredients
      ) {
        setErrors(false);
      } else {
        if (user?.data) {
          setErrors(true);

          await axios.post("http://localhost:4000/createRecipe", input);

          setInput({
            title: "",
            photo: "",
            preparationTime: "",
            ingredients: "",
          });

          swal({
            title: "Su receta fue creada con exito!",
          });
          navigate("/");
        } else {
          swal({
            title: "Necesitas estar logueado!",
          });
          navigate("/login");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <label className="form_name_label">Nombre receta</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="title"
          value={input.title}
          className="form_name"
        />

        <label className="form_email_label">Imagen</label>
        <input
          onChange={(e) => handleChange(e)}
          type="file"
          name="photo"
          value={input.photo}
          className="form_image"
        />

        <br />

        <label className="form_message_label">Tiempo de preparacion</label>
        <input
          onChange={(e) => handleChange(e)}
          type="number"
          name="preparationTime"
          value={input.preparationTime}
          className="form_preparation_time"
        />
        <br />

        <label className="form_message_label">ingredientes</label>
        <textarea
          onChange={(e) => handleChange(e)}
          type="text"
          name="ingredients"
          value={input.ingredients}
          className="form_message"
        />
        <br />
        <span hidden={errors}>
          <h3 className="form_error">Falta completar datos</h3>
        </span>

        <input
          name="send"
          value={input.send}
          className="form_submit_button"
          type="submit"
        />
      </form>
    </>
  );
};

// hidden={
//   input.title &&
//   input.photo &&
//   input.preparationTime &&
//   input.ingredients
//     ? !errors
//     : errors

// if (
//   !input.title ||
//   !input.photo ||
//   !input.preparationTime ||
//   !input.ingredients
// ) {
//   setErrors(false);
// } else {
//   setInput({ title: "", photo: "", preparationTime: "", ingredients: "" });
//   setErrors(true);
//   axios

//     .post("http://localhost:3001/createRecipe", input)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }
