import {
  authConstants
} from "../helpers/constants";


const authReducer = (state, action) => {
  switch (action.type) {
    case authConstants.SIGNUP_REQUEST:
      state = {
        ...state,     
        isAuthenticate: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticate: true,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        isAuthenticate: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        isAuthenticate: false,
      };
      break;
    default:
      console.log("No paso nada");
      break;
  }
  return state;
};
export default authReducer;