import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `px-3 py-2 text-sm rounded-md border border-transparent transition-colors duration-200 ${
      isActive
        ? "font-bold bg-mist text-primary border-primary"
        : "text-text hover:bg-primary hover:text-background"
    }`;

  return (
    <header className="bg-background shadow sticky top-0 z-20">
      <nav className="container mx-auto flex justify-between items-center gap-4 p-4 relative">
        {/* Logo / Name */}
        <NavLink
          to="/"
          className="px-3 py-2 font-heading font-bold text-primary"
        >
          Stine Knutsen
        </NavLink>

        {/* Hamburger button (visible on mobile) */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Nav Links */}
        <div
          className={`fixed md:static top-[72px] right-0 h-[calc(100vh-72px)] md:h-auto w-full md:w-auto bg-mist md:bg-background shadow-sm md:shadow-none
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
        </div>
      </nav>
    </header>
  );
}
