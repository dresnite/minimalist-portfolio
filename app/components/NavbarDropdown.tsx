import clsx from "clsx";
import MobileNavbarLink from "./MobileNavbarLink";

export default function NavbarDropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={clsx(
        "absolute p-6 rounded-lg bg-black left-6 right-6 top-20 text-white",
        {
          "flex flex-col items-center space-y-8 text-xl uppercase group md:hidden": isOpen,
          "hidden": !isOpen,
        }
      )}
    >
      <MobileNavbarLink title="Home" href="#" />
      <MobileNavbarLink title="About me" href="#" />
      <MobileNavbarLink title="Projects" href="#" />
      <MobileNavbarLink title="Blog" href="#" />
    </div>
  );
}
