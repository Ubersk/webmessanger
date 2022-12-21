import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";
import { type } from "@testing-library/user-event/dist/type";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/mailFolder", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/mailFolder");
  return data;
};
