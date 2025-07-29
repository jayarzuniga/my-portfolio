import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCode, FaArrowLeft, FaTools, FaCog } from 'react-icons/fa';

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen bg-background-darker">
      <Navbar />
      
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
        {/* Background Decorations */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/8 rounded-full blur-2xl" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container text-center relative z-10 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Animated Icons */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="p-4 bg-background-card rounded-xl animate-bounce" style={{animationDelay: '0s'}}>
                <FaCode className="text-3xl text-primary" />
              </div>
              <div className="p-4 bg-background-card rounded-xl animate-bounce" style={{animationDelay: '0.2s'}}>
                <FaTools className="text-3xl text-primary" />
              </div>
              <div className="p-4 bg-background-card rounded-xl animate-bounce" style={{animationDelay: '0.4s'}}>
                <FaCog className="text-3xl text-primary animate-spin" style={{animationDuration: '3s'}} />
              </div>
            </div>

            {/* Main Content */}
            <h1 className="text-5xl lg:text-7xl font-black text-primary mb-6 animate-fade-in">
              Under Development
            </h1>
            
            <div className="h-1 w-32 bg-primary mx-auto mb-8"></div>
            
            <p className="text-xl text-text-secondary mb-8 animate-fade-in animation-delay-200 leading-relaxed">
              This project details is currently being crafted with attention to detail. 
              I'm working hard to bring you comprehensive insights into the development process, 
              challenges overcome, and solutions implemented.
            </p>
            
            <div className="bg-background-card p-8 rounded-xl border border-ui-border mb-12 animate-fade-in animation-delay-400">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <p className="text-text-secondary text-base mb-2">Currently working on:</p>
              <ul className="text-text-primary text-left max-w-md mx-auto space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Detailed project documentation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Technical implementation details
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Visual demonstrations and screenshots
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Lessons learned and insights
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-600">
              <Link 
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-primary text-background-darker font-semibold rounded-large hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300 ease-out"
              >
                <FaArrowLeft className="mr-2" />
                Back to Projects
              </Link>
              
              <Link 
                to="/contact-me"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-large hover:bg-primary hover:text-background-darker hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                Get In Touch
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-16 p-6 bg-gradient-to-r from-background-card to-background-dark rounded-xl border border-ui-border animate-fade-in animation-delay-800">
              <p className="text-text-secondary text-sm mb-2">
                Want to be notified when this case study is ready?
              </p>
              <p className="text-primary font-medium">
                Connect with me on LinkedIn or GitHub for updates!
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UnderDevelopment;