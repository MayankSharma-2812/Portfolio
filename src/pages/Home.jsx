import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import OpenSource from "../components/OpenSource";
import DeveloperSignals from "../components/DeveloperSignals";
import Now from "../components/Now";
import Failures from "../components/Failures";
import Github from "../components/Github";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import CommandPalette from "../components/CommandPalette";
import MiniNav from "../components/MiniNav";

export default function Home() {
  return (
    <>
      <CommandPalette />
      <MiniNav />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <DeveloperSignals />
        <Stats />
        <Projects />
        <Skills />
        <OpenSource />
        <Failures />
        <Now />
        <Github />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
