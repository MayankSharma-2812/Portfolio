import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import OpenSource from "../components/OpenSource";
import Github from "../components/Github";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import CursorGlow from "../components/CursorGlow";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <OpenSource />
        <Github />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
