



import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6 card-hover">
                <h3 className="font-bold mb-2">Description</h3>

                <div className="aspect-square bg-black rounded-lg mb-4"></div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Title</p>
                    <p className="text-xs text-muted-foreground">Description</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
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