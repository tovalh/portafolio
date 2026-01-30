import Image from "next/image";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
      <div className="min-h-screen bg-darker text-slate-200 selection:bg-accent selection:text-darker">
          <main>
              <Hero />
              <Projects />
              <Skills />
              <Contact />
          </main>
          <Footer />
      </div>
  );
}
