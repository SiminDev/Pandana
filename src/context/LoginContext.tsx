import { createContext, useContext, useEffect, useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface LoginContextProvider {
  children: React.ReactNode;
}
interface LoginContext {
  isLogin: boolean;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
}

export const LoginContext = createContext({} as LoginContext);

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export function LoginContextProvider({ children }: LoginContextProvider) {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    login(username, password).finally(() => {
      // let token = res.token;
      let token = "dXNlckBleGFtcGxlLmNvbTpzZWNyZXQ=";

      localStorage.setItem("token", token);
      setIsLogin(true);
      navigate("/");
    });
  };

  const handleLogout = () => {
    setIsLogin(false);
    navigate("/");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ handleLogin, handleLogout, isLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
