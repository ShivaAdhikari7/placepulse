import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  logout: () => {},
  login: () => {},
});

export default AuthContext;
