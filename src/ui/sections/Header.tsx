"use client";
import Link from "next/link";
import Button from "../components/Button";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/utils/NavLinks";
import { useState } from "react";
import { TfiAlignRight } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
    let theme: string;
    if (typeof window !== "undefined") {
        const theme = localStorage.getItem("theme") || "light";
        if (!theme) {
            localStorage.setItem("theme", "light");
        }
    }

    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);


    const pathname = usePathname();
    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }
    return (
        <div className="fixed top-0 w-full backdrop-blur-md">
            <div className="p-3">
                {/* Only for medium and large devices */}
                <header className=" hidden sm:flex text-lg justify-around rounded-lg p-3">


                    <div className="hidden lg:flex space-x-28">
                        <Link href="/" className="p-2 lg:text-lg hover:text-blue-500">Newsletter App</Link>
                    </div>
                    {/* Nav Links */}
                    <div className="hidden sm:flex space-x-4">
                        <div className="flex space-x-7 p-2 font-light">
                            {NavLinks.map((link, index) => {
                                if (link.type === "link")
                                    if (link.title === "Account" || link.title === "Login") return null;
                                    else return <Link href={link.path} key={index} className={`hover:text-indigo-500 ${pathname == link.path ? "text-indigo-500 font-normal" : ""}`}>{link.title}</Link>
                            })}
                        </div>
                    </div>

                    <div className="hidden sm:flex space-x-4">
                        <ThemeSwitcher />
                        {NavLinks.map((link, index) => {
                            if (link.type == "button")
                                return <Button key={index} onClick={link.onclick} variant="login">{link.title}</Button>


                        })}

                        {NavLinks.map((link, index) => {
                            if (link.title === "Account" && link.logged) {
                                return (
                                    <div key={index} className="relative pb-1" onMouseEnter={toggleSubMenu}
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
                                            <div className="absolute top-full left-0 w-40 border border-gray-100 dark:border-gray-800 rounded-lg shadow-lg backdrop-blur-sm">
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

                {/* Only for small devices */}
                <header className="flex sm:hidden" role="dialog" aria-modal="true">
                    <div className="flex justify-between items-center w-full p-3">
                        <Link href="/" className="p-2 text-2xl   hover:text-blue-500">Newsletter App</Link>
                        <div className="flex gap-3">
                            <ThemeSwitcher />
                            {!showMobileMenu ? <TfiAlignRight className="text-4xl" onClick={toggleMobileMenu} /> : <AiOutlineClose className="text-4xl" onClick={toggleMobileMenu} />}
                        </div>
                        {showMobileMenu && (
                            <div className="fixed inset-y-20 right-0 z-50 w-full h-full bg-opacity-10 backdrop-blur-md overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 rounded-md">
                                <div className="grid text-xl text-center space-y-4 mt-16">
                                    {/* Dynamically showing links from NavLinks */}

                                    {NavLinks.map((link, index) => {
                                        if (link.type === "link")
                                            if (link.title === "Account" || link.title === "Login") return null;
                                            else return <Link href={link.path} key={index} onClick={() => { toggleMobileMenu() }} className={`hover:text-blue-400 ${pathname == link.path ? "text-blue-400" : ""}`}>{link.title}</Link>
                                    })}

                                    {NavLinks.map((link, index) => {
                                        if (link.type == "button")
                                            return <Button key={index} onClick={link.onclick} variant="login">{link.title}</Button>


                                    })}
                                </div>
                            </div>)}
                    </div>

                </header>

            </div>
            <hr />
        </div>
    );
}
