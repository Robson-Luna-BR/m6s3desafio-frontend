import { createContext } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  let checkToken = window.localStorage.getItem("@TOKEN");

  const navigate = useNavigate();

  useEffect(() => {
    let userId = window.localStorage.getItem("@USERID");
    userId && navigate("/dashboard");
  }, []);

  async function loginForm(data) {
    try {
      const response = await api.post("/login", data);

      window.localStorage.clear();
      window.localStorage.setItem(
        "@TOKEN",
        JSON.stringify(response.data.token[0])
      );
      window.localStorage.setItem(
        "@USERID",
        JSON.stringify(response.data.token[1].id)
      );

      setUserData(response.data.token[1]);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function registerPage() {
    navigate("/register");
  }

  async function registerFormSend(data) {
    try {
      const response = await api.post("/users", data);

      navigate("/");
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function previousPage() {
    navigate(-1);
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        loginForm,
        registerPage,
        registerFormSend,
        previousPage,
        navigate,
        checkToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
