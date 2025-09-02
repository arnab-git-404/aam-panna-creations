// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// const Projects = () => {
//   const [isClient, setIsClient] = useState(false);
//   const horizontalRef = useRef<HTMLElement>(null);

//   const projects = [
//     {
//       id: 1,
//       title: "Web Design & Development",
//       icon: "/services/Code.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "Lagun Advisor",
//       projectDes: "A platform for personalized travel recommendations.",
//       liveLink: "https://lagunadvisor.com",
//     },
//     {
//       id: 2,
//       title: "Social Media Management",
//       icon: "/services/Social media.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "nam pata naahi ha mereko",
//       projectDes: "nam ke description vej dena.",
//       liveLink: "https://lagunadvisor.com",
//     },
//     {
//       id: 3,
//       title: "Personal Branding",
//       icon: "/services/Personal branding.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "data nahi mila haa avi tak",
//       projectDes: " milega fir dal dun ga.",
//       liveLink: "https://lagunadvisor.com",
//     },
//     {
//       id: 4,
//       title: "UI/UX Design and Development",
//       icon: "/services/UX Design.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "nahi pata avi ",
//       projectDes: " happy ganesh pujaaa ",
//       liveLink: " ",
//     },
//     {
//       id: 5,
//       title: "Digital Marketing",
//       icon: "/services/Mentorship and consultancy.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "Content Creator",
//       projectDes: "Creating engaging content for various platforms.",
//       liveLink: "https://lagunadvisor.com",
//     },
//     {
//       id: 6,
//       title: "Podcast editing",
//       icon: "/services/Podcast editing.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: " hamko v karna ha podcast",
//       projectDes: "chalo binith ek podcast krte haain",
//       liveLink: "https://lagunadvisor.com",
//     },
//   ];

//   const portfolioItems = [
//     { id: 1, title: "Title", description: "Description" },
//     { id: 2, title: "Title", description: "Description" },
//     { id: 3, title: "Title", description: "Description" },
//     { id: 4, title: "Title", description: "Description" },
//   ];

// interface Client {
//   img: string;
//   name: string;
// }

// const clientLogos: Client[] = [
//   {
//     img:"/clientLogos/claylab.png",
//     name :"ClayLab"
//   },
//   {
//     img:"/clientLogos/WolnutLogo.png",
//     name :"Wolnut"
//   },
//   {
//     img:"/clientLogos/Jyotsnasingh.png",
//     name :"Jyotsna Singh"
//   },
//   {
//     img:"/clientLogos/image.png",
//     name :"CreatorDesk"
//   },
//   {
//     img:"/clientLogos/littlepineapple.png",
//     name :"Little Pineapple"
//   },
//   {
//     img:"/clientLogos/aksh-e-sarfiri.png",
//     name: "aksh-e-sarfiri"
//   },
//   {
//     img: "/clientLogos/josh.png",
//     name: "Josh App"
//   },
//   {
//     img: "/clientLogos/kancha.png",
//     name: "kancha"
//   },
//   {
//     img: "/clientLogos/luminaryPathways.png",
//     name: "Luminary Pathwayst"
//   },
//   {
//     img:"/clientLogos/minsstance.png",
//     name: "Minsstance"
//   },
//   {
//     img: "/clientLogos/one7logo.png",
//     name: "One7 Sports"
//   },

// ]

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     if (!isClient || !horizontalRef.current) return;

//     /* eslint-disable @typescript-eslint/no-explicit-any */

//     let gsap: any;
//     let ScrollTrigger: any;

//     const initializeGSAP = async () => {
//       try {
//         // Dynamic imports
//         const gsapModule = await import("gsap");
//         const scrollTriggerModule = await import("gsap/ScrollTrigger");

//         gsap = gsapModule.gsap || gsapModule.default;
//         ScrollTrigger =
//           scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

//         if (!gsap || !ScrollTrigger) {
//           console.error("Failed to load GSAP libraries");
//           return;
//         }

//         // Register ScrollTrigger plugin
//         gsap.registerPlugin(ScrollTrigger);

//         // Horizontal Scroll Animation
//         const sections = gsap.utils.toArray(".panel");
//         if (sections.length > 0 && horizontalRef.current) {
//           gsap.to(sections, {
//             xPercent: -100 * (sections.length - 1),
//             ease: "none",
//             scrollTrigger: {
//               trigger: horizontalRef.current,
//               pin: true,
//               scrub: 0.5, // Lower = smoother (try 0.1 to 1) & Higer > 1 = Faster
//               snap: 1 / (sections.length - 1),
//               end: () => "+=" + (horizontalRef.current?.offsetWidth || 0),
//             },
//           });
//         }

//         ScrollTrigger.refresh();
//       } catch (error) {
//         console.error("Error initializing GSAP:", error);
//       }
//     };

//     initializeGSAP();

//     // Cleanup function
//     return () => {
//       try {
//         if (ScrollTrigger) {
//           ScrollTrigger.killAll();
//         }
//       } catch (error) {
//         console.error("Error during cleanup:", error);
//       }
//     };
//   }, [isClient]);

//   return (
//     <div className="fade-in  ">
//       {/* Main Projects Section */}

//       <h1 className="font-bold text-7xl px-4 sm:px-6 lg:px-20 mt-10 ">
//         Services
//       </h1>

//       <section
//         ref={horizontalRef}
//         className="relative h-screen flex"
//         style={{ width: `${projects.length * 100}vw` }}
//       >
//         <Image
//           src="/servicePage.svg"
//           alt="Description of the image"
//           //  layout="fill"
//           //  objectFit="cover"
//           width={800}
//           height={1100}
//           //  className="absolute  inset-0 -z-5"
//           className="absolute  transform  translate-y translate-x-1/2 -z-10"
//         />

//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="panel flex items-center justify-center w-screen  text-black p-20"
//           >
//             <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               {/* Left side - Project image placeholder */}

//               {/* <div className="aspect-video bg-black/20 rounded-lg backdrop-blur-sm"></div> */}

//               <div className="aspect-video bg-black/20 rounded-5xl backdrop-blur-sm flex items-center justify-center">
//                 <Image
//                   src={project.icon}
//                   alt="Description of the image"
//                   layout="fill"
//                   // objectFit="cover"
//                   className="mt-2 object-contain"
//                 />
//               </div>

//               {/* Right side - Project details */}
//               <div className="space-y-6">
//                 <h1 className="text-5xl font-bold">{project.title}</h1>
//                 <p className="text-black/90 leading-relaxed text-lg">
//                   {project.description}
//                 </p>

//                 <h2 className="text-3xl font-bold">
//                   Client: {project.projectName}
//                 </h2>
//                 <p className="text-black/90 leading-relaxed">
//                   {project.projectDes}
//                 </p>
//                 {project.liveLink &&
//                   project.liveLink.trim() &&
//                   project.liveLink !== "https://example.com" && (
//                     <a
//                       href={project.liveLink}
//                       className="inline-block bg-[#000000] text-white px-6 py-3 rounded-lg font-semibold  transition-colors"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       View Project
//                     </a>
//                   )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Portfolio Gallery */}
//       <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] pb-16">
//         {/* <div className="mx-auto  px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] "> */}

//         <div className="mx-auto  px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] ">

//           <div className="relative overflow-hidden mb-16">

//             <div className="flex animate-scroll">
//               {/* First set of items */}
//                {clientLogos.map((client, i) => (
//                 <div
//                   key={`first-${i}`}
//                   className="flex-shrink-0 w-32 h-32 border-2 ml-6 rounded-lg mb-4 relative overflow-hidden"
//                 >
//                   <Image
//                     src={client.img}
//                     alt={client.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               ))}

//               {/* Duplicate set for seamless loop */}
//               {clientLogos.map((client, i) => (
//                 <div
//                   key={`second-${i}`}
//                   className="flex-shrink-0 w-32 h-32 border-2 ml-6 rounded-lg mb-4 relative overflow-hidden"
//                 >
//                   <Image
//                     src={client.img}
//                     alt={client.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Project cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  const [isMobile, setIsMobile] = useState(false);
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
      projectName: "Social Media Project",
      projectDes: "Comprehensive social media management solution.",
      liveLink: "https://lagunadvisor.com",
    },
    {
      id: 3,
      title: "Personal Branding",
      icon: "/services/Personal branding.svg",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "Brand Identity Project",
      projectDes: "Complete personal branding solution.",
      liveLink: "https://lagunadvisor.com",
    },
    {
      id: 4,
      title: "UI/UX Design and Development",
      icon: "/services/UX Design.svg",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "Design System Project",
      projectDes: "Modern UI/UX design and development.",
      liveLink: "",
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
      projectName: "Podcast Production",
      projectDes: "Professional podcast editing and production services.",
      liveLink: "https://lagunadvisor.com",
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Sharmila Purank",
      role: "Founder, Luminary Pathways",
      description:
        "Nikhita is a hard-working professional. She and her talented team goes above and beyond to work with strategy and system. I have no doubts on the way they will grow themselves and their brands.",
    },
    {
      id: 2,
      title: "Prachi Tandon",
      role: "Founder, Escape Velocity",
      description:
        "It took me seconds to close the partnership with Nikhita even before I saw her samples. I have full faith on her expertise and quality of work. She will do wonders in building Aam Pannaa Creations.",
    },
    {
      id: 3,
      title: "Rashi",
      role: "Founder, Legum advisors",
      description:
        "I truly appreciate the entire team for their patience and for attentively working on my needs and vision. Wishing Aam Pannaa Creations the very best for all their future endeavors!",
    },
    {
      id: 4,
      title: "Title",
      description: "Description",
    },
  ];

  interface Client {
    img: string;
    name: string;
  }

  const clientLogos: Client[] = [
    {
      img: "/clientLogos/claylab.png",
      name: "ClayLab",
    },
    {
      img: "/clientLogos/WolnutLogo.png",
      name: "Wolnut",
    },
    {
      img: "/clientLogos/Jyotsnasingh.png",
      name: "Jyotsna Singh",
    },
    {
      img: "/clientLogos/image.png",
      name: "CreatorDesk",
    },
    {
      img: "/clientLogos/littlepineapple.png",
      name: "Little Pineapple",
    },
    {
      img: "/clientLogos/aksh-e-sarfiri.png",
      name: "aksh-e-sarfiri",
    },
    {
      img: "/clientLogos/josh.png",
      name: "Josh App",
    },
    {
      img: "/clientLogos/kancha.png",
      name: "kancha",
    },
    {
      img: "/clientLogos/luminaryPathways.png",
      name: "Luminary Pathways",
    },
    {
      img: "/clientLogos/minsstance.png",
      name: "Minsstance",
    },
    {
      img: "/clientLogos/one7logo.png",
      name: "One7 Sports",
    },
  ];

  // Check if mobile on client side
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isClient || !horizontalRef.current || isMobile) return;

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

        // Only apply horizontal scroll on desktop
        const sections = gsap.utils.toArray(".panel");
        if (sections.length > 0 && horizontalRef.current && !isMobile) {
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: horizontalRef.current,
              pin: true,
              scrub: 0.5,
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
  }, [isClient, isMobile]);

  // Mobile version with vertical layout
  const MobileProjectsSection = () => (
    <div className="lg:hidden">
      {/* Background image for mobile */}
      <div className="relative">
        <Image
          src="/servicePage.svg"
          alt="Background decoration"
          width={400}
          height={600}
          className="absolute top-0 right-0 opacity-20 -z-10"
        />

        <div className="space-y-8 px-4 sm:px-6 py-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            >
              {/* Project icon */}
              <div className="w-full h-48 bg-black/10 rounded-xl mb-6 relative overflow-hidden">
                <Image
                  src={project.icon}
                  alt={`${project.title} icon`}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Project details */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {project.title}
                </h2>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Client: {project.projectName}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {project.projectDes}
                  </p>

                  {project.liveLink &&
                    project.liveLink.trim() &&
                    project.liveLink !== "https://example.com" && (
                      <a
                        href={project.liveLink}
                        className="inline-block bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors hover:bg-gray-800"
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
        </div>
      </div>
    </div>
  );

  // Desktop version with horizontal scroll
  const DesktopProjectsSection = () => (
    <section
      ref={horizontalRef}
      className="hidden lg:block relative h-screen"
      style={{ width: isMobile ? "100vw" : `${projects.length * 100}vw` }}
    >
      <Image
        src="/servicePage.svg"
        alt="Background decoration"
        width={800}
        height={1100}
        className="absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 -z-10 opacity-30"
      />

      <div className="flex h-full ">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" panel flex items-center justify-center w-screen text-black px-8 xl:px-20"
          >
            <div className="border-2 rounded-2xl py-10 px-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
              {/* Project image */}
              <div className="aspect-video bg-black/20 rounded-2xl backdrop-blur-sm relative overflow-hidden">
                <Image
                  src={project.icon}
                  alt={`${project.title} icon`}
                  fill
                  className="object-contain p-8"
                />
              </div>

              {/* Project details */}
              <div className="space-y-6">
                <h1 className="text-3xl xl:text-5xl font-bold leading-tight">
                  {project.title}
                </h1>
                <p className="text-black/90 leading-relaxed text-base xl:text-lg">
                  {project.description}
                </p>

                <h2 className="text-2xl xl:text-3xl font-bold">
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
                      className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-800"
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
      </div>
    </section>
  );

  return (
    <div className="fade-in">
      {/* Main Projects Section */}
      {/* <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 sm:px-6 lg:px-20 mt-10">
        Services
      </h1> */}
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    {/* Floating geometric shapes */}
    <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300/20 rounded-full animate-bounce"></div>
    <div className="absolute top-32 right-20 w-16 h-16 bg-blue-300/30 rotate-45 animate-pulse"></div>
    <div className="absolute bottom-32 left-20 w-12 h-12 bg-pink-300/40 rounded-full animate-ping"></div>
    <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-300/25 rounded-lg rotate-12 animate-bounce"></div>
    
    {/* Grid pattern overlay */}
    <div className="absolute inset-0 opacity-5">
      <div className="grid grid-cols-12 gap-4 h-full">
        {[...Array(48)].map((_, i) => (
          <div key={i} className="bg-gray-400 rounded-sm"></div>
        ))}
      </div>
    </div>
  </div>

  {/* Main Header Content */}
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-20 py-16">
    {/* Icon decoration */}
    <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
      <svg
        className="w-10 h-10 text-purple-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    </div>

    {/* Decorative top line */}
    <div className="flex items-center justify-center mb-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent max-w-xs"></div>
      <div className="mx-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
        <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">What We Offer</span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent max-w-xs"></div>
    </div>

    {/* Main Title with Animation */}
    <div className="relative mb-8">
      {/* Background text effect */}
      <h1 className="absolute inset-0 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-200/30 blur-sm animate-pulse">
        Services
      </h1>
      
      {/* Main title */}
      <h1 className="relative font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 animate-gradient tracking-tight">
        Services
      </h1>
      
      {/* Decorative elements around title */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-purple-400/50 rounded-tl-lg"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-blue-400/50 rounded-tr-lg"></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-pink-400/50 rounded-bl-lg"></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-purple-400/50 rounded-br-lg"></div>
    </div>

    {/* Subtitle */}
    <div className="max-w-4xl mx-auto mb-8">
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
        Comprehensive digital solutions tailored to elevate your brand and drive success
      </p>
      <div className="flex items-center justify-center mt-4 space-x-2">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>

    {/* Stats or features */}
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      <div className="text-center group">
        <div className="w-16 h-16 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-bold text-purple-600">6+</span>
        </div>
        <p className="text-sm font-medium text-gray-600">Services Offered</p>
      </div>
      <div className="text-center group">
        <div className="w-16 h-16 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-bold text-blue-600">50+</span>
        </div>
        <p className="text-sm font-medium text-gray-600">Happy Clients</p>
      </div>
      <div className="text-center group">
        <div className="w-16 h-16 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-bold text-pink-600">100%</span>
        </div>
        <p className="text-sm font-medium text-gray-600">Satisfaction</p>
      </div>
    </div>

    {/* Bottom decorative line */}
    <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mx-auto rounded-full"></div>
    
    {/* Scroll indicator */}
    <div className="mt-12 animate-bounce">
      <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>

  {/* Decorative corner elements */}
  <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-purple-400/30 rounded-tl-3xl"></div>
  <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-blue-400/30 rounded-tr-3xl"></div>
  <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-pink-400/30 rounded-bl-3xl"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-purple-400/30 rounded-br-3xl"></div>

  {/* CSS Animations */}
 
</div>

      {/* Conditional rendering based on screen size */}
      <MobileProjectsSection />
      <DesktopProjectsSection />

      {/* Portfolio Gallery */}
      <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] pb-8 sm:pb-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client logos scroll */}
          <div className="relative overflow-hidden mb-8 sm:mb-16">
            <div className="flex animate-scroll">
              {/* First set of items */}
              {clientLogos.map((client, i) => (
                <div
                  key={`first-${i}`}
                  className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 ml-4 sm:ml-6 rounded-lg mb-4 relative overflow-hidden bg-white"
                >
                  <Image
                    src={client.img}
                    alt={client.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client, i) => (
                <div
                  key={`second-${i}`}
                  className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 ml-4 sm:ml-6 rounded-lg mb-4 relative overflow-hidden bg-white"
                >
                  <Image
                    src={client.img}
                    alt={client.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>


          {/* Project cards */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                style={{
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 1}deg)`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="p-4 sm:p-6">

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

                  <h3 className="font-bold mb-1 text-sm sm:text-base">{item.title}</h3>
                  <h3 className="font-bold mb-1 text-sm sm:text-base">{item.role}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500">
                      Description
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div> */}


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-0"
                style={{
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 1}deg)`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gradient overlay for visual depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quote decoration */}
                {/* <div className="absolute top-4 right-4 text-gray-200 group-hover:text-blue-200 transition-colors duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div> */}

                <div className="relative p-6 sm:p-8">
                  {/* Header with avatar and rating */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Avatar placeholder with gradient */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {item.title?.charAt(0) || "U"}
                        </span>
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>

                    {/* Star rating with improved styling */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          className="w-4 h-4 text-yellow-400 drop-shadow-sm"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="space-y-4">
                    {/* Name with enhanced typography */}
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.role && (
                        <p className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                          {item.role}
                        </p>
                      )}
                    </div>

                    {/* Testimonial text with better readability */}
                    <div className="relative">
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {`"${item.description}"`}
                      </p>
                      {/* Gradient fade for long text */}
                      {/* <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none opacity-50"></div> */}
                    </div>
                  </div>

                  {/* Footer section with enhanced styling */}
                  <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client Testimonial
                      </span>

                      {/* Verified badge */}
                      <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect decoration */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                {/* Floating elements for visual interest */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-100"></div>
                <div className="absolute bottom-8 right-8 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

       <style jsx>{`
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

    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `}</style>
    </div>
  );
};

export default Projects;
