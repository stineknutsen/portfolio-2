import { Link } from "react-router-dom";
import Button from "../Button";

export default function Hero() {
  return (
    <section className=" text-primary bg-background dark:bg-primary dark:text-background shadow-sm">
      <div className="max-w-[1200px] mx-auto h-[75vh] px-2 flex items-center ">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-xl sm:text-2xl font-bold">Hello! I'm a</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Front-end developer
          </h1>
          <p className="flex flex-wrap pt-2">
            My name is Stine. I'm a junior front-end developer based in Bergen,
            Norway. Welcome to my portfolio!
          </p>
          <Link to="/contact">
            <Button>Get in touch</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
