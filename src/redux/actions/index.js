import axios from "axios";

import {
  GET_ALL_FOODS,
  SEARCH_WORD,
  ORDER_ALPHABETIC,
  GET_FOOD_BY_ID,
  CREATE_USER,
  LOGIN_USER,
  IS_LOGUED,
  ADD_TO_CART,
  CART,
  IS_DISABLE,
  DELETE_PRODUCT,
  FILTER_TYPE,
  COUNTER_PRODUCTS,
  TOTAL_PRODUCTS,
  TOTAL_COUNT,
} from "../action_types";

export function getAllFoods() {
  return async function (dispatch) {
    const url = "http://localhost:4000/getAllFoods";
    const result = await axios.get(url);

    dispatch({
      type: GET_ALL_FOODS,
      payload: result.data,
    });
  };
}

export function searchByWord(input, allFoods) {
  return async function (dispatch) {
    let arr = allFoods;
    if (input.name) {
      arr = arr.filter((el) =>
        el.title.toLowerCase().includes(input.name.toLowerCase())
      );
    }
    dispatch({
      type: SEARCH_WORD,
      payload: [...arr],
    });
  };
}

export function orderAlphabetic(allFoods, select) {
  return async function (dispatch) {
    let arr = [];
    if (select === "De la A a la Z") {
      arr = allFoods;
    }

    if (select === "A-Z") {
      arr = allFoods.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (select === "Z-A") {
      arr = allFoods.sort((a, b) => b.title.localeCompare(a.title));
    }

    dispatch({
      type: ORDER_ALPHABETIC,
      payload: [...arr],
    });
  };
}

export function getRecipeById(id) {
  return async function (dispatch) {
    let url = `http://localhost:4000/serachById/${id}`;
    let data = await axios.get(url);

    dispatch({
      type: GET_FOOD_BY_ID,
      payload: data.data.payload,
    });
  };
}

//USER ACTIONS
// export function createUser(input) {
//   return async function (dispatch) {
//     const url = "http://localhost:4000/createUser";
//     const result = await axios.post(url, input);
//     dispatch({
//       type: CREATE_USER,
//       payload: result,
//     });
//   };
// }

export function loginUser(input) {
  return async function (dispatch) {
    const url = "http://localhost:4000/loginUser";

    const result = await axios.post(url, input);

    dispatch({
      type: LOGIN_USER,
      payload: result,
    });
  };
}

export function AddTocart(food_item, cart) {
  return function (dispatch) {
    let found = cart?.find((el) => el.id_recipe === food_item.id_recipe);

    if (found) {
      food_item["quantity"] += 1;
    } else {
      food_item.quantity = 1;
      cart.push(food_item);
    }

    dispatch({
      type: ADD_TO_CART,
      payload: [...cart],
    });
  };
}

// export function Cart(arrcart, id_recipe) {
//   return async function (dispatch) {
//     // console.log(arrcart);

//     let filtrado = arrcart.filter((el) => el.id_recipe !== id_recipe);
//     console.log(filtrado);
//     var hash = {};
//     // arrcart = arrcart.filter(function (current) {
//     //   var exists = !hash[current.id_recipe];
//     //   hash[current.id_recipe] = true;
//     //   return exists;
//     // });
//     // console.log(arrcart);
//     dispatch({
//       type: CART,
//       payload: arrcart,
//     });
//   };
// }

export function deleteProduct(id_product, cart, data_quantity, data_price) {
  return function (dispatch) {
    const delete_product = cart.filter((el) => el.id_recipe != id_product);
    const updateTotal = data_quantity * data_price;
    dispatch({
      type: DELETE_PRODUCT,
      payload: delete_product,
      quantity: data_quantity,
      total: updateTotal,
    });
  };
}

export function filterFoods(filterType, allFoods) {
  return function (dispatch) {
    // let arr = allFoods.filter((el) => el.type === filterType);
    let arr = allFoods;

    if (filterType !== "todos")
      arr = arr.filter((el) => el.type === filterType);
    // if(filtercantidad === 8 ) arr
    if (filterType !== "todos")
      arr = arr.filter((el) => el.type === filterType);

    dispatch({
      type: FILTER_TYPE,
      payload: [...arr],
    });
  };
}

export function CounterFunction(type_name, cart, id_recipe) {
  return function (dispatch) {
    if (type_name === "increment")
      cart = cart.map((el) =>
        el.id_recipe === id_recipe
          ? { ...el, quantity: (el.quantity += 1) }
          : el
      );
    if (type_name === "decrement")
      cart = cart.map((el) =>
        el.id_recipe === id_recipe
          ? { ...el, quantity: (el.quantity -= 1) }
          : el
      );

    dispatch({
      type: COUNTER_PRODUCTS,
      payload: cart,
    });
  };
}

export function TotalProducts(cart) {
  return async function (dispatch) {
    const totalProduct = cart.reduce(
      (acc, current) => acc + current["quantity"],
      0
    );

    dispatch({
      type: TOTAL_PRODUCTS,
      payload: totalProduct,
    });
  };
}

export function Total(cart) {
  return function (dispatch) {
    const total = cart.reduce(
      (acc, curr) => acc + curr["price"] * curr["quantity"],
      0
    );
    dispatch({
      type: TOTAL_COUNT,
      payload: total,
    });
  };
}
