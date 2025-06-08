import React, { useState, useEffect } from "react";
import "../style/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const handleDecrease = (index) => {
    setCart((prev) => {
      const newCart = [...prev];
      if (newCart[index].quantity > 1) newCart[index].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleIncrease = (index) => {
    setCart((prev) => {
      const newCart = [...prev];
      if (
        newCart[index].quantity <
        newCart[index].productQuantity - newCart[index].productSell
      )
        newCart[index].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleChangeQuantity = (index, value) => {
    setCart((prev) => {
      const newCart = [...prev];
      let val = Math.max(
        1,
        Math.min(
          Number(value),
          newCart[index].productQuantity - newCart[index].productSell
        )
      );
      newCart[index].quantity = val;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleDeleteItem = (index) => {
    setCart((prev) => {
      const newCart = [...prev];
      newCart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  return (
    <>
      <div className="cart">
        <table className="cart_table">
          <thead>
            <tr>
              <td>
                <p>Product</p>
              </td>
              <td>
                <p>Price</p>
              </td>
              <td>
                <p>Quantity</p>
              </td>
              <td>
                <p>Total</p>
              </td>
              <td>
                <p>Action</p>
              </td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.productImage} alt="" className="" />
                  <span>{item.productName}</span>
                </td>
                <td>
                  <span>${item.productPrice}</span>
                </td>
                <td>
                  <div className="product_quantity_select">
                    <div className="product_quantity_select-btn">
                      <button
                        onClick={() => handleDecrease(index)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        name=""
                        id=""
                        min={1}
                        max={item.productQuantity - item.productSell}
                        value={item.quantity}
                        onChange={(e) =>
                          handleChangeQuantity(index, e.target.value)
                        }
                      />
                      <button
                        onClick={() => handleIncrease(index)}
                        disabled={
                          item.quantity >=
                          item.productQuantity - item.productSell
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td>${(item.productPrice * item.quantity).toFixed(2)}</td>
                <td>
                  <img
                    src="/images/icon/Delete.svg"
                    alt=""
                    onClick={() => handleDeleteItem(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
