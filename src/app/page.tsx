import React from 'react'
import Hero from "@/components/Home/Hero";
import Testimonials from '@/components/Home/testimonials';
import Services from '@/components/Home/ServicesSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      {/* Add other sections here as needed */}
    </main>
  );
}