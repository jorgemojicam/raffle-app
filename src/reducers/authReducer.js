import {
    authConstants
} from "../helpers/constants";
import {
    login
} from "../actions/auth.action";

const authReducer = async (state, action) => {
    switch (action.type) {
        case authConstants.SIGNUP_REQUEST:
            const user = await login(action.payloads)
            state = {
                ...state,
                user,
                authenticating: true,
            };
        default:
            break;
    }
    return state;
}
export default authReducer