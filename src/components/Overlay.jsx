import React from 'react';
import HeroSection from './HeroSection';
import Achievements from './Achievements';
import ProjectGrid from './ProjectGrid';
import Education from './Education';
import ContactForm from './ContactForm';
import SkillsSection from './SkillsSection'; 

export default function Overlay() {
  return (
    <div className="relative z-10 pointer-events-none">
      <div className="pointer-events-auto">
        <HeroSection /> 
        <SkillsSection />
        <Achievements />
        <ProjectGrid />
        <Education />
        <ContactForm />
      </div>
    </div>
  );
}