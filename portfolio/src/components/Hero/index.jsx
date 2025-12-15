import { Link } from "react-router-dom";
import Button from "../Button";

export default function Hero() {
  return (
    <div className=" text-text bg-lavender/20 shadow-lg shadow-lavender/10">
      <div className="max-w-[1200px] mx-auto h-[75vh] grid grid-cols-1 px-4 sm:grid-cols-2 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="text-xl sm:text-2xl font-bold">Hello! I'm a</p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Front-end developer
          </h1>
          <p className="flex flex-wrap pt-2">
            Hi! My name is Stine Knutsen. I'm a front-end developer based in
            Bergen, Norway. Welcome to my portfolio.{" "}
          </p>
          <Link to="/contact" className="text-primary">
            <Button>Get in touch</Button>
          </Link>
        </div>
        <div className="w-full">
          <div className="bg-primary/70 border border-primary rounded-full w-40 h-40 flex items-center justify-center mx-auto sm:m-0 sm:float-right">
            <p className="text-background">Illustration here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
