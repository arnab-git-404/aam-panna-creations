// // "use client";

// // import { useState } from "react";
// // import { FaLinkedinIn } from "react-icons/fa";

// // const Team = () => {
// //   const [teamData] = useState({
// //     companyHead: [
// //       {
// //         id: 1,
// //         name: "Nikita Singh",
// //         role: "Founder and Lead",
// //         image: "/team/Nikita.jpeg",
// //         linkedin: "https://www.linkedin.com/in/authornikitasingh",
// //       },
// //       {
// //         id: 1,
// //         name: "Asha Singh",
// //         role: "Advisor",
// //         image: "/team/AshaSingh.jpeg",
// //         linkedin: "https://www.linkedin.com/company/aam-pannaa-creations/",
// //       },
// //       {
// //         id: 1,
// //         name: "Digvijay Singh",
// //         role: "Advisor",
// //         image: "/team/DigvijaySingh.jpeg",
// //         linkedin:
// //           "https://www.linkedin.com/in/digvijay-singh-4724a440/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
// //       },
// //     ],
// //     leadership: [
// //       {
// //         id: 1,
// //         name: "Godhuli Vyas",
// //         role: "Operation & Client Retention manager",
// //         image: "/team/godhuli.jpg",
// //         linkedin: "https://www.linkedin.com/in/godhuli-vyas-4b7128253/",
// //       },
// //       // {
// //       //   id: 2,
// //       //   name: "Pratyush Sahu",
// //       //   role: "Strategy Head",
// //       //   image: "/team/Pratyush Sahu.png",
// //       //   linkedin: "https://www.linkedin.com/in/sahup03",
// //       // },
// //       {
// //         id: 3,
// //         name: "Pratham Bhimnani",
// //         role: "Founder's Office Associate",
// //         image: "/team/Pratham Bhimnani.png",
// //         linkedin: "https://www.linkedin.com/in/pratham-bhimnani-36736725a",
// //       },
// //     ],
// //     creative: [
// //       {
// //         id: 7,
// //         name: "Arnab Mukherjee",
// //         role: "Full Stack Website Developer",
// //         image: "/team/arnab.JPG",
// //         linkedin: "https://www.linkedin.com/in/0xarnab",
// //       },
// //       {
// //         id: 10,
// //         name: "Mahak Bharti",
// //         role: "Founders office Intern",
// //         image: "/team/mahak.jpeg",
// //         linkedin: "https://www.linkedin.com/in/mahak-bharti-b69000262",
// //       },
// //       {
// //         id: 8,
// //         name: "Binith Kumar",
// //         role: "Team Lead / UI UX Designer",
// //         image: "/team/binith.jpg",
// //         linkedin: "https://www.linkedin.com/in/binith-kumar",
// //       },
// //       {
// //         id: 9,
// //         name: "Abhirami. M",
// //         role: "UI/UX design intern",
// //         image: "/team/abhirami.jpg",
// //         linkedin: "https://www.linkedin.com/in/abhirami-m-35909b19b",
// //       },
// //     ],
// //   });

// //   interface TeamMember {
// //     id: number;
// //     name: string;
// //     role: string;
// //     image: string;
// //     linkedin: string;
// //   }

// //   interface TeamMemberCardProps {
// //     member: TeamMember;
// //     index: number;
// //     isYellowSection?: boolean;
// //   }

// //   const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => (
// //     <div className="text-center group cursor-pointer max-w-xs mx-auto">
// //       {/* Desktop: Relative positioning with hover effects */}
// //       <div
// //         className="hidden md:block relative"
// //         style={{ animationDelay: `${index * 0.1}s` }}
// //       >
// //         {/* Avatar */}
// //         <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
// //           <img
// //             src={member.image}
// //             alt={member.name}
// //             className="w-full h-full object-cover"
// //           />
// //         </div>

// //         {/* Hover Elements (outside the circle) */}
// //         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
// //           {/* Position */}
// //           <span className="absolute top-6 left-[-80px] text-white text-sm px-3 py-1 rounded-full transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out group-hover:animate-bounce pointer-events-auto">
// //             <div>
// //               <div className="flex flex-wrap gap-4">
// //                 <div
// //                   key={index}
// //                   className="inline-block bg-pink-300 text-black font-bold text-sm px-4 py-2 rounded-2xl -rotate-12 text-center shadow-md max-w-36 leading-tight"
// //                 >
// //                   {member.role}
// //                 </div>
// //               </div>
// //             </div>
// //           </span>

// //           {/* LinkedIn */}
// //           <a
// //             href={member.linkedin}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="absolute top-6 right-[-20px] bg-white text-blue-600 text-2xl p-2 rounded-full shadow-md transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100 group-hover:animate-bounce pointer-events-auto"
// //           >
// //             <FaLinkedinIn />
// //           </a>

// //           {/* Name */}
// //           <span className="absolute -bottom-6 bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-200 group-hover:animate-bounce pointer-events-auto">
// //             {member.name}
// //           </span>
// //         </div>
// //       </div>

// //       {/* Mobile: Stacked layout with always visible info */}
// //       <div
// //         className="block md:hidden"
// //         style={{ animationDelay: `${index * 0.1}s` }}
// //       >
// //         {/* Avatar */}
// //         <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
// //           <img
// //             src={member.image}
// //             alt={member.name}
// //             className="w-full h-full object-cover"
// //           />
// //         </div>

// //         {/* Name */}
// //         <h3 className="text-lg font-semibold text-gray-900 mb-2">
// //           {member.name}
// //         </h3>

// //         {/* Role */}
// //         <div className="mb-3">
// //           <span className="inline-block bg-pink-300 text-black font-bold text-sm px-3 py-1 rounded-full shadow-md">
// //             {member.role}
// //           </span>
// //         </div>

// //         {/* LinkedIn */}
// //         <a
// //           href={member.linkedin}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="inline-flex items-center justify-center bg-blue-600 text-white text-lg p-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200"
// //         >
// //           <FaLinkedinIn />
// //         </a>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen">
// //       {/* Header Section */}
// //       <section className="py-16 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-6xl mx-auto text-center">
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //             Meet the minds behind the magic
// //           </h1>
// //           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
// //             From visionary founders to creative innovators, our team blends
// //             fresh energy with seasoned wisdom — turning caffeine-fueled ideas
// //             into art, strategy, and impact.
// //           </p>
// //         </div>
// //       </section>

// //       {/* First Team Section - 3 members */}
// //       <section className="py-12 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-items-center">
// //             {teamData.companyHead.slice(0, 3).map((member, index) => (
// //               <TeamMemberCard key={member.id} member={member} index={index} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Leadership Team Section with Yellow Background */}
// //       <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
// //         {/* SVG Background */}
// //         <div className="absolute inset-0 z-10">
// //           <svg
// //             width="852"
// //             height="1100"
// //             viewBox="0 0 852 1100"
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="w-full h-full object-cover"
// //           >
// //             <path
// //               fillRule="evenodd"
// //               clipRule="evenodd"
// //               d="M978.55 958.036C854.327 1058.7 675.958 1089.61 524.262 1038.97C392.03 994.831 364.736 829.85 274.967 723.18C183.214 614.154 10.0806 558.977 0.674333 416.806C-9.23513 267.03 104.522 131.365 230.405 49.6629C345.121 -24.7915 486.782 5.41057 623.368 12.6579C770.347 20.4566 934.977 -9.95641 1040.54 92.6484C1152.48 201.454 1165.29 372.877 1154.14 528.562C1142.65 688.946 1103.46 856.82 978.55 958.036Z"
// //               fill="#FFD500"
// //             />
// //           </svg>
// //         </div>

// //         {/* Content */}
// //         <div className="relative z-10 max-w-6xl mx-auto">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               Leadership <span className="text-gray-900">Team</span>
// //             </h2>
// //             <p className="text-gray-700 max-w-2xl mx-auto text-xl">
// //               The strategists and changemakers steering our creative powerhouse
// //             </p>
// //           </div>
// //         </div>

// //         <div className="relative z-10 max-w-6xl mx-auto">
// //           <div className="flex flex-wrap justify-center gap-12 md:gap-8">
// //             {teamData.leadership.map((member, index) => (
// //               <TeamMemberCard key={member.id} member={member} index={index} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Creative Team Section */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4]">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               Creative Team
// //             </h2>
// //             <p className="text-gray-600 max-w-2xl mx-auto text-xl">
// //               Where ideas meet design, words, and code to craft unforgettable
// //               experiences
// //             </p>
// //           </div>

// //           <div className="flex flex-wrap justify-center gap-12 md:gap-8">
// //             {teamData.creative.map((member, index) => (
// //               <TeamMemberCard key={member.id} member={member} index={index} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Team;

// "use client";

// import { useState } from "react";
// import { FaLinkedinIn } from "react-icons/fa";

// const Team = () => {
//   const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const [teamData] = useState({
//     companyHead: [
//       {
//         id: 1,
//         name: "Nikita Singh",
//         role: "Founder and Lead",
//         image: "/team/Nikita.jpeg",
//         linkedin: "https://www.linkedin.com/in/authornikitasingh",
//         description:
//           "Visionary leader with expertise in creative strategy and team management. Drives innovation and fosters collaborative excellence across all projects.",
//       },
//       {
//         id: 2,
//         name: "Asha Singh",
//         role: "Advisor",
//         image: "/team/AshaSingh.jpeg",
//         linkedin: "https://www.linkedin.com/company/aam-pannaa-creations/",
//         description:
//           "Strategic advisor with deep industry insights and extensive experience in business development and organizational growth.",
//       },
//       {
//         id: 3,
//         name: "Digvijay Singh",
//         role: "Advisor",
//         image: "/team/DigvijaySingh.jpeg",
//         linkedin:
//           "https://www.linkedin.com/in/digvijay-singh-4724a440/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//         description:
//           "Seasoned professional providing strategic guidance and mentorship to drive organizational success and innovation.",
//       },
//     ],
//     leadership: [
//       {
//         id: 4,
//         name: "Godhuli Vyas",
//         role: "Operation & Client Retention manager",
//         image: "/team/godhuli.jpg",
//         linkedin: "https://www.linkedin.com/in/godhuli-vyas-4b7128253/",
//         description:
//           "Operations expert focused on streamlining processes and maintaining strong client relationships for sustainable business growth.",
//       },
//       {
//         id: 5,
//         name: "Pratham Bhimnani",
//         role: "Founder's Office Associate",
//         image: "/team/Pratham Bhimnani.png",
//         linkedin: "https://www.linkedin.com/in/pratham-bhimnani-36736725a",
//         description:
//           "Dynamic associate supporting executive operations and strategic initiatives while driving organizational efficiency.",
//       },
//     ],
//     creative: [
//       {
//         id: 6,
//         name: "Arnab Mukherjee",
//         role: "Full Stack Website Developer",
//         image: "/team/arnab.JPG",
//         linkedin: "https://www.linkedin.com/in/0xarnab",
//         description:
//           "Full-stack developer specializing in modern web technologies, creating scalable and user-friendly digital solutions.",
//       },
//       {
//         id: 7,
//         name: "Mahak Bharti",
//         role: "Founders office Intern",
//         image: "/team/mahak.jpeg",
//         linkedin: "https://www.linkedin.com/in/mahak-bharti-b69000262",
//         description:
//           "Enthusiastic intern contributing to various projects while gaining valuable experience in business operations and strategy.",
//       },
//       {
//         id: 8,
//         name: "Binith Kumar",
//         role: "Team Lead / UI UX Designer",
//         image: "/team/binith.jpg",
//         linkedin: "https://www.linkedin.com/in/binith-kumar",
//         description:
//           "Creative UI/UX designer and team lead crafting intuitive and visually appealing user experiences across digital platforms.",
//       },
//       {
//         id: 9,
//         name: "Abhirami. M",
//         role: "UI/UX design intern",
//         image: "/team/abhirami.jpg",
//         linkedin: "https://www.linkedin.com/in/abhirami-m-35909b19b",
//         description:
//           "Passionate design intern contributing fresh perspectives and innovative ideas to create engaging user interfaces.",
//       },
//     ],
//   });

//   interface TeamMember {
//     id: number;
//     name: string;
//     role: string;
//     image: string;
//     linkedin: string;
//     description: string;
//   }

//   interface TeamMemberCardProps {
//     member: TeamMember;
//     index: number;
//     isYellowSection?: boolean;
//   }

//   const handleMouseEnter = (member: TeamMember, event: React.MouseEvent) => {
//     setHoveredMember(member);
//     setMousePosition({ x: event.clientX, y: event.clientY });
//   };

//   const handleMouseMove = (event: React.MouseEvent) => {
//     setMousePosition({ x: event.clientX, y: event.clientY });
//   };

//   const handleMouseLeave = () => {
//     setHoveredMember(null);
//   };

//   const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => (
//     <div
//       className="text-center group cursor-pointer max-w-xs mx-auto"
//       onMouseEnter={(e) => handleMouseEnter(member, e)}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Desktop: Relative positioning with hover effects */}
//       <div
//         className="hidden md:block relative"
//         style={{ animationDelay: `${index * 0.1}s` }}
//       >
//         {/* Avatar */}
//         <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
//           <img
//             src={member.image}
//             alt={member.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Hover Elements (outside the circle) */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
//           {/* Position */}
//           <span className="absolute top-6 left-[-80px] text-white text-sm px-3 py-1 rounded-full transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out group-hover:animate-bounce pointer-events-auto">
//             <div>
//               <div className="flex flex-wrap gap-4">
//                 <div
//                   key={index}
//                   className="inline-block bg-pink-300 text-black font-bold text-sm px-4 py-2 rounded-2xl -rotate-12 text-center shadow-md max-w-36 leading-tight"
//                 >
//                   {member.role}
//                 </div>
//               </div>
//             </div>
//           </span>

//           {/* LinkedIn */}
//           <a
//             href={member.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="absolute top-6 right-[-20px] bg-white text-blue-600 text-2xl p-2 rounded-full shadow-md transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100 group-hover:animate-bounce pointer-events-auto"
//           >
//             <FaLinkedinIn />
//           </a>

//           {/* Name */}
//           <span className="absolute -bottom-6 bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-200 group-hover:animate-bounce pointer-events-auto">
//             {member.name}
//           </span>
//         </div>
//       </div>

//       {/* Mobile: Stacked layout with always visible info */}
//       <div
//         className="block md:hidden"
//         style={{ animationDelay: `${index * 0.1}s` }}
//       >
//         {/* Avatar */}
//         <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
//           <img
//             src={member.image}
//             alt={member.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Name */}
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//           {member.name}
//         </h3>

//         {/* Role */}
//         <div className="mb-3">
//           <span className="inline-block bg-pink-300 text-black font-bold text-sm px-3 py-1 rounded-full shadow-md">
//             {member.role}
//           </span>
//         </div>

//         {/* Description for mobile */}
//         <p className="text-sm text-gray-600 mb-3 px-2">{member.description}</p>

//         {/* LinkedIn */}
//         <a
//           href={member.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center justify-center bg-blue-600 text-white text-lg p-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200"
//         >
//           <FaLinkedinIn />
//         </a>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen">
//       {/* Hover Modal */}
//       {hoveredMember && (
//         <div
//           className="fixed z-50 pointer-events-none hidden md:block"
//           style={{
//             left: `${mousePosition.x + 20}px`,
//             top: `${mousePosition.y - 100}px`,
//           }}
//         >
//           <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm transform translate-x-0 translate-y-0">
//             <div className="flex items-start space-x-3">
//               <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
//                 <img
//                   src={hoveredMember.image}
//                   alt={hoveredMember.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="flex-1 min-w-0">
//                 <h3 className="text-sm font-semibold text-gray-900 truncate">
//                   {hoveredMember.name}
//                 </h3>
//                 <p className="text-xs text-pink-600 font-medium mb-2">
//                   {hoveredMember.role}
//                 </p>
//                 <p className="text-xs text-gray-600 leading-relaxed">
//                   {hoveredMember.description}
//                 </p>
//                 <a
//                   href={hoveredMember.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center bg-blue-600 text-white text-lg p-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Header Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Meet the minds behind the magic
//           </h1>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             From visionary founders to creative innovators, our team blends
//             fresh energy with seasoned wisdom — turning caffeine-fueled ideas
//             into art, strategy, and impact.
//           </p>
//         </div>
//       </section>

//       {/* First Team Section - 3 members */}
//       <section className="py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-items-center">
//             {teamData.companyHead.slice(0, 3).map((member, index) => (
//               <TeamMemberCard key={member.id} member={member} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership Team Section with Yellow Background */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         {/* SVG Background */}
//         <div className="absolute inset-0 z-10">
//           <svg
//             width="852"
//             height="1100"
//             viewBox="0 0 852 1100"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full h-full object-cover"
//           >
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M978.55 958.036C854.327 1058.7 675.958 1089.61 524.262 1038.97C392.03 994.831 364.736 829.85 274.967 723.18C183.214 614.154 10.0806 558.977 0.674333 416.806C-9.23513 267.03 104.522 131.365 230.405 49.6629C345.121 -24.7915 486.782 5.41057 623.368 12.6579C770.347 20.4566 934.977 -9.95641 1040.54 92.6484C1152.48 201.454 1165.29 372.877 1154.14 528.562C1142.65 688.946 1103.46 856.82 978.55 958.036Z"
//               fill="#FFD500"
//             />
//           </svg>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Leadership <span className="text-gray-900">Team</span>
//             </h2>
//             <p className="text-gray-700 max-w-2xl mx-auto text-xl">
//               The strategists and changemakers steering our creative powerhouse
//             </p>
//           </div>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto">
//           <div className="flex flex-wrap justify-center gap-12 md:gap-8">
//             {teamData.leadership.map((member, index) => (
//               <TeamMemberCard key={member.id} member={member} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Creative Team Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4]">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Creative Team
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto text-xl">
//               Where ideas meet design, words, and code to craft unforgettable
//               experiences
//             </p>
//           </div>

//           <div className="flex flex-wrap justify-center gap-12 md:gap-8">
//             {teamData.creative.map((member, index) => (
//               <TeamMemberCard key={member.id} member={member} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Team;

"use client";

import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { teamData } from '@/data/teamData';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    linkedin: string;
    description: string;
  }

  interface TeamMemberCardProps {
    member: TeamMember;
    index: number;
    isYellowSection?: boolean;
  }

  const handleMouseEnter = (member: TeamMember, event: React.MouseEvent) => {
    setHoveredMember(member);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => (
    <div
      className="text-center group cursor-pointer max-w-xs mx-auto relative"
      onMouseEnter={(e) => handleMouseEnter(member, e)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Desktop: Enhanced hover with overlay */}
      <div
        className="hidden md:block relative"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Avatar with overlay on hover */}
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-50"
          />
          
          {/* Overlay with description */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-3">
            <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="text-xs leading-relaxed mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                {member.description.substring(0, 60)}...
              </div>
              <div className="flex justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700 transition-colors duration-200 transform scale-75 group-hover:scale-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaLinkedinIn size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements around the circle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {/* Role Badge */}
          <span className="absolute top-6 left-[-80px] transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out delay-100 pointer-events-auto">
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold text-xs px-3 py-1.5 rounded-full -rotate-12 shadow-lg">
              {member.role}
            </div>
          </span>

          {/* Name Badge */}
          <span className="absolute -bottom-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold text-sm px-4 py-2 rounded-full transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out delay-300 shadow-lg pointer-events-auto">
            {member.name}
          </span>

          {/* Decorative dots */}
          <div className="absolute top-12 right-[-60px] w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 animate-pulse"></div>
          <div className="absolute bottom-12 left-[-60px] w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500 animate-pulse"></div>
        </div>
      </div>

      {/* Mobile version stays the same */}
      <div
        className="block md:hidden"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {member.name}
        </h3>
        <div className="mb-3">
          <span className="inline-block bg-pink-300 text-black font-bold text-sm px-3 py-1 rounded-full shadow-md">
            {member.role}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-3 px-2">{member.description}</p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-blue-600 text-white text-lg p-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Enhanced Floating Modal */}
      {hoveredMember && (
        <div
          className="fixed z-50 pointer-events-none hidden md:block"
          style={{
            left: `${mousePosition.x + 30}px`,
            top: `${mousePosition.y - 120}px`,
          }}
        >
          <div className="relative">
            {/* Main tooltip */}
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-0.5 rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-4 max-w-xs">
                {/* Header with image and basic info */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-pink-300 flex-shrink-0">
                    <img
                      src={hoveredMember.image}
                      alt={hoveredMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      {hoveredMember.name}
                    </h3>
                    <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {hoveredMember.role}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {hoveredMember.description}
                  </p>
                  
                  {/* Action button */}
                  <div className="flex justify-center pt-2">
                    <a
                      href={hoveredMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full hover:bg-blue-700 transition-colors duration-200 pointer-events-auto"
                    >
                      <FaLinkedinIn size={10} />
                      <span>Connect</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
            
            {/* Tooltip arrow */}
            <div className="absolute -left-2 top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-purple-600"></div>
          </div>
        </div>
      )}

      {/* Rest of your existing sections remain the same */}
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the minds behind the magic
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From visionary founders to creative innovators, our team blends
            fresh energy with seasoned wisdom — turning caffeine-fueled ideas
            into art, strategy, and impact.
          </p>
        </div>
      </section>

      {/* First Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-items-center">
            {teamData.companyHead.slice(0, 3).map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-10">
          <svg
            width="852"
            height="1100"
            viewBox="0 0 852 1100"
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
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-xl">
              The strategists and changemakers steering our creative powerhouse
            </p>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-12 md:gap-8">
            {teamData.leadership.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Creative Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Creative Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl">
              Where ideas meet design, words, and code to craft unforgettable
              experiences
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-8">
            {teamData.creative.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;