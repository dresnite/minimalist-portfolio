import clsx from "clsx";
import MobileNavbarLink from "./MobileNavbarLink";
import { MouseEventHandler } from "react";

export default function NavbarDropdown({ isOpen, closeDropdown }: { isOpen: boolean, closeDropdown: MouseEventHandler }) {
  return (
    <div
      className={clsx(
        "absolute p-6 rounded-lg bg-white left-6 right-6 top-20 text-black",
        {
          "flex flex-col items-center space-y-8 text-xl uppercase group md:hidden": isOpen,
          "hidden": !isOpen,
        }
      )}
    >
      <MobileNavbarLink title="Home" href="#navbar" closeDropdown={closeDropdown} />
      <MobileNavbarLink title="About me" href="#about-me" closeDropdown={closeDropdown} />
      <MobileNavbarLink title="Projects" href="#projects" closeDropdown={closeDropdown} />
      <MobileNavbarLink title="Blog" href="https://blog.dresnite.com" closeDropdown={closeDropdown} targetBlank />
      <MobileNavbarLink title="Contact me" href="https://form.typeform.com/to/oEwAVGcN" closeDropdown={closeDropdown} targetBlank/>
    </div>
  );
}
