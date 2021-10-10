import axios from "axios";
export const GetApi = (api) => {
  console.log("api = ", api);
  return axios
    .get(api)
    .then((response) => response)
    .catch((error) => error);
};
const request = {
  GetApi,
};
export default request;
