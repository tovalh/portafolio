import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Experience from "@/components/Experience";

export default function Home() {
  return (
      <div className="font-sans text-dark antialiased selection:bg-primary selection:text-white relative min-h-screen">
          <CustomCursor />

          {/* GLOBAL BACKGROUND BLOBS (Fixed position to stay throughout scroll) */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob opacity-70"></div>
              <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-secondary/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000 opacity-70"></div>
              <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-accent/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000 opacity-70"></div>
          </div>
          <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
          </main>
          {/*<Footer />*/}
      </div>
  );
}
