import * as actions from "../action_types.js";

const initialState = {
  allFoods: [],
  filterAllFoods: [],
  foodDetail: {},
  users: [],
  user: {},
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

    case actions.ORDER_ALPHABETIC:
      return {
        ...state,
        filterAllFoods: action.payload,
      };

    case actions.GET_FOOD_BY_ID:
      return {
        foodDetail: action.payload,
      };

    case actions.CREATE_USER:
      return {
        users: action.payload,
      };

    case actions.LOGIN_USER:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
}
