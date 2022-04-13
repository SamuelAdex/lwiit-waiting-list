import React from 'react'
import logo from '../img/LWIIT-LOGO.png'
import kchat from '../img/kc.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="social-links">
        <a href="https://kingschat.online/user/liit_">
          <img src={kchat} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Header