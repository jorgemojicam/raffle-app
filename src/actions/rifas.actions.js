import axios from "../helpers/axios";
import { cartonConstants } from "../helpers/constants";

export const get = async () => {
  let dispatch;
  try {
    const res = await axios.get(`/carton/`);    
    if (res.status === 200) {
      dispatch = {
        type: cartonConstants.GET_CARTON_SUCCESS,
        payload: res.data,
      };
      
      return dispatch;
    } else {
      dispatch = {
        type: cartonConstants.GET_CARTON_FAILURE,
        payload: null,
      };
      return dispatch;
    }
  } catch (error) {
    const { data } = error.response;
    dispatch = {
      type: cartonConstants.GET_CARTON_FAILURE,
      payload: null,
      error: data,
    };

    return dispatch;
  }
};

export const create = async (data) => {
  let dispatch;
  try {
    const res = await axios.post("/carton/", data);

    if (res.status === 200) {
      dispatch = {
        type: cartonConstants.ADD_CARTON_SUCCESS,
        payload: res.data,
      };      
      return dispatch;
    }
  } catch (e) {
    dispatch = {
      type: cartonConstants.ADD_CARTON_FAILURE,
      payload: e.error,
    };
    return dispatch;
  }
};
