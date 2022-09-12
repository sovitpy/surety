import React from "react";
import suretyLogoBorder from "../../images/suretyLogoBorder1.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="test">
        <a href="/">
          <img src={suretyLogoBorder} alt="surety-logo" className="navlogo" />
        </a>
        <span>Surety</span>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/team">Team</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
