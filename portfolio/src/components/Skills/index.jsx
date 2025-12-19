export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Flexbox",
    "Grid",
    "JavaScript",
    "REST API",
    "Tailwind",
    "React",
    "GitHub",
    "Figma",
    "Canva",
  ];

  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-accent text-primary font-semibold px-4 py-2 rounded-md hover:scale-105 transition-transform duration-500"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
