
"use client";

const Test = () => {
  return (
    <div className="min-h-screen  ">
      <h1 className="text-4xl font-bold text-center mt-12">Testing Page</h1>
    </div>
  );
};
export default Test;

// // // // // =====================================================================================================================================================

// // // // "use client";
// // // // import { useEffect, useRef } from "react";
// // // // import gsap from "gsap";
// // // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // // import LocomotiveScroll from "locomotive-scroll";
// // // // import "locomotive-scroll/dist/locomotive-scroll.css";

// // // // gsap.registerPlugin(ScrollTrigger);

// // // // export default function HorizontalScroll() {


// // // //   const projects = [
// // // //     {
// // // //       id: 1,
// // // //       title: "Website Development",
// // // //       description : [
// // // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // // //       ],
// // // //       projectName : "Lagun Advisor",
// // // //       projectDes : "A platform for personalized travel recommendations.",
// // // //       liveLink : "https://lagunadvisor.com"
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "Mentorship and Consultancy",
// // // //       description : [
// // // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // // //       ],
// // // //       projectName : "nam pata naahi ha mereko",
// // // //       projectDes : "nam ke description vej dena.",
// // // //       liveLink : "https://lagunadvisor.com"
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: " Personal Branding",
// // // //       description : [
// // // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // // //       ],
// // // //       projectName : "data nahi mila haa avi tak",
// // // //       projectDes : " milega fir dal dun ga.",
// // // //       liveLink : "https://lagunadvisor.com"
// // // //     },
// // // //      {
// // // //       id: 4,
// // // //       title: "UI/UX Design and Development",
// // // //       description : [
// // // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // // //       ],
// // // //       projectName : "nahi pata avi ",
// // // //       projectDes : " happy ganesh pujaaa ",
// // // //       liveLink : " ",
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       title: "Content Writing",
// // // //       description : [
// // // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // // //       ],
// // // //       projectName : "Content Creator",
// // // //       projectDes : "Creating engaging content for various platforms.",
// // // //       liveLink : "https://lagunadvisor.com"
// // // //     },
// // // //     {
// // // //       id: 6,
// // // //       title: "Podcast editing",
// // // //       description : [
// // // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // // //       ],
// // // //       projectName : " hamko v karna ha podcast",
// // // //       projectDes : "chalo binith ek podcast krte haain",
// // // //       liveLink : "https://lagunadvisor.com"
// // // //     },

// // // //   ];




// // // //   const scrollRef = useRef(null);
// // // //   const horizontalRef = useRef(null);

// // // //   useEffect(() => {
// // // //     // 🚀 Init Locomotive Scroll
// // // //     const locoScroll = new LocomotiveScroll({
// // // //       el: scrollRef.current,
// // // //       smooth: true,
// // // //       lerp: 0.08, // smoothness
// // // //     });

// // // //     locoScroll.on("scroll", ScrollTrigger.update);

// // // //     ScrollTrigger.scrollerProxy(scrollRef.current, {
// // // //       scrollTop(value) {
// // // //         return arguments.length
// // // //           ? locoScroll.scrollTo(value, 0, 0)
// // // //           : locoScroll.scroll.instance.scroll.y;
// // // //       },
// // // //       getBoundingClientRect() {
// // // //         return {
// // // //           top: 0,
// // // //           left: 0,
// // // //           width: window.innerWidth,
// // // //           height: window.innerHeight,
// // // //         };
// // // //       },
// // // //       pinType: scrollRef.current.style.transform ? "transform" : "fixed",
// // // //     });

// // // //     // 🚀 Horizontal Scroll Animation
// // // //     const sections = gsap.utils.toArray(".panel");
// // // //     gsap.to(sections, {
// // // //       xPercent: -100 * (sections.length - 1),
// // // //       ease: "none",
// // // //       scrollTrigger: {
// // // //         trigger: horizontalRef.current,
// // // //         scroller: scrollRef.current, // use locomotive as scroller
// // // //         pin: true,
// // // //         scrub: 1,
// // // //         snap: 1 / (sections.length - 1),
// // // //         end: () => "+=" + horizontalRef.current.offsetWidth,
// // // //       },
// // // //     });

// // // //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// // // //     ScrollTrigger.refresh();

// // // //     return () => {
// // // //       locoScroll.destroy();
// // // //       ScrollTrigger.kill();
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div ref={scrollRef} data-scroll-container className="bg-gray-100">
// // // //       {/* Normal Content */}
// // // //       <section className="h-screen flex items-center justify-center text-4xl font-bold bg-purple-500 text-white">
// // // //         Scroll Down ⬇️
// // // //       </section>

// // // //       {/* Horizontal Scroll Section */}
// // // //       <section
// // // //         ref={horizontalRef}
// // // //         className="relative h-screen flex w-[400%]" // 4 panels
// // // //       >
// // // //         {/* <div className="panel flex items-center justify-center w-screen bg-red-500 text-white text-4xl">
// // // //           First Panel
// // // //         </div>
// // // //         <div className="panel flex items-center justify-center w-screen bg-blue-500 text-white text-4xl">
// // // //           Second Panel
// // // //         </div>
// // // //         <div className="panel flex items-center justify-center w-screen bg-green-500 text-white text-4xl">
// // // //           Third Panel
// // // //         </div>
// // // //         <div className="panel flex items-center justify-center w-screen bg-yellow-500 text-black text-4xl">
// // // //           Fourth Panel
// // // //         </div> */}

// // // //                 {projects.map((project) => (
// // // //                 <div key={project.id} className="space-y-4">
// // // //                   <h1 className="text-5xl font-bold text-primary">
// // // //                     {project.title}
// // // //                   </h1>
// // // //                   <p className="text-muted-foreground leading-relaxed">
// // // //                     {project.description}
// // // //                   </p>

// // // //                   <h2 className="text-3xl font-bold text-primary">
// // // //                     Client : {project.projectName}
// // // //                   </h2>
// // // //                   <p className="text-muted-foreground leading-relaxed">
// // // //                     {project.projectDes}
// // // //                   </p>
// // // //                   <a
// // // //                     href={project.liveLink}
// // // //                     className="text-primary underline"
// // // //                     target="_blank"
// // // //                     rel="noopener noreferrer"
// // // //                   >
// // // //                     View Project
// // // //                   </a>
// // // //                 </div>
// // // //               ))}

// // // //       </section>

// // // //       {/* After Horizontal Scroll */}
// // // //       <section className="h-screen flex items-center justify-center text-4xl font-bold bg-black text-white">
// // // //         Back to Normal Scroll ⬆️
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }


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
// // //       description: [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName: "Lagun Advisor",
// // //       projectDes: "A platform for personalized travel recommendations.",
// // //       liveLink: "https://lagunadvisor.com"
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Mentorship and Consultancy",
// // //       description: [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName: "nam pata naahi ha mereko",
// // //       projectDes: "nam ke description vej dena.",
// // //       liveLink: "https://lagunadvisor.com"
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Personal Branding",
// // //       description: [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName: "data nahi mila haa avi tak",
// // //       projectDes: " milega fir dal dun ga.",
// // //       liveLink: "https://lagunadvisor.com"
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "UI/UX Design and Development",
// // //       description: [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName: "nahi pata avi ",
// // //       projectDes: " happy ganesh pujaaa ",
// // //       liveLink: " ",
// // //     },
// // //     {
// // //       id: 5,
// // //       title: "Content Writing",
// // //       description: [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName: "Content Creator",
// // //       projectDes: "Creating engaging content for various platforms.",
// // //       liveLink: "https://lagunadvisor.com"
// // //     },
// // //     {
// // //       id: 6,
// // //       title: "Podcast editing",
// // //       description: [
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// // //       ],
// // //       projectName: " hamko v karna ha podcast",
// // //       projectDes: "chalo binith ek podcast krte haain",
// // //       liveLink: "https://lagunadvisor.com"
// // //     },
// // //   ];

// // //   const scrollRef = useRef(null);
// // //   const horizontalRef = useRef(null);

// // //   useEffect(() => {
// // //       if (!scrollRef.current) return; // ✅ bail if not ready

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
// // //     if (sections.length > 0) {
// // //       gsap.to(sections, {
// // //         xPercent: -100 * (sections.length - 1),
// // //         ease: "none",
// // //         scrollTrigger: {
// // //           trigger: horizontalRef.current,
// // //           scroller: scrollRef.current, // use locomotive as scroller
// // //           pin: true,
// // //           scrub: 1,
// // //           snap: 1 / (sections.length - 1),
// // //           end: () => "+=" + horizontalRef.current.offsetWidth,
// // //         },
// // //       });
// // //     }

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
// // //         className="relative h-screen flex"
// // //         style={{ width: `${projects.length * 100}vw` }}
// // //       >
// // //         {projects.map((project) => (
// // //           <div key={project.id} className="panel flex items-center justify-center w-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-20">
// // //             <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// // //               {/* Left side - Project image placeholder */}
// // //               <div className="aspect-video bg-white/20 rounded-lg backdrop-blur-sm"></div>

// // //               {/* Right side - Project details */}
// // //               <div className="space-y-6">
// // //                 <h1 className="text-5xl font-bold">
// // //                   {project.title}
// // //                 </h1>
// // //                 <p className="text-white/90 leading-relaxed text-lg">
// // //                   {project.description}
// // //                 </p>

// // //                 <h2 className="text-3xl font-bold">
// // //                   Client: {project.projectName}
// // //                 </h2>
// // //                 <p className="text-white/90 leading-relaxed">
// // //                   {project.projectDes}
// // //                 </p>
// // //                 {project.liveLink && project.liveLink.trim() && (
// // //                   <a
// // //                     href={project.liveLink}
// // //                     className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                   >
// // //                     View Project
// // //                   </a>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </section>

// // //       {/* After Horizontal Scroll */}
// // //       <section className="h-screen flex items-center justify-center text-4xl font-bold bg-black text-white">
// // //         Back to Normal Scroll ⬆️
// // //       </section>
// // //     </div>
// // //   );
// // // }


// // SEMI FINAL 
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

// //   const scrollRef = useRef<HTMLDivElement>(null);
// //   const horizontalRef = useRef<HTMLElement>(null);

// //   useEffect(() => {
// //     // ✅ Check if refs are available and we're in browser
// //     if (!scrollRef.current || !horizontalRef.current || typeof window === 'undefined') return;

// //     // 🚀 Init Locomotive Scroll
// //     const locoScroll = new LocomotiveScroll({
// //       el: scrollRef.current,
// //       smooth: true,
// //       lerp: 0.08, // smoothness
// //     });

// //     locoScroll.on("scroll", ScrollTrigger.update);

// // // 4th
// //   ScrollTrigger.scrollerProxy(scrollRef.current, {
// //       scrollTop(value) {
// //         if (arguments.length) {
// //           // Only call scrollTo if value is defined and valid
// //           if (typeof value === 'number') {
// //             locoScroll.scrollTo(value, { duration: 0, disableLerp: true });
// //           }
// //           return value || 0;
// //         } else {
// //           // Access scroll position through the correct API

// //           // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //           return (locoScroll as any).scroll?.instance?.scroll?.y || 0;
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



// //     // 🚀 Horizontal Scroll Animation
// //     const sections = gsap.utils.toArray(".panel");
// //     if (sections.length > 0 && horizontalRef.current) {
// //       gsap.to(sections, {
// //         xPercent: -100 * (sections.length - 1),
// //         ease: "none",
// //         scrollTrigger: {
// //           trigger: horizontalRef.current,
// //           scroller: scrollRef.current, // use locomotive as scroller
// //           pin: true,
// //           scrub: 1,
// //           snap: 1 / (sections.length - 1),
// //           end: () => "+=" + (horizontalRef.current?.offsetWidth || 0),
// //         },
// //       });
// //     }

// //     // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// //     // ScrollTrigger.refresh();

// //     ScrollTrigger.addEventListener("refresh", () => {
// //       if (locoScroll) {
// //         locoScroll.update();
// //       }
// //     });
// //     ScrollTrigger.refresh();



// //     return () => {
// //       if (locoScroll) {
// //         locoScroll.destroy();
// //       }
// //       ScrollTrigger.killAll();
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


// // "use client";
// // import { useEffect, useRef } from "react";

// // // Conditional imports to avoid SSR issues
// // let gsap: any;
// // let ScrollTrigger: any;
// // let LocomotiveScroll: any;

// // if (typeof window !== 'undefined') {
// //   gsap = require('gsap');
// //   ScrollTrigger = require('gsap/ScrollTrigger');
// //   LocomotiveScroll = require('locomotive-scroll').default;
  
// //   if (gsap) {
// //     gsap.registerPlugin(ScrollTrigger);
// //   }
// // }

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
// //       projectName: "Business Consulting",
// //       projectDes: "Strategic business consulting services.",
// //       liveLink: "https://example.com"
// //     },
// //     {
// //       id: 3,
// //       title: "Personal Branding",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Brand Identity",
// //       projectDes: "Complete personal branding solution.",
// //       liveLink: "https://example.com"
// //     },
// //     {
// //       id: 4,
// //       title: "UI/UX Design and Development",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Design System",
// //       projectDes: "Modern UI/UX design and development",
// //       liveLink: "https://example.com",
// //     },
// //     {
// //       id: 5,
// //       title: "Content Writing",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Content Creator",
// //       projectDes: "Creating engaging content for various platforms.",
// //       liveLink: "https://example.com"
// //     },
// //     {
// //       id: 6,
// //       title: "Podcast Editing",
// //       description: [
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
// //       ],
// //       projectName: "Audio Production",
// //       projectDes: "Professional podcast editing and production services",
// //       liveLink: "https://example.com"
// //     },
// //   ];

// //   const scrollRef = useRef<HTMLDivElement>(null);
// //   const horizontalRef = useRef<HTMLElement>(null);

// //   useEffect(() => {
// //     // Only run on client-side
// //     if (typeof window === 'undefined') return;
    
// //     // Check if refs are available
// //     if (!scrollRef.current || !horizontalRef.current) return;
    
// //     // Check if libraries are loaded
// //     if (!gsap || !ScrollTrigger || !LocomotiveScroll) return;

// //     let locoScroll: any;
    
// //     try {
// //       // Initialize Locomotive Scroll
// //       locoScroll = new LocomotiveScroll({
// //         el: scrollRef.current,
// //         smooth: true,
// //         lerp: 0.08,
// //       });

// //       // Update ScrollTrigger when locomotive scroll updates
// //       locoScroll.on("scroll", ScrollTrigger.update);

// //       // ScrollTrigger proxy for Locomotive Scroll
// //       ScrollTrigger.scrollerProxy(scrollRef.current, {
// //         scrollTop(value?: number) {
// //           if (arguments.length && typeof value === 'number') {
// //             locoScroll?.scrollTo(value, { duration: 0, disableLerp: true });
// //             return value;
// //           }
// //           return locoScroll?.scroll?.instance?.scroll?.y || 0;
// //         },
// //         getBoundingClientRect() {
// //           return {
// //             top: 0,
// //             left: 0,
// //             width: window.innerWidth,
// //             height: window.innerHeight,
// //           };
// //         },
// //         pinType: scrollRef.current?.style.transform ? "transform" : "fixed",
// //       });

// //       // Horizontal Scroll Animation
// //       const sections = gsap.utils.toArray(".panel");
// //       if (sections.length > 0 && horizontalRef.current) {
// //         gsap.to(sections, {
// //           xPercent: -100 * (sections.length - 1),
// //           ease: "none",
// //           scrollTrigger: {
// //             trigger: horizontalRef.current,
// //             scroller: scrollRef.current,
// //             pin: true,
// //             scrub: 1,
// //             snap: 1 / (sections.length - 1),
// //             end: () => "+=" + (horizontalRef.current?.offsetWidth || 0),
// //           },
// //         });
// //       }

// //       // Refresh ScrollTrigger when locomotive scroll updates
// //       ScrollTrigger.addEventListener("refresh", () => {
// //         if (locoScroll) {
// //           locoScroll.update();
// //         }
// //       });
      
// //       ScrollTrigger.refresh();
// //     } catch (error) {
// //       console.error('Error initializing scroll animations:', error);
// //     }

// //     // Cleanup function
// //     return () => {
// //       try {
// //         if (locoScroll) {
// //           locoScroll.destroy();
// //         }
// //         ScrollTrigger.killAll();
// //       } catch (error) {
// //         console.error('Error during cleanup:', error);
// //       }
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
// //                   {project.description[0]}
// //                 </p>

// //                 <h2 className="text-3xl font-bold">
// //                   Client: {project.projectName}
// //                 </h2>
// //                 <p className="text-white/90 leading-relaxed">
// //                   {project.projectDes}
// //                 </p>
// //                 {project.liveLink && project.liveLink.trim() && project.liveLink !== "https://example.com" && (
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




// // GSAP DONE
// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function SimpleHorizontalScroll() {
  
//   const [isClient, setIsClient] = useState(false);
//   const horizontalRef = useRef<HTMLElement>(null);

//   const projects = [
//     {
//       id: 1,
//       title: "Website Development",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       projectName: "Lagun Advisor",
//       projectDes: "A platform for personalized travel recommendations.",
//       liveLink: "https://lagunadvisor.com"
//     },
//     {
//       id: 2,
//       title: "Mentorship and Consultancy",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       projectName: "Business Consulting",
//       projectDes: "Strategic business consulting services.",
//       liveLink: "https://example.com"
//     },
//     {
//       id: 3,
//       title: "Personal Branding",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       projectName: "Brand Identity",
//       projectDes: "Complete personal branding solution.",
//       liveLink: "https://example.com"
//     },
//     {
//       id: 4,
//       title: "UI/UX Design and Development",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       projectName: "Design System",
//       projectDes: "Modern UI/UX design and development",
//       liveLink: "https://example.com"
//     },
//     {
//       id: 5,
//       title: "Content Writing",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       projectName: "Content Creator",
//       projectDes: "Creating engaging content for various platforms.",
//       liveLink: "https://example.com"
//     },
//     {
//       id: 6,
//       title: "Podcast Editing",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
//       projectName: "Audio Production",
//       projectDes: "Professional podcast editing and production services",
//       liveLink: "https://example.com"
//     },
//   ];

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     if (!isClient || !horizontalRef.current) return;

//     let gsap: any;
//     let ScrollTrigger: any;

//     const initializeGSAP = async () => {
//       try {
//         // Dynamic imports
//         const gsapModule = await import('gsap');
//         const scrollTriggerModule = await import('gsap/ScrollTrigger');
        
//         gsap = gsapModule.gsap || gsapModule.default;
//         ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

//         if (!gsap || !ScrollTrigger) {
//           console.error('Failed to load GSAP libraries');
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
//               scrub: 0.5,  // Lower = smoother (try 0.1 to 1) & Higer > 1 = Faster 
//               snap: 1 / (sections.length - 1),
//               end: () => "+=" + (horizontalRef.current?.offsetWidth || 0),
//             },
//           });
//         }

//         ScrollTrigger.refresh();

//       } catch (error) {
//         console.error('Error initializing GSAP:', error);
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
//         console.error('Error during cleanup:', error);
//       }
//     };
//   }, [isClient]);


//   return (
//     <div className="">
//       {/* Normal Content */}

//       {/* <section className=" text-4xl font-bold text-black">
//         Services
//       </section> */}

//       {/* Horizontal Scroll Section */}
//       <section
//         ref={horizontalRef}
//         className="relative h-screen flex"
//         style={{ width: `${projects.length * 100}vw` }}
//       >
//         {projects.map((project) => (
//           <div key={project.id} className="panel flex items-center justify-center w-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-20">
//             <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
//                 {project.liveLink && project.liveLink.trim() && project.liveLink !== "https://example.com" && (
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


//       <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] pb-16">
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
// }


