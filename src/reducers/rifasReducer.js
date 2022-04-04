import {
  cartonConstants
} from "../helpers/constants";

export const init = (initialCount) => {
  return {
    carton: initialCount
  };
};

export const cartonReducer = (state, action) => {
  switch (action.type) {
    case cartonConstants.GET_CARTON_REQUEST:
      state = {
        ...state,
        carton: action.payload.cartons,
      };
      return state;

    case cartonConstants.ADD_CARTON_REQUEST:
      state = {
        ...state
      }
      return state
    default:
      return state;
  }
};