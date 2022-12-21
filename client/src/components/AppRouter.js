//Логика навигации по страницам. На какие страницы у пользователя есть доступ а на какие нет. (админ или не админ)
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import AdminMenu from "../pages/AdminMenu";

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="/admin" element={<AdminMenu />} />
    </Routes>
  );
};

export default AppRouter;
