import React from 'react';
import Button from './Button';

const CTASection = () => {
  return (
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
            <h2 className="text-h1 font-bold text-text-primary mb-4">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-base text-text-secondary mb-8 max-w-xl mx-auto">
              I'm always excited to work on new projects and help bring your ideas to life. 
              Whether you need a complete solution or just some guidance, I'm here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="large"
                to="/contact-me"
              >
                Start a Project
              </Button>
              <Button 
                variant="secondary" 
                size="large"
                href="mailto:hello@jayr.design"
              >
                Send an Email
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-ui-border">
              <p className="text-small text-text-secondary mb-4">
                Or connect with me on social media
              </p>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;