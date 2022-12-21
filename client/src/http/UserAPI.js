import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name, password) => {
  const { data } = await $host.post("api/user/registration", {
    name,
    password,
    isAdmin: false,
  });
  return jwt_decode(data.token);
};
export const login = async (name, password) => {
  const { data } = await $host.post("api/user/login", {
    name,
    password,
  });
  return jwt_decode(data.token);
};
export const check = async () => {
  const response = await $host.post("api/user/registration");
  return response;
};
