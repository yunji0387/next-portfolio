import Image from "next/image";
import Link from "next/link";
import { contactList } from "@/public/infos/contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactUs } from "../components/ContactUs";

export default function Contact() {
  return (
    <div className="custom-container">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full min-w-[280px]">
        <div className="w-full md:w-[80%] terminal-outer-container">
          <div className="flex flex-col justify-center p-1 md:p-5 w-full terminal-inner-container">
            <div className="flex flex-col justify-center w-full h-full p-1 bg-amber-50 dark:bg-gray-700 dark:bg-opacity-60">
              <p className="text-base font-black">&#128234; Contact Section</p>
              {contactList.map((contact, index) => (
                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className={`flex flex-row items-center w-full h-6 md:h-8 text-sm md:text-base rounded-lg transition-all duration-200 ease-in-out ${
                    contact.isAvailable
                      ? "hover:font-black hover:bg-amber-300 dark:hover:bg-gray-600"
                      : "disabled cursor-not-allowed"
                  }`}
                >
                  <div className="w-[1.8rem] h-5 md:h-7 font-semibold hidden sm:flex items-center justify-center">
                    <Image
                      src={contact.iconPath}
                      alt={contact.name}
                      width={20}
                      height={20}
                      className="select-none"
                    />
                  </div>
                  <p className="w-[5rem] pl-1 md:w-24 font-semibold">
                    {contact.name}
                  </p>
                  <p>:&nbsp;</p>
                  {contact.isAvailable ? (
                    <p className="underline pr-1 text-xs sm:text-sm md:text-base">
                      {contact.username}
                    </p>
                  ) : (
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                      {contact.username}
                    </p>
                  )}
                </Link>
              ))}
            </div>

            <div className="flex flex-col justify-center w-full h-full my-2">
            <p className="text-base font-black">&#128231; Contact Me</p>
            <ContactUs />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
