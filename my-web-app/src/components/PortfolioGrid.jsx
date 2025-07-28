import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioGrid = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: '/src/assets/images/cloud-background.jpeg',
      isCaseStudy: true,
    },
    {
      id: 2,
      title: 'Banking App UI',
      category: 'UX/UI Design',
      image: '/src/assets/images/cloud-background.jpeg',
      isCaseStudy: false,
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      category: 'Mobile Design',
      image: '/src/assets/images/cloud-background.jpeg',
      isCaseStudy: true,
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'Product Design',
      image: '/src/assets/images/cloud-background.jpeg',
      isCaseStudy: false,
    },
    {
      id: 5,
      title: 'Travel Booking App',
      category: 'UX/UI Design',
      image: '/src/assets/images/cloud-background.jpeg',
      isCaseStudy: true,
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'Web Development',
      image: '/src/assets/images/cloud-background.jpeg',
      isCaseStudy: false,
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-h1 font-bold text-text-primary mb-2">
            Featured Portfolio
          </h2>
          <p className="text-base text-text-secondary">
            Explore my recent work and creative projects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Link
              to={`/projects/${item.id}`}
              key={item.id}
              className="group block bg-background-card rounded-large overflow-hidden hover:scale-[1.02] hover:shadow-large transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-darker/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-caption text-primary uppercase tracking-wider mb-2">
                  {item.category}
                </p>
                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                {item.isCaseStudy && (
                  <span className="inline-block bg-primary text-background-darker px-3 py-1 rounded-small text-caption font-semibold">
                    Case Study
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            View All Projects
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;