import React from "react";
import Logo from "../assets/Netflix_Logo.png";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img className="w-44" src={Logo} alt="logo" />
    </div>
  );
};

export default Header;
