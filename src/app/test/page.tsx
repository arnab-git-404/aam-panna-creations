// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import Image from "next/image";

// // const Projects = () => {
// //   const [isClient, setIsClient] = useState(false);
// //   const [isMobile, setIsMobile] = useState(false);
// //   const horizontalRef = useRef<HTMLElement>(null);

// //   const projects = [
// //     {
// //       id: 1,
// //       title: "Web Design & Development",
// //       icon: "/services/Code.svg",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Lagun Advisor",
// //       projectDes: "A platform for personalized travel recommendations.",
// //       liveLink: "https://lagunadvisor.com",
// //     },
// //     {
// //       id: 2,
// //       title: "Social Media Management",
// //       icon: "/services/Social media.svg",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Social Media Pro",
// //       projectDes: "Professional social media management solutions.",
// //       liveLink: "https://lagunadvisor.com",
// //     },
// //     {
// //       id: 3,
// //       title: "Personal Branding",
// //       icon: "/services/Personal branding.svg",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Brand Builder",
// //       projectDes: "Comprehensive personal branding services.",
// //       liveLink: "https://lagunadvisor.com",
// //     },
// //     {
// //       id: 4,
// //       title: "UI/UX Design and Development",
// //       icon: "/services/UX Design.svg",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Design Studio",
// //       projectDes: "Modern UI/UX design solutions for digital products.",
// //       liveLink: "https://example.com",
// //     },
// //     {
// //       id: 5,
// //       title: "Digital Marketing",
// //       icon: "/services/Mentorship and consultancy.svg",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Content Creator",
// //       projectDes: "Creating engaging content for various platforms.",
// //       liveLink: "https://lagunadvisor.com",
// //     },
// //     {
// //       id: 6,
// //       title: "Podcast Editing",
// //       icon: "/services/Podcast editing.svg",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Podcast Pro",
// //       projectDes: "Professional podcast editing and production services.",
// //       liveLink: "https://lagunadvisor.com",
// //     },
// //   ];

// //   const portfolioItems = [
// //     { id: 1, title: "Project Alpha", description: "Mobile App Design" },
// //     { id: 2, title: "Project Beta", description: "Website Development" },
// //     { id: 3, title: "Project Gamma", description: "Brand Identity" },
// //     { id: 4, title: "Project Delta", description: "Digital Marketing" },
// //   ];

// //   interface Client {
// //     img: string;
// //     name: string;
// //   }

// //   const clientLogos: Client[] = [
// //     { img: "https://via.placeholder.com/128x128/6366f1/ffffff?text=CL", name: "ClayLab" },
// //     { img: "https://via.placeholder.com/128x128/8b5cf6/ffffff?text=WL", name: "Wolnut" },
// //     { img: "https://via.placeholder.com/128x128/ec4899/ffffff?text=JS", name: "Jyotsna Singh" },
// //     { img: "https://via.placeholder.com/128x128/10b981/ffffff?text=CD", name: "CreatorDesk" },
// //     { img: "https://via.placeholder.com/128x128/f59e0b/ffffff?text=LP", name: "Little Pineapple" },
// //     { img: "https://via.placeholder.com/128x128/ef4444/ffffff?text=AS", name: "aksh-e-sarfiri" },
// //     { img: "https://via.placeholder.com/128x128/3b82f6/ffffff?text=JA", name: "Josh App" },
// //     { img: "https://via.placeholder.com/128x128/06b6d4/ffffff?text=KA", name: "kancha" },
// //     { img: "https://via.placeholder.com/128x128/8b5cf6/ffffff?text=LP", name: "Luminary Pathways" },
// //     { img: "https://via.placeholder.com/128x128/f97316/ffffff?text=MI", name: "Minsstance" },
// //     { img: "https://via.placeholder.com/128x128/84cc16/ffffff?text=O7", name: "One7 Sports" },
// //   ];

// //   // Check if device is mobile
// //   useEffect(() => {
// //     const checkMobile = () => {
// //       setIsMobile(window.innerWidth < 768);
// //     };

// //     checkMobile();
// //     window.addEventListener('resize', checkMobile);

// //     return () => window.removeEventListener('resize', checkMobile);
// //   }, []);

// //   useEffect(() => {
// //     setIsClient(true);
// //   }, []);

// //   useEffect(() => {
// //     if (!isClient || !horizontalRef.current || isMobile) return;

// //     let gsap: any;
// //     let ScrollTrigger: any;

// //     const initializeGSAP = async () => {
// //       try {
// //         const gsapModule = await import("gsap");
// //         const scrollTriggerModule = await import("gsap/ScrollTrigger");

// //         gsap = gsapModule.gsap || gsapModule.default;
// //         ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

// //         if (!gsap || !ScrollTrigger) {
// //           console.error("Failed to load GSAP libraries");
// //           return;
// //         }

// //         gsap.registerPlugin(ScrollTrigger);

// //         const sections = gsap.utils.toArray(".panel");
// //         if (sections.length > 0 && horizontalRef.current) {
// //           gsap.to(sections, {
// //             xPercent: -100 * (sections.length - 1),
// //             ease: "none",
// //             scrollTrigger: {
// //               trigger: horizontalRef.current,
// //               pin: true,
// //               scrub: 0.5,
// //               snap: 1 / (sections.length - 1),
// //               end: () => "+=" + (horizontalRef.current?.offsetWidth || 0),
// //             },
// //           });
// //         }

// //         ScrollTrigger.refresh();
// //       } catch (error) {
// //         console.error("Error initializing GSAP:", error);
// //       }
// //     };

// //     initializeGSAP();

// //     return () => {
// //       try {
// //         if (ScrollTrigger) {
// //           ScrollTrigger.killAll();
// //         }
// //       } catch (error) {
// //         console.error("Error during cleanup:", error);
// //       }
// //     };
// //   }, [isClient, isMobile]);

// //   // Mobile version - vertical scrolling
// //   const MobileServicesSection = () => (
// //     <section className="py-8 px-4">
// //       <div className="space-y-8">
// //         {projects.map((project, index) => (
// //           <div
// //             key={project.id}
// //             className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${
// //               index % 2 === 0 ? 'ml-4' : 'mr-4'
// //             }`}
// //           >
// //             {/* Service Icon */}
// //             <div className="w-16 h-16 bg-white/20 rounded-xl mb-4 flex items-center justify-center">
// //               <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded"></div>
// //             </div>

// //             {/* Content */}
// //             <div className="space-y-4">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{project.title}</h2>
// //               <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
// //                 {project.description[0]}
// //               </p>

// //               <div className="pt-4 border-t border-white/20">
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
// //                   Client: {project.projectName}
// //                 </h3>
// //                 <p className="text-sm text-gray-600 mb-4">{project.projectDes}</p>

// //                 {project.liveLink &&
// //                  project.liveLink.trim() &&
// //                  project.liveLink !== "https://example.com" && (
// //                   <a
// //                     href={project.liveLink}
// //                     className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                   >
// //                     View Project
// //                   </a>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );

// //   // Desktop version - horizontal scrolling
// //   const DesktopServicesSection = () => (
// //     <section
// //       ref={horizontalRef}
// //       className="relative h-screen flex"
// //       style={{ width: `${projects.length * 100}vw` }}
// //     >
// //       <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 -z-10"></div>

// //       {projects.map((project) => (
// //         <div
// //           key={project.id}
// //           className="panel flex items-center justify-center w-screen text-black p-8 lg:p-20"
// //         >
// //           <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl">
// //             {/* Project image */}
// //             <div className="aspect-video bg-black/10 rounded-3xl backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
// //               <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
// //                 <div className="w-12 h-12 bg-white rounded-lg opacity-80"></div>
// //               </div>
// //             </div>

// //             {/* Project details */}
// //             <div className="space-y-4 lg:space-y-6">
// //               <h1 className="text-3xl lg:text-5xl font-bold leading-tight">{project.title}</h1>
// //               <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
// //                 {project.description[0]}
// //               </p>

// //               <h2 className="text-2xl lg:text-3xl font-bold pt-4">
// //                 Client: {project.projectName}
// //               </h2>
// //               <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
// //                 {project.projectDes}
// //               </p>

// //               {project.liveLink &&
// //                project.liveLink.trim() &&
// //                project.liveLink !== "https://example.com" && (
// //                 <a
// //                   href={project.liveLink}
// //                   className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   View Project
// //                 </a>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </section>
// //   );

// //   return (
// //     <div className="fade-in">
// //       {/* Header */}
// //       <div className="px-4 sm:px-6 lg:px-20">
// //         <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl mt-6 lg:mt-10 text-gray-800">
// //           Services
// //         </h1>
// //       </div>

// //       {/* Services Section - Conditional rendering based on screen size */}
// //       {isMobile ? <MobileServicesSection /> : <DesktopServicesSection />}

// //       {/* Portfolio Gallery */}
// //       <section className="bg-gradient-to-b from-white to-pink-400 pb-8 lg:pb-16">
// //         <div className="mx-auto px-4 sm:px-6 lg:px-8">

// //           {/* Client Logos Carousel */}
// //           <div className="relative overflow-hidden mb-8 lg:mb-16">
// //             <div className="flex animate-scroll space-x-4">
// //               {/* First set */}
// //               {clientLogos.map((client, i) => (
// //                 <div
// //                   key={`first-${i}`}
// //                   className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 border-white/20 rounded-lg relative overflow-hidden bg-white/10 backdrop-blur-sm"
// //                 >
// //                   <img
// //                     src={client.img}
// //                     alt={client.name}
// //                     className="w-full h-full object-contain p-2"
// //                   />
// //                 </div>
// //               ))}

// //               {/* Duplicate set for seamless loop */}
// //               {clientLogos.map((client, i) => (
// //                 <div
// //                   key={`second-${i}`}
// //                   className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 border-white/20 rounded-lg relative overflow-hidden bg-white/10 backdrop-blur-sm"
// //                 >
// //                   <img
// //                     src={client.img}
// //                     alt={client.name}
// //                     className="w-full h-full object-contain p-2"
// //                   />
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Project Cards */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
// //             {portfolioItems.map((item, index) => (
// //               <div
// //                 key={item.id}
// //                 className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:rotate-0 transition-all duration-300 hover:scale-105"
// //                 style={{
// //                   transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 1}deg)`,
// //                 }}
// //               >
// //                 {/* Project Image Placeholder */}
// //                 <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400"></div>

// //                 <div className="p-4 lg:p-6">
// //                   <div className="flex items-center justify-between mb-4">
// //                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
// //                     <div className="flex space-x-1">
// //                       {[...Array(5)].map((_, j) => (
// //                         <svg
// //                           key={j}
// //                           className="w-3 h-3 text-yellow-400"
// //                           fill="currentColor"
// //                           viewBox="0 0 24 24"
// //                         >
// //                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //                         </svg>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
// //                   <p className="text-sm text-gray-600 mb-4">{item.description}</p>

// //                   <div className="pt-4 border-t border-gray-200">
// //                     <span className="text-xs text-gray-500 uppercase tracking-wide">
// //                       Portfolio Item
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Custom Styles */}
// //       <style jsx>{`
// //         @keyframes scroll {
// //           0% { transform: translateX(0); }
// //           100% { transform: translateX(-50%); }
// //         }

// //         .animate-scroll {
// //           animation: scroll 30s linear infinite;
// //         }

// //         .animate-scroll:hover {
// //           animation-play-state: paused;
// //         }

// //         .fade-in {
// //           animation: fadeIn 1s ease-in-out;
// //         }

// //         @keyframes fadeIn {
// //           from { opacity: 0; }
// //           to { opacity: 1; }
// //         }

// //         @media (max-width: 768px) {
// //           .animate-scroll {
// //             animation: scroll 20s linear infinite;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Projects;

// // its working but have to check
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// const Projects = () => {
//   const [isClient, setIsClient] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const horizontalRef = useRef<HTMLElement>(null);

//   const projects = [
//     {
//       id: 1,
//       title: "UI/UX Design and development",
//       icon: "/services/Code.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in.",
//       ],
//       projectName: "Lagun Advisor",
//       projectDes: "A platform for personalized travel recommendations.",
//       liveLink: "https://lagunadvisor.com",
//       bgColor: "from-yellow-400 to-orange-500",
//       iconBg: "bg-white/30",
//     },
//     {
//       id: 2,
//       title: "Mentorship and consultancy",
//       icon: "/services/Social media.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in.",
//       ],
//       projectName: "Social Media Pro",
//       projectDes: "Professional social media management solutions.",
//       liveLink: "https://lagunadvisor.com",
//       bgColor: "from-purple-400 to-pink-500",
//       iconBg: "bg-white/30",
//     },
//     {
//       id: 3,
//       title: "Personal branding",
//       icon: "/services/Personal branding.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in.",
//       ],
//       projectName: "Brand Builder",
//       projectDes: "Comprehensive personal branding services.",
//       liveLink: "https://lagunadvisor.com",
//       bgColor: "from-pink-400 to-rose-500",
//       iconBg: "bg-white/30",
//     },
//     {
//       id: 4,
//       title: "Social media management",
//       icon: "/services/UX Design.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in.",
//       ],
//       projectName: "Design Studio",
//       projectDes: "Modern UI/UX design solutions for digital products.",
//       liveLink: "https://example.com",
//       bgColor: "from-purple-500 to-indigo-600",
//       iconBg: "bg-white/30",
//     },
//     {
//       id: 5,
//       title: "Digital Marketing",
//       icon: "/services/Mentorship and consultancy.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in.",
//       ],
//       projectName: "Content Creator",
//       projectDes: "Creating engaging content for various platforms.",
//       liveLink: "https://lagunadvisor.com",
//       bgColor: "from-blue-400 to-cyan-500",
//       iconBg: "bg-white/30",
//     },
//     {
//       id: 6,
//       title: "Podcast Editing",
//       icon: "/services/Podcast editing.svg",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in.",
//       ],
//       projectName: "Podcast Pro",
//       projectDes: "Professional podcast editing and production services.",
//       liveLink: "https://lagunadvisor.com",
//       bgColor: "from-green-400 to-emerald-500",
//       iconBg: "bg-white/30",
//     },
//   ];

//   const portfolioItems = [
//     { id: 1, title: "Project Alpha", description: "Mobile App Design" },
//     { id: 2, title: "Project Beta", description: "Website Development" },
//     { id: 3, title: "Project Gamma", description: "Brand Identity" },
//     { id: 4, title: "Project Delta", description: "Digital Marketing" },
//   ];

//   interface Client {
//     img: string;
//     name: string;
//   }

//   const clientLogos: Client[] = [
//     { img: "https://via.placeholder.com/128x128/6366f1/ffffff?text=CL", name: "ClayLab" },
//     { img: "https://via.placeholder.com/128x128/8b5cf6/ffffff?text=WL", name: "Wolnut" },
//     { img: "https://via.placeholder.com/128x128/ec4899/ffffff?text=JS", name: "Jyotsna Singh" },
//     { img: "https://via.placeholder.com/128x128/10b981/ffffff?text=CD", name: "CreatorDesk" },
//     { img: "https://via.placeholder.com/128x128/f59e0b/ffffff?text=LP", name: "Little Pineapple" },
//     { img: "https://via.placeholder.com/128x128/ef4444/ffffff?text=AS", name: "aksh-e-sarfiri" },
//     { img: "https://via.placeholder.com/128x128/3b82f6/ffffff?text=JA", name: "Josh App" },
//     { img: "https://via.placeholder.com/128x128/06b6d4/ffffff?text=KA", name: "kancha" },
//     { img: "https://via.placeholder.com/128x128/8b5cf6/ffffff?text=LP", name: "Luminary Pathways" },
//     { img: "https://via.placeholder.com/128x128/f97316/ffffff?text=MI", name: "Minsstance" },
//     { img: "https://via.placeholder.com/128x128/84cc16/ffffff?text=O7", name: "One7 Sports" },
//   ];

//   // Enhanced mobile detection with debouncing
//   useEffect(() => {
//     const checkMobile = () => {
//       const isMobileDevice = window.innerWidth < 768;
//       setIsMobile(isMobileDevice);

//       // Clean up GSAP when switching to mobile
//       if (isMobileDevice) {
//         try {
//           const { ScrollTrigger } = require("gsap/ScrollTrigger");
//           if (ScrollTrigger) {
//             ScrollTrigger.killAll();
//           }
//         } catch (error) {
//           // GSAP not loaded yet, ignore
//         }
//       }
//     };

//     // Debounced resize handler
//     let timeoutId: NodeJS.Timeout;
//     const debouncedCheckMobile = () => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(checkMobile, 150);
//     };

//     checkMobile();
//     window.addEventListener('resize', debouncedCheckMobile);

//     return () => {
//       window.removeEventListener('resize', debouncedCheckMobile);
//       clearTimeout(timeoutId);
//     };
//   }, []);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Enhanced GSAP initialization with better error handling
//   useEffect(() => {
//     // Explicitly prevent GSAP on mobile
//     if (!isClient || !horizontalRef.current || isMobile) {
//       console.log('GSAP disabled:', { isClient, hasRef: !!horizontalRef.current, isMobile });
//       return;
//     }

//     let gsap: any;
//     let ScrollTrigger: any;

//     const initializeGSAP = async () => {
//       try {
//         console.log('Initializing GSAP for desktop...');

//         const gsapModule = await import("gsap");
//         const scrollTriggerModule = await import("gsap/ScrollTrigger");

//         gsap = gsapModule.gsap || gsapModule.default;
//         ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

//         if (!gsap || !ScrollTrigger) {
//           console.error("Failed to load GSAP libraries");
//           return;
//         }

//         gsap.registerPlugin(ScrollTrigger);

//         const sections = gsap.utils.toArray(".panel");
//         if (sections.length > 0 && horizontalRef.current) {
//           gsap.to(sections, {
//             xPercent: -100 * (sections.length - 1),
//             ease: "none",
//             scrollTrigger: {
//               trigger: horizontalRef.current,
//               pin: true,
//               scrub: 0.5,
//               snap: 1 / (sections.length - 1),
//               end: () => "+=" + (horizontalRef.current?.offsetWidth || 0),
//             },
//           });
//         }

//         ScrollTrigger.refresh();
//         console.log('GSAP initialized successfully');
//       } catch (error) {
//         console.error("Error initializing GSAP:", error);
//       }
//     };

//     initializeGSAP();

//     return () => {
//       try {
//         if (ScrollTrigger) {
//           ScrollTrigger.killAll();
//           console.log('GSAP cleaned up');
//         }
//       } catch (error) {
//         console.error("Error during GSAP cleanup:", error);
//       }
//     };
//   }, [isClient, isMobile]);

//   // Enhanced Mobile version with better animations
//   const MobileServicesSection = () => (
//     <section className="py-8 px-4 bg-gray-600 min-h-screen">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
//         {projects.map((project, index) => (
//           <div
//             key={project.id}
//             className={`bg-gradient-to-br ${project.bgColor} rounded-3xl p-6 text-white shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up`}
//             style={{
//               animationDelay: `${index * 100}ms`,
//               animationFillMode: 'both'
//             }}
//           >
//             {/* Service Icon */}
//             <div className={`w-12 h-12 ${project.iconBg} rounded-xl mb-4 flex items-center justify-center`}>
//               <svg
//                 className="w-6 h-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//               </svg>
//             </div>

//             {/* Content */}
//             <div className="space-y-3">
//               <h2 className="text-lg sm:text-xl font-bold leading-tight">
//                 {project.title}
//               </h2>
//               <p className="text-white/90 text-sm leading-relaxed line-clamp-4">
//                 {project.description[0]}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );

//   // Desktop version - horizontal scrolling (only renders when NOT mobile)
//   const DesktopServicesSection = () => (
//     <section
//       ref={horizontalRef}
//       className="relative h-screen flex"
//       style={{ width: `${projects.length * 100}vw` }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 -z-10"></div>

//       {projects.map((project) => (
//         <div
//           key={project.id}
//           className="panel flex items-center justify-center w-screen text-black p-8 lg:p-20"
//         >
//           <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl">
//             {/* Project image */}
//             <div className="aspect-video bg-black/10 rounded-3xl backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
//               <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
//                 <div className="w-12 h-12 bg-white rounded-lg opacity-80"></div>
//               </div>
//             </div>

//             {/* Project details */}
//             <div className="space-y-4 lg:space-y-6">
//               <h1 className="text-3xl lg:text-5xl font-bold leading-tight">{project.title}</h1>
//               <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
//                 {project.description[0]}
//               </p>

//               <h2 className="text-2xl lg:text-3xl font-bold pt-4">
//                 Client: {project.projectName}
//               </h2>
//               <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
//                 {project.projectDes}
//               </p>

//               {project.liveLink &&
//                project.liveLink.trim() &&
//                project.liveLink !== "https://example.com" && (
//                 <a
//                   href={project.liveLink}
//                   className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Project
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );

//   return (
//     <div className="fade-in">
//       {/* Header */}
//       <div className="px-4 sm:px-6 lg:px-20">
//         <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl mt-6 lg:mt-10 text-gray-800">
//           Services
//         </h1>

//         {isMobile && (
//           <p className="text-sm text-gray-500 mt-2">
//             Note: This is a mobile view.
//           </p>
//         )}

//         {/* Debug info - remove in production */}
//         <div className="text-sm text-gray-500 mt-2">
//           Mode: {isMobile ? 'Mobile (Card Layout)' : 'Desktop (GSAP Horizontal)'} |
//           Screen: {typeof window !== 'undefined' ? window.innerWidth : 'unknown'}px
//         </div>
//       </div>

//       {/* Services Section - Conditional rendering based on screen size */}
//       {isMobile ? <MobileServicesSection /> : <DesktopServicesSection />}

//       {/* Portfolio Gallery */}
//       <section className="bg-gradient-to-b from-white to-pink-400 pb-8 lg:pb-16">
//         <div className="mx-auto px-4 sm:px-6 lg:px-8">

//           {/* Client Logos Carousel */}
//           <div className="relative overflow-hidden mb-8 lg:mb-16">
//             <div className="flex animate-scroll space-x-4">
//               {/* First set */}
//               {clientLogos.map((client, i) => (
//                 <div
//                   key={`first-${i}`}
//                   className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 border-white/20 rounded-lg relative overflow-hidden bg-white/10 backdrop-blur-sm"
//                 >
//                   <img
//                     src={client.img}
//                     alt={client.name}
//                     className="w-full h-full object-contain p-2"
//                   />
//                 </div>
//               ))}

//               {/* Duplicate set for seamless loop */}
//               {clientLogos.map((client, i) => (
//                 <div
//                   key={`second-${i}`}
//                   className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 border-white/20 rounded-lg relative overflow-hidden bg-white/10 backdrop-blur-sm"
//                 >
//                   <img
//                     src={client.img}
//                     alt={client.name}
//                     className="w-full h-full object-contain p-2"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Project Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
//             {portfolioItems.map((item, index) => (
//               <div
//                 key={item.id}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:rotate-0 transition-all duration-300 hover:scale-105"
//                 style={{
//                   transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 1}deg)`,
//                 }}
//               >
//                 {/* Project Image Placeholder */}
//                 <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400"></div>

//                 <div className="p-4 lg:p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
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

//                   <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
//                   <p className="text-sm text-gray-600 mb-4">{item.description}</p>

//                   <div className="pt-4 border-t border-gray-200">
//                     <span className="text-xs text-gray-500 uppercase tracking-wide">
//                       Portfolio Item
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Custom Styles */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }

//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease-out;
//         }

//         .fade-in {
//           animation: fadeIn 1s ease-in-out;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         .line-clamp-4 {
//           display: -webkit-box;
//           -webkit-line-clamp: 4;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         @media (max-width: 768px) {
//           .animate-scroll {
//             animation: scroll 20s linear infinite;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Projects;

//Component inspired by Kevin Levron:
//https://x.com/soju22/status/1858925191671271801

import { console } from "inspector";
import Ballpit from "../../../components/Ballpit";




const page = () => {





  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "500px",
        maxHeight: "500px",
        width: "100%",
      }}
    >
      <Ballpit
        colors={[0xffff00, 0xff8800, 0xff69b4]}
        gravity={0.01}
        friction={0.9975}
        wallBounce={0.95}
        followCursor={false}
      />
    </div>
  );
};

export default page;
