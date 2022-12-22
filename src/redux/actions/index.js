import axios from "axios";
import { GET_ALL_FOODS, SEARCH_WORD } from "../action_types";

export function getAllFoods() {
  return async function (dispatch) {
    const url = "http://localhost:3001/getAllFoods";
    const result = await axios.get(url);
    dispatch({
      type: GET_ALL_FOODS,
      payload: result.data,
    });
  };
}

// export function filterGetAllFoods() {
//   return async function (dispatch) {
//     const url = "http://localhost:3001/getAllFoods";
//     const result = await axios.get(url);

//     dispatch({
//       type: FILTER_ALL_FOODS,
//       payload: result.data,
//     });
//   };
// }

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
