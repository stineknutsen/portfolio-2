import Hero from "../../components/Hero";
import Projects from "../../components/Projects";

export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <section className="flex flex-col gap-6 px-2 pb-12 text-primary bg-background dark:bg-primary dark:text-background">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Featured Projects</h1>
              <p className="text-md mb-6">
                Check out some of my projects from 2025!
              </p>
            </div>
            <Projects />
          </div>
        </section>
      </div>
    </>
  );
}
