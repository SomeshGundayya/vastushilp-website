
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";

import ContactInformation from "../components/contact/ContactInformation";
import ProjectEnquiryForm from "../components/contact/ProjectEnquiryForm";
import OfficeLocations from "../components/contact/OfficeLocations";
import ContactCTA from "../components/contact/ContactCTA";
import SEO from "../components/common/SEO";

function ContactPage() {
  return (
    <>
    <SEO
  title="Contact Us"
  description="Contact Vastushilp Associates & Consulting Engineers for architectural and engineering consultancy. Offices in Nanded and Purna, Maharashtra."
/>
      <Navbar />

      <main>
        <PageBanner
          title="Contact Us"
          subtitle="Have a project in mind? Connect with Vastushilp Associates & Consulting Engineers to discuss your architectural and engineering requirements."
          backgroundImage="/images/about-building.jpg"
        />

        <ContactInformation />
        <ProjectEnquiryForm />
        <OfficeLocations />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
