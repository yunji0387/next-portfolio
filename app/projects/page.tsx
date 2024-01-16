import Image from "next/image";
import Link from "next/link";
import { projectList } from "@/public/infos/projects";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TextBanner } from "../components/TextBanner";

export default function Projects() {
  const scrollStyles = {
    animation: "scrollLeft 10s linear infinite",
  };

  return (
    <div className="custom-container">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="bg-gray-900 w-full p-2 rounded-lg border-2 border-white">
          <div className="bg-gray-800 w-full p-5 rounded-md">
            <p>{">"} Projects Section</p>
            {projectList.map((project, index) => (
              <div key={index} className="w-full pt-2">
                <p>
                  {">"} {project.name}
                </p>
                <div className="grid grid-cols-12 gap-1">
                  <div className="col-span-12 md:col-span-4 lg:col-span-3 flex justify-center items-center w-full">
                    <div className="bg-black w-full max-w-80 m-2 p-2 border rounded-md">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={0}
                        height={0}
                        layout="responsive"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-8 lg:col-span-9 mt-2">
                    <p className="text-sm lg:text-base text-justify">{project.description}</p>
                    <div className="flex flex-col sm:flex-row p-1 text-sm md:text-base text-white underline">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="p-1 hover:font-bold">Web Link</p>
                      </Link>
                      <Link
                        href={project.github_repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="p-1 sm:pl-5 hover:font-bold">GitHub Repo Link</p>
                      </Link>
                    </div>
                    <div className="hidden lg:flex flex-wrap gap-x-2 w-full">
                      {project.tech_stack.map((tech, index) => (
                        <p
                          key={index}
                          className="bg-green-700 text-xs whitespace-nowrap px-2 py-1 m-1 rounded-full text-center font-semibold"
                        >
                          {tech}
                        </p>
                      ))}
                    </div>
                    <div className="lg:hidden">
                      <TextBanner textList={project.tech_stack} />
                    </div>
                  </div>
                </div>
                <div className="border-dashed border-b m-2"/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
