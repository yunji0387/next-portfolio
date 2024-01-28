import Image from "next/image";
import Link from "next/link";
import { projectList } from "@/public/infos/projects";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TextBanner } from "../components/TextBanner";

export default function Projects() {
  return (
    <div className="custom-container">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full terminal-outer-container">
          <div className="w-full terminal-inner-container">
            <p className="font-black">&#128187; Projects Section</p>
            {projectList.map((project, index) => (
              <div
                key={index}
                className="w-full py-2 border-b-2 border-dashed border-black dark:border-white"
              >
                <p className="font-semibold">
                  &#10148; {project.name}
                </p>
                <div className="grid grid-cols-12 gap-1">
                  <div className="col-span-12 md:col-span-4 lg:col-span-3 flex justify-center items-center w-full">
                    <div className="w-full max-w-80 m-2 terminal-outer-container border">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={0}
                        height={0}
                        layout="responsive"
                        className="select-none w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-8 lg:col-span-9 mt-2">
                    <p className="text-sm md:text-base text-justify px-2">
                      {project.description}
                    </p>
                    <div className="flex flex-col sm:flex-row p-1 text-sm md:text-base font-semibold underline">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="p-1 hover:font-black lg:text-lg">
                          Web Link
                        </p>
                      </Link>
                      <Link
                        href={project.github_repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
