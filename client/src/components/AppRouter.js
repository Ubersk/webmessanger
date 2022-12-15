import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import Mail from "../pages/Mail.js";
import { Context } from "../index";
import Admin from "../pages/Admin";
import Auth from "../pages/Auth";

const AppRouter = () => {
    const { user } = useContext(Context);
    console.log(user.isAuth);
    return (
        <Routes>
            {user.isAuth &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} exact />
                ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))}
            <Route path="/auth" element={<Auth />} />
        </Routes>
    );
};

export default AppRouter;