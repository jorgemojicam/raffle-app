import axios from "axios";
//import { api} from "../urlConfig";
//import store from "../store";
//import { authConstants } from "../helpers/constants";

const token = window.localStorage.getItem("token");
const api =`http://localhost:8080/api/v1`

const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

axiosIntance.interceptors.request.use((req) => {
  //const { auth } = store.getState();
  const auth = {
    token: "asdf"
  }
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});

axiosIntance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
      //store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
  }
);

export default axiosIntance;