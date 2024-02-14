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
          <div className="absolute inset-0 z-0 md:static w-full md:w-56 md:h-56 flex items-center justify-center">
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
            <p className="font-light text-lg md:text-xl select-none">
              Hi, I am{" "}
              <span className="text-xl md:text-2xl font-medium">
                {about.firstname} {about.lastname}
              </span>
              .
            </p>

            <p className="font-black text-2xl md:text-3xl select-none">
              {about.title}
            </p>

            <p className="text-justify md:text-lg">{about.description}</p>

            <Link href="/resume" rel="noopener noreferrer" className="rounded-full w-fit">
              <button className="select-none rounded-full hover:border-2 border-yellow-950 dark:border-white p-3 font-black transition-all duration-200 ease-in-out">
                CV
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-row w-full">
          <div className="w-full lg:w-[900px] lg:min-w-[900px] flex flex-col">
            <div className="w-full">
              <p className="font-light text-lg sm:text-2xl select-none">
                Work Experience
              </p>
              <div className="flex flex-col gap-5">
                {workExperience.map((work) => (
                  <div
                    key={work.company}
                    className="w-full text-sm md:text-base lg:text-lg"
                  >
                    <p className="font-bold">{work.company}</p>
                    <p className="font-medium">{work.title}</p>
                    <p className="font-light">{work.date}</p>
                    <p className="">{work.location}</p>
                    <p className="font-extralight">{work.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2 w-full">
              <div className="my-2 w-full lg:w-[350px] lg:min-w-[350px]">
                <p className="font-light text-lg sm:text-2xl select-none">
                  Education
                </p>
                <div className="flex items-center styled-card w-full my-2 lg:h-60">
                  {education.map((edu) => (
                    <div
                      key={edu.school}
                      className="w-full sm:p-3 text-sm md:text-base lg:text-lg text-center italic"
                    >
                      <p className="font-medium">{edu.school}</p>
                      <p className="font-normal">{edu.degree}</p>
                      <p className="font-semibold">{edu.major}</p>
                      <p className="font-thin">{edu.date}</p>
                      <p className="font-light">{edu.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-2 w-full lg:w-[500px] lg:min-w-[500px]">
                <p className="font-light text-lg sm:text-2xl select-none">
                  Certifications
                </p>
                <div className="styled-card my-2 p-3 overflow-auto h-60 max-h-60">
                  {certificationsList.map((cert) => (
                    <Link
                      key={cert.name}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex flex-row gap-2 w-full items-center p-1 sm:p-2 text-sm md:text-base hover:bg-amber-50 dark:hover:bg-gray-700 bg-opacity-90 transition-all duration-300 ease-in-out">
                        <div>
                          <p className="">{cert.name}</p>
                          <p className="font-normal">{cert.organization}</p>
                          <p className="font-light">{cert.date}</p>
                        </div>
                        {/* <div className="hidden xl:block">
                      <Image
                        src={cert.image}
                        alt={cert.organization}
                        width={50}
                        height={50}
                        className="select-none m-1 mr-2"
                      />
                    </div>
                    <div>
                      <p className="hidden xl:block">
                        {cert.name} - {cert.organization}
                      </p>
                      <p className="xl:hidden">{cert.name}</p>
                      <p className="font-normal xl:hidden">
                        {cert.organization}
                      </p>
                      <p className="font-light">{cert.date}</p>
                    </div> */}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="hidden lg:flex w-full justify-center items-center opacity-50 relative">
            <div className="absolute inset-0 z-[-1] lg:static w-full flex items-center justify-center"> */}
            <div className="hidden lg:flex w-full justify-center items-center opacity-50 relative">
            <div className="relative lg:static w-full h-full flex items-center justify-center">
              <Image
                src="/images/footballLight.png"
                alt="footballLight"
                layout="fill"
                objectFit="cover"
                className="select-none opacity-10 w-[500px] lg:opacity-100 dark:hidden" // Adjust opacity as needed
              />
              <Image
                src="/images/footballDark.png"
                alt="footballDark"
                width={500}
                height={500}
                className="select-none opacity-10 lg:opacity-100 hidden dark:block" // Adjust opacity as needed
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
