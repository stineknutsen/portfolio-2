import Button from "../../components/Button";
import Skills from "../../components/Skills";
export default function About() {
  return (
    <section className="bg-primary/30 dark:bg-primary/90 py-8 min-h-screen">
      <div className="bg-background text-primary dark:bg-primary dark:text-background flex flex-col h-[100%] w-[90%] max-w-[1200px] mx-auto p-6 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Hello!</h1>
        <p className="mb-4">
          My name is Stine. I'm a junior front-end developer based in Bergen. I
          love transforming ideas and designs into websites!
        </p>
        <h2 className="text-2xl font-semibold">How I got here</h2>
        <p className="mb-4">
          I was actually inspired by a UX designer whom I babysit for. She
          recommended me a coding basics book, and I enjoyed it so much that I
          started the study program at Noroff shortly after. I have now
          completed the 2 year program, and I am eager to start my career as a
          front-end developer.
        </p>
        <h2 className="text-2xl font-semibold">As a student</h2>
        <p className="mb-4">
          I have made several different websites, some of which are shown in
          this porfolio. In my time as a full-time student, I have been learning
          about design, user experience, programming languages and modern
          frameworks. I have practiced building websites from scratch with
          responsive layouts, and clean, efficient code. Working on my own or in
          a group, which I really enjoyed.
        </p>
        <h2 className="text-2xl font-semibold">Key skills</h2>
        <Skills />
        <h2 className="mt-4 text-2xl font-semibold">When I'm not coding</h2>
        <p className="mb-4">
          I enjoy lots of books, music, movies, video games, and crafts.
        </p>
        <h2 className="text-2xl font-semibold">Career goals</h2>
        <p className="mb-6">
          I am eager to learn new tools, collaborate with other developers, and
          continue improving my skills. I'm seeking a role where I can grow and
          make a positive impact. If you want to collaborate, ask a question, or
          make a new connection, check out the contact page!
        </p>
        <a href="contact">
          <Button>Get in touch</Button>
        </a>
      </div>
    </section>
  );
}
