import React from "react";
import logo from "../assets/images/apple.svg";
import bag from "../assets/images/bag.svg";
import search from "../assets/images/search.svg";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between sm:px-44 px-8 py-5 w-full items-center">
        <div className="">
          <img src={logo} alt="logo" className="w-5 h-5" />
        </div>
        <div className="flex flex-1 justify-center max-sm:hidden text-[#86868b]">
          <a href="" className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">Store</a>
          <a href="" className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">Mac</a>
          <a href="" className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">iPhone</a>
          <a href="" className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">Support</a>
        </div>
        <div className="flex justify-end gap-x-5">
          <img src={search} alt="" className="w-5 h-5" />
          <img src={bag} alt="" className="w-5 h-5" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
