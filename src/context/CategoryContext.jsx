import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-mock-api-mrq1.onrender.com/category")
      .then((res) => setCategory(res.data))
      .catch((err) => console.err(err));
  }, []);
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
