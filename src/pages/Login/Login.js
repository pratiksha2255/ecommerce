import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const creadentials = {
    username: "",
    password: "",
  };
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const containerStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
    margin: "100px auto",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    border: "none",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  };
  function Login(e) {
    if (
      inputUserName == creadentials.username &&
      inputPassword == creadentials.password
    ) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      alert("Check creadentials");
    }
  }
  return (
    <>
      <div style={containerStyle}>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          style={inputStyle}
          onChange={(e) => setInputUserName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          style={inputStyle}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button type="submit" style={buttonStyle} onClick={Login}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
