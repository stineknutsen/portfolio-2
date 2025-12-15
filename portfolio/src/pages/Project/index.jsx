import { useParams, Link } from "react-router-dom";
import { projects } from "../../projectsData.js";
import Button from "../../components/Button/";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h2 className="text-2xl font-heading mb-4">
          Project not found. Find existing projects on the Portfolio page
        </h2>
        <Link to="/" className="text-primary hover:underline font-body">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 font-body text-gray-700">
      {/* Back button */}
      <Link
        to="/"
        className="inline-block mb-6 text-primary hover:underline text-sm"
      >
        Back to Portfolio
      </Link>

      {/* Project Title */}
      <h1 className="font-heading text-4xl mb-4 text-gray-900">
        {project.title}
      </h1>

      {/* Featured Image */}
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl shadow-lg mb-8 w-full max-h-100 object-cover"
      />

      {/* Meta Info (optional) */}
      {project.date && (
        <p className="text-primary italic mb-8">Published on {project.date}</p>
      )}

      {/* Article Content */}
      <div className="leading-relaxed space-y-6 text-lg">
        <p>{project.description}</p>

        {/* Example extra sections */}
        {project.content &&
          project.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      </div>

      {/* Links / CTA */}
      {project.live && (
        <div className="mt-12">
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <Button> View Live Project</Button>
          </a>
        </div>
      )}

      {project.github && (
        <div className="mt-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button> View Live Project</Button>
          </a>
        </div>
      )}
    </article>
  );
}
