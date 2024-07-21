"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="custom-container">
      <Navbar />
      <div className="flex flex-col w-full items-center justify-center">
        <h2 className="my-3 text-8xl font-medium">
            404
        </h2>
        <h2 className="my-3 text-3xl">
          OOPS! Page Not Found
        </h2>

        <p className="py-5">
          Here is a few link that may be helpful:
        </p>
        <button
          onClick={() => router.back()}
          className="my-3 border-b hover:border-b-2 border-yellow-950 dark:border-white text-xl font-light hover:font-medium transition-all duration-100"
        >
          Go Back
        </button>
        <Link
          href="/"
          className="my-3 border-b hover:border-b-2 border-yellow-950 dark:border-white text-xl font-light hover:font-medium transition-all duration-100"
        >
          Home
        </Link>
      </div>
      <Footer showIcons={true} />
    </div>
  );
}
