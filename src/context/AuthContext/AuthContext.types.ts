import { ReactNode } from "react";

export type AuthProviderProps = {
  children: ReactNode;
};
export type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};