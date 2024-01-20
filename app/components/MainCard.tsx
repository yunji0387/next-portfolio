import Link from "next/link";
import { about } from "@/public/infos/about";
import { skillsIconList } from "@/public/infos/skillsIconList";
import { ImageBanner } from "../components/ImageBanner";

export function MainCard() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="w-[85%] h-full">
        <div className="w-full h-full terminal-outer-container bg-opacity-80">
          <div className="w-full h-full terminal-inner-container text-sm sm:text-base bg-opacity-80">
            <p>
              {">"} Hi, I&apos;m {about.name}.
            </p>
            <p>
              {">"} {about.title}
            </p>
            <p>
              {">"} {about.status}
            </p>
            <div className="flex flex-row">
              <p>
                {">"} Check out my&nbsp;
                <Link href="/resume" rel="noopener noreferrer">
                  <span className="underline hover:text-lg hover:font-bold transition-all duration-300 ease-in-out">
                    resume
                  </span>
                </Link>
                .
              </p>
            </div>
            <div className="w-full pt-3">
              <ImageBanner imageList={skillsIconList} speed={8000} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%]"></div>
    </div>
  );
}
