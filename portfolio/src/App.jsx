import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CSSFrameworks from "./pages/CSSFrameworks";
import JSFrameworks from "./pages/JSFrameworks";
import SemesterProject from "./pages/SemesterProject";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cssframeworks" element={<CSSFrameworks />} />
        <Route path="/jsframeworks" element={<JSFrameworks />} />
        <Route path="/semesterproject" element={<SemesterProject />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
