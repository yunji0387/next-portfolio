import Link from "next/link";
import { contactList } from "@/public/infos/contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Contact() {
  return (
    <div className="custom-container">
      <Navbar />
      <div className="bg-black flex flex-col justify-center items-center w-full">
        <p>{">"} contact section</p>
        <div className="bg-gray-900 w-full md:w-[85%] p-2 rounded-lg border-2 border-white">
          <div className="bg-gray-800 flex flex-col justify-center p-5 w-full rounded-md">
            <p>{">"} contact section</p>
            {contactList.map((contact, index) => (
              <div key={index} className="bg-pink-900 flex flex-row w-full py-1">
                <p>{">"} {contact.name} :</p>
                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-white hover:underline">Link</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
