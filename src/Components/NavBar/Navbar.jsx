import React from "react";
import Logo from '../../Assets/Images/download.png'
import '../NavBar/Navbar.css';
import Avatar from '../../Assets/Images/gamer.png'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar-center">
            <i class="fa-regular fa-user"></i>
            <i class="fa-solid fa-user-group"></i>
            <i class="fa-regular fa-message"></i>
            <i class="fa-solid fa-image"></i>
            <i class="fa-regular fa-file"></i>
        </div>
        <div className="navbar-right">
            <div className="search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <div className="line"></div>
            </div>
            <div className="notification">
                <i class="fa-regular fa-message"></i>
                <i class="fa-solid fa-image"></i>
                <i class="fa-regular fa-file"></i>
            </div>
            <div className="avatar">
                Zia
                <img src={Avatar} alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
