import Image from "next/image";
import Link from "next/link";

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

export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-full mt-2">
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
      <div className="dark:border rounded-full px-1 dark:bg-green-900">
        <p className="text-sm select-none font-light">
          &copy; {new Date().getFullYear()} Yun Ji How.
        </p>
      </div>
    </footer>
  );
}
