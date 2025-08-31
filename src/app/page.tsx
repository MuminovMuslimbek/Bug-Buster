import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/Projects';
import Team from '@/components/Team';
import React from 'react';

function page() {
  return (
    <div>
      <Hero />
      <ProjectsSection />
      <Certificates />
      <Team />
      <Contact />
    </div>
  )
}

export default page;