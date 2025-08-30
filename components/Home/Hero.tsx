// // import React from "react";
// // import Image from "next/image";
// // import Ballpit from "../Ballpit";

// // const Hero = () => {
// //   return (
// //     <section className="hero">
// //       <div className="container h-screen max-w-full bg-[url('/hero-bg.png')] bg-cover flex items-center justify-center">
// //         {/* <div
// //           style={{
// //             position: "relative",
// //             overflow: "hidden",
// //             minHeight: "h-screen",
// //             maxHeight: "500px",
// //             width: "100%",
// //           }}
// //         > */}
// //           <Ballpit
// //             colors={[0xffff00, 0xff8800, 0xff69b4]}
// //             gravity={0.01}
// //             friction={0.9975}
// //             wallBounce={0.95}
// //             followCursor={false}
// //           />

// //           <Image
// //             src="/hero-section-logo.png"
// //             alt="Hero Image"
// //             width={500}
// //             height={578}
// //             className="relative"
// //           />
// //         {/* </div> */}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;




// // 2nd - but full working 
// import React from "react";
// import Ballpit from "../Ballpit";

// // import Image from "next/image";

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="container h-screen max-w-full bg-[url('/hero-bg.png')] bg-cover relative flex items-center justify-center">
//         {/* Ballpit Background Animation */}
//         <div className="absolute inset-0 z-0">
//           <Ballpit
//             colors={[0xffff00, 0xff8800, 0xff69b4]}
//             gravity={0.01}
//             friction={0.9975}
//             wallBounce={0.95}
//             followCursor={false}
//           />
//         </div>

//         {/* Centered Hero Image */}
//         <div className="relative z-10 flex items-center justify-center">
//           {/* <Image
//             src="/hero-section-logo.png"
//             alt="Hero Image"
//             width={500}
//             height={578}
//             className="object-contain max-w-full max-h-full"
//             priority
//           /> */}
//           <h1 className="text-4xl font-medium text-black">Welcome to</h1>
//           <h1 className="text-7xl font-bold text-black  ">Aam Panna Creations</h1>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

'use client'

import React from "react";
import Ballpit from "../Ballpit";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container h-screen max-w-full bg-[url('/hero-bg.png')] bg-cover relative flex items-center justify-center overflow-hidden">
        {/* Ballpit Background Animation */}
        <div className="absolute inset-0 z-0">
          <Ballpit
            colors={[0xffff00, 0xff8800, 0xff69b4]}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={false}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-5 bg-gradient-to-br from-black/10 via-transparent to-purple/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/30 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400/40 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 left-20 w-12 h-12 bg-pink-400/50 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400/30 rounded-lg rotate-12 animate-bounce"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
          {/* Welcome Text with Animation */}
          <div className="mb-4 overflow-hidden">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 animate-slide-up tracking-wider">
              Welcome to
            </h1>
          </div>

          {/* Main Title with Decorative Elements */}
          <div className="relative mb-8">
            {/* Decorative lines */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full"></div>
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-pink-500 animate-gradient leading-tight">
              Aam Panna Creations
            </h1>
            
            {/* Bottom decorative line */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 rounded-full"></div>
          </div>

          {/* Subtitle */}
          <div className="mb-8 overflow-hidden">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 animate-slide-up-delay font-medium tracking-wide">
              Creative Solutions • Digital Excellence • Innovative Design
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-105 hover:shadow-xl">
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="ml-5 absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-gray-600">
              <span className="text-sm mb-2 font-medium">Scroll Down</span>
              <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-yellow-400/50 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-orange-400/50 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-pink-400/50 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-purple-400/50 rounded-br-3xl"></div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-up-delay {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up-delay 1s ease-out 0.3s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.6s both;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .hero h1 {
            line-height: 1.1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;