import React, { useContext, useState } from "react";
import "../style/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const { register } = useContext(UserContext);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      await register(form);
      alert("Register Success!");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className="register">
        <div className="logo">
          <img src="./images/Logo2.png" alt="" />
        </div>
        <form action="" className="form_register" onSubmit={handleSubmit}>
          <div className="form_register_row-1 form_register_row">
            <label htmlFor="">
              <span>Fist Name*</span>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter Your First Name"
                required
              />
            </label>
            <label htmlFor="">
              <span>Last Name*</span>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
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
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter Your Email"
              />
            </label>
            <label htmlFor="">
              <span>Phone Number*</span>
              <input
                type="number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
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
                name="password"
                value={form.value}
                onChange={handleChange}
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
