import { useParams } from "react-router";
import { getRecipeById } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Spinner } from "../Spinner/Spinner";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const { id_recipe } = useParams();
  const { foodDetail } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getRecipeById(id_recipe));
  }, [id_recipe]);
  let dispatch = useDispatch();

  return (
    <>
      {!foodDetail ? (
        <Spinner />
      ) : (
        <div className="food_content">
          <h1>{foodDetail.title}</h1>
          <img
            className="image_ItemDetailContainer"
            src={foodDetail.photo}
            alt={foodDetail.title}
          />
          <p>{foodDetail.description}</p>
          <p>{foodDetail.preparationTime}</p>
        </div>
      )}
    </>
  );
};
