export default function Button(props) {
  return (
    <div>
      <button className="group bg-accent text-primary font-bold shadow-sm py-2 px-4 mt-2 rounded transition-colors duration-300 relative overflow-hidden">
        <div className="h-24 w-4 bg-secondary/50 rotate-12 -top-2 -left-6 group-hover:translate-x-40 transition-transform duration-500 absolute"></div>
        {props.children}
      </button>
    </div>
  );
}
