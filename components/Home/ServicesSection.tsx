// // // 'use client';

// // // import React, { useEffect, useRef } from 'react';

// // // interface Service {
// // //   id: number;
// // //   title: string;
// // //   description: string;
// // //   icon: string;
// // // }

// // // const Services = () => {
// // //   const scrollRef = useRef<HTMLDivElement>(null);

// // //   const services: Service[] = [
// // //     {
// // //       id: 1,
// // //       title: "Web Development",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// // //       icon: "🌐"
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Mobile Apps",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// // //       icon: "📱"
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "UI/UX Design",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// // //       icon: "🎨"
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "Digital Marketing",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// // //       icon: "📊"
// // //     },
// // //     {
// // //       id: 5,
// // //       title: "Brand Identity",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// // //       icon: "💎"
// // //     },
// // //     {
// // //       id: 6,
// // //       title: "Consulting",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus",
// // //       icon: "💼"
// // //     }
// // //   ];

// // //   // Auto scroll functionality
// // //   useEffect(() => {
// // //     const scrollContainer = scrollRef.current;
// // //     if (!scrollContainer) return;

// // //     let scrollAmount = 0;
// // //     const scrollStep = 1;
// // //     const scrollDelay = 30;

// // //     const autoScroll = () => {
// // //       if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
// // //         scrollAmount = 0;
// // //         scrollContainer.scrollTop = 0;
// // //       } else {
// // //         scrollAmount += scrollStep;
// // //         scrollContainer.scrollTop = scrollAmount;
// // //       }
// // //     };

// // //     const intervalId = setInterval(autoScroll, scrollDelay);

// // //     // Pause on hover
// // //     const handleMouseEnter = () => clearInterval(intervalId);
// // //     const handleMouseLeave = () => setInterval(autoScroll, scrollDelay);

// // //     scrollContainer.addEventListener('mouseenter', handleMouseEnter);
// // //     scrollContainer.addEventListener('mouseleave', handleMouseLeave);

// // //     return () => {
// // //       clearInterval(intervalId);
// // //       scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
// // //       scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
// // //     };
// // //   }, []);

// // //   return (
// // //     <section className="services-section">
// // //       <div className="container">
// // //         <div className="services-content">
// // //           {/* Left side - Service cards with auto scroll */}
// // //           <div className="services-left">
// // //             <p className="scroll-note">Auto scroll, and scroll animation</p>
// // //             <p className="card-note">Each card represents a service we provide</p>
            
// // //             <div className="services-scroll-container" ref={scrollRef}>
// // //               {services.map((service) => (
// // //                 <div key={service.id} className="service-card">
// // //                   <div className="service-icon">{service.icon}</div>
// // //                   <h3 className="service-title">{service.title}</h3>
// // //                   <p className="service-description">{service.description}</p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Right side - Services header */}
// // //           <div className="services-right">
// // //             <div className="services-header">
// // //               <div className="services-icon">
// // //                 <div className="icon-circle">
// // //                   <span className="icon">👥</span>
// // //                 </div>
// // //               </div>
// // //               <h2 className="services-title">
// // //                 Services
// // //                 <span className="arrow">↗</span>
// // //               </h2>
// // //               <p className="services-description">
// // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut venenatis tristique retus recusandae dictum consequateur actus fugiat et ipsa elit sagittis molestum placerat elit quum cursus rerum.
// // //               </p>
// // //             </div>

// // //             {/* Client scroll indication */}
// // //             <div className="client-scroll">
// // //               <p>Auto scroll of all clients</p>
// // //               <div className="scroll-arrow">→</div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         .services-section {
// // //           padding: 80px 0;
// // //           background: #f8f9fa;
// // //         }

// // //         .container {
// // //           max-width: 1200px;
// // //           margin: 0 auto;
// // //           padding: 0 20px;
// // //         }

// // //         .services-content {
// // //           display: grid;
// // //           grid-template-columns: 1fr 1fr;
// // //           gap: 60px;
// // //           align-items: start;
// // //         }

// // //         .services-left {
// // //           position: relative;
// // //         }

// // //         .scroll-note,
// // //         .card-note {
// // //           font-size: 14px;
// // //           color: #666;
// // //           margin-bottom: 10px;
// // //           font-style: italic;
// // //         }

// // //         .services-scroll-container {
// // //           height: 500px;
// // //           overflow-y: auto;
// // //           scrollbar-width: thin;
// // //           scrollbar-color: #ccc transparent;
// // //           padding-right: 10px;
// // //         }

// // //         .services-scroll-container::-webkit-scrollbar {
// // //           width: 6px;
// // //         }

// // //         .services-scroll-container::-webkit-scrollbar-track {
// // //           background: transparent;
// // //         }

// // //         .services-scroll-container::-webkit-scrollbar-thumb {
// // //           background: #ccc;
// // //           border-radius: 3px;
// // //         }

// // //         .service-card {
// // //           background: white;
// // //           padding: 30px;
// // //           border-radius: 12px;
// // //           margin-bottom: 20px;
// // //           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// // //           transition: transform 0.3s ease;
// // //         }

// // //         .service-card:hover {
// // //           transform: translateY(-5px);
// // //         }

// // //         .service-icon {
// // //           font-size: 2.5rem;
// // //           margin-bottom: 15px;
// // //         }

// // //         .service-title {
// // //           font-size: 1.4rem;
// // //           font-weight: 600;
// // //           margin-bottom: 10px;
// // //           color: #333;
// // //         }

// // //         .service-description {
// // //           font-size: 0.95rem;
// // //           line-height: 1.6;
// // //           color: #666;
// // //         }

// // //         .services-right {
// // //           display: flex;
// // //           flex-direction: column;
// // //           gap: 40px;
// // //         }

// // //         .services-header {
// // //           text-align: left;
// // //         }

// // //         .services-icon {
// // //           margin-bottom: 20px;
// // //         }

// // //         .icon-circle {
// // //           width: 80px;
// // //           height: 80px;
// // //           background: white;
// // //           border-radius: 50%;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
// // //         }

// // //         .icon {
// // //           font-size: 2rem;
// // //         }

// // //         .services-title {
// // //           font-size: 2.5rem;
// // //           font-weight: 700;
// // //           margin-bottom: 20px;
// // //           color: #333;
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 15px;
// // //         }

// // //         .arrow {
// // //           font-size: 2rem;
// // //           color: #007bff;
// // //         }

// // //         .services-description {
// // //           font-size: 1rem;
// // //           line-height: 1.7;
// // //           color: #666;
// // //           max-width: 400px;
// // //         }

// // //         .client-scroll {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 15px;
// // //           font-size: 14px;
// // //           color: #666;
// // //         }

// // //         .scroll-arrow {
// // //           font-size: 1.5rem;
// // //           color: #007bff;
// // //         }

// // //         @media (max-width: 768px) {
// // //           .services-content {
// // //             grid-template-columns: 1fr;
// // //             gap: 40px;
// // //           }

// // //           .services-scroll-container {
// // //             height: 400px;
// // //           }

// // //           .services-title {
// // //             font-size: 2rem;
// // //           }
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default Services;



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
// //           {/* Left side - Services header */}
// //           <div className="services-left">
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

// //             {/* Scroll indication notes */}
// //             <div className="scroll-notes">
// //               <p className="scroll-note">Auto scroll, and scroll animation</p>
// //               <p className="card-note">Each card represents a service we provide</p>
// //             </div>
// //           </div>

// //           {/* Right side - Service cards with auto scroll */}
// //           <div className="services-right">
// //             <div className="client-scroll">
// //               <p>Auto scroll of all clients</p>
// //               <div className="scroll-arrow">→</div>
// //             </div>
            
// //             <div className="services-scroll-container" ref={scrollRef}>
// //               {services.map((service) => (
// //                 <div key={service.id} className="service-card">
// //                   <div className="service-icon-card">{service.icon}</div>
// //                   <h3 className="service-title">{service.title}</h3>
// //                   <p className="service-description">{service.description}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .services-section {
// //           padding: 80px 0;
// //           background: #f8f9fa;
// //           min-height: 100vh;
// //         }

// //         .container {
// //           max-width: 1400px;
// //           margin: 0 auto;
// //           padding: 0 20px;
// //         }

// //         .services-content {
// //           display: grid;
// //           grid-template-columns: 1fr 300px;
// //           gap: 80px;
// //           align-items: start;
// //           height: 600px;
// //         }

// //         .services-left {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 40px;
// //           height: 100%;
// //           justify-content: center;
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
// //           max-width: 500px;
// //         }

// //         .scroll-notes {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 10px;
// //         }

// //         .scroll-note,
// //         .card-note {
// //           font-size: 14px;
// //           color: #666;
// //           font-style: italic;
// //         }

// //         .services-right {
// //           position: relative;
// //           height: 100%;
// //           display: flex;
// //           flex-direction: column;
// //         }

// //         .client-scroll {
// //           display: flex;
// //           align-items: center;
// //           gap: 15px;
// //           font-size: 14px;
// //           color: #666;
// //           margin-bottom: 20px;
// //           justify-content: flex-end;
// //         }

// //         .scroll-arrow {
// //           font-size: 1.5rem;
// //           color: #007bff;
// //         }

// //         .services-scroll-container {
// //           height: 500px;
// //           overflow-y: auto;
// //           scrollbar-width: thin;
// //           scrollbar-color: #ccc transparent;
// //           padding-right: 10px;
// //           flex: 1;
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
// //           background: #e5e5e5;
// //           padding: 25px;
// //           border-radius: 12px;
// //           margin-bottom: 15px;
// //           transition: transform 0.3s ease;
// //           width: 100%;
// //         }

// //         .service-card:hover {
// //           transform: translateY(-3px);
// //         }

// //         .service-icon-card {
// //           font-size: 1.8rem;
// //           margin-bottom: 12px;
// //         }

// //         .service-title {
// //           font-size: 1.2rem;
// //           font-weight: 600;
// //           margin-bottom: 8px;
// //           color: #333;
// //         }

// //         .service-description {
// //           font-size: 0.85rem;
// //           line-height: 1.5;
// //           color: #666;
// //         }

// //         @media (max-width: 1024px) {
// //           .services-content {
// //             grid-template-columns: 1fr;
// //             gap: 40px;
// //             height: auto;
// //           }

// //           .services-right {
// //             height: 400px;
// //           }

// //           .client-scroll {
// //             justify-content: flex-start;
// //           }
// //         }

// //         @media (max-width: 768px) {
// //           .services-content {
// //             grid-template-columns: 1fr;
// //             gap: 30px;
// //           }

// //           .services-scroll-container {
// //             height: 350px;
// //           }

// //           .services-title {
// //             font-size: 2rem;
// //           }

// //           .services-right {
// //             height: 350px;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // exort default Services;

// 'use client';

// import React, { useEffect, useRef } from 'react';

// const ServicesSection: React.FC = () => {
//   const clientListRef = useRef<HTMLDivElement>(null);
//   const cardListRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scrollElement = (element: HTMLDivElement | null, speed: number) => {
//       if (!element) return;

//       let scrollAmount = 0;
//       const scroll = () => {
//         scrollAmount += speed;
//         element.scrollTop = scrollAmount;
//         if (scrollAmount >= element.scrollHeight - element.clientHeight) {
//           scrollAmount = 0;
//         }
//         requestAnimationFrame(scroll);
//       };
//       scroll();
//     };

//     scrollElement(clientListRef.current, 0.5);
//     scrollElement(cardListRef.current, 0.3);
//   }, []);

//   return (
//     <div className="relative w-full h-[1504px] bg-white flex items-center justify-center px-20">
//       {/* Left Scroll Section - Cards */}
//       <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-40 h-[600px] overflow-hidden" ref={cardListRef}>
//         <div className="flex flex-col gap-8 animate-scroll-vertical">
//           {[...Array(6)].map((_, i) => (
//             <div
//               key={i}
//               className="w-32 h-20 bg-white shadow-md rounded-lg rotate-[10deg] opacity-70 hover:opacity-100 transition-opacity duration-300"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Center Content */}
//       <div className="text-center max-w-md z-10">
//         <div className="mx-auto w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4">
//           <img src="/avatar.png" alt="Avatar" className="rounded-full w-12 h-12" />
//         </div>
//         <h2 className="text-2xl font-semibold">Services</h2>
//         <p className="text-gray-600 mt-2">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venia quis pretium risus. Euismod dictum egestas orci.
//         </p>
//       </div>

//       {/* Right Scroll Section - Clients */}
//       <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-20 h-[600px] overflow-hidden" ref={clientListRef}>
//         <div className="flex flex-col gap-4 animate-scroll-vertical">
//           {[...Array(8)].map((_, i) => (
//             <div key={i} className="w-16 h-16 bg-gray-200 rounded-lg shadow-md" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;




'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const ServicesSection: React.FC = () => {
  const clientListRef = useRef<HTMLDivElement>(null);
  const cardListRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeClientIndex, setActiveClientIndex] = useState(0);

  const services: Service[] = [
    { id: 1, title: "Web Development", description: "Creating modern web applications", icon: "🌐", color: "bg-blue-500" },
    { id: 2, title: "Mobile Apps", description: "iOS and Android development", icon: "📱", color: "bg-green-500" },
    { id: 3, title: "UI/UX Design", description: "Beautiful user experiences", icon: "🎨", color: "bg-purple-500" },
    { id: 4, title: "Digital Marketing", description: "Grow your online presence", icon: "📊", color: "bg-orange-500" },
    { id: 5, title: "Brand Identity", description: "Memorable brand designs", icon: "💎", color: "bg-pink-500" },
    { id: 6, title: "Consulting", description: "Strategic business advice", icon: "💼", color: "bg-indigo-500" }
  ];

  const clients = [
    { id: 1, name: "Client A", logo: "🏢", color: "bg-red-400" },
    { id: 2, name: "Client B", logo: "🏪", color: "bg-blue-400" },
    { id: 3, name: "Client C", logo: "🏭", color: "bg-green-400" },
    { id: 4, name: "Client D", logo: "🏬", color: "bg-yellow-400" },
    { id: 5, name: "Client E", logo: "🏘️", color: "bg-purple-400" },
    { id: 6, name: "Client F", logo: "🏙️", color: "bg-pink-400" },
    { id: 7, name: "Client G", logo: "🏟️", color: "bg-indigo-400" },
    { id: 8, name: "Client H", logo: "🏛️", color: "bg-gray-400" }
  ];

  useEffect(() => {
    const cardInterval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % services.length);
    }, 2000);

    const clientInterval = setInterval(() => {
      setActiveClientIndex((prev) => (prev + 1) % clients.length);
    }, 1500);

    return () => {
      clearInterval(cardInterval);
      clearInterval(clientInterval);
    };
  }, [services.length, clients.length]);

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
      
      {/* Left Scroll Section - Service Cards */}
      {/* <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-48 h-[500px] overflow-hidden" ref={cardListRef}>
        <div className="flex flex-col gap-8">
          {[...services, ...services].map((service, i) => {
            const isActive = i % services.length === activeCardIndex;
            return (
              <div
                key={`${service.id}-${i}`}
                className={`w-40 h-24 rounded-lg rotate-[10deg] transition-all duration-500 shadow-lg transform hover:scale-105 ${
                  isActive 
                    ? `${service.color} text-white opacity-100 scale-110` 
                    : 'bg-gray-300 text-gray-600 opacity-70 grayscale'
                }`}
              >
                <div className="p-3 h-full flex flex-col justify-center items-center text-center">
                  <div className="text-lg mb-1">{service.icon}</div>
                  <div className="text-xs font-semibold">{service.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      {/* <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-96 h-[500px] overflow-hidden" ref={cardListRef}>
        <div className="relative w-full h-full">
          {services.map((service, i) => {
            const totalCards = services.length;
            const currentOffset = (activeCardIndex * (180 / totalCards)) % 360;
            const angle = (i * (180 / (totalCards - 1))) - currentOffset;
            const radius = 180;
            const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
            const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
            const isActive = i === activeCardIndex;
            const isVisible = angle >= -90 && angle <= 90; // Only show cards in semicircle view
            
            return (
              <div
                key={service.id}
                className={`absolute w-40 h-24 rounded-lg transition-all duration-700 shadow-lg transform ${
                  isActive 
                    ? `${service.color} text-white opacity-100 scale-125 z-20` 
                    : 'bg-gray-300 text-gray-600 opacity-70 grayscale z-10'
                } ${isVisible ? 'visible' : 'invisible'}`}
                style={{
                  left: `${x + 200}px`,
                  top: `${y + 250}px`,
                  transform: `rotate(${Math.min(Math.max(angle - 90, -45), 45)}deg) ${isActive ? 'scale(1.25)' : 'scale(1)'}`,
                  transformOrigin: 'center',
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="p-3 h-full flex flex-col justify-center items-center text-center">
                  <div className="text-lg mb-1">{service.icon}</div>
                  <div className="text-xs font-semibold">{service.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      {/* Semi Good  */}
      <div className="absolute left-2 w-96 h-[500px] overflow-hidden">
        
        <div className=" w-full h-full">
          {[...services, ...services].map((service, i) => {
            const isActive = i % services.length === activeCardIndex;
            const angle = (i % services.length) * (180 / (services.length - 1)); // Distribute cards in semicircle
            const radius = 180; // Distance from center
            const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
            const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
            
            return (
              <div
                key={`${service.id}-${i}`}
                className={`absolute w-40 h-24 rounded-lg transition-all duration-500 shadow-lg transform hover:scale-105 ${
                  isActive 
                    ? `${service.color} text-white opacity-100 scale-110 z-20` 
                    : 'bg-gray-300 text-gray-600 opacity-70 grayscale z-10'
                }`}
                style={{
                  left: `${x + 200}px`,
                  top: `${y + 250}px`,
                  transform: `rotate(${angle - 90}deg) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                  transformOrigin: 'center',
                }}
              >
                <div className="p-3 h-full flex flex-col justify-center items-center text-center">
                  <div className="text-lg mb-1">{service.icon}</div>
                  <div className="text-xs font-semibold">{service.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     





      {/* Center Content */}
      <div className="text-center max-w-md z-10">
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center mb-6 shadow-lg">
          <span className="text-2xl">👥</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Services
          <span className="text-blue-500 ml-2">↗</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venia quis pretium risus. 
          Euismod dictum egestas orci molestie facilisis.
        </p>
        
        {/* Active Service Display */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-lg text-gray-800">
            {services[activeCardIndex].title}
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            {services[activeCardIndex].description}
          </p>
        </div>
      </div>

      {/* Right Scroll Section - Client Logos */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-24 h-[500px] overflow-hidden" ref={clientListRef}>
        <div className="flex flex-col gap-4">
          {[...clients, ...clients].map((client, i) => {
            const isActive = i % clients.length === activeClientIndex;
            return (
              <div
                key={`${client.id}-${i}`}
                className={`w-20 h-20 rounded-lg shadow-md transition-all duration-500 flex items-center justify-center ${
                  isActive 
                    ? `${client.color} opacity-100 scale-110 shadow-xl` 
                    : 'bg-gray-200 opacity-60 grayscale'
                }`}
              >
                <span className="text-2xl">{client.logo}</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default ServicesSection;