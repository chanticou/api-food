import { useSelector, useDispatch } from "react-redux";
import { CounterFunction } from "../../redux/actions";
import { TotalProducts } from "../../redux/actions";
import { Total } from "../../redux/actions";
import "./Counter.css";

export const Counter = ({ idFood, quantity }) => {
  const dispatch = useDispatch();
  const { cart, totalProducts } = useSelector((state) => state);
  const handleCounterFunction = (e) => {
    dispatch(CounterFunction(e.target.name, cart, idFood));
    dispatch(TotalProducts(cart));
    dispatch(Total(cart));
  };
  // console.log(totalProducts - data_quantity);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: ".7rem",
      }}
    >
      <button name="decrement" onClick={(e) => handleCounterFunction(e)}>
        -
      </button>
      <span className="quantity">{quantity}</span>
      <button name="increment" onClick={(e) => handleCounterFunction(e)}>
        +
      </button>
    </div>
  );
};
