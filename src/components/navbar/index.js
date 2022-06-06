/** Frameworks */
import Image from "next/image";
import Link from "next/link";
/** Icons */
import { GiHamburgerMenu } from 'react-icons/gi';

/** VAR */
const navItems = [
    {
        title: 'Who We Are',
    },
    {
        title: 'Our Values',
    },
    {
        title: 'The Perks',
    }
]

/** Component */
const Navbar = () => {
    return (
        <nav className="bg-white flex items-center justify-between px-7 h-[72px] fixed w-full 3xl:container mx-auto left-0 right-0 z-20">
            {/* LOGO */}
            <Link href={'/'}>
                <Image width={160} height={32} alt='logo' src='/logo.png' className="cursor-pointer" />
            </Link>
            {/* BURGERBAR ICON */}
            <button className="btn btn-link text-black p-0 block lg:hidden">
                <GiHamburgerMenu size={25} />
            </button>
            {/* NAV ITEMS */}
            <ul className="lg:flex gap-8 items-center hidden">
                {navItems.map((item, i) => (
                    <Link href={item.title} key={i}>
                        <li className="cursor-pointer">
                            {item.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;