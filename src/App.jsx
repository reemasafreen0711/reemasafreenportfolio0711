import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
import { postJson } from "./lib/api";
import Admin from "./Admin";
function Section({ id, title, description }) {
  return (
    <section
      id={id}
      className="flex min-h-screen items-center border-b border-white/5"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
          {id}
        </p>

        <h2 className="text-4xl font-bold text-white sm:text-5xl">{title}</h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
          {description}
        </p>
      </div>
    </section>
  );
}

function PublicPortfolio() {
  useEffect(() => {
    // Count once per tab session; no IP address or personal profile is stored.
    const key = `portfolio-viewed:${window.location.pathname}`;
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, "1");
    postJson("track-visit.php", { page: window.location.pathname }).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#07080a] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return window.location.pathname.startsWith("/admin") ? <Admin /> : <PublicPortfolio />;
}

export default App;
