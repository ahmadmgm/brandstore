import axios from "axios";

export const Api = () => {
  let baseURL = process.env.VUE_APP_BASE_API;
  const apiCreate = axios.create({
    baseURL,
  });
  return apiCreate;
};
