import React from 'react'
import Hero from "@/components/Home/Hero";
import Services from '@/components/Home/ServicesSection';
// import Testimonials from '@/components/Home/Testimonials';
import Testimonials from '@/components/Home/Testimonials';
import WhoWeAre from '@/components/Home/whoWeAre';
import Form from '@/components/Home/Form';

import Page from '@/src/app/test/page'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      {/* <Services /> */}
      <Page />
      <Testimonials />
      <Form />
    </main>
  );
}