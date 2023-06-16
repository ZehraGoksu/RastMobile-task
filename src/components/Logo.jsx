import React from "react";
import logo from "../assets/images/rastLogo.png";
import '../style/Logo.scss'

const Logo = () => {
  return (
    <div className="d-flex align-items-center logo">
      <img src={logo} alt="Logo" />
      <div className="title">
        <h1 className="first">RAST</h1>
        <h1>MOBILE</h1>
      </div>
    </div>
  );
};

export default Logo;
