import Link from "next/link";
import { about } from "@/public/infos/about";

export function MainCard() {
  return (
    <div className="bg-red-900 flex flex-col justify-center items-center w-full h-[60vh]">
      <div className="bg-pink-800 w-[80%]"></div>
      <div className="bg-blue-800 w-[80%]">
        <p>{">"} Hi, I&apos;m Yun Ji How.</p>
        <p>
          {">"} {about.title}.
        </p>
        <p>{">"} Looking for new opportunities.</p>
        <div className="flex flex-row h-6">
          <p className="h-6">{">"} Check out my&nbsp;</p>
          <Link href="/resume" rel="noopener noreferrer">
            <span className="text-white underline hover:text-lg">resume</span>
          </Link>
          <p>.</p>
        </div>
      </div>
    </div>
  );
}
