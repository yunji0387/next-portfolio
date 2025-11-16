"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DESCRIPTION_LENGTH = 50;

interface ProjectCardProps {
  name: string;
  description: string;
  image?: string;
  link: string;
  github_repo: string;
  tech_stack: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
  link,
  github_repo,
  tech_stack,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpanded = (e: React.MouseEvent): void => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  // Truncate description for card preview
  const truncatedDescription = description.length > DESCRIPTION_LENGTH 
    ? `${description.substring(0, DESCRIPTION_LENGTH)}...` 
    : description;

  return (
    <div className="flex flex-col bg-white/25 dark:bg-white/10 rounded-xl overflow-hidden transition-all duration-300 h-full hover:bg-white/40 dark:hover:bg-white/20 hover:shadow-2xl">
      {/* Project Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Project Title */}
        <h3 className="text-lg font-semibold leading-tight line-clamp-2">
          {name}
        </h3>

        {/* Project Description */}
        <p className="text-sm leading-relaxed opacity-80 flex-1">
          {isExpanded ? description : truncatedDescription}
          {description.length > DESCRIPTION_LENGTH && (
            <button
              onClick={toggleExpanded}
              className="text-indigo-600 dark:text-blue-400 font-medium hover:underline hover:text-indigo-800 dark:hover:text-blue-300 transition-all duration-200"
            >
              {isExpanded ? " Show Less" : " Read More"}
            </button>
          )}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech_stack.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-2 pt-2 pb-1 text-yellow-950 dark:bg-blue-400/10 dark:text-gray-50 rounded-full border border-yellow-950 dark:border-gray-50 whitespace-nowrap font-light"
            >
              {tech}
            </span>
          ))}
          {tech_stack.length > 4 && (
            <span className="text-xs px-2 pt-2 pb-1 text-yellow-950 dark:bg-blue-400/10 dark:text-gray-50 rounded-full border border-yellow-950 dark:border-gray-50 font-medium">
              +{tech_stack.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-2 max-sm:flex-col">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-950 dark:bg-indigo-600 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:bg-yellow-900 dark:hover:bg-indigo-700 hover:shadow-lg max-sm:w-full"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </Link>
          <Link
            href={github_repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent rounded-lg text-sm font-medium border border-white/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/30 dark:hover:border-white/30 max-sm:w-full"
          >
            <Image
              src="/icons/githubLight.png"
              alt="GitHub"
              width={16}
              height={16}
              className="w-4 h-4 dark:hidden"
            />
            <Image
              src="/icons/githubDark.png"
              alt="GitHub"
              width={16}
              height={16}
              className="w-4 h-4 hidden dark:block"
            />
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};
