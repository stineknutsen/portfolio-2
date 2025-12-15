export default function Button(props) {
  return (
    <button className="bg-lavender hover:bg-accent text-primary font-bold py-2 px-4 rounded transition-colors duration-300">
      {props.children}
    </button>
  );
}
