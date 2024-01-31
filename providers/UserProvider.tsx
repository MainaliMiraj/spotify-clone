"use client";

import { retry } from "@reduxjs/toolkit/query";
import { MyUserContextProvider } from "../hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}
const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
