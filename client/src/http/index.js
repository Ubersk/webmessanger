import axios from "axios"

//Запросы для не авторизованных пользователей
const $host = axios.create({
  baseURL:process.env.REACT_APP_API_URL
})

const $authHost = axios.create({

})