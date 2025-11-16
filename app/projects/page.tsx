"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectCardSkeleton } from "../components/ProjectCardSkeleton";
import { projectList } from "@/public/infos/projects";

interface Project {
  name: string;
  description: string;
  image?: string;
  link: string;
  github_repo: string;
  tech_stack: string[];
}

// Helper function to determine number of skeleton cards based on viewport
const getSkeletonCount = (): number => {
  if (typeof window === "undefined") return 8; // Default for SSR
  
  const width = window.innerWidth;
  if (width < 640) return 3; // Mobile: 3 skeletons
  if (width < 1024) return 6; // Tablet: 6 skeletons
  if (width < 1536) return 9; // Desktop: 9 skeletons
  return 12; // Large screens: 12 skeletons
};

// Projects component with TypeScript
export default function Projects() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [skeletonCount, setSkeletonCount] = useState<number>(8);

  useEffect(() => {
    // Update skeleton count based on viewport
    setSkeletonCount(getSkeletonCount());

    // Handle window resize
    const handleResize = () => {
      setSkeletonCount(getSkeletonCount());
    };

    window.addEventListener("resize", handleResize);

    // Simulate loading delay to show skeleton (remove in production or when fetching real data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay for demo purposes

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div 
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 w-full mb-8"
        role="feed"
        aria-busy={isLoading}
      >
        {isLoading ? (
          // Show skeleton cards while loading
          Array.from({ length: skeletonCount }).map((_, index) => (
            <ProjectCardSkeleton key={`skeleton-${index}`} />
          ))
        ) : (
          // Show actual project cards when loaded
          projectList.map((project: Project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              github_repo={project.github_repo}
              tech_stack={project.tech_stack}
            />
          ))
        )}
      </div>

      <Footer showIcons={true} />
    </div>
  );
}
