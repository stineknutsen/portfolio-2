import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) => {
    const base =
      "px-3 py-2 text-sm rounded-md border border-transparent font-semibold transition-colors duration-300";

    const colorsMobile = isActive
      ? "bg-primary text-background dark:bg-background dark:text-primary"
      : "bg-background text-primary dark:bg-primary dark:text-background hover:bg-primary hover:text-background dark:hover:bg-background dark:hover:text-primary";

    const colorsMd = isActive
      ? "md:bg-primary md:text-background md:dark:bg-primary md:dark:text-background"
      : "md:bg-background md:text-primary md:hover:bg-primary md:hover:text-background md:dark:bg-background md:dark:text-primary md:dark:hover:bg-primary md:dark:hover:text-background";

    return `${base} ${colorsMobile} ${colorsMd}`;
  };

  return (
    <header className="bg-background sticky top-0 z-20 text-primary shadow-lg">
      <nav className="container mx-auto flex justify-between items-center gap-4 p-4 relative">
        <NavLink to="/" className="px-3 py-2  font-bold">
          <img src={logo} alt="Logo" className="h-10" />{" "}
        </NavLink>

        {/* Hamburger button */}
        <div className="md:hidden flex justify-center items-center">
          <button
            className="md:hidden text-2xl "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`fixed md:static top-[88px] right-0 h-[calc(100vh-88px)] md:h-auto w-full md:w-auto bg-background dark:bg-primary md:dark:bg-background shadow-sm md:shadow-none
          transform transition-transform duration-500 ease-in-out
          flex flex-col md:flex-row justify-center items-center md:justify-end gap-6 md:gap-4
          ${menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}
        >
          <NavLink
            to="/"
            className={linkStyle}
            end
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
