import Hero from '@/components/Hero';
import ProjectsSection from '@/components/Projects';
import Team from '@/components/Team';
import React from 'react';

function page() {
  return (
    <div>
      <Hero />
      <ProjectsSection />
      <Team />
    </div>
  )
}

export default page;