import { cartonConstants } from "../helpers/constants";

export const cartonReducer = (state, action) => {
  switch (action.type) {
    case cartonConstants.GET_CARTON_SUCCESS:
      state = {
        ...state,
        carton: action.payload.cartons,
      };
      break;
    case cartonConstants.ADD_CARTON_REQUEST:
      state = {
        ...state,
      };
      break;
    case cartonConstants.ADD_CARTON_SUCCESS:
      state = {
        ...state,
        carton: [...state.carton, action.payload.carton],
      };
      break;
    case cartonConstants.SET_CARTON_SUCCESS:
      state = {
        ...state,
        carton: action.payload.carton,
      };
      break;
    default:
      return state;
  }
  return state;
};
