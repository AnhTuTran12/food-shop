import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}>
          <Route path="product-detail" element={<Product-detail />}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
