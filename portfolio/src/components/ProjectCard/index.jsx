import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, description, image }) {
  return (
    <div className="border-2 border-background dark:border-background bg-background text-primary rounded-lg shadow-xl overflow-hidden transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="px-2 py-4 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-primary mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
          <Link
            to={`/projects/${id}`}
            className="text-primary bg-background hover:text-background hover:bg-primary border border-primary p-2 rounded-md shadow-sm font-semibold transition-colors duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
