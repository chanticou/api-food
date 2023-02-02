import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonAddToCart } from "../ButtonAddToCart/ButtonAddToCart";

import "./Food.css";

export const Food = ({ data }) => {
  const [buyButton, setBuyButton] = useState(false);

  const handleOverButton = () => {
    setBuyButton(true);
  };
  const handleDownButton = () => {
    setBuyButton(false);
  };
  return (
    <>
      {buyButton ? (
        <Link className="link_food" to={`/itemDetail/${data.id_recipe}`}>
          <div
            onMouseOver={(e) => handleOverButton(e)}
            onMouseLeave={(e) => handleDownButton(e)}
            className="food_content"
          >
            <img src={data.photo} alt="" />
            <h1>{data.title.toUpperCase()}</h1>
            <button className="buy_button">DETALLE</button>
          </div>
        </Link>
      ) : (
        <Link className="link_food" to={`/itemDetail/${data.id_recipe}`}>
          <div
            onMouseOver={(e) => handleOverButton(e)}
            className="food_content"
          >
            <div className="food_description">
              <p>{data.preparationTime}</p>
            </div>
            <img src={data.photo} alt={data.title} />
            <h1>{data.title.toUpperCase()}</h1>
          </div>
        </Link>
      )}
    </>
  );
};
