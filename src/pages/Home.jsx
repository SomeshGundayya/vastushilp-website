
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import FeaturedProjects from "../components/home/FeaturedProjects";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";
import SEO from "../components/common/SEO";

function Home() {
  return (
    <>
    <SEO
  title="Architectural & Engineering Consultancy"
  description="Vastushilp Associates & Consulting Engineers offers architectural planning, structural design, 2D & 3D elevation, and engineering consultancy in Nanded and Purna, Maharashtra."
/>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;
