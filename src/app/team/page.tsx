// "use client";

// import { useState } from "react";
// import { FaLinkedinIn } from "react-icons/fa";

// const Team = () => {
//   const [teamData] = useState({

//     companyHead :[
//       {
//         id: 1,
//         name: "Nikita Singh",
//         role: "Founder",
//         image: "/nikita.png",
//         linkedin: "https://linkedin.com/in/founder",
//       },
//       {
//         id: 1,
//         name: "Nikita Singh",
//         role: "Advisor",
//         image: "/nikita.png",
//         linkedin: "https://linkedin.com/in/founder",
//       },
//       {
//         id: 1,
//         name: "Nikita Singh",
//         role: "Creative Director",
//         image: "/nikita.png",
//         linkedin: "https://linkedin.com/in/founder",
//       }
//     ],
//     leadership: [
//       {
//         id: 1,
//         name: "Godhuli Vyas",
//         role: "Operation & Client Retention manager",
//         image: "/godhuli.png",
//         linkedin: "https://linkedin.com/in/founder",
//       },
//       {
//         id: 2,
//         name: "Team Member",
//         role: "Advisor",
//         image: "/human.png",
//         linkedin: "https://linkedin.com/in/advisor",
//       },
//       {
//         id: 3,
//         name: "Team Member",
//         role: "Creative Director",
//         image: "/human.png",
//         linkedin: "https://linkedin.com/in/creative-director",
//       },

//     ],
//     creative: [
//       {
//         id: 7,
//         name: "Arnab Mukherjee",
//         role: "Full Stack Website Developer",
//         image: "/arnab.png",
//         linkedin: "https://www.linkedin.com/in/0xarnab",
//       },
//       {
//         id: 8,
//         name: "Binith Kumar",
//         role: "Team Lead / UI UX Designer",
//         image: "/binith.png",
//         linkedin: "https://www.linkedin.com/in/binith-kumar",
//       },
//       {
//         id: 9,
//         name: "Abhirami. M",
//         role: "UI/UX design intern",
//         image: "/abhirami.png",
//         linkedin: "https://linkedin.com/in/frontend-developer",
//       },
//       {
//         id: 10,
//         name: "Mahak Bharti",
//         role: "Founders office Intern",
//         image: "/mahak.png",
//         linkedin: "https://linkedin.com/in/content-creator",
//       },

//     ],
//   });

//   interface TeamMember {
//     id: number;
//     name: string;
//     role: string;
//     image: string;
//     linkedin: string;
//   }

//   interface TeamMemberCardProps {
//     member: TeamMember;
//     index: number;
//     isYellowSection?: boolean;
//   }

//   const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => (
//     <div
//       className="relative text-center group cursor-pointer"
//       style={{ animationDelay: `${index * 0.1}s` }}
//     >
//       {/* Avatar */}
//       <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
//         <img
//           src={member.image}
//           alt={member.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Hover Elements (outside the circle) */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
//         {/* Position */}
//         <span className="absolute top-6 left-[-80px]  text-white text-sm px-3 py-1 rounded-full transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out group-hover:animate-bounce pointer-events-auto">
//           <div>
//             <div className="flex flex-wrap gap-4">
//               <div
//                 key={index}
//                 className="inline-block bg-pink-300 text-black font-bold text-sm px-4 py-2 rounded-2xl -rotate-12 text-center shadow-md max-w-36 leading-tight"
//               >
//                 {member.role}
//               </div>
//             </div>
//           </div>
//         </span>

//         {/* LinkedIn */}
//         <a
//           href={member.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute top-6 right-[-20px] bg-white text-blue-600 text-2xl p-2 rounded-full shadow-md transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100 group-hover:animate-bounce pointer-events-auto"
//         >
//           <FaLinkedinIn />
//         </a>

//         {/* Name */}
//         <span className="absolute -bottom-6 bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-200 group-hover:animate-bounce pointer-events-auto">
//           {member.name}
//         </span>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen  ">
//       {/* Header Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Meet the minds behind the magic
//           </h1>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
//             From visionary founders to creative innovators, our team blends
//             fresh energy with seasoned wisdom — turning caffeine-fueled ideas
//             into art, strategy, and impact.
//           </p>
//         </div>
//       </section>

//       {/* First Team Section - 3 members */}
//       <section className="py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//             {teamData.leadership.map((member, index) => (
//               <TeamMemberCard key={member.id} member={member} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Creative Team Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#FF69B4] ">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Creative Team
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto text-xl ">
//               Where ideas meet design, words, and code to craft unforgettable
//               experiences
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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

const Team = () => {
  const [teamData] = useState({
    companyHead: [
      {
        id: 1,
        name: "Nikita Singh",
        role: "Founder and Lead",
        image: "/team/Nikita.jpeg",
        linkedin: "https://www.linkedin.com/in/authornikitasingh",
      },
      {
        id: 1,
        name: "Asha Singh",
        role: "Advisor",
        image: "/team/AshaSingh.jpeg",
        linkedin: "https://www.linkedin.com/company/aam-pannaa-creations/",
      },
      {
        id: 1,
        name: "Digvijay Singh",
        role: "Advisor",
        image: "/team/DigvijaySingh.jpeg",
        linkedin: "https://www.linkedin.com/in/digvijay-singh-4724a440/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
    leadership: [
      {
        id: 1,
        name: "Godhuli Vyas",
        role: "Operation & Client Retention manager",
        image: "/team/godhuli.jpg",
        linkedin: "https://www.linkedin.com/in/godhuli-vyas-4b7128253/",
      },
      {
        id: 2,
        name: "Team Member",
        role: "Advisor",
        image: "/human.png",
        linkedin: "https://linkedin.com/in/advisor",
      },
      {
        id: 3,
        name: "Team Member",
        role: "Creative Director",
        image: "/human.png",
        linkedin: "https://linkedin.com/in/creative-director",
      },
    ],
    creative: [
      {
        id: 7,
        name: "Arnab Mukherjee",
        role: "Full Stack Website Developer",
        image: "/team/arnab.JPG",
        linkedin: "https://www.linkedin.com/in/0xarnab",
      },
      {
        id: 10,
        name: "Mahak Bharti",
        role: "Founders office Intern",
        image: "/team/mahak.jpeg",
        linkedin: "https://www.linkedin.com/in/mahak-bharti-b69000262",
      },
      {
        id: 8,
        name: "Binith Kumar",
        role: "Team Lead / UI UX Designer",
        image: "/team/binith.jpg",
        linkedin: "https://www.linkedin.com/in/binith-kumar",
      },
      {
        id: 9,
        name: "Abhirami. M",
        role: "UI/UX design intern",
        image: "/team/abhirami.jpg",
        linkedin: "https://www.linkedin.com/in/abhirami-m-35909b19b",
      },
      
    ],
  });

  interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    linkedin: string;
  }

  interface TeamMemberCardProps {
    member: TeamMember;
    index: number;
    isYellowSection?: boolean;
  }

  const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => (
    <div className="text-center group cursor-pointer max-w-xs mx-auto">
      {/* Desktop: Relative positioning with hover effects */}
      <div
        className="hidden md:block relative"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Avatar */}
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hover Elements (outside the circle) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {/* Position */}
          <span className="absolute top-6 left-[-80px] text-white text-sm px-3 py-1 rounded-full transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out group-hover:animate-bounce pointer-events-auto">
            <div>
              <div className="flex flex-wrap gap-4">
                <div
                  key={index}
                  className="inline-block bg-pink-300 text-black font-bold text-sm px-4 py-2 rounded-2xl -rotate-12 text-center shadow-md max-w-36 leading-tight"
                >
                  {member.role}
                </div>
              </div>
            </div>
          </span>

          {/* LinkedIn */}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-[-20px] bg-white text-blue-600 text-2xl p-2 rounded-full shadow-md transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100 group-hover:animate-bounce pointer-events-auto"
          >
            <FaLinkedinIn />
          </a>

          {/* Name */}
          <span className="absolute -bottom-6 bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-200 group-hover:animate-bounce pointer-events-auto">
            {member.name}
          </span>
        </div>
      </div>

      {/* Mobile: Stacked layout with always visible info */}
      <div
        className="block md:hidden"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Avatar */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {member.name}
        </h3>

        {/* Role */}
        <div className="mb-3">
          <span className="inline-block bg-pink-300 text-black font-bold text-sm px-3 py-1 rounded-full shadow-md">
            {member.role}
          </span>
        </div>

        {/* LinkedIn */}
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

      {/* First Team Section - 3 members */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-items-center">
            {teamData.companyHead.slice(0, 3).map((member, index) => (
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
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-items-center">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-items-center">
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
