
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";
import CompanyIntroduction from "../components/about/CompanyIntroduction";
import OurApproach from "../components/about/OurApproach";
import AreasOfExpertise from "../components/about/AreasOfExpertise";
import ProjectConsultationCTA from "../components/about/ProjectConsultationCTA";
import SEO from "../components/common/SEO";

function AboutPage() {
  return (
    <>
    <SEO
  title="About Us"
  description="Learn about Vastushilp Associates & Consulting Engineers, our architectural planning approach, engineering consultancy, and design services."
/>
      <Navbar />

      <main>
        <PageBanner
          title="About Us"
          subtitle="Thoughtful architectural planning and engineering consultancy for spaces that inspire."
          backgroundImage="/images/about-building.jpg"
        />

        <CompanyIntroduction />
        <OurApproach />
        <AreasOfExpertise />
        <ProjectConsultationCTA />
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
