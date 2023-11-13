import React from "react";
import logoimg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logoimg} />
      <div className="header-navlist">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/user"}>
          <p>User</p>
        </Link>
        <Link to={"/user/2"}>
          <p>User Detail</p>
        </Link>

        <p>Contacts</p>
      </div>
      <div>
        <button id="login">Login</button>
        <button id="signup">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
