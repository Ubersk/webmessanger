import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name, password) => {
  const { data } = await $host.post("api/user/registration", {
    name,
    password,
    isAdmin: false,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const login = async (name, password) => {
  const { data } = await $host.post("api/user/login", {
    name,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const fetchAllUsers = async () => {
  const { data } = await $authHost.get("api/userInfo");
  return data;
};

export const fetchOneUser = async (id) => {
  const { data } = await $authHost.get("api/userInfo/"+id)
  return data;
};
