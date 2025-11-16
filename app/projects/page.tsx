"use client";
import React from "react";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { projectList } from "@/public/infos/projects";

interface Project {
  name: string;
  description: string;
  image?: string;
  link: string;
  github_repo: string;
  tech_stack: string[];
}

// Projects component with TypeScript
export default function Projects() {
  return (
    <div className="custom-container">
      <Navbar />
      
      {/* Background decoration - optimized for new layout */}
      <div className="relative w-full h-full">
        <div className="fixed inset-0 z-[-1] flex items-end justify-end m-5 opacity-5 dark:opacity-10">
          <Image
            src="/images/rabbitLight.png"
            alt="rabbit"
            width={500}
            height={500}
            priority={false}
            className="w-auto h-auto select-none dark:hidden"
            style={{ maxWidth: "500px", width: "auto", height: "auto" }}
          />
          <Image
            src="/images/rabbitDark.png"
            alt="rabbitDark"
            width={500}
            height={500}
            priority={false}
            className="w-auto h-auto select-none hidden dark:block"
            style={{ maxWidth: "500px", width: "auto", height: "auto" }}
          />
        </div>
      </div>

      {/* Projects Grid - YouTube style layout */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 w-full mb-8">
        {projectList.map((project: Project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
            github_repo={project.github_repo}
            tech_stack={project.tech_stack}
          />
        ))}
      </div>

      <Footer showIcons={true} />
    </div>
  );
}
