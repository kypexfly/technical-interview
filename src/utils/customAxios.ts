import axios from "axios";

const BASE_API_URL = "https://colegios.delmartg.com:8080/";

export const customAxios = axios.create({
  baseURL: BASE_API_URL,
});

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Intercepta el error
    if (error.response.status === 422) {
      console.log("Error 422: Unprocessable Entity");
    }
    return Promise.reject(error);
  }
);
