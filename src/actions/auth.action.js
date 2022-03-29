import axios from "../helpers/axios";

// new update signup action
export const signup = async  (user) => {
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
      return user
    } else {
      const {
        error
      } = res.data;
      return error
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
  }
  //} ;
};

export const login = async (user) => {
 
  const res = await axios.post(`/auth/signin`, {
    ...user,
  });

  if (res.status === 200) {
    const {email,username,accessToken} = res.data
    const user = {email,username} 
    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
   
    return user
  } else {
    if (res.status === 400) {
      return "error"
    }
  }
 
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      /*dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });*/
    } else {
      /*dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" },
      });*/
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    //dispatch({ type: authConstants.LOGOUT_REQUEST });
    // localStorage.removeItem('user');
    // localStorage.removeItem('token');
    localStorage.clear();
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
};