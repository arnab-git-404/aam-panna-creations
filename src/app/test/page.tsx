
// // // // "use client";
// // // // const Team = () => {

// // // //   return (
// // // //     <div className="min-h-screen  ">
// // // //       <h1 className="text-4xl font-bold text-center mt-12">Testing Page</h1>
// // // //     </div>
// // // //   );
// // // // };

// // // // =====================================================================================================================================================

// // // "use client";
// // // import { useEffect, useRef } from "react";
// // // import gsap from "gsap";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // import LocomotiveScroll from "locomotive-scroll";
// // // import "locomotive-scroll/dist/locomotive-scroll.css";

// // // gsap.registerPlugin(ScrollTrigger);

// // // export default function HorizontalScroll() {


// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "Website Development",
// // //       description : [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName : "Lagun Advisor",
// // //       projectDes : "A platform for personalized travel recommendations.",
// // //       liveLink : "https://lagunadvisor.com"
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Mentorship and Consultancy",
// // //       description : [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName : "nam pata naahi ha mereko",
// // //       projectDes : "nam ke description vej dena.",
// // //       liveLink : "https://lagunadvisor.com"
// // //     },
// // //     {
// // //       id: 3,
// // //       title: " Personal Branding",
// // //       description : [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName : "data nahi mila haa avi tak",
// // //       projectDes : " milega fir dal dun ga.",
// // //       liveLink : "https://lagunadvisor.com"
// // //     },
// // //      {
// // //       id: 4,
// // //       title: "UI/UX Design and Development",
// // //       description : [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName : "nahi pata avi ",
// // //       projectDes : " happy ganesh pujaaa ",
// // //       liveLink : " ",
// // //     },
// // //     {
// // //       id: 5,
// // //       title: "Content Writing",
// // //       description : [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName : "Content Creator",
// // //       projectDes : "Creating engaging content for various platforms.",
// // //       liveLink : "https://lagunadvisor.com"
// // //     },
// // //     {
// // //       id: 6,
// // //       title: "Podcast editing",
// // //       description : [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName : " hamko v karna ha podcast",
// // //       projectDes : "chalo binith ek podcast krte haain",
// // //       liveLink : "https://lagunadvisor.com"
// // //     },

// // //   ];




// // //   const scrollRef = useRef(null);
// // //   const horizontalRef = useRef(null);

// // //   useEffect(() => {
// // //     // 🚀 Init Locomotive Scroll
// // //     const locoScroll = new LocomotiveScroll({
// // //       el: scrollRef.current,
// // //       smooth: true,
// // //       lerp: 0.08, // smoothness
// // //     });

// // //     locoScroll.on("scroll", ScrollTrigger.update);

// // //     ScrollTrigger.scrollerProxy(scrollRef.current, {
// // //       scrollTop(value) {
// // //         return arguments.length
// // //           ? locoScroll.scrollTo(value, 0, 0)
// // //           : locoScroll.scroll.instance.scroll.y;
// // //       },
// // //       getBoundingClientRect() {
// // //         return {
// // //           top: 0,
// // //           left: 0,
// // //           width: window.innerWidth,
// // //           height: window.innerHeight,
// // //         };
// // //       },
// // //       pinType: scrollRef.current.style.transform ? "transform" : "fixed",
// // //     });

// // //     // 🚀 Horizontal Scroll Animation
// // //     const sections = gsap.utils.toArray(".panel");
// // //     gsap.to(sections, {
// // //       xPercent: -100 * (sections.length - 1),
// // //       ease: "none",
// // //       scrollTrigger: {
// // //         trigger: horizontalRef.current,
// // //         scroller: scrollRef.current, // use locomotive as scroller
// // //         pin: true,
// // //         scrub: 1,
// // //         snap: 1 / (sections.length - 1),
// // //         end: () => "+=" + horizontalRef.current.offsetWidth,
// // //       },
// // //     });

// // //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// // //     ScrollTrigger.refresh();

// // //     return () => {
// // //       locoScroll.destroy();
// // //       ScrollTrigger.kill();
// // //     };
// // //   }, []);

// // //   return (
// // //     <div ref={scrollRef} data-scroll-container className="bg-gray-100">
// // //       {/* Normal Content */}
// // //       <section className="h-screen flex items-center justify-center text-4xl font-bold bg-purple-500 text-white">
// // //         Scroll Down ⬇️
// // //       </section>

// // //       {/* Horizontal Scroll Section */}
// // //       <section
// // //         ref={horizontalRef}
// // //         className="relative h-screen flex w-[400%]" // 4 panels
// // //       >
// // //         {/* <div className="panel flex items-center justify-center w-screen bg-red-500 text-white text-4xl">
// // //           First Panel
// // //         </div>
// // //         <div className="panel flex items-center justify-center w-screen bg-blue-500 text-white text-4xl">
// // //           Second Panel
// // //         </div>
// // //         <div className="panel flex items-center justify-center w-screen bg-green-500 text-white text-4xl">
// // //           Third Panel
// // //         </div>
// // //         <div className="panel flex items-center justify-center w-screen bg-yellow-500 text-black text-4xl">
// // //           Fourth Panel
// // //         </div> */}

// // //                 {projects.map((project) => (
// // //                 <div key={project.id} className="space-y-4">
// // //                   <h1 className="text-5xl font-bold text-primary">
// // //                     {project.title}
// // //                   </h1>
// // //                   <p className="text-muted-foreground leading-relaxed">
// // //                     {project.description}
// // //                   </p>

// // //                   <h2 className="text-3xl font-bold text-primary">
// // //                     Client : {project.projectName}
// // //                   </h2>
// // //                   <p className="text-muted-foreground leading-relaxed">
// // //                     {project.projectDes}
// // //                   </p>
// // //                   <a
// // //                     href={project.liveLink}
// // //                     className="text-primary underline"
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                   >
// // //                     View Project
// // //                   </a>
// // //                 </div>
// // //               ))}

// // //       </section>

// // //       {/* After Horizontal Scroll */}
// // //       <section className="h-screen flex items-center justify-center text-4xl font-bold bg-black text-white">
// // //         Back to Normal Scroll ⬆️
// // //       </section>
// // //     </div>
// // //   );
// // // }


// // "use client";
// // import { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import LocomotiveScroll from "locomotive-scroll";
// // import "locomotive-scroll/dist/locomotive-scroll.css";

// // gsap.registerPlugin(ScrollTrigger);

// // export default function HorizontalScroll() {
// //   const projects = [
// //     {
// //       id: 1,
// //       title: "Website Development",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Lagun Advisor",
// //       projectDes: "A platform for personalized travel recommendations.",
// //       liveLink: "https://lagunadvisor.com"
// //     },
// //     {
// //       id: 2,
// //       title: "Mentorship and Consultancy",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "nam pata naahi ha mereko",
// //       projectDes: "nam ke description vej dena.",
// //       liveLink: "https://lagunadvisor.com"
// //     },
// //     {
// //       id: 3,
// //       title: "Personal Branding",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "data nahi mila haa avi tak",
// //       projectDes: " milega fir dal dun ga.",
// //       liveLink: "https://lagunadvisor.com"
// //     },
// //     {
// //       id: 4,
// //       title: "UI/UX Design and Development",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "nahi pata avi ",
// //       projectDes: " happy ganesh pujaaa ",
// //       liveLink: " ",
// //     },
// //     {
// //       id: 5,
// //       title: "Content Writing",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Content Creator",
// //       projectDes: "Creating engaging content for various platforms.",
// //       liveLink: "https://lagunadvisor.com"
// //     },
// //     {
// //       id: 6,
// //       title: "Podcast editing",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: " hamko v karna ha podcast",
// //       projectDes: "chalo binith ek podcast krte haain",
// //       liveLink: "https://lagunadvisor.com"
// //     },
// //   ];

// //   const scrollRef = useRef(null);
// //   const horizontalRef = useRef(null);

// //   useEffect(() => {
// //       if (!scrollRef.current) return; // ✅ bail if not ready

// //     // 🚀 Init Locomotive Scroll
// //     const locoScroll = new LocomotiveScroll({
// //       el: scrollRef.current,
// //       smooth: true,
// //       lerp: 0.08, // smoothness
// //     });

// //     locoScroll.on("scroll", ScrollTrigger.update);

// //     ScrollTrigger.scrollerProxy(scrollRef.current, {
// //       scrollTop(value) {
// //         return arguments.length
// //           ? locoScroll.scrollTo(value, 0, 0)
// //           : locoScroll.scroll.instance.scroll.y;
// //       },
// //       getBoundingClientRect() {
// //         return {
// //           top: 0,
// //           left: 0,
// //           width: window.innerWidth,
// //           height: window.innerHeight,
// //         };
// //       },
// //       pinType: scrollRef.current.style.transform ? "transform" : "fixed",
// //     });

// //     // 🚀 Horizontal Scroll Animation
// //     const sections = gsap.utils.toArray(".panel");
// //     if (sections.length > 0) {
// //       gsap.to(sections, {
// //         xPercent: -100 * (sections.length - 1),
// //         ease: "none",
// //         scrollTrigger: {
// //           trigger: horizontalRef.current,
// //           scroller: scrollRef.current, // use locomotive as scroller
// //           pin: true,
// //           scrub: 1,
// //           snap: 1 / (sections.length - 1),
// //           end: () => "+=" + horizontalRef.current.offsetWidth,
// //         },
// //       });
// //     }

// //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// //     ScrollTrigger.refresh();

// //     return () => {
// //       locoScroll.destroy();
// //       ScrollTrigger.kill();
// //     };
// //   }, []);

// //   return (
// //     <div ref={scrollRef} data-scroll-container className="bg-gray-100">
// //       {/* Normal Content */}
// //       <section className="h-screen flex items-center justify-center text-4xl font-bold bg-purple-500 text-white">
// //         Scroll Down ⬇️
// //       </section>

// //       {/* Horizontal Scroll Section */}
// //       <section
// //         ref={horizontalRef}
// //         className="relative h-screen flex"
// //         style={{ width: `${projects.length * 100}vw` }}
// //       >
// //         {projects.map((project) => (
// //           <div key={project.id} className="panel flex items-center justify-center w-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-20">
// //             <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //               {/* Left side - Project image placeholder */}
// //               <div className="aspect-video bg-white/20 rounded-lg backdrop-blur-sm"></div>

// //               {/* Right side - Project details */}
// //               <div className="space-y-6">
// //                 <h1 className="text-5xl font-bold">
// //                   {project.title}
// //                 </h1>
// //                 <p className="text-white/90 leading-relaxed text-lg">
// //                   {project.description}
// //                 </p>

// //                 <h2 className="text-3xl font-bold">
// //                   Client: {project.projectName}
// //                 </h2>
// //                 <p className="text-white/90 leading-relaxed">
// //                   {project.projectDes}
// //                 </p>
// //                 {project.liveLink && project.liveLink.trim() && (
// //                   <a
// //                     href={project.liveLink}
// //                     className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
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
// //       </section>

// //       {/* After Horizontal Scroll */}
// //       <section className="h-screen flex items-center justify-center text-4xl font-bold bg-black text-white">
// //         Back to Normal Scroll ⬆️
// //       </section>
// //     </div>
// //   );
// // }



// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// gsap.registerPlugin(ScrollTrigger);

// export default function HorizontalScroll() {
//   const projects = [
//     {
//       id: 1,
//       title: "Website Development",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "Lagun Advisor",
//       projectDes: "A platform for personalized travel recommendations.",
//       liveLink: "https://lagunadvisor.com"
//     },
//     {
//       id: 2,
//       title: "Mentorship and Consultancy",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "nam pata naahi ha mereko",
//       projectDes: "nam ke description vej dena.",
//       liveLink: "https://lagunadvisor.com"
//     },
//     {
//       id: 3,
//       title: "Personal Branding",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "data nahi mila haa avi tak",
//       projectDes: " milega fir dal dun ga.",
//       liveLink: "https://lagunadvisor.com"
//     },
//     {
//       id: 4,
//       title: "UI/UX Design and Development",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "nahi pata avi ",
//       projectDes: " happy ganesh pujaaa ",
//       liveLink: " ",
//     },
//     {
//       id: 5,
//       title: "Content Writing",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: "Content Creator",
//       projectDes: "Creating engaging content for various platforms.",
//       liveLink: "https://lagunadvisor.com"
//     },
//     {
//       id: 6,
//       title: "Podcast editing",
//       description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       ],
//       projectName: " hamko v karna ha podcast",
//       projectDes: "chalo binith ek podcast krte haain",
//       liveLink: "https://lagunadvisor.com"
//     },
//   ];

//   const scrollRef = useRef<HTMLDivElement>(null);
//   const horizontalRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     // ✅ Check if refs are available and we're in browser
//     if (!scrollRef.current || !horizontalRef.current || typeof window === 'undefined') return;

//     // 🚀 Init Locomotive Scroll
//     const locoScroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//       lerp: 0.08, // smoothness
//     });

//     locoScroll.on("scroll", ScrollTrigger.update);

//     // ScrollTrigger.scrollerProxy(scrollRef.current, {
//     //   scrollTop(value) {
//     //     return arguments.length
//     //       ? locoScroll.scrollTo(value, 0)
//     //       : locoScroll.scroll.instance.scroll.y;
//     //   },
//     //   getBoundingClientRect() {
//     //     return {
//     //       top: 0,
//     //       left: 0,
//     //       width: window.innerWidth,
//     //       height: window.innerHeight,
//     //     };
//     //   },
//     //   pinType: scrollRef.current?.style.transform ? "transform" : "fixed",
//     // });

//     // ScrollTrigger.scrollerProxy(scrollRef.current, {
//     //   scrollTop(value) {
//     //     return arguments.length
//     //       ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
//     //       : locoScroll.scroll.instance.scroll.y;
//     //   },
//     //   getBoundingClientRect() {
//     //     return {
//     //       top: 0,
//     //       left: 0,
//     //       width: window.innerWidth,
//     //       height: window.innerHeight,
//     //     };
//     //   },
//     //   pinType: scrollRef.current?.style.transform ? "transform" : "fixed",
//     // });


//     // 3rd
// // ScrollTrigger.scrollerProxy(scrollRef.current, {
// //       scrollTop(value) {
// //         if (arguments.length) {
// //           // Only call scrollTo if value is defined and valid
// //           if (typeof value === 'number') {
// //             locoScroll.scrollTo(value, { duration: 0, disableLerp: true });
// //           }
// //           return value || 0;
// //         } else {
// //           // Access scroll position through the correct API
// //           return locoScroll.scroll?.instance?.scroll?.y || 0;
// //         }
// //       },
// //       getBoundingClientRect() {
// //         return {
// //           top: 0,
// //           left: 0,
// //           width: window.innerWidth,
// //           height: window.innerHeight,
// //         };
// //       },
// //       pinType: scrollRef.current?.style.transform ? "transform" : "fixed",
// //     });

// // 4th
//   ScrollTrigger.scrollerProxy(scrollRef.current, {
//       scrollTop(value) {
//         if (arguments.length) {
//           // Only call scrollTo if value is defined and valid
//           if (typeof value === 'number') {
//             locoScroll.scrollTo(value, { duration: 0, disableLerp: true });
//           }
//           return value || 0;
//         } else {
//           // Access scroll position through the correct API

//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           return (locoScroll as any).scroll?.instance?.scroll?.y || 0;
//         }
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       pinType: scrollRef.current?.style.transform ? "transform" : "fixed",
//     });



//     // 🚀 Horizontal Scroll Animation
//     const sections = gsap.utils.toArray(".panel");
//     if (sections.length > 0 && horizontalRef.current) {
//       gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: horizontalRef.current,
//           scroller: scrollRef.current, // use locomotive as scroller
//           pin: true,
//           scrub: 1,
//           snap: 1 / (sections.length - 1),
//           end: () => "+=" + (horizontalRef.current?.offsetWidth || 0),
//         },
//       });
//     }

//     // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     // ScrollTrigger.refresh();

//     ScrollTrigger.addEventListener("refresh", () => {
//       if (locoScroll) {
//         locoScroll.update();
//       }
//     });
//     ScrollTrigger.refresh();



//     return () => {
//       if (locoScroll) {
//         locoScroll.destroy();
//       }
//       ScrollTrigger.killAll();
//     };
//   }, []);

//   return (
//     <div ref={scrollRef} data-scroll-container className="bg-gray-100">
//       {/* Normal Content */}
//       <section className="h-screen flex items-center justify-center text-4xl font-bold bg-purple-500 text-white">
//         Scroll Down ⬇️
//       </section>

//       {/* Horizontal Scroll Section */}
//       <section
//         ref={horizontalRef}
//         className="relative h-screen flex"
//         style={{ width: `${projects.length * 100}vw` }}
//       >
//         {projects.map((project) => (
//           <div key={project.id} className="panel flex items-center justify-center w-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-20">
//             <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               {/* Left side - Project image placeholder */}
//               <div className="aspect-video bg-white/20 rounded-lg backdrop-blur-sm"></div>

//               {/* Right side - Project details */}
//               <div className="space-y-6">
//                 <h1 className="text-5xl font-bold">
//                   {project.title}
//                 </h1>
//                 <p className="text-white/90 leading-relaxed text-lg">
//                   {project.description}
//                 </p>

//                 <h2 className="text-3xl font-bold">
//                   Client: {project.projectName}
//                 </h2>
//                 <p className="text-white/90 leading-relaxed">
//                   {project.projectDes}
//                 </p>
//                 {project.liveLink && project.liveLink.trim() && (
//                   <a
//                     href={project.liveLink}
//                     className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Project
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* After Horizontal Scroll */}
//       <section className="h-screen flex items-center justify-center text-4xl font-bold bg-black text-white">
//         Back to Normal Scroll ⬆️
//       </section>
//     </div>
//   );
// }



/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ Dynamic import to prevent SSR issues
import dynamic from "next/dynamic";

// Dynamically import LocomotiveScroll to avoid SSR issues
const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const projects = [
    {
      id: 1,
      title: "Website Development",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "Lagun Advisor",
      projectDes: "A platform for personalized travel recommendations.",
      liveLink: "https://lagunadvisor.com"
    },
    {
      id: 2,
      title: "Mentorship and Consultancy",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "nam pata naahi ha mereko",
      projectDes: "nam ke description vej dena.",
      liveLink: "https://lagunadvisor.com"
    },
    {
      id: 3,
      title: "Personal Branding",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "data nahi mila haa avi tak",
      projectDes: " milega fir dal dun ga.",
      liveLink: "https://lagunadvisor.com"
    },
    {
      id: 4,
      title: "UI/UX Design and Development",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "nahi pata avi ",
      projectDes: " happy ganesh pujaaa ",
      liveLink: " ",
    },
    {
      id: 5,
      title: "Content Writing",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: "Content Creator",
      projectDes: "Creating engaging content for various platforms.",
      liveLink: "https://lagunadvisor.com"
    },
    {
      id: 6,
      title: "Podcast editing",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
      ],
      projectName: " hamko v karna ha podcast",
      projectDes: "chalo binith ek podcast krte haain",
      liveLink: "https://lagunadvisor.com"
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // ✅ Check if we're in browser and refs are available
    if (!scrollRef.current || !horizontalRef.current || typeof window === 'undefined') return;

    let locoScroll: any;
    let scrollY = 0;

    const initializeLocomotiveScroll = async () => {
      // ✅ Dynamically import LocomotiveScroll
      const LocomotiveScrollClass = (await import("locomotive-scroll")).default;
      
      // ✅ Import CSS
      await import("locomotive-scroll/dist/locomotive-scroll.css");

      // 🚀 Init Locomotive Scroll
      locoScroll = new LocomotiveScrollClass({
        el: scrollRef.current!,
        smooth: true,
        lerp: 0.08, // smoothness
      });

      // Track scroll position
      locoScroll.on("scroll", (instance: any) => {
        scrollY = instance.scroll.y;
        ScrollTrigger.update();
      });

      ScrollTrigger.scrollerProxy(scrollRef.current!, {
        scrollTop(value) {
          if (arguments.length) {
            if (typeof value === 'number') {
              locoScroll.scrollTo(value, { duration: 0, disableLerp: true });
            }
            return value || 0;
          } else {
            return scrollY;
          }
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollRef.current?.style.transform ? "transform" : "fixed",
      });

      // 🚀 Horizontal Scroll Animation
      const sections = gsap.utils.toArray(".panel");
      if (sections.length > 0 && horizontalRef.current) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            scroller: scrollRef.current, // use locomotive as scroller
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + (horizontalRef.current?.offsetWidth || 0),
          },
        });
      }

      ScrollTrigger.addEventListener("refresh", () => {
        if (locoScroll) {
          locoScroll.update();
        }
      });
      ScrollTrigger.refresh();
    };

    initializeLocomotiveScroll();

    return () => {
      if (locoScroll) {
        locoScroll.destroy();
      }
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="bg-gray-100">
      {/* Normal Content */}
      <section className="h-screen flex items-center justify-center text-4xl font-bold bg-purple-500 text-white">
        Scroll Down ⬇️
      </section>

      {/* Horizontal Scroll Section */}
      <section
        ref={horizontalRef}
        className="relative h-screen flex"
        style={{ width: `${projects.length * 100}vw` }}
      >
        {projects.map((project) => (
          <div key={project.id} className="panel flex items-center justify-center w-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-20">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Project image placeholder */}
              <div className="aspect-video bg-white/20 rounded-lg backdrop-blur-sm"></div>

              {/* Right side - Project details */}
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">
                  {project.title}
                </h1>
                <p className="text-white/90 leading-relaxed text-lg">
                  {project.description}
                </p>

                <h2 className="text-3xl font-bold">
                  Client: {project.projectName}
                </h2>
                <p className="text-white/90 leading-relaxed">
                  {project.projectDes}
                </p>
                {project.liveLink && project.liveLink.trim() && (
                  <a
                    href={project.liveLink}
                    className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
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

      {/* After Horizontal Scroll */}
      <section className="h-screen flex items-center justify-center text-4xl font-bold bg-black text-white">
        Back to Normal Scroll ⬆️
      </section>
    </div>
  );
}