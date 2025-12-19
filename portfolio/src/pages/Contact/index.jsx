export default function Contact() {
  return (
    <section className="bg-primary/30 dark:bg-primary/90 py-8 min-h-screen">
      <div className="bg-background text-primary dark:bg-primary dark:text-background flex flex-col h-[100%] w-[90%] max-w-[1200px] mx-auto p-6 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="mb-6">
          I would love to hear from you! Whether you want to collaborate, ask a
          question, or make a new connection. Feel free to reach out through any
          of the links below.
        </p>

        <div className="flex gap-4 mx-auto">
          <a href="#" className="">
            <i class="fa-solid fa-envelope text-4xl"></i>
          </a>
          <a href="#" target="_blank" className="">
            <i class="fa-brands fa-linkedin text-4xl"></i>
          </a>
          <a href="#" target="_blank" className="">
            <i class="fa-brands fa-github text-4xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
