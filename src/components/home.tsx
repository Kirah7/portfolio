import React from "react";
import Header from "./layout/Header";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./layout/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF5F7]">
      <Header />
      <main className="pt-20" style={{ scrollBehavior: "smooth" }}>
        {/* Add padding-top to account for fixed header */}
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
