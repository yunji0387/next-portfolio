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
          <div className="flex flex-col w-full sm:w-[50%]">
            <p className="font-black text-lg sm:text-2xl select-none">
              &#128020; About Me
            </p>
            <div className="styled-card w-full h-full my-2 p-5">
              <p className="text-sm md:text-base lg:text-lg text-justify sm:p-3">
                {about.description}
              </p>
              <div className="flex flex-row h-6 text-sm md:text-base lg:text-lg">
                <p>&#10148; Check out my&nbsp;</p>
                <Link href="/resume" rel="noopener noreferrer">
                  <span className="underline hover:text-lg lg:hover:text-xl hover:font-bold transition-all duration-300 ease-in-out">
                    resume
                  </span>
                </Link>
                <p>.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-[50%]">
            <p className="font-black text-lg sm:text-2xl select-none">
              &#127891; Education
            </p>
            <div className="styled-card w-full h-full my-2 p-5">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="w-full sm:p-3 text-sm md:text-base lg:text-lg text-center"
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

        <div className="w-full">
          <p className="font-black text-lg sm:text-2xl select-none">
            &#10024; Work Experience
          </p>
          {workExperience.map((work) => (
            <div
              key={work.company}
              className="styled-card w-full my-2 p-5 text-sm md:text-base lg:text-lg"
            >
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

        <div className="w-full">
          <p className="font-black text-lg sm:text-2xl select-none">
            &#129495; Certifications
          </p>
          <div className="styled-card my-2 p-3 overflow-auto max-h-64">
            {certificationsList.map((cert) => (
              <Link
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-row w-full items-center p-1 sm:p-2 text-sm md:text-base hover:bg-amber-50 dark:hover:bg-gray-700 bg-opacity-90 font-bold hover:font-black transition-all duration-300 ease-in-out">
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
                    <p className="font-normal sm:hidden">{cert.organization}</p>
                    <p className="font-light">{cert.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
