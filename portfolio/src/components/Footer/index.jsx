import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="py-12 flex flex-col gap-4 items-center text-center text-primary">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-6 justify-center">
        <Link
          to="/about"
          className="relative inline-flex w-fit mx-auto after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-accent after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          Get to know me better
        </Link>
        <Link
          to="/contact"
          className="relative inline-flex w-fit mx-auto after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-accent after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          Get in touch
        </Link>
      </div>
      <p>&copy; Stine Knutsen 2025</p>
    </div>
  );
}
