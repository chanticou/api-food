import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { deleteProduct, TotalProducts } from "../../redux/actions/index";
import { Counter } from "../Counter/Counter";

import "./CartDetail.css";

export const CartDetail = ({ data }) => {
  let dispatch = useDispatch();

  const { cart, totalProducts } = useSelector((state) => state);

  const handleDelete = (e) => {
    dispatch(deleteProduct(data.id_recipe, cart, data.quantity, data.price));
  };
  return (
    <>
      <div className="content_cart_detail">
        <div className="content_data">
          <p>{data.title}</p>
          <div className="content_image_cart_detail">
            <img className="image_cart" src={data.photo} alt={data.title}></img>
          </div>
        </div>

        <div className="content_data_counter">
          <Counter
            key={data.id_recipe}
            idFood={data.id_recipe}
            quantity={data.quantity}
          />
        </div>

        <div className="content_data">
          <h2>${data.price * data.quantity}</h2>
        </div>
        <div onClick={(e) => handleDelete(e)} className="content_data">
          <BsFillTrashFill
            style={{ fontSize: "20px", color: "#003a71", cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
};
