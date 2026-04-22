import { useState } from "react";

import { navLinks } from "../constants";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeHref =
    "https://drive.google.com/file/d/10ivPkL3PiwNDoMkNQh5q3PjJ7186JD2N/view?usp=sharing";

  const toggleMenu = () => setIsOpen((prevOpen) => !prevOpen);

  const NavItems = () => (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => setIsOpen(false)}>
            {name}
          </a>
        </li>
      ))}

    </ul>
  );

  return (
    <header className="site-header fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="c-space mx-auto py-4">
          <div className="nav-shell flex items-center justify-between px-4 py-3 sm:px-5">
          <a
            href="#"
            className="brand-text text-xl font-bold transition-opacity hover:opacity-90"
          >
            Rami Zaitoun
          </a>

          <button
            onClick={toggleMenu}
            className="menu-toggle flex p-2 text-neutral-300 hover:text-white sm:hidden"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="Toggle"
              className="size-6"
            />
          </button>

          <nav className="hidden sm:flex">
            <NavItems />
          </nav>

          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="nav-resume-btn hidden sm:inline-flex"
          >
            Download Resume
          </a>
          </div>
        </div>
      </div>

      <div className={cn("nav-sidebar", isOpen ? "max-h-screen" : "max-h-0")}>
        <nav className="p-5">
          <NavItems />
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="nav-resume-btn mt-4 inline-flex w-full justify-center"
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
};
