import { $authHost, $host } from "./index";

export const registration = async (name, password) => {
  const response = await $host.post("api/user/registration", {
    name,
    password,
    isAuth: true,
  });
  return response;
};
export const login = async (name, password) => {
  const response = await $host.post("api/user/login", {
    name,
    password,
  });
  return response;
};
export const check = async () => {
  const response = await $host.post("api/user/registration", {});
  return response;
};
