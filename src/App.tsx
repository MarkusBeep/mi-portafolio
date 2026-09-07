import { Hero } from "./components/hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/skills";
import { StatusBar } from "./components/StatusBar";
import { Proficiency } from "./components/Proficiency";
import { About } from "./components/About";

function App() {
  return (
    <main className="min-h-screen bg-[rgba(235,255,248,0.65)] text-slate-800 transition-colors duration-300 pb-16">
      <Hero />
      <Proficiency />
      <Projects />
      <Skills />
      <StatusBar />
      <About />
    </main>
  );
}

export default App;
