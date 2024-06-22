import React, { useContext, useState } from "react";

import "./LoginPage.css";
import { UsersContext } from "../../context/usersContext";

const loginInfo = { username: "admin", password: "admin1234" };

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn, usersData } = useContext(UsersContext);
  const [input, setInput] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.username === loginInfo.username) {
      setIsLoggedIn(true);
    } else {
      alert("No Match.");
    }
  };

  console.log(isLoggedIn);
  console.log(usersData);

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Welcome to the Bank Management System!</h2>
        <h3>Please Log in:</h3>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={input.username}
          onChange={handleChange}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
