import Image from "next/image";
import Link from "next/link";
import { contactList } from "@/public/infos/contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactUs } from "../components/ContactUs";

export default function Contact() {
  const emailContact = contactList.find(contact => contact.name === "Email");

  return (
    <div className="custom-container">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full min-w-[280px]">
        <div className="w-full">
          <div className="flex flex-col justify-center p-1 md:p-5 w-full">
            <div className="p-2 flex flex-row gap-2 items-end">
              <p className="text-3xl">Email</p>
              <Link href={emailContact ? emailContact.link : "#"} className="underline hover:font-bold hover:text-blue-500 dark:hover:text-blue-300 transition-all duration-100 ease-in-out">yunji0387@gmail.com</Link>
            </div>

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
