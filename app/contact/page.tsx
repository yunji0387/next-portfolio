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
        <div className="w-full">
          <div className="flex flex-col justify-center p-1 md:p-5 w-full">
            {/* <p className="text-lg sm:text-2xl font-light select-none">
              Contact Section
            </p>
            <div className="flex flex-col justify-center w-full h-full styled-card p-3 my-2">
              {contactList.map((contact, index) => (
                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className={`sm:my-1 flex flex-row items-center w-full h-8 transition-all duration-200 ease-in-out ${
                    contact.isAvailable
                      ? "hover:font-black hover:bg-amber-300 dark:hover:bg-gray-600"
                      : "disabled cursor-not-allowed"
                  }`}
                >
                  <div className="w-[1.8rem] h-5 md:h-7 font-semibold hidden xs:flex items-center justify-center">
                    <Image
                      src={contact.iconPath}
                      alt={contact.name}
                      width={20}
                      height={20}
                      className="select-none"
                    />
                  </div>
                  <p className="w-20 sm:w-24 md:w-24 pl-1 font-semibold text-sm xs:text-base sm:text-lg md:text-xl">
                    {contact.name}
                  </p>
                  <p>:&nbsp;</p>
                  {contact.isAvailable ? (
                    <p className="underline pr-1 text-sm xs:text-base sm:text-lg md:text-xl">
                      {contact.username}
                    </p>
                  ) : (
                    <p className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-x;">
                      {contact.username}
                    </p>
                  )}
                </Link>
              ))}
            </div> */}

            <div className="flex flex-row max-w-full h-full">
              {contactList.map((contact, index) => (
                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className={`mx-1 flex flex-row items-center ${
                    contact.isAvailable
                      ? "rounded-full hover:border-2 border-yellow-950 dark:border-white p-2 font-black transition-all duration-200 ease-in-out"
                      : "disabled cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={contact.iconLight}
                      alt={contact.name}
                      width={30}
                      height={30}
                      className="select-none dark:hidden"
                    />
                    <Image
                      src={contact.iconDark}
                      alt={contact.name}
                      width={30}
                      height={30}
                      className="select-none hidden dark:block"
                    />
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-col justify-center w-full h-full my-2 mt-2">
              <p className="text-lg sm:text-2xl font-light select-none">
                Send Me a Message.
              </p>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
