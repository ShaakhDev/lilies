import axios from "axios";

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: "https://food-recipe-app-backend-aaka.onrender.com/api/auth",
  // baseURL: "https://jsonplaceholder.typicode.com",
  // baseURL: "http://localhost:8080/api/auth",
});
