import axios from "axios";

//Запросы для не авторизованных пользователей
const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
const authInterceptor = (config) => {
  config.headers.authorization = `Ubersk ${localStorage.getItem("token")}`;
  return config;
};
$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
