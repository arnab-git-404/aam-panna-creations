import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  // return (
  //   <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-[#FFD500] ">
  //     <div className=" mx-auto">
  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  //         {/* Left content */}
  //         <div className="space-y-6">
  //           <h2 className=" font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
  //             Who are we ?
  //           </h2>

  //           <p className="text-lg md:text-xl text-black leading-relaxed ">
  //            At Aam Pannaa Creations, we know every startup has a story worth sharing. We’re here to help early-stage ventures turn their ideas into authentic brands that connect and grow.
  //           <br/>
  //           We mix creativity with strategy to craft your unique identity and manage social media with care. Whether you’re a startup, a B2B company, or a women-led social venture, our tailored approach is all about your goals and lasting results.
  //           <br/>
  //           More than marketers, we’re your partners in success—ready to write your growth story together.
  //           </p>

  //         </div>

  //         {/* Right decorative elements */}
  //         <div className="relative flex justify-center ">
  //           {/* LinkedIn icon */}
  //           <Link
  //             href="https://linkedin.com/0x_arnab"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="absolute top-0 right-20 w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center transform rotate-12 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer group"
  //           >
  //             <svg
  //               className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
  //               fill="currentColor"
  //               viewBox="0 0 24 24"
  //             >
  //               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  //             </svg>
  //           </Link>

  //           {/* Instagram icon */}
  //           <Link
  //             href="https://instagram.com/0x_arnab"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="absolute bottom-12 right-8 w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 cursor-pointer group"
  //           >
  //             <svg
  //               className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
  //               fill="currentColor"
  //               viewBox="0 0 24 24"
  //             >
  //               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  //             </svg>
  //           </Link>
  //         </div>
  //       </div>
  //        <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //     <path fill="#ffffff" fill-opacity="1"
  //       d="M0,288L48,272C96,256,192,224,288,192C384,160,480,128,576,117.3C672,107,768,117,864,138.7C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L0,320Z">
  //     </path>
  //   </svg>
  // </div>
  //     </div>
  //   </section>
  // );

  // return (
  //   <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-[#FFD500] overflow-hidden">
  //     <div className="mx-auto relative z-10">
  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  //         {/* Left content */}
  //         <div className="space-y-6">
  //           <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
  //             Who are we ?
  //           </h2>

  //           <p className="text-lg md:text-xl text-black leading-relaxed">
  //             At Aam Pannaa Creations, we know every startup has a story worth
  //             sharing. We're here to help early-stage ventures turn their ideas
  //             into authentic brands that connect and grow.
  //             <br />
  //             We mix creativity with strategy to craft your unique identity and
  //             manage social media with care. Whether you're a startup, a B2B
  //             company, or a women-led social venture, our tailored approach is all
  //             about your goals and lasting results.
  //             <br />
  //             More than marketers, we're your partners in success—ready to write
  //             your growth story together.
  //           </p>
  //         </div>

  //         {/* Right decorative elements */}
  //         <div className="relative flex justify-center">
  //           {/* LinkedIn icon */}
  //           <Link
  //             href="https://linkedin.com/0x_arnab"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="absolute top-0 right-20 w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center transform rotate-12 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer group"
  //           >
  //             <svg
  //               className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
  //               fill="currentColor"
  //               viewBox="0 0 24 24"
  //             >
  //               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  //             </svg>
  //           </Link>

  //           {/* Instagram icon */}
  //           <Link
  //             href="https://instagram.com/0x_arnab"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="absolute bottom-12 right-8 w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 cursor-pointer group"
  //           >
  //             <svg
  //               className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
  //               fill="currentColor"
  //               viewBox="0 0 24 24"
  //             >
  //               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  //             </svg>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>

  //     {/* SVG Wave */}
  //     <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
  //       <Image
  //         src="/whoWeAre.svg"
  //         alt="Wave Background"
  //         layout="fill"
  //         objectFit="cover"
  //         className="w-full h-full"
  //       />
  //     </div>

  //   </section>
  // );

  return (
    <> 
    
    <section className="relative py-16 px-4 md:px-8 lg:px-16  overflow-hidden">

      <div className="mx-auto relative z-10 bg-[#FFD500] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Who are we ?
            </h2>

            <p className="text-lg md:text-xl text-black leading-relaxed">
              {`At Aam Pannaa Creations, we know every startup has a story worth
              sharing. We're here to help early-stage ventures turn their ideas
              into authentic brands that connect and grow.`}
              <br />
              {`We mix creativity with strategy to craft your unique identity and
              manage social media with care. Whether you're a startup, a B2B
              company, or a women-led social venture, our tailored approach is
              all about your goals and lasting results.`}
              <br />
              {`More than marketers, we're your partners in success—ready to write
              your growth story together.`}
            </p>
          </div>

          {/* Right decorative elements */}
          <div className="relative flex justify-center">
            {/* LinkedIn icon */}
            <Link
              href="https://linkedin.com/0x_arnab"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 right-20 w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center transform rotate-12 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer group"
            >
              <svg
                className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>

            {/* Instagram icon */}
            <Link
              href="https://instagram.com/0x_arnab"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-12 right-8 w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 cursor-pointer group"
            >
              <svg
                className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>


     {/* SVG Wave - positioned to extend below section */}
      <div className=" relative w-full overflow-hidden leading-none ">
        <svg
          width="1440"
          height="469"
          viewBox="0 0 1440 469"
          fill=" "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M689.5 422C360 549 74.1667 381 -3.5 334.5L-41 74L1471 0L1462.5 334.5C1222 182.5 997.82 303.163 689.5 422Z"
            fill="#FFD500"
          />
        </svg>
      </div>
     
    </section>


  </>

  );
};

export default WhoWeAre;
