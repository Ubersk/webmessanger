import { $authHost, $host } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/mailFolder", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/mailFolder");
  return data;
};
