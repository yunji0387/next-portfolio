"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  const currPath = usePathname();

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
        className={`flex flex-col md:flex-row items-center justify-center overflow-hidden absolute md:relative w-full md:h-16 ${
          isOpen
            ? "max-h-96 opacity-100 transition-all duration-500 ease-in-out"
            : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
        } top-full md:top-0 left-0 z-50 md:z-auto w-full`}
      >
        <li className="hidden md:flex md:items-center md:justify-center min-w-16">
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
            className={`flex items-center justify-center w-full rounded-full border-2 mx-2 ${
              currPath === item.link
                ? "md:bg-opacity-70 md:dark:bg-opacity-50 bg-yellow-700 dark:bg-indigo-200 border-indigo-950 dark:border-white"
                : "bg-yellow-600 dark:bg-indigo-950 hover:bg-yellow-500 dark:hover:bg-indigo-800  md:bg-transparent dark:md:bg-transparent hover:md:bg-transparent dark:hover:md:bg-transparent md:border-none border-indigo-950 dark:border-white"
            }`}
          >
              <Link
                href={item.link}
                className={`w-full flex justify-center items-center font-black h-10 md:h-8 md:hover:h-8 xl:h-10 xl:hover:h-10 transition-all duration-200 ease-in-out ${
                  currPath === item.link
                    ? "text-amber-50 dark:text-black text-2xl xl:text-3xl 2xl:text-4xl md:text-amber-50"
                    : "text-amber-50 dark:text-white md:text-[#4d2800] text-lg xl:text-xl 2xl:text-2xl hover:text-2xl xl:hover:text-3xl 2xl:hover:text-4xl"
                } dark:md:text-white`}
              >
                <p className={`select-none`}>{item.name}</p>
              </Link>
          </li>
        ))}
        <li className="hidden md:flex md:justify-center md:items-center xl:min-w-20 xl:scale-125">
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
}
