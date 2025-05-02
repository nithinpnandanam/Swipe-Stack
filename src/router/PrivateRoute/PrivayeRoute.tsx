import { Navigate, Outlet } from "react-router";
import paths from "../routes";

const PrivateRoute = () => {   
    const isAuthenticated = true; 
    return isAuthenticated ? <Outlet /> : <Navigate to={paths.LOGIN} replace />;
};
export default PrivateRoute;
  