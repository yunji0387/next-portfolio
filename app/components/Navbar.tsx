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
        className={`flex flex-col md:flex-row items-center justify-center md:space-x-4 transition-all duration-500 ease-in-out overflow-hidden absolute md:relative w-full ${
          isOpen
            ? "bg-gray-900 md:bg-none max-h-96 opacity-100 border-2 rounded-md md:border-none"
            : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
        } top-full md:top-0 left-0 z-50 md:z-auto w-full`}
      >
        {navItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-center w-full border md:border-none"
          >
            <Link href={item.link} className="w-full">
              <p className="text-lg hover:scale-150 transition-all duration-300 ease-in-out text-center p-2 text-white">
                {item.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
