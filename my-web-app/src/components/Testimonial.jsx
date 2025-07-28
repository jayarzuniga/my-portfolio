import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Jay-R's expertise in cloud architecture transformed our infrastructure. The migration was seamless, and we've seen a 40% improvement in performance.",
      author: {
        name: "Sarah Chen",
        title: "CTO at TechStart",
        image: "/src/assets/images/my-image.JPG",
      },
      rating: 5,
    },
    {
      id: 2,
      quote: "Working with Jay-R was a game-changer for our startup. His full-stack skills and attention to detail delivered a product that exceeded our expectations.",
      author: {
        name: "Michael Rodriguez",
        title: "Founder of InnovateLab",
        image: "/src/assets/images/my-image.JPG",
      },
      rating: 5,
    },
    {
      id: 3,
      quote: "The UI/UX designs Jay-R created for our platform were intuitive and beautiful. Our user engagement increased by 60% after the redesign.",
      author: {
        name: "Emily Thompson",
        title: "Product Manager at DesignCo",
        image: "/src/assets/images/my-image.JPG",
      },
      rating: 5,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="section bg-background-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-h1 font-bold text-text-primary mb-2">
            Client Testimonials
          </h2>
          <p className="text-base text-text-secondary">
            What my clients say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background-card p-8 md:p-12 rounded-xl relative">
            {/* Quote Icon */}
            <FaQuoteLeft className="text-5xl text-primary opacity-20 absolute top-8 left-8" />
            
            {/* Testimonial Content */}
            <div className="relative z-10">
              <p className="text-h3 text-text-primary leading-relaxed mb-8 italic">
                "{current.quote}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={current.author.image}
                  alt={current.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-base font-semibold text-text-primary">
                    {current.author.name}
                  </h4>
                  <p className="text-small text-text-secondary">
                    {current.author.title}
                  </p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-xl ${
                      i < current.rating ? 'text-primary' : 'text-ui-border'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-background-dark hover:bg-ui-hover transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'w-8 bg-primary'
                        : 'bg-ui-border hover:bg-text-secondary'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-background-dark hover:bg-ui-hover transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;