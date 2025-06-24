import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { setCookie, deleteCookie } from "../utils/cookie";

export const UserContext = createContext();

const API_URL = "https://my-mock-api-mrq1.onrender.com/users";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data);
  };

  const register = async (form) => {
    if (!form || !form.email) {
      throw new Error("Form data is invalid!");
    }
    const res = await axios.get(`${API_URL}?email=${form.email}`);
    if (res.data.length > 0) {
      throw new Error("Email already exists!");
    }
    await axios.post(API_URL, form);
    setCurrentUser(form.email);
    setCookie("currentUser", currentUser.email, 1);
  };

  const login = async (email, password) => {
    const res = await axios.get(
      `${API_URL}?email=${email}&password=${password}`
    );
    if (res.data.length > 0) {
      setCurrentUser(res.data[0]);
      setCookie("currentUser", res.data[0].email, 1);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    deleteCookie("currentUser");
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        login,
        register,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
