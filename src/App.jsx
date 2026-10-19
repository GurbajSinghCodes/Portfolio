// src/App.jsx
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  );
}