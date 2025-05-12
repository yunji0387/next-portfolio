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
        className={`flex flex-col gap-2 md:flex-row md:items-center justify-center overflow-hidden absolute md:relative w-full md:h-16 ${
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
            className={`flex items-center justify-center w-36 md:w-full rounded-lg border ${
              currPath === item.link
                ? "bg-amber-100 dark:bg-indigo-900 md:bg-transparent dark:md:bg-transparent md:border-none"
                : "bg-white dark:bg-[#020021] hover:bg-gray-100 dark:hover:bg-gray-800 md:bg-transparent dark:md:bg-transparent hover:md:bg-transparent dark:hover:md:bg-transparent md:border-none border-indigo-950 dark:border-white"
            } border-yellow-950 dark:border-white`}
          >
            <Link
              href={item.link}
              className={`w-full flex justify-center items-center h-10 md:h-8 md:hover:h-8 xl:h-10 xl:hover:h-10 transition-all duration-200 ease-in-out ${
                currPath === item.link
                  ? "font-semibold text-2xl lg:text-3xl 2xl:text-4xl"
                  : "font-normal text-lg lg:text-2xl 2xl:text-3xl hover:text-2xl xl:hover:text-3xl 2xl:hover:text-4xl"
              } text-[#4d2800] dark:text-white`}
            >
              <p className="select-none mt-1 lg:mt-2 relative">
                {item.name}
                {currPath === item.link && (
                  <span className="absolute z-[-1] bottom-1 left-0 bg-amber-200 dark:bg-indigo-800 h-2 w-full"></span>
                )}
              </p>
            </Link>
          </li>
        ))}
        <li className="hidden md:h-full md:flex md:justify-center md:items-center lg:items-end lg:min-w-24 lg:scale-125 lg:mb-8">
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
}
