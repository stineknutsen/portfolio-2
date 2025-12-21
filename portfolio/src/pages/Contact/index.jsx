import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("stineknutsen02@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

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
          <div>
            <button onClick={handleCopy} title="Copy email to clipboard">
              <i class="fa-solid fa-envelope text-4xl hover:scale-110 transition duration-300"></i>
            </button>
            {copied && <p className="text-sm">Copied to clipboard!</p>}
          </div>

          <a
            href="https://www.linkedin.com/in/stine-knutsen-8b9557209/"
            target="_blank"
            rel="noopener noreferrer"
            title="Stinke Knutsen on Linkedin"
          >
            <i class="fa-brands fa-linkedin text-4xl hover:scale-110 transition duration-300"></i>
          </a>
          <a
            href="https://github.com/stineknutsen"
            target="_blank"
            rel="noopener noreferrer"
            title="Stine Knutsen on Github"
          >
            <i class="fa-brands fa-github text-4xl hover:scale-110 transition duration-300"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
