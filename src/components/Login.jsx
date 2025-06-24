import React, { useContext, useState } from "react";
import "../style/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { setCookie } from "../utils/cookie";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(form.email, form.password);
    if (success) {
      alert("Login success!");
      navigate("/");
    } else {
      alert("Email or password incorrect");
      console.log(success);
    }
  };

  return (
    <>
      <div className="register">
        <div className="logo">
          <img src="./images/Logo2.png" alt="" />
        </div>
        <form action="" className="form_register" onSubmit={handleLogin}>
          <div className="form_register_row-3 form_register_row">
            <label htmlFor="">
              <span>Email Address*</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
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
                name="password"
                value={form.password}
                onChange={handleChange}
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
