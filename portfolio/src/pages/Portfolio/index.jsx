import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <div className="flex flex-col gap-6 mt-6 p-4">
          <h1 className="text-2xl font-bold">My Projects</h1>
          <Projects />
          <Skills />
        </div>
      </div>
    </>
  );
}
