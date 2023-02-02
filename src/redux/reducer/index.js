import * as actions from "../action_types.js";

const initialState = {
  addToCart: [],
  allFoods: [],
  filterAllFoods: [],
  foodDetail: {},
  users: [],
  user: {},
  cart: [],
  totalProducts: 0,
  totalCount: 0,
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
        ...state,
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

    case actions.ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };

    // case actions.CART:
    //   return {
    //     ...state,
    //     cart: action.payload,
    //   };

    case actions.DELETE_PRODUCT:
      return {
        ...state,
        addToCart: action.payload,
        cart: action.payload,
        totalProducts: state.totalProducts - action.quantity,
        totalCount: state.totalCount - action.total,
      };

    case actions.FILTER_TYPE:
      return {
        ...state,
        filterAllFoods: [...action.payload],
      };
    case actions.COUNTER_PRODUCTS:
      return {
        ...state,
        cart: action.payload,
      };
    case actions.TOTAL_PRODUCTS:
      return {
        ...state,
        totalProducts: action.payload,
      };
    case actions.TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    default:
      return state;
  }
}
