import React from 'react';
import Button from './Button';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin />, 
      href: 'https://linkedin.com/in/jonhzuniga',
      gradient: 'from-blue-600 to-blue-800',
      shadow: 'shadow-blue-500/50'
    },
    { 
      name: 'GitHub', 
      icon: <FaGithub />, 
      href: 'https://github.com/jayarzuniga',
      gradient: 'from-gray-700 to-gray-900',
      shadow: 'shadow-gray-500/50'
    },
  ];

  return (
    <section className="section pt-32 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <div className="animate-fade-in text-left">
            <div className="mb-6">
              <p className="text-xl lg:text-4xl font-medium text-text-secondary mb-2">
                Hello! I Am
              </p>
              <h1 className="text-5xl lg:text-7xl font-black text-primary leading-tight">
                Jay-R
              </h1>
            </div>

            <div className="h-1 w-24 bg-primary mb-6"></div>
            
            <div className="space-y-2 text-sm text-text-secondary leading-relaxed">
              <p>Passionate about harnessing the power of AI</p>
              <p>BSIT Graduate</p>
              <p>Full-Stack Developer with a Creative Vibe for Coding</p>
              <p className="text-primary font-medium">Full-stack developer with a solid tech foundation and a creative coding vibe.</p>
            </div>
          </div>
          
          {/* Center Content - Image */}
          <div className="relative animate-scale-in animation-delay-300 flex justify-center">
            <div className="relative z-10">
              <img 
                src="/src/assets/images/My-Image.png" 
                alt="Jay-R Profile" 
                className="w-64 h-80 lg:w-72 lg:h-96 rounded-full object-cover shadow-large"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-darker/50 to-transparent rounded-full"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-80 lg:w-72 lg:h-96 bg-primary/30 rounded-full shadow-glow -z-10"></div>
          </div>
          
          {/* Right Content */}
          <div className="animate-fade-in animation-delay-500 text-left pl-4">
            <p className="text-base text-text-secondary leading-relaxed mb-8">
            Because if the portfolio looks smart, it’s powered by something smarter—{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary font-semibold">AI</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/30 -z-10"></span>
              </span>
              {' '}
            </p>
            
            <div className="mb-8">
              <h2 className="text-base text-text-primary mb-2">
                I'm a junior developer with
              </h2>
              <p className="text-2xl font-bold text-text-primary mb-6">
                <span className="text-primary font-black text-3xl">A Year</span> of <span className="text-primary font-black">Self Learning Experience</span>
              </p>
              
              <div className="text-left animate-fade-in animation-delay-500">
                <Button 
                  variant="link" 
                  icon="→"
                  to="/projects"
                  className="text-primary hover:text-primary-dark justify-start"
                >
                  show more
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="mt-20 pt-8 border-t border-ui-border">
          <div className="text-center mb-6">
            <p className="text-text-primary text-base">
              Connect with me on social platforms
            </p>
          </div>
          <div className="flex items-center justify-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className={`
                  relative p-4 rounded-xl bg-gradient-to-br ${social.gradient}
                  transform transition-all duration-300 ease-out
                  group-hover:scale-110 group-hover:-translate-y-2
                  shadow-lg ${social.shadow} group-hover:shadow-xl
                  before:absolute before:inset-0 before:rounded-xl
                  before:bg-gradient-to-br before:from-white/20 before:to-transparent
                  before:opacity-0 group-hover:before:opacity-100
                  before:transition-opacity before:duration-300
                `}>
                  <div className="relative z-10 text-white text-2xl">
                    {social.icon}
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;