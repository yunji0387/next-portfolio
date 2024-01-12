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
      <div className="bg-red-900 flex flex-col justify-center items-center w-full">
        <p>{">"} about section</p>
        <div className="bg-blue-900 w-full p-2">
          <p className="text-white">About Me</p>
          <p className="text-sm">{about.description}</p>
        </div>
        <Link href="/resume" rel="noopener noreferrer">
          <p className="text-white hover:underline">Resume</p>
        </Link>
        <div className="bg-green-900 w-full p-2">
          <p className="text-white">Education</p>
          {education.map((edu) => (
            <div key={edu.school} className="bg-blue-900 p-2">
              <p className="text-sm">{edu.school}</p>
              <p className="text-sm">{edu.degree}</p>
              <p className="text-sm">{edu.major}</p>
              <p className="text-sm">{edu.date}</p>
              <p className="text-sm">{edu.location}</p>
            </div>
          ))}
        </div>

        <div className="bg-pink-900 w-full p-2">
          <p className="text-white">Work Experience</p>
          {workExperience.map((work) => (
            <div key={work.company} className="bg-blue-900 p-2">
              <p className="text-sm">{work.company}</p>
              <p className="text-sm">{work.title}</p>
              <p className="text-sm">{work.jobType}</p>
              <p className="text-sm">{work.date}</p>
              <p className="text-sm">{work.location}</p>
              <p className="text-sm">{work.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-green-900 w-full p-2">
          <p className="text-white">Certifications</p>
          <div className="overflow-auto max-h-80">
            {certificationsList.map((cert) => (
              <div key={cert.name} className="bg-blue-900 p-2">
                <p className="text-sm">{cert.name}</p>
                <p className="text-sm">{cert.date}</p>
                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm text-white hover:underline">
                    Certification Link
                  </p>
                </Link>
                <p className="text-sm">{cert.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
