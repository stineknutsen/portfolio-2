import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, description, image }) {
  return (
    <div className="project-card border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-text mb-4">{description}</p>
        <Link
          to={`/projects/${id}`}
          className="text-primary hover:underline bg-mist p-2 rounded-md"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
