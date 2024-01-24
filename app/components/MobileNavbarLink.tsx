import { MouseEventHandler } from "react";

export default function MobileNavbarLink({ title, href, closeDropdown, targetBlank = false }: { title: string, href: string, closeDropdown: MouseEventHandler, targetBlank?: boolean }) {
    return (
        <a href={href} className="hover:font-bold" onClick={closeDropdown} target={(targetBlank) ? "_blank" : "_self"}>{title}</a>
    );
}