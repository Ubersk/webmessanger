import { $authHost} from "./index";

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
  return  data;
};

export const deleteMsg = async (id) => {
  const {data} = await $authHost.put("api/mail/" + id, { msg_type: 1 });
  return data;
};
