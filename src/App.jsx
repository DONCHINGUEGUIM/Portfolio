import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WorksSection from './components/WorksSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="relative">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <SocialBar />
      <main>
        <HeroSection setActiveSection={setActiveSection} />
        <AboutSection setActiveSection={setActiveSection} />
        <ServicesSection setActiveSection={setActiveSection} />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
