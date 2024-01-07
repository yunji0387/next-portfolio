import Link from 'next/link';

const navItems = [
    {
        name: 'Projects',
        link: '/projects'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'About',
        link: '/about'
    },
];

export function Navbar() {
    return (
        <nav className="bg-cyan-800 w-full">
            <ul className="flex items-center justify-center p-2 space-x-4">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.link}>
                            <p className="p-2 text-white hover:bg-cyan-700 transition duration-300">{item.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}