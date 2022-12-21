import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../index";

const RequireAuth = ({ children }) => {
  const { user } = useContext(Context);
  const location = useLocation();

  if (!user.isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
export { RequireAuth };