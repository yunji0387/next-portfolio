import Link from "next/link";
import { contactList } from "@/public/infos/contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Contact() {
  return (
    <div className="custom-container">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="bg-gray-900 w-full md:w-[80%] p-2 rounded-lg border-2 border-white">
          <div className="bg-gray-800 flex flex-col justify-center p-1 md:p-5 w-full rounded-md">
            <p className="text-sm md:text-base">{">"} Contact Section</p>
            {contactList.map((contact, index) => (
              <div key={index} className="flex flex-row w-full py-1 text-sm md:text-base">
                <p className="w-[4.5rem] md:w-24 font-semibold">
                  {">"} {contact.name}
                </p>
                <p>:&nbsp;</p>
                {contact.isAvailable ? (
                  <Link
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-white underline hover:font-bold transition-all duration-300 ease-in-out">
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
