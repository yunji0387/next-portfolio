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
                // className="w-full py-2 my-2 border-b-2 border-dashed border-black dark:border-white bg-amber-300"
                className="flex flex-col w-full p-2 my-2 bg-amber-200 dark:bg-gray-700"
              >
                <p className="pl-1 font-semibold">
                  {project.name}
                </p>
                {/* <div className="grid grid-cols-12 gap-1"> */}
                <div className="flex flex-col sm:flex-row gap-1">
                {/* <div className="col-span-12 md:col-span-4 lg:col-span-3 flex justify-center items-center w-full"> */}
                  <div className="flex justify-center items-center w-full sm:w-60 sm:min-w-60 sm:h-36">
                    {/* <div className="w-full max-w-80 m-2 terminal-outer-container border"> */}
                    <div className="flex w-full sm:max-w-60 sm:h-36">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={0}
                        height={0}
                        layout="responsive"
                        // className="select-none w-full h-auto"
                        className="select-none w-full h-auto sm:w-60 sm:h-36 p-1"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-2">
                  {/* <div className="col-span-12 md:col-span-8 lg:col-span-9 mt-2"> */}
                    <p className="text-xs sm:text-sm md:text-base text-justify px-2">
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
