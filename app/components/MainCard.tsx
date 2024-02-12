"use client";
import React, { useState } from "react";
import Link from "next/link";
import { about } from "@/public/infos/about";
import { skillsIconList } from "@/public/infos/skillsIconList";
import { ImageBanner } from "../components/ImageBanner";
import { MinimizeIcon } from "./MinimizeIcon";

export function MainCard() {
  const [isMinimize, setIsMinimize] = useState(false);

  const handleClick = () => {
    setIsMinimize(!isMinimize);
  };

  return (
    <div
      className={`w-full h-full flex flex-col ${
        isMinimize ? "justify-start items-start" : "justify-center items-center"
      }`}
    >
      <div className={`${isMinimize ? "w-8" : "w-[85%]"} h-full`}>
        <div className={`${isMinimize ? "flex bg-opacity-70 dark:bg-opacity-50 bg-amber-100 dark:bg-gray-800 rounded-lg" : "hidden"}`}>
          <MinimizeIcon
            isMinimize={isMinimize}
            handleClick={handleClick}
            width="8"
            height="8"
          />
        </div>
        <div className={`${isMinimize ? "hidden" : "flex"} w-full h-full terminal-outer-container bg-opacity-80`}>
          <div className="flex flex-col w-full h-full terminal-inner-container text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black bg-opacity-80">
            <div className="flex items-end justify-end w-full">
              <MinimizeIcon
                isMinimize={isMinimize}
                handleClick={handleClick}
                width="8"
                height="8"
              />
            </div>
            <div>
              <p>
                &#10148; Hi, I&apos;m {about.firstname}.
              </p>
              <p>
                &#10148; {about.title}
              </p>
              <p>
                &#10148; {about.status}
              </p>
              <div className="flex flex-row">
                <p>
                  &#10148; Check out my {""}
                  <Link href="/resume" rel="noopener noreferrer">
                    <span className="underline hover:text-base hover:sm:text-lg hover:md:text-xl hover:lg:text-2xl hover:xl:text-3xl hover:text-amber-700 dark:hover:text-gray-300 transition-all duration-300 ease-in-out">
                      resume
                    </span>
                  </Link>
                  .
                </p>
              </div>
              <div className="w-full pt-3">
                <ImageBanner imageList={skillsIconList} speed={8000} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
