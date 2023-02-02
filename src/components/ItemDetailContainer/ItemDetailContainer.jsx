import { useParams } from "react-router";
import { getRecipeById } from "../../redux/actions/index";
import { useEffect, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { getAllFoods } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { ButtonAddToCart } from "../ButtonAddToCart/ButtonAddToCart";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  let dispatch = useDispatch();

  const { foodDetail } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllFoods());
  }, []);

  const { id_recipe } = useParams();

  useEffect(() => {
    dispatch(getRecipeById(id_recipe));
  }, [id_recipe]);

  return (
    <>
      {!foodDetail ? (
        <Spinner />
      ) : (
        <div className="itemDetail_content">
          <h1>{foodDetail.title}</h1>
          <div className="content_image_detail">
            <img
              className="image_ItemDetailContainer"
              src={foodDetail.photo}
              alt={foodDetail.title}
            />
          </div>
          <p>{foodDetail.description}</p>
          <p>{foodDetail.preparationTime}</p>
        </div>
      )}

      <div className="content_button_add_to_cart ">
        <ButtonAddToCart className="add_to_cart_button" />
      </div>
    </>
  );
};
