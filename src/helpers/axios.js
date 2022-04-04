import axios from "axios";

const token = localStorage.getItem("token");
const api = `http://localhost:8080/api/v1`

const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

axiosIntance.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

axiosIntance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
  
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
      //store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    if (status && status === 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default axiosIntance;