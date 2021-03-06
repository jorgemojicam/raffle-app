import axios from "../helpers/axios";
import {
  authConstants
} from "../helpers/constants";

// new update signup action
export const signup = async (user) => {
  //return async (dispatch) => {
  let res;
  try {
    //dispatch({ type: authConstants.SIGNUP_REQUEST });
    res = await axios.post(`/signup`, user);
    if (res.status === 201) {
      //dispatch({ type: authConstants.SIGNUP_SUCCESS });
      const {
        token,
        user
      } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      /*dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });*/
      return user;
    } else {
      const {
        error
      } = res.data;
      return error;
      //dispatch({ type: authConstants.SIGNUP_FAILURE, payload: { error } });
    }
  } catch (error) {
    const {
      data
    } = error.response;
    /*dispatch({
      type: authConstants.SIGNUP_FAILURE,
      payload: { error: data.error },
    });*/
    return data;
  }
  //} ;
};

export const login = async (user) => {
  const res = await axios.post(`/auth/signin`, {
    ...user,
  });

  if (res.status === 200) {
    const {
      id,
      email,
      username,
      accessToken
    } = res.data;
    const user = {
      id,
      email,
      username
    };
    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
    const dispatch = {
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        user
      },
    }
    return dispatch;
  } else {
    if (res.status === 400) {
      return {
        type: authConstants.LOGIN_FAILURE
      }
    }
    if (res.status === 401) {
      return {
        type: authConstants.LOGIN_FAILURE
      }
    }
  }
};

export const isUserLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = {
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    };
    return res;
  } else {
    const res = {
      type: authConstants.LOGIN_FAILURE,
      payload: {
        error: "Failed to login"
      },
    };
    return res;
  }
};

export const signout = () => {

  localStorage.removeItem('user');
  localStorage.removeItem('token');
  localStorage.clear();
  const dispatch = {
    type: authConstants.LOGOUT_REQUEST
  }
  return dispatch

  //dispatch({ type: authConstants.LOGOUT_SUCCESS });
  //dispatch({ type: cartConstants.RESET_CART });
  //const res = await axios.post(`/admin/signout`);
  // if(res.status === 200){

  // }else{
  //     dispatch({
  //         type: authConstants.LOGOUT_FAILURE,
  //         payload: { error: res.data.error }
  //     });
  // }
};