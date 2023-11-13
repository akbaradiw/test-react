import React from "react";
import logoimg from "../../assets/logo.png";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logoimg} />
      <div className="footer-navlist">
        <p>Portofolio</p>
        <p>How it Works</p>
        <p>Pricing</p>
        <p>About</p>
        <p>Login</p>
      </div>
    </div>
  );
};

export default Footer;
