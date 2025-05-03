import { createContext, FC, ReactNode, useContext, useState } from "react";
type UserContextType = {
  setLoggedInUser: (data: loggedInUserType) => void;
  loggedInUser:loggedInUserType | null
};

type UserProviderType = {
  children: ReactNode;
};
type loggedInUserType = {
  about: string;
  emailId: string;
  firstName: string;
  lastName?: string;
  photoUrl: string;
  skills: Array<string>;
};
const userContext = createContext<UserContextType | null>(null);
export const UserProvider: FC<UserProviderType> = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState<loggedInUserType | null>(null);
  const contextValue = {
    setLoggedInUser,
    loggedInUser
  };
  return (
    <>
      <userContext.Provider value={contextValue}>
        {children}
      </userContext.Provider>
    </>
  );
};

export const useUserContext = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("Use UserContext within UserContext provider");
  }
  return context;
};
