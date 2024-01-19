import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { about } from "@/public/infos/about";
import { education } from "@/public/infos/education";
import { workExperience } from "@/public/infos/workExperience";
import { certificationsList } from "@/public/infos/certifications";

export default function About() {
  return (
    <div className="custom-container">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full gap-2">
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <div className="w-full terminal-outer-container">
            <div className="terminal-inner-container w-full h-full">
              <p className="text-sm">{">"} About Me</p>
              <p className="text-sm text-justify sm:p-3">{about.description}</p>
              <div className="flex flex-row h-6 text-sm">
                <p className="">{">"} Check out my&nbsp;</p>
                <Link href="/resume" rel="noopener noreferrer">
                  <span className="underline hover:text-base hover:font-bold transition-all duration-300 ease-in-out">
                    resume
                  </span>
                </Link>
                <p>.</p>
              </div>
            </div>
          </div>

          <div className="w-full terminal-outer-container">
            <div className="w-full h-full terminal-inner-container">
              <p className="text-sm">{">"} Education</p>
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="w-full sm:p-3 text-sm text-center"
                >
                  <p className="font-medium">{edu.school}</p>
                  <p className="font-bold">{edu.degree}</p>
                  <p className="font-semibold">{edu.major}</p>
                  <p className="font-light">{edu.date}</p>
                  <p className="">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full terminal-outer-container">
          <div className="w-full terminal-inner-container">
            <p className="text-sm">{">"} Work Experience</p>
            {workExperience.map((work) => (
              <div key={work.company} className="w-full p-1 sm:p-3 text-sm">
                <p className="font-bold">{work.company}</p>
                <p className="font-semibold">
                  {work.title}{" "}
                  <span className="font-light">({work.jobType})</span>
                </p>
                <p className="font-light">{work.date}</p>
                <p className="">{work.location}</p>
                <p className="font-extralight">{work.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full terminal-outer-container">
          <div className="w-full terminal-inner-container">
            <p className="text-sm">{">"} Certifications</p>
            <div className="overflow-auto max-h-64">
              {certificationsList.map((cert) => (
                <Link
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row items-center p-1 sm:p-2 text-sm w-full hover:bg-amber-300 dark:hover:bg-gray-700 hover:font-bold transition-all duration-300 ease-in-out">
                    <div className="hidden sm:block">
                      <Image
                        src={cert.image}
                        alt={cert.organization}
                        width={50}
                        height={50}
                        className="select-none m-1 mr-2"
                      />
                    </div>
                    <div>
                      <p className="hidden sm:block">
                        {cert.name} - {cert.organization}
                      </p>
                      <p className="sm:hidden">{cert.name}</p>
                      <p className="font-bold sm:hidden">{cert.organization}</p>
                      <p>{cert.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
