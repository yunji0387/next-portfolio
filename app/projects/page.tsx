"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { projectList } from "@/public/infos/projects";

interface Project {
  name: string;
  description: string;
  image?: string;
  link: string;
  github_repo: string;
  tech_stack: string[];
}

interface ExpandableTextProps {
  text: string;
}

// ExpandableText component with TypeScript
const ExpandableText: React.FC<ExpandableTextProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpanded = (): void => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p
        className="text-xs sm:text-sm md:text-base text-justify cursor-pointer"
        onClick={toggleExpanded}
      >
        {isExpanded ? text : `${text.substring(0, 100)}`}
        <span>
          {text.length > 100 && (
            <button
              onClick={toggleExpanded}
              className="text-sm text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 hover:font-semibold"
            >
              {isExpanded ? "Show Less" : "... Read More"}
            </button>
          )}
        </span>
      </p>
    </div>
  );
};

// Projects component with TypeScript
export default function Projects() {
  return (
    <div className="custom-container">
      <Navbar />
      <div className="relative w-full h-full">
        <div className="fixed inset-0 z-[-1] flex items-end justify-end m-5">
          <Image
            src="/images/rabbitLight.png"
            alt="rabbit"
            width={500}
            height={500}
            priority={false}
            className="w-auto h-auto select-none opacity-10 tall:xl:opacity-80 tall:2xl:opacity-100 dark:hidden"
            style={{ maxWidth: "500px", width: "auto", height: "auto" }}
          />
          <Image
            src="/images/rabbitDark.png"
            alt="rabbitDark"
            width={500}
            height={500}
            priority={false}
            className="w-auto h-auto select-none opacity-30 tall:xl:opacity-80 tall:2xl:opacity-100 hidden dark:block"
            style={{ maxWidth: "500px", width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full">
          <div className="w-full">
            {projectList.map((project: Project, index: number) => (
              <div key={index} className="group flex flex-col w-full p-2 my-5">
                <p className="w-full pl-1 font-medium sm:text-lg md:text-xl lg:text-2xl">
                  {project.name}
                </p>
                <div className="px-1">
                  <ExpandableText text={project.description} />
                </div>
                <div className="w-fit flex flex-col xs:flex-row text-sm md:text-base underline">
                  <Link href={project.link} passHref className="w-fit">
                    <p className="p-1 hover:font-bold hover:text-blue-600 dark:hover:text-blue-300 w-fit transition-all duration-200">Web Link</p>
                  </Link>
                  <Link href={project.github_repo} passHref className="w-fit">
                    <p className="p-1 sm:pl-5 hover:font-bold hover:text-blue-600 dark:hover:text-blue-300 w-fit transition-all duration-200">
                      GitHub Repo Link
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer showIcons={true} />
    </div>
  );
}
