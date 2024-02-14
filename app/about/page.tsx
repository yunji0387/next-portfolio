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
        <div className="flex flex-col sm:flex-row gap-2 w-full relative">
          <div className="absolute inset-0 z-0 md:static w-full md:w-56 md:h-56 bg-opacity-20 flex items-center justify-center">
            <Image
              src="/images/developmentImg.png"
              alt="developmentImg"
              width={200}
              height={200}
              className="select-none min-w-[200px] opacity-10 md:opacity-100 dark:hidden" // Adjust opacity as needed
            />
            <Image
              src="/images/developmentImgDark.png"
              alt="developmentImgDark"
              width={200}
              height={200}
              className="select-none min-w-[200px] opacity-10 md:opacity-100 hidden dark:block" // Adjust opacity as needed
            />
          </div>

          <div className="flex flex-col w-full p-5 z-10">
            <p className="font-bold text-xl md:text-2xl select-none">
              Hi, I am {about.firstname} {about.lastname}
            </p>

            <p className="font-black text-2xl md:text-3xl select-none">{about.title}</p>

            <p className="text-justify md:text-lg font-medium">{about.description}</p>

            <Link href="/resume" rel="noopener noreferrer" className="mt-2">
              <button className="rounded-full bg-amber-300 dark:bg-green-900 border-2 border-yellow-950 dark:border-white p-1 px-3 bg-opacity-100 hover:bg-amber-500 dark:hover:bg-green-700 font-light transition-all duration-100 ease-in-out">
                CV
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <p className="font-light text-lg sm:text-2xl select-none">
            Education
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

        <div className="w-full">
          <p className="font-light text-lg sm:text-2xl select-none">
            Work Experience
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
          <p className="font-light text-lg sm:text-2xl select-none">
            Certifications
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
