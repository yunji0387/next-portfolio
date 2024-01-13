import Link from "next/link";
import { about } from "@/public/infos/about";

export function MainCard() {
  return (
    <div className="bg-black flex flex-col justify-center items-center w-full h-[70vh]">
      <div className="bg-gray-900 w-[80%] p-2 rounded-lg border-2 border-white">
        <div className="bg-gray-800 w-full p-5 rounded-md">
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
    </div>
  );
}
