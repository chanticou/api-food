import axios from "axios";

import {
  GET_ALL_FOODS,
  SEARCH_WORD,
  ORDER_ALPHABETIC,
  GET_FOOD_BY_ID,
  CREATE_USER,
  LOGIN_USER,
  IS_LOGUED,
} from "../action_types";

export function getAllFoods() {
  return async function (dispatch) {
    const url = "http://localhost:4000/getAllFoods";
    const result = await axios.get(url);
    // console.log(result);
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
export function createUser(input) {
  return async function (dispatch) {
    const url = "http://localhost:4000/createUser";
    const result = await axios.post(url, input);
    dispatch({
      type: CREATE_USER,
      payload: result,
    });
  };
}

export function loginUser(input) {
  return async function (dispatch) {
    const url = "http://localhost:4000/loginUser";
    const result = await axios.post(url, input);
    console.log(result);
    dispatch({
      type: LOGIN_USER,
      payload: result,
    });
  };
}
