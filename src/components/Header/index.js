import React from 'react';
import './header.css'

import Logo from "../../img/logo.png";

const Header = () => {
    return (
             <div className="home-header">
        <img src={Logo} alt="logo" className="home-img" />
      </div>
    );
};

export default Header;