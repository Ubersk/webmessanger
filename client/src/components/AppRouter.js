//Логика навигации по страницам. На какие страницы у пользователя есть доступ а на какие нет. (админ или не админ)
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import { RequireAuth } from "../hoc/RequireAuth";

const AppRouter = () => {
  const { userStore } = useContext(Context);
  // console.log(userStore);
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {authRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <RequireAuth>
              <Component />
            </RequireAuth>
          }
        />
      ))}
    </Routes>
  );
};
export default AppRouter;
