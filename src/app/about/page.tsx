// import React from 'react'

// const about = () => {
//   return (
//     <div>About Us</div>
//   )
// }

// export default about


const About = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-8">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum 
            egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. 
            Id sed montes.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum 
                egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Id sed montes. Consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas 
                orci netus feugiat ut egestas.
              </p>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and foster an environment of open communication.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Quality</h3>
              <p className="text-muted-foreground">
                We are committed to delivering excellence in every project, no matter the size or complexity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;