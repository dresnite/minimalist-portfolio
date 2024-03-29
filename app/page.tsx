import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <div className="header-background">
        <Navbar />
        <Hero />
      </div>
      
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}
