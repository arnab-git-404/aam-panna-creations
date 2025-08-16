// 'use client';

// import { useState } from 'react';

// const Team = () => {
//   const [teamMembers] = useState([
//     { id: 1, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//     { id: 2, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//     { id: 3, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//     { id: 4, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//     { id: 5, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//     { id: 6, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//     { id: 7, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//     { id: 8, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//     { id: 9, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//     { id: 10, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//     { id: 11, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//     { id: 12, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
//   ]);

//   return (
//     <div className="fade-in">
//       {/* Header */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl font-bold text-primary mb-16">Our Team</h1>
//         </div>
//       </section>

//       {/* Team Grid */}
//       <section className="pb-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  " >
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={member.id}
//                 className="text-center card-hover"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="relative mb-6">
//                   <div className="w-32 h-32 mx-auto rounded-full bg-gray-400 overflow-hidden">
//                     {/* Placeholder for team member photo */}
//                     <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
//                       <svg className="w-12 h-12 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-semibold text-primary mb-1">
//                   {member.name}
//                 </h3>
//                 <p className="text-muted-foreground">
//                   {member.role}
//                 </p>
//               </div>
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

const Team = () => {
  const [teamData] = useState({
    leadership: [
      {
        id: 1,
        name: "Team Member",
        role: "CEO",
        image: "/placeholder-avatar.jpg",
      },
      {
        id: 2,
        name: "Team Member",
        role: "CTO",
        image: "/placeholder-avatar.jpg",
      },
      {
        id: 3,
        name: "Team Member",
        role: "Creative Director",
        image: "/placeholder-avatar.jpg",
      },
      {
        id: 4,
        name: "Team Member",
        role: "Operations Manager",
        image: "/placeholder-avatar.jpg",
      },
      {
        id: 5,
        name: "Team Member",
        role: "Strategy Lead",
        image: "/placeholder-avatar.jpg",
      },
      {
        id: 6,
        name: "Team Member",
        role: "Marketing Head",
        image: "/placeholder-avatar.jpg",
      },
    ],
    creative: [
      {
        id: 7,
        name: "Team Member",
        role: "Senior Designer",
        image: "/placeholder-avatar.jpg",
      },
      {
        id: 8,
        name: "Team Member",
        role: "UI/UX Designer",
        image: "/placeholder-avatar.jpg",
      },
      {
        id: 9,
        name: "Team Member",
        role: "Frontend Developer",
        image: "/placeholder-avatar.jpg",
      },
      {
        id: 10,
        name: "Team Member",
        role: "Content Creator",
        image: "/placeholder-avatar.jpg",
      },
      {
        id: 77,
        name: "Team Member",
        role: "Senior Designer",
        image: "/placeholder-avatar.jpg",
      },
      {
        id: 76,
        name: "Team Member",
        role: "Senior Designer",
        image: "/placeholder-avatar.jpg",
      },
    ],
  });

  // const TeamMemberCard = ({ member, index, isYellowSection = false }) => (
  //   <div className="text-center" style={{ animationDelay: `${index * 0.1}s` }}>
  //     {/* <div className="relative mb-4">
  //       <div className="w-40 h-40 mx-auto rounded-full bg-gray-400 overflow-hidden">
  //         <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
  //           <svg
  //             className="w-40 h-40 text-muted-foreground"
  //             fill="currentColor"
  //             viewBox="0 0 40 40"
  //           >
  //             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  //           </svg>
  //         </div>
  //       </div>
  //     </div> */}

  //     <div className="relative mb-4">
  //       <div className="w-40 h-40 mx-auto rounded-full bg-gray-400 overflow-hidden">
  //         <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
  //           <svg
  //             className="w-20 h-20 text-muted-foreground"
  //             fill="currentColor"
  //             viewBox="0 0 40 40"
  //           >
  //             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  //           </svg>
  //         </div>
  //       </div>
  //     </div>

  //     <h3
  //       className={`text-lg font-semibold mb-1 ${
  //         isYellowSection ? "text-gray-800" : "text-primary"
  //       }`}
  //     >
  //       {member.name}
  //     </h3>
  //     <p
  //       className={`text-m ${
  //         isYellowSection ? "text-gray-600" : "text-muted-foreground"
  //       }`}
  //     >
  //       {member.role}
  //     </p>
  //   </div>
  // )
  const TeamMemberCard = ({ member, index, isYellowSection = false }) => (
  <div 
    className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105" 
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="relative mb-6">
      {/* Avatar Container with Enhanced Styling */}
      <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 ring-4 ring-white group-hover:ring-8 group-hover:ring-opacity-50">
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-300">
          <svg
            className={`w-20 h-20 transition-all duration-300 group-hover:scale-110 ${
              isYellowSection ? "text-gray-400 group-hover:text-gray-500" : "text-gray-400 group-hover:text-primary/70"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 rounded-full transition-all duration-300 ${
        isYellowSection 
          ? "bg-gray-700 group-hover:w-16 group-hover:bg-gray-800" 
          : "bg-primary/30 group-hover:w-16 group-hover:bg-primary"
      }`}></div>
    </div>

    {/* Name with Enhanced Typography */}
    <h3
      className={`text-xl font-bold mb-2 transition-all duration-300 group-hover:scale-105 ${
        isYellowSection 
          ? "text-gray-800 group-hover:text-gray-900" 
          : "text-primary group-hover:text-primary/80"
      }`}
    >
      {member.name}
    </h3>
    
    {/* Role with Better Styling */}
    <p
      className={`text-sm font-medium tracking-wide transition-all duration-300 px-3 py-1 rounded-full inline-block ${
        isYellowSection 
          ? "text-gray-600 bg-gray-100/50 group-hover:bg-gray-200/70 group-hover:text-gray-700" 
          : "text-muted-foreground bg-gray-50 group-hover:bg-primary/10 group-hover:text-primary/80"
      }`}
    >
      {member.role}
    </p>

    {/* Subtle Animation Indicator */}
    <div className={`mt-3 w-8 h-0.5 mx-auto rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${
      isYellowSection ? "bg-gray-600" : "bg-primary"
    }`}></div>
  </div>
);

  return (
    <div className="min-h-screen  ">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the minds behind the magic
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
            From visionary founders to creative innovators, our team blends
            fresh energy with seasoned wisdom — turning caffeine-fueled ideas
            into art, strategy, and impact.
          </p>
        </div>
      </section>

      {/* First Team Section - 3 members */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {teamData.leadership.slice(0, 3).map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section with Yellow Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* SVG Background */}
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

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership <span className="text-gray-900">Team</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-xl">
              The strategists and changemakers steering our creative powerhouse
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.leadership.slice(3).map((member, index) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={index}
                isYellowSection={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Creative Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Creative Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl ">
              Where ideas meet design, words, and code to craft unforgettable
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {teamData.creative.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>

          {/* Single member at bottom */}
          {/* <div className="flex justify-center mt-12">
            <TeamMemberCard 
              member={{ id: 99, name: 'Team Member', role: 'Junior Developer', image: '/placeholder-avatar.jpg' }} 
              index={0} 
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Team;
