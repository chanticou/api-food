import React from "react";
import { Link } from "react-router-dom";
import "./Food.css";

export const Food = ({ data }) => {
  return (
    <>
      <Link className="link_food" to={`/itemDetail/${data.id_recipe}`}>
        <div className="food_content">
          <h1>{data.title}</h1>
          <img src={data.photo} alt="" />
          <p>{data.description}</p>
          <p>{data.preparationTime}</p>
        </div>
      </Link>
    </>
  );
};
