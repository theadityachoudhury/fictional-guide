"use client";
import Link from "next/link";
import Button from "../components/Button";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/utils/NavLinks";
import { useState } from "react";

export default function Header() {
    const theme = localStorage.getItem("theme");
    if (!theme) {
        localStorage.setItem("theme", "light");
    }
    const [showSubMenu, setShowSubMenu] = useState(false);

    const pathname = usePathname();
    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };
    return (
        <header className="flex text-lg justify-around rounded-lg p-3 m-5 mt-2">
            <div className="hidden lg:flex">
                <Link href="/" className="p-2 lg:text-lg hover:text-blue-500">Newsletter App</Link>
            </div>

            <div className="flex space-x-4">
                <div className="flex space-x-4 p-2">
                    {NavLinks.map((link, index) => {
                        if (link.type === "link")
                            if (link.title === "Account" || link.title === "Login") return null;
                            else return <Link href={link.path} key={index} className={`hover:text-blue-400 ${pathname == link.path ? "text-blue-400" : ""}`}>{link.title}</Link>
                    })}
                    {/* <Link href="/" className={`hover:text-blue-400` && pathname=="/"?"text-blue-400":""}>Home</Link>
                    <Link href="/about" className={`hover:text-blue-400` && pathname=="/about"?"text-blue-400":""}>About</Link>
                    <Link href="/contact" className={`hover:text-blue-400` && pathname=="/contact"?"text-blue-400":""}>Contact</Link> */}


                </div>
                <ThemeSwitcher />
                {/* <Button variant="primary">Sign In</Button> */}
                {NavLinks.map((link, index) => {
                    if (link.type == "button")
                        return <Button key={index} onClick={link.onclick} variant="login">{link.title}</Button>


                })}

                {NavLinks.map((link, index) => {
                    if (link.title === "Account" && !link.logged) {
                        return (
                            <div key={index} className="relative pb-1   " onMouseEnter={toggleSubMenu}
                                onMouseLeave={toggleSubMenu}>
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        window.location.href = link.path;
                                    }}
                                >
                                    {link.title}
                                </Button>
                                {showSubMenu && (
                                    <div className="absolute top-full left-0 w-40 border border-gray-300 rounded-lg shadow-lg">
                                        {link?.sub?.map((subLink, subIndex) => {
                                            if (subLink.title === "Logout") {
                                                return <Link
                                                    key={subIndex}
                                                    href={subLink.path}
                                                    className="block px-2 py-1 bg-red-950 hover:bg-red-700 text-red-100 rounded-md mx-2 mb-2"
                                                >
                                                    {subLink.title}
                                                </Link>
                                            } else {
                                                return <Link href={subLink.path} key={subIndex} className="">
                                                    <p className="block px-4 py-2">{subLink.title}</p>
                                                </Link>
                                            }

                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    }
                })}
            </div>
        </header>
    );
}
