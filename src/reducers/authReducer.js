import {
    authConstants
} from "../helpers/constants";

const authReducer = (state, action) => {
    switch (action.type) {
        case authConstants.SIGNUP_REQUEST:
            console.log(action.payloads);
            return state;
        default:
            break;
    }
}
export default authReducer