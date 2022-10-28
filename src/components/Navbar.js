import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import menuLogo from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-menu-close.svg";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className="flex justify-between items-center pt-5">
      <img src={logo} alt="" />
      <button>
        {" "}
        <img src={menuLogo} alt="" />{" "}
      </button>
    </nav>
  );
}

export default Navbar;
