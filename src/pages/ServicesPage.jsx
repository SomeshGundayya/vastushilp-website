
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";

import ServicesIntroduction from "../components/services/ServicesIntroduction";
import DetailedServices from "../components/services/DetailedServices";
import ServicesProcess from "../components/services/ServicesProcess";

import ProjectConsultationCTA from "../components/about/ProjectConsultationCTA";
import SEO from "../components/common/SEO";

function ServicesPage() {
  return (
    <>
    <SEO
  title="Our Services"
  description="Explore architectural planning, structural design, 2D & 3D elevation, estimation and costing, site supervision, and interior and exterior consultancy."
/>
      <Navbar />

      <main>
        <PageBanner
          title="Our Services"
          subtitle="Architectural planning, structural design, and engineering consultancy solutions tailored to your project requirements."
          backgroundImage="/images/about-building.jpg"
        />

        <ServicesIntroduction />
        <DetailedServices />
        <ServicesProcess />
        <ProjectConsultationCTA />
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;
