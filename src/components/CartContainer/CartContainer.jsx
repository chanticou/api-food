import { useSelector, useDispatch } from "react-redux";
import { CartDetail } from "../CartDetail/CartDetail";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/images/empty-cart.png";

import "./CartContainer.css";

export const CartContainer = () => {
  const { cart, totalCount } = useSelector((state) => state);

  return (
    <>
      {!cart?.length ? (
        <div className="content_no_products">
          <h2 className="empty_cart">CARRITO VACIO</h2>
          <img src={emptyCart}></img>
        </div>
      ) : (
        <div>
          <h2 className="my_cart">Mi carrito</h2>

          <div className="cart_name_columns">
            <p>Producto</p>
            <p>Cantidad</p>
            <p>Precio</p>
            <p>Eliminar</p>
          </div>
          {cart.map((el) => (
            <CartDetail key={el.id_recipe} data={el} />
          ))}
          <Link className="link_to_recipes" to="/recipes">
            <div className="content_button">
              <Button util="SEGUIR COMPRANDO" />
            </div>
          </Link>
          <div className="total_count">
            <span>TOTAL</span>
            <span>$ {totalCount}</span>
          </div>
        </div>
      )}

      {/* <div className="cart_name_columns">
        <h3>Producto</h3>
        <h3>Cantidad</h3>
        <h3>Precio</h3>
        <h3>Eliminar</h3>
      </div>
      {!cart?.length ? (
        <div className="content_no_products">
          <h1>CARRITO VACIO</h1>
          <img src={emptyCart}></img>
        </div>
      ) : (
        cart?.map((el) => <CartDetail key={el.id_recipe} data={el} />)
      )} */}
    </>
  );
};
