import axios from "axios";

export const api = axios.create({
  //   baseURL: "http://jsonplaceholder.typicode.com",
  baseURL: "https://food-recipe-app-backend-aaka.onrender.com",
});
