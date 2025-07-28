import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioGrid = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Transitech: AI and IOT Solution',
      category: 'IOT | AI | Mobile | Web Development',
      media: '/src/assets/videos/transitech_vid.mp4', 
      type: 'video',
      description: 'Smart IoT platform integrating AI for predictive analytics and automated system management.',
      isCaseStudy: true,
    },
    {
      id: 2,
      title: 'Eye of Amihan: AI and IOT Solution',
      category: 'IOT | AI | Web Application',
      media: '/src/assets/videos/Eye-of-Amihan.mp4', 
      type: 'video',
      description: 'Flood monitoring system with AI-powered forecasting and real-time environmental data analysis.',
      isCaseStudy: true,
    },
    {
      id: 3,
      title: 'E-commerce/Booking Management Platform',
      category: 'AI | Web Application',
      media: '/src/assets/images/ramelyn-catering.png', 
      type: 'image',
      description: 'Full-stack catering management platform with AI-powered recommender system.',
      isCaseStudy: true,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background-darker via-background-dark to-background-card relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/8 rounded-full blur-2xl" style={{animationDuration: '4s'}}></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          {/* Enhanced Title */}
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl lg:text-6xl font-black text-text-primary mb-4">
              Featured <span className="text-primary">Portfolio</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          
          <p className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto">
            Explore my recent work and creative projects that showcase innovation and technical excellence
          </p>
        </div>

        {/* Modern Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Link
              to={`/projects/${item.id}`}
              key={item.id}
              className="group block relative transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Glassmorphism Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-background-card/60 to-background-overlay/40 backdrop-blur-xl rounded-3xl border border-ui-border/20 shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/30 transition-all duration-500"></div>
              
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              {/* Card Content */}
              <div className="relative overflow-hidden rounded-3xl">
                {/* Enhanced Media Section */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  {item.type === 'video' ? (
                    <video
                      className="w-full h-full object-cover group-hover:scale-125 transition-all duration-700"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={item.media} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.media}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    />
                  )}
                  
                  {/* Multiple Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-darker/80 via-background-darker/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Animated Corner Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-background-darker text-xs font-bold uppercase tracking-wider rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {item.category}
                  </div>
                </div>

                {/* Enhanced Content Section */}
                <div className="p-6 lg:p-8">
                  {/* Title with Modern Styling */}
                  <h3 className="text-lg lg:text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm lg:text-base text-text-secondary leading-relaxed mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                  
                  {/* Bottom Section with Badges */}
                  <div className="flex items-center justify-between">
                    {/* Animated Arrow */}
                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <span className="text-sm font-medium">View Project</span>
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background-darker transition-all duration-300">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Modern View All Button */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl font-semibold text-primary hover:from-primary hover:to-primary-dark hover:text-background-darker transition-all duration-500 hover:scale-105 hover:shadow-glow"
          >
            <span>View All Projects</span>
            <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center group-hover:bg-background-darker/20 group-hover:rotate-45 transition-all duration-500">
              →
            </div>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;