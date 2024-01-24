import clsx from "clsx";
import { MouseEventHandler } from "react";

export default function Hamburger({ isOpen, onClick }: { isOpen: boolean, onClick: MouseEventHandler }) {
  return (
    <button
      id="menu-btn"
      className={clsx(
        "block hamburger md:hidden focus:outline-none",
        {
            "open": isOpen
        }
      )}
      type="button"
      onClick={onClick}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
}
