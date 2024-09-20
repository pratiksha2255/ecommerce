import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Protected(props) {
  const { Component } = props;
  const isNew = localStorage.getItem("isLoggedIn");

  return <>{isNew ? <Component /> : <Navigate to="/login" />}</>;
}

export default Protected;
