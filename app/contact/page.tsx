import Image from "next/image";
import Link from "next/link";
import { contactList } from "@/public/infos/contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactUs } from "../components/ContactUs";
import { ContactIconList } from "../components/ContactIconList";

export default function Contact() {
  const emailContact = contactList.find(contact => contact.name === "Email");

  return (
    <div className="custom-container">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full min-w-[280px]">
        <div className="w-full">
          <div className="flex flex-col justify-center p-1 md:p-5 w-full">
            <div className="p-2 flex flex-row gap-2 items-end">
              <p className="font-light text-3xl">Email</p>
              <Link href={emailContact ? emailContact.link : "#"} className="underline hover:font-bold hover:text-blue-500 dark:hover:text-blue-300 transition-all duration-100 ease-in-out">yunji0387@gmail.com</Link>
            </div>

            <div className="m-2">
              <ContactIconList />
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
