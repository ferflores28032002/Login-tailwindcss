import axios from "axios";

export const sendEmailApi = axios.create({

  baseURL: import.meta.env.VITE_APP_URL_API,
  
});
