import React from "react";

import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <div className="bg-gray-800 py-5">
      <nav className="flex justify-between px-10 md:px-28">
        <img src={logo} alt="logo-image" />
        <div className="flex gap-6 text-white items-center text-md md:text-xl">
          <a className="hover:text-amber-500" href="/shop">
            Shop
          </a>
          <a className="hover:text-amber-500" href="/order">
            Order
          </a>
          <a className="hover:text-amber-500" href="/inventory">
            Inventory
          </a>
          <a className="hover:text-amber-500" href="/login">
            Login
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
