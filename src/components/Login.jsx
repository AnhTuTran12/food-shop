import React, { useContext, useState } from "react";
import "../style/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(users);

    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (user) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email: user.email })
      );
      alert("Email or Password correct");

      navigate("/");
    } else {
      alert("Email or Password Incorrect");
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
