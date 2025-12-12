import { NavLink } from "react-router-dom";

export default function Header() {
  const linkStyle = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "border border-cerulean bg-cerulean text-dust-grey"
        : "text-dust-grey hover:bg-cerulean"
    }`;

  return (
    <header className="bg-dust-grey shadow sticky top-0">
      <nav className="container mx-auto flex justify-between gap-4 p-4">
        <NavLink to="/" className={linkStyle} end>
          Portfolio
        </NavLink>
        <div className="flex gap-4">
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
