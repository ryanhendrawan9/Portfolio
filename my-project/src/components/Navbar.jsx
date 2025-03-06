import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import { FaChevronRight } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = ({ showMenu, setShowMenu, toggleMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 w-full py-3 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 bg-opacity-95 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 mx-auto max-w-7xl md:px-0">
        {/* Logo Section */}
        <div>
          <img src={Logo} alt="" className="w-[90px]" />
        </div>
        {/* Menu Section */}
        <nav className="hidden md:block">
          <ul className="flex items-center text-xl font-semibold text-white gap-7">
            <a href="#home">
              <li className="cursor-pointer hover:text-blue-400">Home</li>
            </a>
            <a href="#about">
              <li className="cursor-pointer hover:text-blue-400">About</li>
            </a>
            <a href="#education">
              <li className="cursor-pointer hover:text-blue-400">
                Education & Experience
              </li>
            </a>
            <a href="#project">
              <li className="cursor-pointer hover:text-blue-400">Projects</li>
            </a>
            <a href="#contact">
              <button className="px-3 py-1 cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 border-blue-400 border-2 hover:bg-blue-600">
                Contact
                <FaChevronRight />
              </button>
            </a>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <div className="text-4xl text-white md:hidden">
          {showMenu ? (
            <HiMenuAlt3 onClick={toggleMenu} />
          ) : (
            <HiMenuAlt1 onClick={toggleMenu} />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
