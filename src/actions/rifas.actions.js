import axios from "../helpers/axios";

export const get = async () => {
  console.log("action");
  //try {
  return new Promise((resolve, reject) => {
    axios
      .get(`/carton/`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        resolve(err);
      });
  });
  /*
    const res = await axios.get(`/carton/`);
    console.log(res);
    if (res.status === 200) {
      return res.data;
    } else {
      console.log("err ", res.status);
      return [];
    }
  } catch (error) {
    console.log("error");
    const { data } = error.response;
    return data;
  }
  */
};
