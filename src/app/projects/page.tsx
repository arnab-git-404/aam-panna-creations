const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
    },
    {
      id: 2,
      title: "Project 2", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
    }
  ];

  const portfolioItems = [
    { id: 1, title: "Title", description: "Description" },
    { id: 2, title: "Title", description: "Description" },
    { id: 3, title: "Title", description: "Description" },
    { id: 4, title: "Title", description: "Description" }
  ];

  return (
    <div className="fade-in">
      {/* Main Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Featured project image */}
            <div className="aspect-video bg-gray-400 rounded-lg"></div>
            
            {/* Right side - Project details */}
            <div className="space-y-12">
              <h1 className="text-5xl font-bold text-primary">
                Our<br />projects
              </h1>
              
              {projects.map((project) => (
                <div key={project.id} className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </section>


      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top row of portfolio items */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-400 rounded-lg"></div>
            ))}
          </div> */}

          <div className="relative overflow-hidden mb-16">
            <div className="flex animate-scroll">

              {/* First set of items */}
              {[...Array(10)].map((_, i) => (
                <div 
                  key={`first-${i}`} 
                  className="flex-shrink-0 w-32 h-32 bg-gray-400 rounded-lg mr-4"
                ></div>
              ))}

              {/* Duplicate set for seamless loop */}
              {[...Array(10)].map((_, i) => (
                <div 
                  key={`second-${i}`} 
                  className="flex-shrink-0 w-32 h-32 bg-gray-400 rounded-lg mr-4"
                ></div>
              ))}

            </div>
          </div>




          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover transform rotate-1 hover:rotate-0 transition-transform duration-300"
                style={{ 
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 2}deg)`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="aspect-video bg-gray-400"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">Description</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default Projects;