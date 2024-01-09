import Link from 'next/link';

const footerItems = [
  {
    name: "github",
    link: "https://github.com/yunji0387",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/yun-ji-how-64025220a/",
  },
  {
    name: "email",
    link: "mailto: yunji0387@gmail.com",
  },
  {
    name: "X",
    link: "https://twitter.com/",
  },
];

export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-full">
      <ul className="bg-pink-800 flex items-center justify-center">
        {footerItems.map((item) => (
          <li key={item.name} className="p-2">
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <p className="text-white hover:underline">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <p>&copy; {new Date().getFullYear()} Yun Ji How.</p>
    </footer>
  );
}
