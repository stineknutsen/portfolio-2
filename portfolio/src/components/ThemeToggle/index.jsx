import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="w-10 h-10 rounded-full bg-primary dark:bg-primary hover:rotate-[360deg] transition-all duration-300"
    >
      {darkMode ? (
        <i className="fa-solid fa-sun text-background text-xl"></i>
      ) : (
        <i className="fa-solid fa-moon text-background text-xl"></i>
      )}
    </button>
  );
}
