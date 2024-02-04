"use client";

import { useState } from "react";
import DesktopNavbarLink from "./DesktopNavbarLink";
import Hamburger from "./Hamburger";
import NavbarDropdown from "./NavbarDropdown";
import Logo from "./Logo";

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    function toggleDropdown() {
        setDropdownOpen(!isDropdownOpen);
    }
    
    function closeDropdown() {
        setDropdownOpen(false);
    }

    return (
        <nav className="container mx-auto p-6" id="navbar">
            <div className="flex flex-row justify-between items-center z-0 text-white">
                <Logo />

                <div className="hidden md:flex md:space-x-8">
                    <DesktopNavbarLink title="Home" href="#navbar"/>
                    <DesktopNavbarLink title="About me" href="#about-me"/>
                    <DesktopNavbarLink title="Projects" href="#projects"/>
                    <DesktopNavbarLink title="Blog" href="https://blog.dresnite.com" targetBlank />
                </div>

                <div className="hidden md:flex">
                    <DesktopNavbarLink title="Contact me" href="https://form.typeform.com/to/oEwAVGcN" targetBlank />
                </div>

                <Hamburger isOpen={isDropdownOpen} onClick={toggleDropdown} />
            </div>

            <NavbarDropdown isOpen={isDropdownOpen} closeDropdown={closeDropdown} />
        </nav>
    );
}