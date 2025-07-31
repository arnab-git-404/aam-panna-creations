'use client';

import { useState } from 'react';

const Team = () => {
  const [teamMembers] = useState([
    { id: 1, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
    { id: 2, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
    { id: 3, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
    { id: 4, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
    { id: 5, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
    { id: 6, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
    { id: 7, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
    { id: 8, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
    { id: 9, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
    { id: 10, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
    { id: 11, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
    { id: 12, name: 'Team Member', role: 'Position', image: '/placeholder-avatar.jpg' },
  ]);

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-16">Our Team</h1>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  " >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="text-center card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gray-400 overflow-hidden">
                    {/* Placeholder for team member photo */}
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                      <svg className="w-12 h-12 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;