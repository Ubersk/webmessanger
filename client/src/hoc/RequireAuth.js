import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../index";

const RequireAuth = ({ children }) => {
  const { userStore } = useContext(Context);
  const location = useLocation();

  if (!userStore.isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
export { RequireAuth };
