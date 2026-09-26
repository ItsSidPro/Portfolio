import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import EducationSection from '@/app/components/EducationSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="relative bg-background min-h-screen">
      <Header />

      {/* Section dividers */}
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      <EducationSection />
      <div className="section-divider" />
      <ContactSection />

      <Footer />
    </main>
  );
}