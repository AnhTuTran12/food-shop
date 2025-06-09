import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://my-mock-api-mrq1.onrender.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.err(err));
  }, []);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
