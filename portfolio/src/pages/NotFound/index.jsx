import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className=" bg-background text-primary dark:bg-primary dark:text-background flex flex-col items-center justify-center h-[80vh] text-center">
        <h2 className="text-2xl mb-4">
          Oops! Looks like this page doesn't exist.
        </h2>
        <Link
          to="/"
          className="underline text-primary/90 hover:text-accent dark:text-accent dark:hover:text-secondary transition-colors duration-300"
        >
          Back to Portfolio
        </Link>
      </div>
    </>
  );
}
