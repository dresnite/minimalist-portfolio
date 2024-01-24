import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="header-background">
        <Navbar />
        <Hero />
      </div>
      
      <AboutMe />
    </div>
  );
}
