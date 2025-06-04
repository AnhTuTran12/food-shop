import React from "react";
import "../style/Footer.css"; // Assuming you have a CSS file for styling
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_infor">
          <img
            src="./images/Logo.png"
            alt="Logo"
            className="footer_infor_logo"
          />
          <div className="footer_infor_text footer_infor_item">
            FoodTrove is the biggest market of grocery products. Get your daily
            needs from our store.
          </div>
          <div className="footer_infor_location footer_infor_item">
            <img src="/images/icon/Location.svg" alt="" />
            <p>
              51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
            </p>
          </div>
          <div className="footer_infor_email footer_infor_item">
            <img src="/images/icon/Message.svg" alt="" />
            <p>example@gmail.com</p>
          </div>
          <div className="footer_infor_phone footer_infor_item">
            <img src="/images/icon/Phone.svg" alt="" />
            <p>+1 234 567 890</p>
          </div>
        </div>
        <div className="footer_nav_company nav">
          <ul>
            <li>
              <h3>Company</h3>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Delivery Information</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Support Center</a>
            </li>
          </ul>
        </div>
        <div className="footer_nav_category nav">
          <ul>
            <li>
              <h3>Category</h3>
            </li>
            <li>
              <a href="#">Dairy & Bakery</a>
            </li>
            <li>
              <a href="#">Fruits & Vegetables</a>
            </li>
            <li>
              <a href="#">Snack & Spice</a>
            </li>
            <li>
              <a href="#">Juice & Drink</a>
            </li>
            <li>
              <a href="#">Chicken & Meat</a>
            </li>
            <li>
              <a href="#">Fast Food</a>
            </li>
          </ul>
        </div>
        <div className="footer_subscribe">
          <h3>Subscribe Our Newsletter</h3>
          <form>
            <input type="text" placeholder="Search here..." required />
            <button type="submit">
              <img src="/images/icon/Paper-plane.svg" alt="" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
