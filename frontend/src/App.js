import "./App.css";
import { useEffect } from "react";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
