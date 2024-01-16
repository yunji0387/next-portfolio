"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HamburgerIcon } from "./HamburgerIcon";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "About",
    link: "/about",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full relative">
      {/* Hamburger icon only visible on small screens */}
      <div className="flex flex-col items-center justify-center md:hidden">
        <HamburgerIcon isOpen={isOpen} handleClick={handleClick} />
      </div>

      {/* Combined Menu */}
      <ul
          className={`flex flex-col md:flex-row items-center justify-center md:space-x-4 overflow-hidden absolute md:relative w-full ${
          isOpen
            ? "max-h-96 opacity-100 transition-all duration-500 ease-in-out"
            : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
        } top-full md:top-0 left-0 z-50 md:z-auto w-full`}
      >
        {navItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-center w-[85%] border-2 md:border-none rounded-full m-2 bg-gray-900 md:bg-transparent"
          >
            <Link href={item.link} className="w-full flex justify-center items-center h-12 hover:h-14 md:h-8 md:hover:h-8 text-lg hover:text-2xl hover:font-bold transition-all duration-300 ease-in-out">
              <p className="text-white">
                {item.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
