import Link from "next/link";
import { about } from "@/public/infos/about";
import { skillsIconList } from "@/public/infos/skillsIconList";
import { ImageBanner } from "../components/ImageBanner";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function MainCard() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[70vh]">
      <div className="w-[80%]">
        <ImageBanner imageList={skillsIconList} speed={8000} />
      </div>
      <div className="w-[80%] terminal-outer-container">
        <div className="w-full terminal-inner-container">
          <p>{">"} Hi, I&apos;m Yun Ji How.</p>
          <p>
            {">"} {about.title}.
          </p>
          <p>{">"} Looking for new opportunities.</p>
          <div className="flex flex-row h-6">
            <p className="h-6">{">"} Check out my&nbsp;</p>
            <Link href="/resume" rel="noopener noreferrer">
              <span className="underline hover:text-lg hover:font-bold transition-all duration-300 ease-in-out">
                resume
              </span>
            </Link>
            <p>.</p>
          </div>
        </div>
      </div>
      <div className="w-[85%]"></div>
    </div>
  );
}
