import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import "./CreateRecipe.css";
import { useState } from "react";
// ES6 Modules or TypeScript
// import Swal from "sweetalert2";
// import { NavBar } from "../NavBar/NavBar";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllFoods,
  // filterGetAllFoods,
  searchByWord,
} from "../../redux/actions";
import { useSelector } from "react-redux";

export const CreateRecipe = () => {
  const dispatch = useDispatch();
  const { allFoods, filterAllFoods } = useSelector((state) => state);
  const [errors, setErrors] = useState(true);
  const [flat, setFlat] = useState(true);

  // useEffect(() => {
  //   filterAllFoods.payload && dispatch(filterGetAllFoods());
  //   allFoods.payload && dispatch(getAllFoods());

  //   // dispatch(filterGetAllFoods());
  //   // dispatch(getAllFoods());
  //   // filterGetAllFoods.length &&
  //   //   dispatch(searchByWord(input, filterAllFoods, allFoods));
  // }, [dispatch]);

  console.log(filterAllFoods);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postData({ ...input });
  };

  const postData = async (formData) => {
    try {
      if (
        !input.title ||
        !input.photo ||
        !input.preparationTime ||
        !input.ingredients
      ) {
        setErrors(false);
      } else {
        setErrors(true);
        await axios
          .post("http://localhost:3001/createRecipe", formData)
          .then((res) => {
            dispatch(getAllFoods());
          })
          .catch((err) => console.log(err));
        // setErrors(true);

        setInput({
          title: "",
          photo: "",
          preparationTime: "",
          ingredients: "",
        });
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
