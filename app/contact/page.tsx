import Link from "next/link";
import { contactList } from "@/public/infos/contact";
import { Footer } from "../components/Footer";

export default function Contact() {
  return (
    <div className="custom-container">
      <div className="bg-red-900 flex flex-col justify-center items-center w-full">
        <Link href="/" rel="noopener noreferrer">
          <p className="text-white hover:underline">Back</p>
        </Link>
        <p>{">"} contact section</p>
        <div className="bg-blue-900 flex flex-col justify-center items-center w-full">
          {contactList.map((contact, index) => (
            <div key={index} className="flex flex-row w-full p-2">
              <p>{contact.name} :</p>
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
      <Footer />
    </div>
  );
}
