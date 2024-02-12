"use client";
import React, { useState } from "react";
import Image from "next/image";
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
        <div
          className={`${
            isMinimize
              ? "flex bg-opacity-70 dark:bg-opacity-50 bg-amber-100 dark:bg-gray-800 rounded-lg"
              : "hidden"
          }`}
        >
          <MinimizeIcon
            isMinimize={isMinimize}
            handleClick={handleClick}
            width="8"
            height="8"
          />
        </div>
        <div
          className={`${
            isMinimize ? "hidden" : "flex"
          } w-full h-full terminal-outer-container bg-opacity-80`}
        >
          <div className="flex flex-col justify-between w-full h-full min-h-[450px] terminal-inner-container bg-opacity-80">
            <div className="flex items-end justify-end w-full">
              <MinimizeIcon
                isMinimize={isMinimize}
                handleClick={handleClick}
                width="8"
                height="8"
              />
            </div>
            <div className="flex flex-row justify-center w-full relative">
              <div className="absolute inset-0 z-0 md:static w-full md:w-56 flex items-center justify-center opacity-20 dark:opacity-30 md:opacity-100 dark:md:opacity-100">
                <Image
                  src="/images/face.png"
                  alt="faceImg"
                  width={200}
                  height={200}
                  className="select-none min-w-[200px] dark:hidden"
                />
                <Image
                  src="/images/faceDark.png"
                  alt="faceImgDark"
                  width={200}
                  height={200}
                  className="select-none min-w-[200px] hidden dark:block"
                />
              </div>
              <div className="flex flex-col justify-center z-10 md:ml-5">
                <p className="text-xl md:text-2xl font-medium select-none">
                  Hi, I&apos;m {about.firstname}.
                </p>
                <p className="text-2xl md:text-3xl font-semibold select-none">
                  {about.title}
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  {about.status}
                </p>
                <Link href="/resume" rel="noopener noreferrer" className="mt-2">
                  <button className="rounded-full bg-amber-300 dark:bg-green-900 border-2 border-yellow-950 dark:border-white p-1 px-3 bg-opacity-100 hover:bg-amber-500 font-extrabold transition-all duration-300 ease-in-out">
                    Resume
                  </button>
                </Link>
              </div>
              {/* <div className="flex flex-col justify-center lg:ml-5">
                <p>&#10148; Hi, I&apos;m {about.firstname}.</p>
                <p>&#10148; {about.title}</p>
                <p>&#10148; {about.status}</p>
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
              </div> */}
            </div>
            <div className="w-full pt-3">
              <ImageBanner imageList={skillsIconList} speed={8000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
