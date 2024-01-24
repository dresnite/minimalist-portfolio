"use client";

import { useState } from "react";
import DesktopNavbarLink from "./DesktopNavbarLink";
import Hamburger from "./Hamburger";
import NavbarDropdown from "./NavbarDropdown";

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    function toggleDropdown() {
        setDropdownOpen(!isDropdownOpen);
    }

    return (
        <nav className="container mx-auto p-6">
            <div className="flex flex-row justify-between items-center z-0">
                <div className="font-black text-2xl">
                    <span>dresnite</span>
                </div>

                <div className="hidden md:flex md:space-x-8">
                    <DesktopNavbarLink title="Home" href="#"/>
                    <DesktopNavbarLink title="About me" href="#"/>
                    <DesktopNavbarLink title="Projects" href="#"/>
                    <DesktopNavbarLink title="Blog" href="#"/>
                </div>

                <div className="hidden md:flex">
                    <DesktopNavbarLink title="Contact me" href="#"/>
                </div>

                <Hamburger isOpen={isDropdownOpen} onClick={toggleDropdown} />
            </div>

            <NavbarDropdown isOpen={isDropdownOpen} />
        </nav>
    );
}