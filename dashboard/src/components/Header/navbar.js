import React from "react";
import suretyLogoBorder from "../../images/suretyLogoBorder.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img src={suretyLogoBorder} alt="surety-logo" className="navlogo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/team"}>
          <li>Team</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
