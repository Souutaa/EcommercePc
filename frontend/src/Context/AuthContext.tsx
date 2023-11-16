import axios from "axios";
import { createContext, useContext, useState } from "react";
import * as jwt from "jwt-decode";

export interface Auth {
  sub: string | null;
  iat: string | number | null;
  exp: string | number | null;
  isAuthenticated: boolean;
}

export interface LoginInfo {
  username: string;
  password: string;
}

export type AuthContextType = {
  auth: Auth;
  login: (loginInfo: LoginInfo) => void;
  checkSession: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type ChildrenProps = {
  children: JSX.Element;
};

const AuthProvider = ({ children }: ChildrenProps) => {
  const [auth, setAuth] = useState<Auth>({
    sub: null,
    exp: null,
    iat: null,
    isAuthenticated: false,
  });
  const login = (loginInfo: LoginInfo) => {
    const data = { username: loginInfo.username, password: loginInfo.password };
    axios
      .post("http://localhost:8080/auth/authenticate", data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.data.token);
          let data = jwt.jwtDecode(response.data.token);
          setAuth({
            sub: data.sub ?? "",
            iat: data.iat ?? "",
            exp: data.exp ?? "",
            isAuthenticated: true,
          });
        }
      });
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuth({
      sub: null,
      iat: null,
      exp: null,
      isAuthenticated: false,
    });
  };
  const checkSession = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      let data = jwt.jwtDecode(accessToken);
      setAuth({
        sub: data.sub ?? "",
        iat: data.iat ?? "",
        exp: data.exp ?? "",
        isAuthenticated: true,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, checkSession, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const object = useContext(AuthContext);
  if (!object) {
    throw new Error("useGetComplexObject must be used within a Provider");
  }
  return object;
};

export default AuthProvider;
