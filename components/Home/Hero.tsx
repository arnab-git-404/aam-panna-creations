
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container h-screen max-w-full bg-[url('/hero-bg.png')] bg-cover flex items-center justify-center">

        <Image
          src="/hero-section-logo.png"
          alt="Hero Image"
          width={500}
          height={578}
          className=""
          
        />
  
      </div>
    </section>
  );
};

export default Hero;