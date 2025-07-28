import React from 'react';
import { FaPalette, FaCode, FaMobile, FaRocket, FaBrain } from 'react-icons/fa';

const Services = () => {
  const stats = [
    { number: '1+', label: 'Year Of Experience' },
    { number: '3+=', label: 'Projects Completed' },
  ];

  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      projectCount: '3+ Projects',
      description: 'Building responsive and performant web applications',
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Application',
      projectCount: '2 Projects',
      description: 'Designing seamless mobile experiences',
    },
    {
      icon: <FaRocket />,
      title: 'Product Strategy',
      projectCount: '2 Projects',
      description: 'Defining product vision and roadmap',
    },
    {
      icon: <FaBrain />,
      title: 'AI Integration',
      projectCount: '3 Projects',
      description: 'Implementing intelligent solutions and automation using AI technologies',
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-background-dark min-h-screen flex flex-col justify-center">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          {/* Clean Modern Title */}
          <h2 className="text-4xl lg:text-6xl font-black text-text-primary mb-4 lg:mb-6">
            My <span className="text-primary">Quality</span> Services
          </h2>
          
          {/* Simple Subtitle */}
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            I put your ideas and thus your wishes in the form of a unique web project that brings innovation to life
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="grid grid-cols-2 gap-8 lg:gap-16 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                <div className="text-4xl lg:text-6xl font-black text-primary mb-2 animate-pulse">
                  {stat.number}
                </div>
                <div className="text-xs lg:text-sm text-text-secondary uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
                {/* Decorative background */}
                <div className="absolute -inset-2 lg:-inset-4 bg-primary/5 rounded-xl -z-10 blur-sm"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group cursor-pointer h-full"
            >
              {/* Card Background with Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-background-card/80 to-background-overlay/60 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-ui-border/20 shadow-2xl group-hover:shadow-primary/20 transition-all duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              {/* Card Content */}
              <div className="relative p-4 lg:p-6 h-full flex flex-col justify-between transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500">
                {/* Modern Icon with Multiple Effects */}
                <div className="relative mb-4 lg:mb-6 flex justify-center">
                  {/* Icon Container with Rotating Background */}
                  <div className="relative p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent animate-spin" style={{animationDuration: '10s'}}></div>
                    
                    {/* Main Icon */}
                    <div className="relative text-4xl lg:text-5xl text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-2xl">
                      {service.icon}
                    </div>
                    
                    {/* Layered Shadows */}
                    <div className="absolute top-5 left-5 lg:top-7 lg:left-7 text-4xl lg:text-5xl text-primary/15 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 -z-10">
                      {service.icon}
                    </div>
                    
                    {/* Pulsing Glow */}
                    <div className="absolute inset-0 text-4xl lg:text-5xl text-primary/20 blur-xl group-hover:scale-150 animate-pulse transition-all duration-500 -z-20 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  {/* Modern Typography */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg lg:text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Project Count Badge */}
                    <div className="inline-block px-3 py-1 bg-primary/20 text-primary font-semibold rounded-full text-xs lg:text-sm border border-primary/30 group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300">
                      {service.projectCount}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-text-secondary text-center leading-relaxed mb-4 text-sm lg:text-base group-hover:text-text-primary/80 transition-colors duration-300 flex-1">
                    {service.description}
                  </p>
                  
                  {/* Modern CTA */}
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                      <span className="text-sm lg:text-base">Explore</span>
                      <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background-darker transition-all duration-300">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;