import React from "react";
import { Link } from "react-router-dom";
import "./Food.css";

export const Food = ({ data }) => {
  return (
    <>
      <Link className="link_food" to={`/itemDetail/${data.id_recipe}`}>
        <div className="food_content">
          <div className="food_description">
            <p>{data.description}</p>
            <p>{data.preparationTime}</p>
          </div>
          <img src={data.photo} alt="" />
          <h1>{data.title.toUpperCase()}</h1>
        </div>
      </Link>
    </>
  );
};
