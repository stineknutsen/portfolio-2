import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h2 className="text-2xl font-heading mb-4">
          Oops! Looks like this page doesn't exist.
        </h2>
        <Link to="/" className="text-primary hover:underline font-body">
          Back to Portfolio
        </Link>
      </div>
    </>
  );
}
