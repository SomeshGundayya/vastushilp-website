
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";

import ProjectsIntroduction from "../components/projects/ProjectsIntroduction";
import ProjectsGallery from "../components/projects/ProjectsGallery";

import ProjectConsultationCTA from "../components/about/ProjectConsultationCTA";
import SEO from "../components/common/SEO";

function ProjectsPage() {
  return (
    <>
    <SEO
  title="Architectural Design Portfolio"
  description="Explore illustrative residential, commercial, elevation, and interior design concepts from the Vastushilp website portfolio."
/>
      <Navbar />

      <main>
        <PageBanner
          title="Our Projects"
          subtitle="Explore architectural concepts, design solutions, and engineering work."
          backgroundImage="/images/project-1.jpg"
        />

        <ProjectsIntroduction />
        <ProjectsGallery />
        <ProjectConsultationCTA />
      </main>

      <Footer />
    </>
  );
}

export default ProjectsPage;
