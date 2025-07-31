// // 'use client';

// // import React, { useEffect, useRef } from 'react';

// // interface Service {
// //   id: number;
// //   title: string;
// //   description: string;
// //   icon: string;
// // }

// // const Services = () => {
// //   const scrollRef = useRef<HTMLDivElement>(null);

// //   const services: Service[] = [
// //     {
// //       id: 1,
// //       title: "Web Development",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// //       icon: "🌐"
// //     },
// //     {
// //       id: 2,
// //       title: "Mobile Apps",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// //       icon: "📱"
// //     },
// //     {
// //       id: 3,
// //       title: "UI/UX Design",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// //       icon: "🎨"
// //     },
// //     {
// //       id: 4,
// //       title: "Digital Marketing",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// //       icon: "📊"
// //     },
// //     {
// //       id: 5,
// //       title: "Brand Identity",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// //       icon: "💎"
// //     },
// //     {
// //       id: 6,
// //       title: "Consulting",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// //       icon: "💼"
// //     }
// //   ];

// //   // Auto scroll functionality
// //   useEffect(() => {
// //     const scrollContainer = scrollRef.current;
// //     if (!scrollContainer) return;

// //     let scrollAmount = 0;
// //     const scrollStep = 1;
// //     const scrollDelay = 30;

// //     const autoScroll = () => {
// //       if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
// //         scrollAmount = 0;
// //         scrollContainer.scrollTop = 0;
// //       } else {
// //         scrollAmount += scrollStep;
// //         scrollContainer.scrollTop = scrollAmount;
// //       }
// //     };

// //     const intervalId = setInterval(autoScroll, scrollDelay);

// //     // Pause on hover
// //     const handleMouseEnter = () => clearInterval(intervalId);
// //     const handleMouseLeave = () => setInterval(autoScroll, scrollDelay);

// //     scrollContainer.addEventListener('mouseenter', handleMouseEnter);
// //     scrollContainer.addEventListener('mouseleave', handleMouseLeave);

// //     return () => {
// //       clearInterval(intervalId);
// //       scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
// //       scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
// //     };
// //   }, []);

// //   return (
// //     <section className="services-section">
// //       <div className="container">
// //         <div className="services-content">
// //           {/* Left side - Service cards with auto scroll */}
// //           <div className="services-left">
// //             <p className="scroll-note">Auto scroll, and scroll animation</p>
// //             <p className="card-note">Each card represents a service we provide</p>
            
// //             <div className="services-scroll-container" ref={scrollRef}>
// //               {services.map((service) => (
// //                 <div key={service.id} className="service-card">
// //                   <div className="service-icon">{service.icon}</div>
// //                   <h3 className="service-title">{service.title}</h3>
// //                   <p className="service-description">{service.description}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Right side - Services header */}
// //           <div className="services-right">
// //             <div className="services-header">
// //               <div className="services-icon">
// //                 <div className="icon-circle">
// //                   <span className="icon">👥</span>
// //                 </div>
// //               </div>
// //               <h2 className="services-title">
// //                 Services
// //                 <span className="arrow">↗</span>
// //               </h2>
// //               <p className="services-description">
// //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus fugiat et ipsa elit sagittis molestum placerat elit quum cursus rerum.
// //               </p>
// //             </div>

// //             {/* Client scroll indication */}
// //             <div className="client-scroll">
// //               <p>Auto scroll of all clients</p>
// //               <div className="scroll-arrow">→</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .services-section {
// //           padding: 80px 0;
// //           background: #f8f9fa;
// //         }

// //         .container {
// //           max-width: 1200px;
// //           margin: 0 auto;
// //           padding: 0 20px;
// //         }

// //         .services-content {
// //           display: grid;
// //           grid-template-columns: 1fr 1fr;
// //           gap: 60px;
// //           align-items: start;
// //         }

// //         .services-left {
// //           position: relative;
// //         }

// //         .scroll-note,
// //         .card-note {
// //           font-size: 14px;
// //           color: #666;
// //           margin-bottom: 10px;
// //           font-style: italic;
// //         }

// //         .services-scroll-container {
// //           height: 500px;
// //           overflow-y: auto;
// //           scrollbar-width: thin;
// //           scrollbar-color: #ccc transparent;
// //           padding-right: 10px;
// //         }

// //         .services-scroll-container::-webkit-scrollbar {
// //           width: 6px;
// //         }

// //         .services-scroll-container::-webkit-scrollbar-track {
// //           background: transparent;
// //         }

// //         .services-scroll-container::-webkit-scrollbar-thumb {
// //           background: #ccc;
// //           border-radius: 3px;
// //         }

// //         .service-card {
// //           background: white;
// //           padding: 30px;
// //           border-radius: 12px;
// //           margin-bottom: 20px;
// //           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// //           transition: transform 0.3s ease;
// //         }

// //         .service-card:hover {
// //           transform: translateY(-5px);
// //         }

// //         .service-icon {
// //           font-size: 2.5rem;
// //           margin-bottom: 15px;
// //         }

// //         .service-title {
// //           font-size: 1.4rem;
// //           font-weight: 600;
// //           margin-bottom: 10px;
// //           color: #333;
// //         }

// //         .service-description {
// //           font-size: 0.95rem;
// //           line-height: 1.6;
// //           color: #666;
// //         }

// //         .services-right {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 40px;
// //         }

// //         .services-header {
// //           text-align: left;
// //         }

// //         .services-icon {
// //           margin-bottom: 20px;
// //         }

// //         .icon-circle {
// //           width: 80px;
// //           height: 80px;
// //           background: white;
// //           border-radius: 50%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
// //         }

// //         .icon {
// //           font-size: 2rem;
// //         }

// //         .services-title {
// //           font-size: 2.5rem;
// //           font-weight: 700;
// //           margin-bottom: 20px;
// //           color: #333;
// //           display: flex;
// //           align-items: center;
// //           gap: 15px;
// //         }

// //         .arrow {
// //           font-size: 2rem;
// //           color: #007bff;
// //         }

// //         .services-description {
// //           font-size: 1rem;
// //           line-height: 1.7;
// //           color: #666;
// //           max-width: 400px;
// //         }

// //         .client-scroll {
// //           display: flex;
// //           align-items: center;
// //           gap: 15px;
// //           font-size: 14px;
// //           color: #666;
// //         }

// //         .scroll-arrow {
// //           font-size: 1.5rem;
// //           color: #007bff;
// //         }

// //         @media (max-width: 768px) {
// //           .services-content {
// //             grid-template-columns: 1fr;
// //             gap: 40px;
// //           }

// //           .services-scroll-container {
// //             height: 400px;
// //           }

// //           .services-title {
// //             font-size: 2rem;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default Services;



// 'use client';

// import React, { useEffect, useRef } from 'react';

// interface Service {
//   id: number;
//   title: string;
//   description: string;
//   icon: string;
// }

// const Services = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const services: Service[] = [
//     {
//       id: 1,
//       title: "Web Development",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
//       icon: "🌐"
//     },
//     {
//       id: 2,
//       title: "Mobile Apps",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
//       icon: "📱"
//     },
//     {
//       id: 3,
//       title: "UI/UX Design",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
//       icon: "🎨"
//     },
//     {
//       id: 4,
//       title: "Digital Marketing",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
//       icon: "📊"
//     },
//     {
//       id: 5,
//       title: "Brand Identity",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
//       icon: "💎"
//     },
//     {
//       id: 6,
//       title: "Consulting",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
//       icon: "💼"
//     }
//   ];

//   // Auto scroll functionality
//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let scrollAmount = 0;
//     const scrollStep = 1;
//     const scrollDelay = 30;

//     const autoScroll = () => {
//       if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
//         scrollAmount = 0;
//         scrollContainer.scrollTop = 0;
//       } else {
//         scrollAmount += scrollStep;
//         scrollContainer.scrollTop = scrollAmount;
//       }
//     };

//     const intervalId = setInterval(autoScroll, scrollDelay);

//     // Pause on hover
//     const handleMouseEnter = () => clearInterval(intervalId);
//     const handleMouseLeave = () => setInterval(autoScroll, scrollDelay);

//     scrollContainer.addEventListener('mouseenter', handleMouseEnter);
//     scrollContainer.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       clearInterval(intervalId);
//       scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
//       scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <section className="services-section">
//       <div className="container">
//         <div className="services-content">
//           {/* Left side - Services header */}
//           <div className="services-left">
//             <div className="services-header">
//               <div className="services-icon">
//                 <div className="icon-circle">
//                   <span className="icon">👥</span>
//                 </div>
//               </div>
//               <h2 className="services-title">
//                 Services
//                 <span className="arrow">↗</span>
//               </h2>
//               <p className="services-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus fugiat et ipsa elit sagittis molestum placerat elit quum cursus rerum.
//               </p>
//             </div>

//             {/* Scroll indication notes */}
//             <div className="scroll-notes">
//               <p className="scroll-note">Auto scroll, and scroll animation</p>
//               <p className="card-note">Each card represents a service we provide</p>
//             </div>
//           </div>

//           {/* Right side - Service cards with auto scroll */}
//           <div className="services-right">
//             <div className="client-scroll">
//               <p>Auto scroll of all clients</p>
//               <div className="scroll-arrow">→</div>
//             </div>
            
//             <div className="services-scroll-container" ref={scrollRef}>
//               {services.map((service) => (
//                 <div key={service.id} className="service-card">
//                   <div className="service-icon-card">{service.icon}</div>
//                   <h3 className="service-title">{service.title}</h3>
//                   <p className="service-description">{service.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .services-section {
//           padding: 80px 0;
//           background: #f8f9fa;
//           min-height: 100vh;
//         }

//         .container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 20px;
//         }

//         .services-content {
//           display: grid;
//           grid-template-columns: 1fr 300px;
//           gap: 80px;
//           align-items: start;
//           height: 600px;
//         }

//         .services-left {
//           display: flex;
//           flex-direction: column;
//           gap: 40px;
//           height: 100%;
//           justify-content: center;
//         }

//         .services-header {
//           text-align: left;
//         }

//         .services-icon {
//           margin-bottom: 20px;
//         }

//         .icon-circle {
//           width: 80px;
//           height: 80px;
//           background: white;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//         }

//         .icon {
//           font-size: 2rem;
//         }

//         .services-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           margin-bottom: 20px;
//           color: #333;
//           display: flex;
//           align-items: center;
//           gap: 15px;
//         }

//         .arrow {
//           font-size: 2rem;
//           color: #007bff;
//         }

//         .services-description {
//           font-size: 1rem;
//           line-height: 1.7;
//           color: #666;
//           max-width: 500px;
//         }

//         .scroll-notes {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }

//         .scroll-note,
//         .card-note {
//           font-size: 14px;
//           color: #666;
//           font-style: italic;
//         }

//         .services-right {
//           position: relative;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//         }

//         .client-scroll {
//           display: flex;
//           align-items: center;
//           gap: 15px;
//           font-size: 14px;
//           color: #666;
//           margin-bottom: 20px;
//           justify-content: flex-end;
//         }

//         .scroll-arrow {
//           font-size: 1.5rem;
//           color: #007bff;
//         }

//         .services-scroll-container {
//           height: 500px;
//           overflow-y: auto;
//           scrollbar-width: thin;
//           scrollbar-color: #ccc transparent;
//           padding-right: 10px;
//           flex: 1;
//         }

//         .services-scroll-container::-webkit-scrollbar {
//           width: 6px;
//         }

//         .services-scroll-container::-webkit-scrollbar-track {
//           background: transparent;
//         }

//         .services-scroll-container::-webkit-scrollbar-thumb {
//           background: #ccc;
//           border-radius: 3px;
//         }

//         .service-card {
//           background: #e5e5e5;
//           padding: 25px;
//           border-radius: 12px;
//           margin-bottom: 15px;
//           transition: transform 0.3s ease;
//           width: 100%;
//         }

//         .service-card:hover {
//           transform: translateY(-3px);
//         }

//         .service-icon-card {
//           font-size: 1.8rem;
//           margin-bottom: 12px;
//         }

//         .service-title {
//           font-size: 1.2rem;
//           font-weight: 600;
//           margin-bottom: 8px;
//           color: #333;
//         }

//         .service-description {
//           font-size: 0.85rem;
//           line-height: 1.5;
//           color: #666;
//         }

//         @media (max-width: 1024px) {
//           .services-content {
//             grid-template-columns: 1fr;
//             gap: 40px;
//             height: auto;
//           }

//           .services-right {
//             height: 400px;
//           }

//           .client-scroll {
//             justify-content: flex-start;
//           }
//         }

//         @media (max-width: 768px) {
//           .services-content {
//             grid-template-columns: 1fr;
//             gap: 30px;
//           }

//           .services-scroll-container {
//             height: 350px;
//           }

//           .services-title {
//             font-size: 2rem;
//           }

//           .services-right {
//             height: 350px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// exort default Services;

'use client';

import React, { useEffect, useRef } from 'react';

const ServicesSection: React.FC = () => {
  const clientListRef = useRef<HTMLDivElement>(null);
  const cardListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = (element: HTMLDivElement | null, speed: number) => {
      if (!element) return;

      let scrollAmount = 0;
      const scroll = () => {
        scrollAmount += speed;
        element.scrollTop = scrollAmount;
        if (scrollAmount >= element.scrollHeight - element.clientHeight) {
          scrollAmount = 0;
        }
        requestAnimationFrame(scroll);
      };
      scroll();
    };

    scrollElement(clientListRef.current, 0.5);
    scrollElement(cardListRef.current, 0.3);
  }, []);

  return (
    <div className="relative w-full h-[1504px] bg-white flex items-center justify-center px-20">
      {/* Left Scroll Section - Cards */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-40 h-[600px] overflow-hidden" ref={cardListRef}>
        <div className="flex flex-col gap-8 animate-scroll-vertical">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-32 h-20 bg-white shadow-md rounded-lg rotate-[10deg] opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="text-center max-w-md z-10">
        <div className="mx-auto w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4">
          <img src="/avatar.png" alt="Avatar" className="rounded-full w-12 h-12" />
        </div>
        <h2 className="text-2xl font-semibold">Services</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venia quis pretium risus. Euismod dictum egestas orci.
        </p>
      </div>

      {/* Right Scroll Section - Clients */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-20 h-[600px] overflow-hidden" ref={clientListRef}>
        <div className="flex flex-col gap-4 animate-scroll-vertical">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-16 h-16 bg-gray-200 rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
