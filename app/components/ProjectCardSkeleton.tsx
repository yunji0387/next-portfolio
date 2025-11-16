"use client";
import React from "react";

export const ProjectCardSkeleton: React.FC = () => {
  return (
    <div 
      className="flex flex-col bg-white/25 dark:bg-white/10 rounded-xl overflow-hidden h-full"
      role="status"
      aria-label="Loading project card"
    >
      {/* Project Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Project Title Skeleton */}
        <div className="space-y-2">
          <div className="h-5 bg-gray-300/50 dark:bg-gray-700/50 rounded shimmer w-3/4"></div>
          <div className="h-5 bg-gray-300/50 dark:bg-gray-700/50 rounded shimmer w-1/2"></div>
        </div>

        {/* Project Description Skeleton */}
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-gray-300/50 dark:bg-gray-700/50 rounded shimmer w-full"></div>
          <div className="h-4 bg-gray-300/50 dark:bg-gray-700/50 rounded shimmer w-full"></div>
          <div className="h-4 bg-gray-300/50 dark:bg-gray-700/50 rounded shimmer w-2/3"></div>
        </div>

        {/* Tech Stack Skeleton */}
        <div className="flex flex-wrap gap-2 mt-auto">
          <div className="h-7 w-20 bg-gray-300/50 dark:bg-gray-700/50 rounded-full shimmer"></div>
          <div className="h-7 w-24 bg-gray-300/50 dark:bg-gray-700/50 rounded-full shimmer"></div>
          <div className="h-7 w-16 bg-gray-300/50 dark:bg-gray-700/50 rounded-full shimmer"></div>
          <div className="h-7 w-20 bg-gray-300/50 dark:bg-gray-700/50 rounded-full shimmer"></div>
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex gap-2 mt-2 max-sm:flex-col">
          <div className="flex-1 h-10 bg-gray-300/50 dark:bg-gray-700/50 rounded-lg shimmer max-sm:w-full"></div>
          <div className="flex-1 h-10 bg-gray-300/50 dark:bg-gray-700/50 rounded-lg shimmer max-sm:w-full"></div>
        </div>
      </div>
      
      {/* Screen reader text */}
      <span className="sr-only">Loading project information...</span>
    </div>
  );
};
