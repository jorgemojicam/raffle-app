import {
    authConstants
} from "../helpers/constants";
import {
    login
} from "../actions/auth.action";

const authReducer = (state, action) => {
    switch (action.type) {
        case authConstants.SIGNUP_REQUEST:
            const user = login(action.payloads)
            state = {
                ...state,
                user,
                isAuthenticate: true,
            };
            break;
        case authConstants.LOGOUT_REQUEST:
            state={
                ...state,
                isAuthenticate:false,
            }
            break;
        default:
            console.log("No paso nada")
            break;
    }
    return state;
}
export default authReducer