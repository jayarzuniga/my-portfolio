import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background-darker">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-background-darker to-background-dark">
          <div className="container text-center">
            <h1 className="text-hero font-bold text-text-primary mb-4 animate-fade-in">
              Testimonials
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in animation-delay-200">
              What clients say about working with me
            </p>
          </div>
        </section>
        
        {/* Testimonial Component */}
        <Testimonial />
        
        {/* Additional testimonials or content can go here */}
        <section className="section bg-background-dark">
          <div className="container text-center">
            <h2 className="text-h2 font-bold text-text-primary mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Join these satisfied clients and let's create something amazing together.
            </p>
            <a 
              href="/contact-me" 
              className="inline-flex items-center px-8 py-4 bg-primary text-background-darker font-semibold rounded-large hover:bg-primary-light transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;