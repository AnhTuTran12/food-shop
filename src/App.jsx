import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { CategoryProvider } from "./context/CategoryContext";

import Shop from "./components/Shop";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <CategoryProvider>
          <ProductProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/shop/:id" element={<Shop />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
            <Footer />
          </ProductProvider>
        </CategoryProvider>
      </UserProvider>
    </>
  );
}

export default App;
