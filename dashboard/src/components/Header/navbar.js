import React from 'react';
import suretyLogo from '../../images/suretyLogo.png';
import suretyLogoText from '../../images/suretyLogoText.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={suretyLogoText} alt="surety-logo" className="navlogo" />
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/team">Our Team</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
