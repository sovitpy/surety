import React from 'react';
import suretyLogo from '../../images/suretyLogo.png';
import suretyLogoText from '../../images/suretyLogoText.png';
import suretyLogoBorder from '../../images/suretyLogoBorder.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={suretyLogoBorder} alt="surety-logo" className="navlogo" />
      </a>
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
