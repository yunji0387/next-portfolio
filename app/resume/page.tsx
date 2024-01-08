import Link from "next/link";
import { Footer } from "../components/Footer";

export default function Resume() {
  return (
    <div className="custom-container h-[80vh]">
      <div className="bg-red-900 flex flex-col justify-center items-center w-full h-full">
        <Link href="/" rel="noopener noreferrer">
          <p className="text-white hover:underline">Back</p>
        </Link>
        <p className="text-white text-sm">{">"} Resume</p>
        <object
          data="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>Unable to display PDF file, please try again later.</p>
        </object>
      </div>
      <Footer />
    </div>
  );
}
