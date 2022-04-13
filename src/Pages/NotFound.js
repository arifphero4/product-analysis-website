import React from "react";
import Header from "../hooks/Header";
import errorImg from "./../image/error.png";

const NotFound = () => {
  return (
    <div>
      <Header></Header>
      <img src={errorImg} alt="" />
    </div>
  );
};

export default NotFound;
