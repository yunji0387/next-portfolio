import Link from "next/link";
import { projectList } from "@/public/infos/projects";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Projects() {
  return (
    <div className="custom-container">
      <div className="bg-red-900 flex flex-col justify-center items-center w-full">
        <Navbar />
        <Link href="/" rel="noopener noreferrer">
          <p className="text-white hover:underline">Back</p>
        </Link>
        <p>{">"} projects section</p>
        {projectList.map((project, index) => (
          <div key={index} className="bg-blue-900 w-full p-2">
            <p>{project.name}</p>
            <p className="text-sm">{project.description}</p>
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <p className="text-white hover:underline">Web Link</p>
            </Link>
            <Link
              href={project.github_repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-white hover:underline">GitHub Repo Link</p>
            </Link>
            <div className="flex flex-wrap gap-x-2">
              {project.tech_stack.map((tech, index) => (
                <p
                  key={index}
                  className="bg-pink-600 whitespace-nowrap px-2 py-1 m-1 rounded text-center"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
