import { useSelector, useDispatch } from "react-redux";
import { AddTocart } from "../../redux/actions";
import { TotalProducts } from "../../redux/actions";
import { Total } from "../../redux/actions";

export const ButtonAddToCart = ({ className }) => {
  const dispatch = useDispatch();
  const { foodDetail, cart } = useSelector((state) => state);
  const handleClickAddToCart = () => {
    dispatch(AddTocart(foodDetail, cart));
    dispatch(TotalProducts(cart));
    dispatch(Total(cart));
  };
  return (
    <>
      <button className={className} onClick={(e) => handleClickAddToCart()}>
        Agregar al carrito
      </button>
    </>
  );
};
