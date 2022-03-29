import { cartonConstants } from "../helpers/constants";

export const initialState = () => {
  return { carton: [] };
};

export const init = (initialCount) => {
  return { carton: initialCount };
};

export const cartonReducer = async (state, action) => {
  console.log("reducer ", action.type);
  switch (action.type) {
    case cartonConstants.GET_CARTON_REQUEST:
      state = {
        ...state,
        carton: action.payload.cartons,
      };      
      break;
    default:
      break;
  }   
  return state;
};
