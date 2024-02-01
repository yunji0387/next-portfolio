"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerIcon } from "./HamburgerIcon";
import { ThemeSwitcher } from "./ThemeSwitcher";

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
      <div className="flex flex-row items-center justify-between md:hidden w-full min-h-16">
        <HamburgerIcon isOpen={isOpen} handleClick={handleClick} />
        <div className="flex justify-center items-center min-w-16">
          <Image
            src="/icons/logoLight.png"
            alt="portfolio logo"
            width={50}
            height={50}
            className="select-none dark:hidden"
          />
          <Image
            src="/icons/logoDark.png"
            alt="portfolio logo"
            width={50}
            height={50}
            className="select-none hidden dark:block"
          />
        </div>
        <ThemeSwitcher />
      </div>

      {/* Combined Menu */}
      <ul
        className={`flex flex-col md:flex-row items-center justify-center md:space-x-4 overflow-hidden absolute md:relative w-full h-16 ${
          isOpen
            ? "max-h-96 opacity-100 transition-all duration-500 ease-in-out"
            : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
        } top-full md:top-0 left-0 z-50 md:z-auto w-full`}
      >
        <li className="hidden md:block min-w-16 ">
          <Image
            src="/icons/logoLight.png"
            alt="portfolio logo"
            width={50}
            height={50}
            className="select-none dark:hidden"
          />
          <Image
            src="/icons/logoDark.png"
            alt="portfolio logo"
            width={50}
            height={50}
            className="select-none hidden dark:block"
          />
        </li>
        {navItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-center w-full border-2 md:border-none border-white dark:border-black rounded-full m-2 bg-yellow-700 dark:bg-indigo-200 md:bg-transparent dark:md:bg-transparent"
          >
            <Link
              href={item.link}
              className="w-full flex justify-center items-center h-10 hover:h-14 md:h-8 md:hover:h-8 text-lg hover:text-2xl hover:font-bold transition-all duration-300 ease-in-out"
            >
              <p className="font-black select-none text-white dark:text-black md:text-[#4d2800] dark:md:text-white">
                {item.name}
              </p>
            </Link>
          </li>
        ))}
        <li className="">
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
}
