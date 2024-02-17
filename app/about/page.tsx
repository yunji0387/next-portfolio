import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { about } from "@/public/infos/about";
import { education } from "@/public/infos/education";
import { workExperience } from "@/public/infos/workExperience";
import { certificationsList } from "@/public/infos/certifications";
import { ContactIconList } from "../components/ContactIconList";

export default function About() {
  return (
    <div className="custom-container">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full gap-2">
        <div className="flex flex-col sm:flex-row gap-2 w-full relative">
          <div className="absolute inset-0 z-0 md:static w-full md:w-56 md:h-56 flex items-center justify-center grayscale">
            <Image
              src="/images/developmentLight.png"
              alt="developmentImgLight"
              width={200}
              height={200}
              className="select-none min-w-[200px] opacity-20 md:opacity-100 dark:hidden"
            />
            <Image
              src="/images/developmentDark.png"
              alt="developmentImgDark"
              width={200}
              height={200}
              className="select-none min-w-[200px] opacity-20 md:opacity-100 hidden dark:block"
            />
          </div>

          <div className="flex flex-col w-full p-5 z-10">
            <p className="font-light text-lg md:text-xl lg:text-2xl select-none">
              Hi, I am{" "}
              <span className="text-xl md:text-2xl lg:text-4xl font-medium">
                {about.firstname} {about.lastname}
              </span>
              .
            </p>

            <p className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl select-none w-fit relative underline underline-full sm:no-underline decoration-2">
              {about.title}
              <span className="hidden sm:block absolute z-[-1] bottom-1 left-0 bg-amber-200 dark:bg-indigo-800 h-2 w-full"></span>
            </p>

            <p className="select-none text-justify text-sm sm:text-base md:text-lg lg:text-xl">
              {about.description}
            </p>

            <div className="m-2">
              <ContactIconList showResume={true} />
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full items-center justify-center xl:justify-between relative">
          <div className="w-full xl:min-w-[915px] flex flex-col">
            <div className="w-full">
              <p className="font-light text-2xl sm:text-4xl select-none">
                Work Experience
              </p>
              <div className="flex flex-col gap-5">
                {workExperience.map((work) => (
                  <div
                    key={work.company}
                    className="w-full p-1 text-sm sm:text-base md:text-base lg:text-lg"
                  >
                    <p className="font-bold">{work.company}</p>
                    <p className="font-medium">{work.title}</p>
                    <p className="font-light">{work.date}</p>
                    <p className="font-normal">{work.location}</p>
                    <p className="font-light">{work.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-col xl:flex-row gap-2 w-full">
              <div className="my-2 w-full xl:w-[350px] xl:min-w-[350px]">
                <p className="font-light text-2xl sm:text-4xl select-none">
                  Education
                </p>
                <div className="flex items-center justify-center md:justify-start xl:justify-center w-full my-2 xl:h-60">
                  {education.map((edu) => (
                    <div
                      key={edu.school}
                      className="p-2 sm:p-3 text-sm sm:text-base lg:text-lg text-center italic"
                    >
                      <p className="font-medium">{edu.school}</p>
                      <p className="font-normal">{edu.degree}</p>
                      <p className="font-semibold">{edu.major}</p>
                      <p className="font-light">{edu.date}</p>
                      <p className="font-medium">{edu.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-2 w-full xl:w-[500px] xl:min-w-[500px]">
                <p className="font-light text-2xl sm:text-4xl select-none">
                  Certifications
                </p>
                <div className="my-2 overflow-auto h-60 max-h-60">
                  {certificationsList.map((cert) => (
                    <Link
                      key={cert.name}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex flex-row gap-2 w-full items-center p-1 sm:p-2 text-sm md:text-base hover:bg-amber-200 dark:hover:bg-gray-700 hover:bg-opacity-30 dark:hover:bg-opacity-30 transition-all duration-300 ease-in-out">
                        <div>
                          <p className="">{cert.name}</p>
                          <p className="font-normal">{cert.organization}</p>
                          <p className="font-light">{cert.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 z-[-1] xl:static w-full xl:w-fit flex items-center justify-center xl:items-end xl:justify-end">
            <Image
              src="/images/footballLight.png"
              alt="footballLight"
              width={500}
              height={500}
              className="select-none opacity-20 w-[500px] max-w-[500px] xl:opacity-80 dark:hidden"
            />
            <Image
              src="/images/footballDark.png"
              alt="footballDark"
              width={500}
              height={500}
              className="select-none opacity-20 w-[500px] max-w-[500px] xl:opacity-80 hidden dark:block"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
