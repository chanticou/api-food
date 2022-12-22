import * as actions from "../action_types.js";

const initialState = {
  allFoods: [],
  filterAllFoods: [],
  searchWord: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_FOODS:
      return {
        ...state,
        allFoods: action.payload.payload,
        filterAllFoods: action.payload.payload,
      };

    case actions.SEARCH_WORD:
      return {
        ...state,
        filterAllFoods: action.payload,
      };
    default:
      return state;
  }
}
