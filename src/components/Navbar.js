import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import menuLogo from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-menu-close.svg";

function Navbar() {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <nav className="flex justify-between relative items-center pt-5 md:pt-20">
      <img src={logo} alt="" />
      <ul className="md:flex hidden gap-10 text-Darkgrayishblue">
        <li>
          {" "}
          <a href="#" className=" hover:text-Softred ">
            Home
          </a>
        </li>
        <li>
          {" "}
          <a href="#" className=" hover:text-Softred ">
            New
          </a>
        </li>
        <li>
          {" "}
          <a href="#" className=" hover:text-Softred ">
            Popular
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-Softred ">
            Trending
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-Softred ">
            Categories
          </a>
        </li>
      </ul>
      <button className=" md:hidden">
        {" "}
        <img
          src={menuLogo}
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          alt=""
        />{" "}
      </button>

      {isClicked && (
        <div className="bg-black absolute w-[375px] h-[1590px] opacity-[0.6]  "></div>
      )}
      {isClicked && (
        <div className=" bg-white z-10 p-5 flex flex-col w-[300px] h-[2000px] absolute right-0 top-0 ">
          <button
            className="self-end "
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            <img src={menuClose} className="w-[50px]  " alt="" />
          </button>

          <ul className="flex flex-col mt-20   gap-8 text-Darkgrayishblue">
            <li>
              {" "}
              <a href="#" className=" hover:text-Softred ">
                Home
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className=" hover:text-Softred ">
                New
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className=" hover:text-Softred ">
                Popular
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-Softred ">
                Trending
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-Softred ">
                Categories
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
