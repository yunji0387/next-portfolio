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
      <div className="flex flex-row justify-center w-full relative py-8">
        <div className="absolute inset-0 z-0 md:static w-full md:w-56 flex items-center justify-center opacity-20 dark:opacity-30 md:opacity-100 dark:md:opacity-100 bg-yellow-300 dark:bg-indigo-900 rounded-full">
          {/* <Image
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
          /> */}
        </div>
        <div className="flex flex-col items-center md:items-start justify-center z-10 md:ml-5">
          <p className="text-xl md:text-2xl lg:text-3xl select-none font-light">
            Hi, I&apos;m&nbsp;
            <span className="text-3xl md:text-4xl lg:text-5xl font-medium select-none">
              {about.firstname}
            </span>
            .
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium select-none relative w-fit">
            {about.title}
            {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  */}
            <span className="absolute z-[-1] bottom-1 left-0 bg-amber-200 dark:bg-indigo-800 h-2 w-full"></span>
          </p>
          {/* <p className="select-none text-sm sm:text-base md:text-lg lg:text-2xl xl:text-2xl">
            {about.status}
          </p> */}
          {/* <p className="select-none text-base sm:text-lg md:text-xl lg:text-2xl">
            {about.slogan}
          </p> */}
          <div className="mt-3">
            {/* <ContactIconList showResume={true} /> */}
            <ContactIconList showResume={false} />
          </div>
        </div>
      </div>
      {/* <div className="grayscale w-full max-w-[800px]">
        <div>
          <ImageBanner imageList={skillsIconList} speed={8000} />
        </div>
      </div> */}
    </div>
  );
}
