import React, { useState } from "react";

function Protected(props) {
  const { Component } = props;
  const isNew = false; // renamed from 'new'

  console.log(localStorage.getItem("login"));

  return <>{isNew ? <Component /> : null}</>;
}

export default Protected;
