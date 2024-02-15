"use client";
import React from "react";
import Image from "next/image";
import { about } from "@/public/infos/about";
import { skillsIconList } from "@/public/infos/skillsIconList";
import { ImageBanner } from "../components/ImageBanner";
import { ContactIconList } from "./ContactIconList";

export function MainCard() {
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center`}>
      <div className="flex flex-row justify-center w-full relative">
        <div className="absolute inset-0 z-0 md:static w-full md:w-56 flex items-center justify-center opacity-20 dark:opacity-30 md:opacity-100 dark:md:opacity-100">
          <Image
            src="/images/face.png"
            alt="faceImg"
            width={200}
            height={200}
            priority={true}
            className="select-none min-w-[200px] w-auto h-auto dark:hidden"
          />
          <Image
            src="/images/faceDark.png"
            alt="faceImgDark"
            width={200}
            height={200}
            priority={true}
            className="select-none min-w-[200px] w-auto h-auto hidden dark:block"
          />
        </div>
        <div className="flex flex-col justify-center z-10 md:ml-5">
          <p className="text-xl md:text-2xl font-medium select-none">
            Hi, I&apos;m&nbsp;
            <span className="text-2xl md:text-3xl font-medium select-none">
              {about.firstname}
            </span>
            .
          </p>
          <p className="text-2xl md:text-3xl font-bold select-none relative">
            {about.title}
            <span className="absolute z-[-1] bottom-1 left-0 bg-amber-200 dark:bg-indigo-800 h-2 w-full"></span>
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {about.status}
          </p>
          <div className="flex flex-row items-center mt-3">
            <ContactIconList showResume={true} />
          </div>
        </div>
      </div>
      <div className="grayscale w-full max-w-[800px]">
        <div>
          <ImageBanner imageList={skillsIconList} speed={8000} />
        </div>
        {/* <div className="absolute inset-0 bg-[rgba(76,47,39,0.5)] mix-blend-multiply" /> */}
      </div>
    </div>
  );
}
