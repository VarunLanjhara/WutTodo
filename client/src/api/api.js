import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const login = (data) => API.post(`/users/login`, data);
export const register = (data) => API.post(`users/register`, data);
export const get_user_byid = (id) => API.get(`/users/get_user/${id}`);
