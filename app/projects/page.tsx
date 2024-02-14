"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TextBanner } from "../components/TextBanner";
import { projectList } from "@/public/infos/projects"; // Ensure this path is correct

interface Project {
  name: string;
  description: string;
  image: string;
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
        className="text-xs sm:text-sm md:text-base text-justify px-2 cursor-pointer"
        onClick={toggleExpanded}
      >
        {isExpanded ? text : `${text.substring(0, 100)}`}
        <span>
          {text.length > 100 && (
            <button
              onClick={toggleExpanded}
              className="text-sm text-blue-500 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-500"
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
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full">
          <div className="w-full">
            {/* <p className="font-light text-lg sm:text-2xl select-none">Projects Section</p> */}
            {projectList.map((project: Project, index: number) => (
              <div
                key={index}
                className="flex flex-col w-full p-2 my-3 bg-amber-50 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-50 shadow-lg"
              >
                <p className="pl-1 font-semibold sm:text-lg md:text-xl">{project.name}</p>
                <div className="flex flex-col sm:flex-row gap-1">
                  <div className="flex justify-center items-center w-full sm:w-60 sm:min-w-60 sm:h-36">
                    <div className="flex w-full sm:max-w-60 sm:h-36">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={0}
                        height={0}
                        layout="responsive"
                        className="select-none w-full h-auto sm:w-60 sm:h-36 shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <ExpandableText text={project.description} />
                    <div className="flex flex-col sm:flex-row p-1 text-sm md:text-base font-semibold underline">
                      <Link href={project.link} passHref>
                        <p className="p-1 hover:font-black lg:text-lg">
                          Web Link
                        </p>
                      </Link>
                      <Link href={project.github_repo} passHref>
                        <p className="p-1 sm:pl-5 hover:font-black lg:text-lg">
                          GitHub Repo Link
                        </p>
                      </Link>
                    </div>
                    <TextBanner textList={project.tech_stack} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}