import Image from "next/image";
import Link from "next/link";
import { contactList } from "@/public/infos/contact";

type ContactIconListProps = {
  showResume?: boolean;
};

export function ContactIconList({ showResume = false }: ContactIconListProps) {
  return (
    <div className="flex flex-row max-w-full h-full m-0">
        {showResume && (
                <Link href="/resume" rel="noopener noreferrer" className="">
                <button className="text-lg select-none rounded-full hover:border-2 border-yellow-950 dark:border-white p-2 font-black transition-all duration-200 ease-in-out">
                    CV
                </button>
            </Link>
        )}
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
    );
}