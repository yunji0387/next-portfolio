import Link from "next/link";
import { contactList } from "@/public/infos/contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Contact() {
  return (
    <div className="custom-container">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full md:w-[80%] terminal-outer-container">
          <div className="flex flex-col justify-center p-1 md:p-5 w-full terminal-inner-container">
            <p className="text-sm md:text-base">&#10148; Contact Section</p>
            {contactList.map((contact, index) => (
              <div
                key={index}
                className="flex flex-row w-full py-1 text-sm md:text-base"
              >
                <p className="w-[4.5rem] md:w-24 font-semibold">
                  &#10148; {contact.name}
                </p>
                <p>:&nbsp;</p>
                {contact.isAvailable ? (
                  <Link
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="underline hover:font-bold transition-all duration-300 ease-in-out">
                      {contact.username}
                    </p>
                  </Link>
                ) : (
                  <p className="text-gray-500 cursor-not-allowed">
                    {contact.username}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
