"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { about } from "@/public/infos/about";
import { skillsIconList } from "@/public/infos/skillsIconList";
import { contactList } from "@/public/infos/contact";
import { ImageBanner } from "../components/ImageBanner";

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
            Hi, I&apos;m&nbsp;
            <span className="text-2xl md:text-3xl font-medium select-none">
              {about.firstname}
            </span>
            .
          </p>
          <p className="text-2xl md:text-3xl font-bold select-none">
            {about.title}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {about.status}
          </p>
          <div className="flex flex-row items-center mt-3">
            <Link href="/resume" rel="noopener noreferrer" className="">
              <button className="select-none rounded-full hover:border-2 border-yellow-950 dark:border-white p-3 font-black transition-all duration-200 ease-in-out">
                CV
              </button>
            </Link>
            <div className="flex flex-row max-w-full h-full">
              {contactList.map((contact, index) => (
                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className={`mx-1 flex flex-row items-center ${
                    contact.isAvailable
                      ? "rounded-full hover:border-2 border-yellow-950 dark:border-white p-2 font-black transition-all duration-200 ease-in-out"
                      : "disabled cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={contact.iconLight}
                      alt={contact.name}
                      width={30}
                      height={30}
                      className="select-none dark:hidden"
                    />
                    <Image
                      src={contact.iconDark}
                      alt={contact.name}
                      width={30}
                      height={30}
                      className="select-none hidden dark:block"
                    />
                  </div>
                </Link>
              ))}
            </div>
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
