
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  // Initialize theme
  useTheme();
  
  useEffect(() => {
    // Set page title
    document.title = "Portfolio | Creative Developer";
  }, []);

  return (
    <div className="relative min-h-screen dark">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
