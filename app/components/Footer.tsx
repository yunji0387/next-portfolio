import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  showIcons?: boolean;
};

const footerItems = [
  {
    name: "github",
    link: "https://github.com/yunji0387",
    iconPath: "/icons/github.png",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/yun-ji-how-64025220a/",
    iconPath: "/icons/linkedin.png",
  },
  {
    name: "email",
    link: "mailto: yunji0387@gmail.com",
    iconPath: "/icons/gmail.png",
  },
  {
    name: "X",
    link: "https://twitter.com/",
    iconPath: "/icons/twitter.png",
  },
];

export function Footer({ showIcons = false }: FooterProps) {
  return (
    <footer className="flex flex-col justify-end items-center w-full mt-2">
      {showIcons && (
        <ul className="flex flex-row items-center justify-center">
          {footerItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-center m-2 w-14"
            >
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src={item.iconPath}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="select-none hover:scale-150 transition-all duration-300 ease-in-out"
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="px-1">
        <p className="text-base xs:text-xl select-none font-light">
          &copy; {new Date().getFullYear()} Yun Ji How.
        </p>
      </div>
    </footer>
  );
}
