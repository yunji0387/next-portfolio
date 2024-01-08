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
        <nav className="w-full">
            <ul className="bg-cyan-800 flex items-center justify-center p-2 space-x-4 h-11">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.link}>
                            <p className="p-2 text-white hover:text-lg transition-all duration-300 ease-in-out">{item.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}