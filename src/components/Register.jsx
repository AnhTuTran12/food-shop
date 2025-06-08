import React from "react";
import "../style/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="logo">
          <img src="./images/Logo2.png" alt="" />
        </div>
        <form action="" className="form_register">
          <div className="form_register_row-1 form_register_row">
            <label htmlFor="">
              <span>Fist Name*</span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your First Name"
                required
              />
            </label>
            <label htmlFor="">
              <span>Last Name*</span>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="Enter Your Last Name"
              />
            </label>
          </div>
          <div className="form_register_row-2 form_register_row">
            <label htmlFor="">
              <span>Email*</span>
              <input
                type="email"
                name=""
                id=""
                required
                placeholder="Enter Your Email"
              />
            </label>
            <label htmlFor="">
              <span>Phone Number*</span>
              <input
                type="number"
                name=""
                id=""
                required
                placeholder="Enter Your Phone Number"
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
            <button type="Submit"> Signup</button>
            <p>
              <Link to={"/login"}>Have an account?</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
