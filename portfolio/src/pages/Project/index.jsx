import { useParams, Link } from "react-router-dom";
import { projects } from "../../projectsData.js";
import Button from "../../components/Button/";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center bg-background text-primary dark:bg-primary dark:text-background">
        <h2 className="text-2xl mb-4">
          Project not found. Find existing projects on the Portfolio page
        </h2>
        <Link
          to="/"
          className=" text-primary underline hover:text-accent transition-colors duration-300"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background text-primary dark:bg-primary/90 dark:text-background">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back button */}
        <Link
          to="/"
          className="inline-block mb-6 underline text-primary/90 hover:text-accent dark:text-accent dark:hover:text-secondary transition duration-300"
        >
          Back to Portfolio
        </Link>

        {/* Title */}
        <h1 className=" text-4xl mb-4">{project.title}</h1>

        {/* Featured Image */}
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl shadow-lg mb-8 w-full max-h-100 object-cover"
        />

        {/* Publish date */}
        {project.date && (
          <p className=" text-primary/90 dark:text-accent italic mb-8">
            Published on {project.date}
          </p>
        )}

        {/* Article Content */}
        <div className="leading-relaxed space-y-6 text-lg">
          {project.content &&
            project.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        </div>

        {/* Links */}
        <div className="flex justify-center gap-4 mt-12 items-center">
          {project.live && (
            <div className="">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button>Live Project</Button>
              </a>
            </div>
          )}

          {project.github && (
            <div className="">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>GitHub Repo</Button>
              </a>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
