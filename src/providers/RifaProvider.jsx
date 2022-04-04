import { createContext, useReducer } from "react";
import { cartonReducer } from "../reducers/rifasReducer";
import { get, create } from "../actions/rifas.actions";

export const RifaContext = createContext();

const init = {
  carton: [],
};

export default function RifaProvider({ children }) {
  const [carton, dispatch] = useReducer(cartonReducer, init);

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
    dispatch({ carton });
  };
  
  const contextvalues = {
    getAll,
    createRifa,
    setCarton,
    carton,
  };

  return (
    <RifaContext.Provider value={contextvalues}>
      {children}
    </RifaContext.Provider>
  );
}
