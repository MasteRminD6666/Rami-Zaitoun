import { About } from "./sections/About";
import { Clients } from "./sections/Clients";
import { Certificate } from "./sections/Certificate";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { HowIWork } from "./sections/HowIWork";
import { Navbar } from "./sections/Navbar";
import { Projects } from "./sections/Projects";
import { SkillsGrowth } from "./sections/SkillsGrowth";

function App() {
  return (
    <main className="relative mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <SkillsGrowth />
      <HowIWork />
      <Certificate />
      <Clients />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;
