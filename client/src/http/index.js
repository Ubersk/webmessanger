import axios from "axios";

//Запросы для не авторизованных пользователей
const $host = axios.create({
  baseURL: "http://localhost:7000/",
});

const $authHost = axios.create({
  baseURL: "http://localhost:7000/",
});
const authInterceptor = (config) => {
  config.headers.authorization = `Ubersk ${localStorage.getItem("token")}`;
  return config;
};
$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
