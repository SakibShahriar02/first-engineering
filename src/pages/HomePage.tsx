import Hero from "../components/sections/Hero";
import Strip from "../components/sections/Strip";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Gallery from "../components/sections/Gallery";
import Process from "../components/sections/Process";
import Faq from "../components/sections/Faq";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Strip />
      <About />
      <Services />
      <Gallery />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}
