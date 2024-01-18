"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { themeIcons } from "@/public/infos/themeIcons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex">
      <button
        onClick={toggleTheme}
        className={`relative flex items-center px-1 w-16 h-8 rounded-full shadow border ${
          theme === "dark"
            ? "bg-gray-800 hover:bg-gray-700"
            : "bg-white text-gray-800 hover:bg-gray-100"
        }`}
      >
        <div
          className="absolute transition-transform duration-300 ease-in-out"
          style={{
            transform: theme === "dark" ? "translateX(0px)" : "translateX(31px)",
          }}
        >
          <Image
            src={theme === "dark" ? themeIcons.dark : themeIcons.light}
            alt={theme === "dark" ? "dark mode" : "light mode"}
            width={25}
            height={25}
            className="select-none"
          />
        </div>
      </button>
    </div>
  );
}
