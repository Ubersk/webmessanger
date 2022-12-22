import { $authHost, $host } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/mailFolder", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/mailFolder");
  return data;
};

export const createMsg = async (type) => {
  const { data } = await $authHost.post("api/mail", type);
  return data;
};

export const fetchMsg = async () => {
  const { data } = await $authHost.get("api/mail");
  return data;
};
export const fetchOneMsg = async (id) => {
  const { data } = await $authHost.get("api/mail/"+id);
  return data;
};

