import { ContactIconList } from "../components/ContactIconList";

type FooterProps = {
  showIcons?: boolean;
  showResume?: boolean;
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

export function Footer({ showIcons = false, showResume = false }: FooterProps) {
  return (
    <footer className="flex flex-col justify-end items-center w-full mt-2">
      {showIcons && (
        <ContactIconList showResume={showResume} />
      )}
      <div className="px-1">
        <p className="text-base select-none font-light">
          &copy; {new Date().getFullYear()} Yun Ji.
        </p>
      </div>
    </footer>
  );
}
