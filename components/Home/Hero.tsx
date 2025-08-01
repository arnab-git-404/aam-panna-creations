// import React from 'react';
// import Image from 'next/image';

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="container h-[910px] w-full bg-[#D9D9D9] ">
        
//         <Image
//           src="/hero-section-logo.png"
//           alt="Hero Image"
//           height={578}
//           width={150}
//           className="  "
          
//         />
    
//         {/* <h1>Welcome to AAM Panna Creations</h1>
//         <p>Your creative partner for amazing projects</p> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container h-screen w-full bg-[#D9D9D9] flex items-center justify-center">

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