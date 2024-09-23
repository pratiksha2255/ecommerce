<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 30370c34c8c2fb5a6f4820bad3ebc61b30289c15
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
<<<<<<< HEAD
  const creadentials ={
    username:'Pratiksha',
    password:'Pratiksha@123'
  }
  const [inputUserName, setInputUserName] = useState('')
  const [inputPassword, setInputPassword] = useState('')
=======
>>>>>>> 30370c34c8c2fb5a6f4820bad3ebc61b30289c15
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
<<<<<<< HEAD
  function Login(e) {
    console.log( inputUserName, inputPassword)
    if(inputUserName == creadentials.username && inputPassword == creadentials.password){
      localStorage.setItem("isLoggedIn", true);
      navigate('/')
    }else{
      alert('Check creadentials')
    }

=======
  function newData(e) {
    localStorage.setItem("isLoggedIn", true);
    console.log(localStorage.isLoggedIn);
    navigate('/')
>>>>>>> 30370c34c8c2fb5a6f4820bad3ebc61b30289c15

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
          onChange={(e)=>setInputUserName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          style={inputStyle}
          onChange={(e)=>setInputPassword(e.target.value)}
        />
<<<<<<< HEAD
        <button type="submit" style={buttonStyle} onClick={Login}>       
=======
        <button type="submit" style={buttonStyle} onClick={newData}>       
>>>>>>> 30370c34c8c2fb5a6f4820bad3ebc61b30289c15
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
