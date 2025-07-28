import React from 'react';
import { FaPalette, FaCode, FaMobile, FaRocket } from 'react-icons/fa';

const Services = () => {
  const stats = [
    { number: '04+', label: 'Years Of Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
  ];

  const services = [
    {
      icon: <FaPalette />,
      title: 'UX/UI Design',
      projectCount: '20 Projects',
      description: 'Creating intuitive and beautiful user interfaces',
    },
    {
      icon: <FaCode />,
      title: 'Web Development',
      projectCount: '15 Projects',
      description: 'Building responsive and performant web applications',
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Design',
      projectCount: '10 Projects',
      description: 'Designing seamless mobile experiences',
    },
    {
      icon: <FaRocket />,
      title: 'Product Strategy',
      projectCount: '5 Projects',
      description: 'Defining product vision and roadmap',
    },
  ];

  return (
    <section className="section bg-background-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-h1 font-bold text-text-primary mb-2">
            My Quality Services
          </h2>
          <p className="text-base text-text-secondary">
            I put your ideas and thus your wishes in the form of a unique web project that
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-h1 font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-small text-text-secondary uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background-card p-6 rounded-large hover:-translate-y-1 hover:shadow-large transition-all duration-300 group cursor-pointer"
            >
              <div className="text-5xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-small text-text-secondary mb-4">
                {service.projectCount}
              </p>
              <p className="text-small text-text-secondary mb-4">
                {service.description}
              </p>
              <div className="text-primary float-right text-xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;