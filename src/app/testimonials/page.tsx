import React from "react";

interface PortfolioItem {
  id: number;
  title: string;
  role: string;
  description: string;
}

const TestimonialsPage: React.FC = () => {
  // Sample data - replace with your actual portfolioItems data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      description:
        "Outstanding service and incredible attention to detail. The team exceeded our expectations and delivered results that transformed our business.",
    },
    {
      id: 2,
      title: "Michael Chen",
      role: "Creative Director",
      description:
        "The creative vision and professional execution made this collaboration exceptional. Highly recommend their innovative approach to complex challenges.",
    },
    {
      id: 3,
      title: "Emily Rodriguez",
      role: "Marketing Manager",
      description:
        "Working with this team was a game-changer for our brand. Their strategic insights and flawless execution delivered remarkable results.",
    },
    {
      id: 4,
      title: "David Thompson",
      role: "Product Manager",
      description:
        "Exceptional quality and professionalism throughout the entire process. The results speak for themselves - truly outstanding work.",
    },
    {
      id: 5,
      title: "Lisa Wang",
      role: "Startup Founder",
      description:
        "Professional, reliable, and incredibly talented. They brought our vision to life better than we could have imagined.",
    },
    {
      id: 6,
      title: "James Miller",
      role: "Operations Director",
      description:
        "The attention to detail and commitment to excellence is unmatched. Truly a pleasure to work with such dedicated professionals.",
    },
  ];

  // Function to get initials from name
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <div className="min-h-screen  relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="36" cy="24" r="1" fill="white" fillOpacity="0.3" />
                <circle cx="6" cy="44" r="1" fill="white" fillOpacity="0.3" />
                <circle cx="36" cy="6" r="1" fill="white" fillOpacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 py-16 px-4">
        <div className="mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-black/10 backdrop-blur-sm border border-black/20">
              <svg
                className="w-10 h-10 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 14.97,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,8.64 5.47,5.69 7.85,3.85L4.93,5.82Z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
              Client Testimonials
            </h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              Discover what our amazing clients say about their experience
              working with us. Real stories, real results, real satisfaction.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Testimonials Grid - Your original structure enhanced */}
          {/* Testimonials Flex Container - Your original structure enhanced */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 border border-black/20 flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
                style={{
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 1}deg)`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative p-4 sm:p-6 flex flex-col h-full">
                  {/* Header with quote and stars */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Quote icon */}
                    <div className="text-4xl font-serif text-black/60 group-hover:text-black/80 transition-colors duration-300">
                      "
                    </div>

                    {/* Enhanced stars */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          className="w-4 h-4 text-yellow-400 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                          style={{ animationDelay: `${j * 0.1}s` }}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Content - grows to fill available space */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="font-bold mb-2 text-lg text-black group-hover:text-black transition-colors duration-300">
                      {item.title}
                    </h3>
                    <h4 className="font-semibold mb-4 text-sm text-purple-500 group-hover:text-purple-500 transition-colors duration-300">
                      {item.role}
                    </h4>
                    <p className="text-sm text-black/70 group-hover:text-black/90 leading-relaxed mb-6 transition-colors duration-300 flex-grow">
                      "{item.description}"
                    </p>
                  </div>

                  {/* Enhanced footer - stays at bottom */}
                  <div className="pt-4 border-t border-black/20 group-hover:border-black/30 transition-colors duration-300 mt-auto">
                    <div className="flex items-center justify-between">
                      {/* Avatar with gradient border */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-0.5">
                          <div className="w-full h-full  rounded-full flex items-center justify-center">
                            <span className="text-black font-semibold text-sm">
                              {getInitials(item.title)}
                            </span>
                          </div>
                        </div>
                        {/* Online indicator */}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900"></div>
                      </div>

                      <div className="text-right flex flex-col items-end">
                        <span className="text-xs text-black font-medium transition-colors duration-300">
                          Verified Client
                        </span>
                        <div className="flex items-center mt-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span className="text-xs text-green-500 font-medium">
                            Confirmed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute top-4 right-4 w-1 h-1 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-green-500 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center mt-20">
            <div className="  bg-[#FFD500] max-w-7xl mx-auto backdrop-blur-sm rounded-3xl p-12 border border-black/10">
              <h3 className="text-3xl font-bold text-black mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-black mb-8 max-w-2xl mx-auto">
                Experience the same level of excellence and dedication that our
                clients rave about. Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="hover:cursor-pointer group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-black font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden">
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
