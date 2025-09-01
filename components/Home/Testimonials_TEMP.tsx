'use client'

import React from "react";
import toast from "react-hot-toast";
import Link from "next/link";

const Testimonials = () => {
  const portfolioItems = [
    { id: 1, title: "Title", description: "Description" },
    { id: 2, title: "Title", description: "Description" },
    { id: 3, title: "Title", description: "Description" },
    { id: 4, title: "Title", description: "Description" },
  ];

  return (
    <section className="py-20">
      <div className=" mx-auto px-4 md:px-8 lg:px-16  ">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          {/* Left side - Heading and description */}
          <div className="lg:max-w-2xl">
            <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6 lg:mb-4">
              We work with some <br /> pretty cool people
            </h2>

            <p className="text-lg text-gray-600 mb-8 lg:mb-0">
              We take pride in collaborating with a diverse range of clients,
              including startups, established businesses, and creative
              professionals. Our goal is to help you achieve your vision and
              bring your ideas to life.
            </p>
          </div>

          {/* Right side - Button */}
          <div className="flex justify-center lg:justify-end lg:flex-shrink-0">
            <button
            onClick={() => {
              toast.success("Navigating to all reviews...");
            }}
              className="hover:cursor-pointer relative px-6 md:px-10 py-3 md:py-4 rounded-full bg-[#FF69B4] text-black font-medium text-lg md:text-xl
        shadow-[0px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,1)]"
            >
              <Link href="/testimonials">
                see all the reviews
              </Link>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover transform rotate-1 hover:rotate-0 transition-transform duration-300"
              style={{
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 2}deg)`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="aspect-video bg-gray-400"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    Description
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
