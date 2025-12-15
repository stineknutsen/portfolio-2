export default function Skills() {
  const skills = [
    "Figma",
    "Canva",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "React",
  ];

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Key Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-primary/90 text-background font-medium px-2 py-1 rounded-md hover:-translate-y-1 transition-transform duration-500"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
