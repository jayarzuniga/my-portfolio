import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import achievementVideo from '../assets/videos/achievement.mp4';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background-darker">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={achievementVideo} type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background-darker/80 to-background-dark/90"></div>
          
          <div className="container text-center relative z-10">
            <h1 className="text-4xl lg:text-6xl font-black text-primary mb-4 animate-fade-in">
              Achievements
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-200">
              From concept to creation — built intelligent solutions with AI that solve real-world problems.
            </p>

            <blockquote className="max-w-3xl mx-auto mt-16 animate-fade-in animation-delay-400">
              <p className="text-2xl lg:text-3xl font-medium text-text-primary italic mb-6 leading-relaxed">
                "If you don't produce, you won't thrive — no matter how skilled or talented you are."
              </p>
              <cite className="text-lg text-text-secondary font-normal not-italic">
                — Cal Newport, Deep Work
              </cite>
            </blockquote>
          </div>
        </section>

     
        
        {/* Testimonial Component */}
        <Testimonial />
        
        {/* Additional testimonials or content can go here */}
        <section className="section">
          <div className="container">
            <div className="bg-gradient-to-br from-background-card to-background-dark p-16 rounded-xl text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-dark rounded-full filter blur-3xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-4">
                  Ready to Start Your <span className="text-primary">Project</span>?
                </h2>
                <p className="text-base text-text-secondary mb-8 max-w-xl mx-auto">
                  Join these satisfied clients and let's create something amazing together. 
                  Whether you need a complete solution or just some guidance, I'm here to help.
                </p>
                
                <div className="flex justify-center">
                  <a 
                    href="/contact-me" 
                    className="inline-flex items-center px-8 py-4 bg-primary text-background-darker font-semibold rounded-large hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300 ease-out"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;