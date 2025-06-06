import React from "react";
import "../style/Header.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="nav_bar">
          <img src="./images/icon/Bar.svg" alt="" />
        </div>
        <ul className="nav_list">
          <li className="nav_item">
            <a href="">Home</a>
          </li>
          <li className="nav_item">
            <a href="">Category</a>
          </li>
          <li className="nav_item">
            <Link to="/shop">Product</Link>
          </li>

          <li className="nav_item">
            <a href="">Pages</a>
          </li>
          <li className="nav_item">
            <a href="">Blog</a>
          </li>
          <li className="nav_item">
            <a href="">Element</a>
          </li>
        </ul>
        <div className="phone_number">
          <img
            src="./images/icon/Phone.svg"
            alt="Phone Icon"
            className="phone_icon"
          />
          <p>+1 (555) 123-4567</p>
        </div>
      </nav>
      <div className="top_bar">
        <div className="logo">
          <img src="./images/Logo.png" alt="Logo" />
        </div>
        <div className="top_bar-search">
          <input type="text" name="" id="" placeholder="Search for items..." />
          <button type="submit">
            <img src="./images/icon/Search.svg" alt="Search Icon" />
          </button>
        </div>
        <div className="top_bar-icon">
          <div className="icon_account item">
            <img src="./images/icon/People.svg" alt="" /> <span>Account</span>
          </div>
          <div className="icon_wishlist item">
            <img src="./images/icon/Wishlist.svg" alt="" />
            <span>Wishlist</span>
          </div>
          <div className="icon_cart item">
            <img src="./images/icon/Cart.svg" alt="" /> <span>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
