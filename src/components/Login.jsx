import React from "react";
import "../style/Register.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="register">
        <div className="logo">
          <img src="./images/Logo2.png" alt="" />
        </div>
        <form action="" className="form_register">
          <div className="form_register_row-3 form_register_row">
            <label htmlFor="">
              <span>Email Address*</span>
              <input
                type="email"
                name=""
                id=""
                required
                placeholder="Enter Your Email Address"
              />
            </label>
          </div>
          <div className="form_register_row-3 form_register_row">
            <label htmlFor="">
              <span>Password*</span>
              <input
                type="password"
                name=""
                id=""
                required
                placeholder="Enter Your Password"
              />
            </label>
          </div>
          <div className="form_register-btn">
            <button type="Submit">Login</button>
            <p>
              <Link to={"/register"}>Signup?</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
