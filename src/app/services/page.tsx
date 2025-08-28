// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Services",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//     },
//     {
//       id: 2,
//       title: "Project 2",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//     },
//   ];

//   const portfolioItems = [
//     { id: 1, title: "Title", description: "Description" },
//     { id: 2, title: "Title", description: "Description" },
//     { id: 3, title: "Title", description: "Description" },
//     { id: 4, title: "Title", description: "Description" },
//   ];

//   return (
//     <div className="fade-in bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] ">
//       {/* Main Projects Section */}
//       <section className="py-20">

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//             {/* Left side - Featured project image */}

//             <div className="aspect-video bg-gray-400 rounded-lg"></div>

//             {/* Right side - Project details */}
//             <div className="space-y-12">
//               <h1 className="text-5xl font-bold text-primary">
//                 Our
//                 <br />
//                 projects
//               </h1>

//               {projects.map((project) => (
//                 <div key={project.id} className="space-y-4">
//                   <h2 className="text-2xl font-bold text-primary">
//                     {project.title}
//                   </h2>
//                   <p className="text-muted-foreground leading-relaxed">
//                     {project.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Gallery */}
//       <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4]">
//         <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] ">
//           {/* Top row of portfolio items */}
//           {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
//             {[...Array(7)].map((_, i) => (
//               <div key={i} className="aspect-square bg-gray-400 rounded-lg"></div>
//             ))}
//           </div> */}

//           <div className="relative overflow-hidden mb-16">
//             <div className="flex animate-scroll">
//               {/* First set of items */}
//               {[...Array(10)].map((_, i) => (
//                 <div
//                   key={`first-${i}`}
//                   className="flex-shrink-0 w-32 h-32 bg-gray-400 rounded-lg mr-4"
//                 ></div>
//               ))}

//               {/* Duplicate set for seamless loop */}
//               {[...Array(10)].map((_, i) => (
//                 <div
//                   key={`second-${i}`}
//                   className="flex-shrink-0 w-32 h-32 bg-gray-400 rounded-lg mr-4"
//                 ></div>
//               ))}
//             </div>
//           </div>

//           {/* Project cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-9">

//             {portfolioItems.map((item, index) => (
//               <div
//                 key={item.id}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden card-hover transform rotate-1 hover:rotate-0 transition-transform duration-300"
//                 style={{
//                   transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 2}deg)`,
//                   animationDelay: `${index * 0.1}s`,
//                 }}
//               >
//                 <div className="aspect-video bg-gray-400"></div>

//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-3 h-3 rounded-full bg-gray-400"></div>
//                     <div className="flex space-x-1">
//                       {[...Array(5)].map((_, j) => (
//                         <svg
//                           key={j}
//                           className="w-3 h-3 text-yellow-400"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                   <h3 className="font-bold mb-1">{item.title}</h3>
//                   <p className="text-sm text-muted-foreground">
//                     {item.description}
//                   </p>
//                   <div className="mt-4 pt-4 border-t border-border">
//                     <span className="text-xs text-muted-foreground">
//                       Description
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Projects = () => {
  const [isClient, setIsClient] = useState(false);
  const horizontalRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "Web Design & Development",
      icon: "/services/Code.svg",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "Lagun Advisor",
      projectDes: "A platform for personalized travel recommendations.",
      liveLink: "https://lagunadvisor.com",
    },
    {
      id: 2,
      title: "Social Media Management",
      icon: "/services/Social media.svg",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "nam pata naahi ha mereko",
      projectDes: "nam ke description vej dena.",
      liveLink: "https://lagunadvisor.com",
    },
    {
      id: 3,
      title: "Personal Branding",
      icon: "/services/Personal branding.svg",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "data nahi mila haa avi tak",
      projectDes: " milega fir dal dun ga.",
      liveLink: "https://lagunadvisor.com",
    },
    {
      id: 4,
      title: "UI/UX Design and Development",
      icon: "/services/UX Design.svg",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "nahi pata avi ",
      projectDes: " happy ganesh pujaaa ",
      liveLink: " ",
    },
    {
      id: 5,
      title: "Digital Marketing",
      icon: "/services/Mentorship and consultancy.svg",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "Content Creator",
      projectDes: "Creating engaging content for various platforms.",
      liveLink: "https://lagunadvisor.com",
    },
    {
      id: 6,
      title: "Podcast editing",
      icon: "/services/Podcast editing.svg",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: " hamko v karna ha podcast",
      projectDes: "chalo binith ek podcast krte haain",
      liveLink: "https://lagunadvisor.com",
    },
  ];

  const portfolioItems = [
    { id: 1, title: "Title", description: "Description" },
    { id: 2, title: "Title", description: "Description" },
    { id: 3, title: "Title", description: "Description" },
    { id: 4, title: "Title", description: "Description" },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !horizontalRef.current) return;

    /* eslint-disable @typescript-eslint/no-explicit-any */

    let gsap: any;
    let ScrollTrigger: any;

    const initializeGSAP = async () => {
      try {
        // Dynamic imports
        const gsapModule = await import("gsap");
        const scrollTriggerModule = await import("gsap/ScrollTrigger");

        gsap = gsapModule.gsap || gsapModule.default;
        ScrollTrigger =
          scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

        if (!gsap || !ScrollTrigger) {
          console.error("Failed to load GSAP libraries");
          return;
        }

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Horizontal Scroll Animation
        const sections = gsap.utils.toArray(".panel");
        if (sections.length > 0 && horizontalRef.current) {
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: horizontalRef.current,
              pin: true,
              scrub: 0.5, // Lower = smoother (try 0.1 to 1) & Higer > 1 = Faster
              snap: 1 / (sections.length - 1),
              end: () => "+=" + (horizontalRef.current?.offsetWidth || 0),
            },
          });
        }

        ScrollTrigger.refresh();
      } catch (error) {
        console.error("Error initializing GSAP:", error);
      }
    };

    initializeGSAP();

    // Cleanup function
    return () => {
      try {
        if (ScrollTrigger) {
          ScrollTrigger.killAll();
        }
      } catch (error) {
        console.error("Error during cleanup:", error);
      }
    };
  }, [isClient]);



  return (
    <div className="fade-in  ">
      {/* Main Projects Section */}

      <h1 className="font-bold text-7xl px-4 sm:px-6 lg:px-20 mt-10 ">
        Services
      </h1>

      {/* <section className="py-20">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            
            {/* Left side - Featured project image */}
      {/* <div className="aspect-video bg-gray-400 rounded-lg"></div> */}

      {/* Right side - Project details */}
      {/* <div className="  space-y-12"> */}

      {/* <div className="absolute inset-0 -z-5">
                <svg
                  width="900"
                  height="1100"
                  viewBox="0 0 900 1100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full object-cover"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M978.55 958.036C854.327 1058.7 675.958 1089.61 524.262 1038.97C392.03 994.831 364.736 829.85 274.967 723.18C183.214 614.154 10.0806 558.977 0.674333 416.806C-9.23513 267.03 104.522 131.365 230.405 49.6629C345.121 -24.7915 486.782 5.41057 623.368 12.6579C770.347 20.4566 934.977 -9.95641 1040.54 92.6484C1152.48 201.454 1165.29 372.877 1154.14 528.562C1142.65 688.946 1103.46 856.82 978.55 958.036Z"
                    fill="#FFD500"
                  />
                </svg>
              </div> */}

      {/* <h1 className="text-5xl font-bold text-primary">Services</h1> */}
      {/* 
              {projects.map((project) => (
                <div key={project.id} className="space-y-4">
                  <h1 className="text-5xl font-bold text-primary">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <h2 className="text-3xl font-bold text-primary">
                    Client : {project.projectName}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.projectDes}
                  </p>
                  <a
                    href={project.liveLink}
                    className="text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              ))} */}

      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </section>  */}

      <section
        ref={horizontalRef}
        className="relative h-screen flex"
        style={{ width: `${projects.length * 100}vw` }}
      >
        <Image
          src="/servicePage.svg"
          alt="Description of the image"
          //  layout="fill"
          //  objectFit="cover"
          width={800}
          height={1100}
          //  className="absolute  inset-0 -z-5"
          className="absolute  transform  translate-y translate-x-1/2 -z-10"
        />

        {projects.map((project) => (
          <div
            key={project.id}
            className="panel flex items-center justify-center w-screen  text-black p-20"
          >
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Project image placeholder */}

              {/* <div className="aspect-video bg-black/20 rounded-lg backdrop-blur-sm"></div> */}

              <div className="aspect-video bg-black/20 rounded-5xl backdrop-blur-sm flex items-center justify-center">
                <Image
                  src={project.icon}
                  alt="Description of the image"
                  layout="fill"
                  // objectFit="cover"
                  className="mt-2 object-contain"
                />
              </div>

              {/* Right side - Project details */}
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">{project.title}</h1>
                <p className="text-black/90 leading-relaxed text-lg">
                  {project.description}
                </p>

                <h2 className="text-3xl font-bold">
                  Client: {project.projectName}
                </h2>
                <p className="text-black/90 leading-relaxed">
                  {project.projectDes}
                </p>
                {project.liveLink &&
                  project.liveLink.trim() &&
                  project.liveLink !== "https://example.com" && (
                    <a
                      href={project.liveLink}
                      className="inline-block bg-[#000000] text-white px-6 py-3 rounded-lg font-semibold  transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Portfolio Gallery */}
      <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] pb-16">
        {/* <div className="mx-auto  px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] "> */}
        <div className="mx-auto  px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] ">
          <div className="relative overflow-hidden mb-16">
            <div className="flex animate-scroll">
              {/* First set of items */}
              {[...Array(10)].map((_, i) => (
                <div
                  key={`first-${i}`}
                  className="flex-shrink-0 w-32 h-32 bg-gray-400 rounded-lg mr-4"
                ></div>
              ))}

              {/* Duplicate set for seamless loop */}
              {[...Array(10)].map((_, i) => (
                <div
                  key={`second-${i}`}
                  className="flex-shrink-0 w-32 h-32 bg-gray-400 rounded-lg mr-4"
                ></div>
              ))}
            </div>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover transform rotate-1 hover:rotate-0 transition-transform duration-300"
                style={{
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 2}deg)`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="aspect-video bg-gray-400"></div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          className="w-3 h-3 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      Description
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
