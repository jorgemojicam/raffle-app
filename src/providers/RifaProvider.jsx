import { createContext, useReducer } from "react";
import { cartonReducer } from "../reducers/rifasReducer";
import { get, create } from "../actions/rifas.actions";
import { cartonConstants } from "../helpers/constants";

export const RifaContext = createContext();

const init = {
  cartones: [],
};

export default function RifaProvider({ children }) {
  const [cartones, dispatch] = useReducer(cartonReducer, init);

  const getAll = () => {
    const initFetch = async () => {
      const res = await get();
      dispatch(res);
    };
    initFetch();
  };

  const createRifa = (newcarton) => {
    const result = async () => {
      const res = await create(newcarton);
      dispatch(res);
    };
    result();
  };

  const setCarton = (carton) => {
    dispatch({ type: cartonConstants.SET_CARTON_SUCCESS, payload: carton });
  };

  const contextvalues = {
    getAll,
    createRifa,
    setCarton,
    cartones,
  };

  return (
    <RifaContext.Provider value={contextvalues}>
      {children}
    </RifaContext.Provider>
  );
}
