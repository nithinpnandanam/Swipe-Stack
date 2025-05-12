import { BrowserRouter, Route, Routes } from "react-router";
import paths from "./routes";
import Login from "@/pages/LogIn/Login";
import SignUp from "@/pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivayeRoute";
import Layout from "@/componets/Layout/Layout";
import { FC, ReactNode } from "react";
import Feed from "@/componets/Feed/Feed";
type RouterContainerProps = {
  children: ReactNode;
};
const RouterContainer: FC<RouterContainerProps> = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        {children}
        <Routes>
          <Route path={paths.LOGIN} element={<Login />}></Route>
          <Route path={paths.SIGN_UP} element={<SignUp />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path={paths.ROOT_PATH} element={<Layout />}>
              <Route index element={<Feed />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterContainer;
