import { createContext, FC, useContext, useState } from "react";
import {isAccessToken, removeAccessToken } from "@/utils/authUtils";
import { AuthContextType, AuthProviderProps } from "./AuthContext.types";

const authContext = createContext<AuthContextType | null>(null);
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(()=>isAccessToken());
  const login = () => {
    isAccessToken()?setIsLoggedIn(true):setIsLoggedIn(false)
  };
  const logout = () =>{
    removeAccessToken()
  }
  const contextValue = {
    isLoggedIn,
    login,
    logout
  };
  return (
    <>
      <authContext.Provider value={contextValue}>
        {children}
      </authContext.Provider>
    </>
  );
};

export const useAuthContext = ():AuthContextType =>{
    const context =  useContext(authContext)
    if (!context) {
        throw new Error("Use authcontext within auth context provider");
    }
    return context;
}