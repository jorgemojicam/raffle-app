import React, { useEffect, useReducer } from "react";
import { get } from "../../actions/rifas.actions";
import { cartonConstants } from "../../helpers/constants";
import { cartonReducer, init, initialState } from "../../reducers/rifasReducer";

export default function Rifas() {
  const [carton, dispatch] = useReducer(cartonReducer, initialState, init);

  useEffect(() => {
    console.log("effec");

    const initFetch = async () => {
      const res = await get();
      console.log(res);
      dispatch({
        type: cartonConstants.GET_CARTON_REQUEST,
        payload: { cartons: res.cartons },
      });
    };
    initFetch();
  }, []);

  return (
    <div>
      <h2>Cartones</h2>
      {console.log(carton)}
      {/* {carton && carton.map((ca, index) => <div>{ca}</div>)} */}
    </div>
  );
}
