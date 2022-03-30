import axios from "../helpers/axios";

export const get = async () => {

  try {
    const res = await axios.get(`/carton/`);

    if (res.status === 200) {
      return res.data;
    } else {      
      return [];
    }
  } catch (error) {    
    const { data } = error.response;
    return data;
  }
};
