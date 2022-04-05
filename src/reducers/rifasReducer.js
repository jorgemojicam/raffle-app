import { cartonConstants } from "../helpers/constants";

export const cartonReducer = (state, action) => {
  switch (action.type) {
    case cartonConstants.GET_CARTON_SUCCESS:
      
      state = {
        ...state,
        cartones: action.payload.cartons,
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
        cartones: [...state.cartones, action.payload.carton],
      };
      break;
    case cartonConstants.SET_CARTON_SUCCESS:    
      state = {
        ...state,
        carton: action.payload,
      };
      break;
    default:
      return state;
  }  
  return state;
};
