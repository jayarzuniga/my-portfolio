import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profileImage from "../assets/images/profile.jpg"; // Replace with your image
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from "react-icons/fa";
import { SiAwslambda, SiReact, SiNodedotjs } from "react-icons/si";

const AboutMe = () => {
  const skills = [
    { name: "Cloud Architecture", icon: <SiAwslambda className="text-2xl" />, level: 90 },
    { name: "Frontend Development", icon: <SiReact className="text-2xl" />, level: 85 },
    { name: "Backend Systems", icon: <SiNodedotjs className="text-2xl" />, level: 80 },
    { name: "DevOps", icon: "🚀", level: 75 },
    { name: "UI/UX Design", icon: "🎨", level: 70 },
    { name: "Technical Writing", icon: "✍️", level: 85 }
  ];

  const experiences = [
    {
      role: "Senior Cloud Engineer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Leading cloud migration projects and architecting scalable solutions."
    },
    {
      role: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2020",
      description: "Developed customer-facing web applications with React and Node.js."
    },
    {
      role: "Software Engineer",
      company: "StartUp Labs",
      period: "2016 - 2018",
      description: "Built MVP products and contributed to all parts of the stack."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-darker">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-background-darker">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-background-darker">
              Cloud enthusiast, problem solver, and passionate developer dedicated to building impactful solutions.
            </p>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Profile Card */}
            <div className="md:col-span-1">
              <div className="bg-background-card rounded-xl shadow-lg overflow-hidden border border-ui-border">
                <img 
                  src={profileImage} 
                  alt="Jay-R" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-text-primary">Jay-R</h2>
                  <p className="text-primary mb-4">Cloud & Full Stack Developer</p>
                  
                  <div className="flex space-x-4 mb-6">
                    <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                    <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                  
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-background-darker bg-primary hover:bg-primary-light transition-colors">
                    <FaFileDownload className="mr-2" />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="md:col-span-2">
              <div className="bg-background-card rounded-xl shadow-lg p-8 border border-ui-border">
                <h2 className="text-3xl font-bold text-text-primary mb-6">My Journey</h2>
                
                <div className="prose prose-lg text-text-secondary mb-8">
                  <p className="mb-4">
                    Hello! I'm Jay-R, a passionate developer with over 5 years of experience building cloud-native applications and scalable web solutions.
                  </p>
                  <p className="mb-4">
                    My journey in tech began when I built my first website at 15. Since then, I've worked with startups and enterprises to transform ideas into production-ready applications.
                  </p>
                  <p>
                    When I'm not coding, you can find me hiking, contributing to open-source projects, or mentoring aspiring developers in my community.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">My Skills</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="mb-2">
                        <div className="flex items-center mb-1">
                          <span className="mr-2">{skill.icon}</span>
                          <span className="font-medium text-text-primary">{skill.name}</span>
                          <span className="ml-auto text-sm text-text-muted">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-background-dark rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Experience</h3>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4 py-1">
                        <h4 className="font-bold text-text-primary">{exp.role}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center text-text-secondary mb-1">
                          <span className="font-medium">{exp.company}</span>
                          <span className="hidden sm:block sm:mx-2">•</span>
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-text-secondary">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 bg-background-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-8">My Development Philosophy</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background-card p-6 rounded-lg shadow-md border border-ui-border hover:border-primary transition-all duration-300">
                <div className="text-4xl mb-4 text-primary">🧠</div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Continuous Learning</h3>
                <p className="text-text-secondary">
                  Technology evolves rapidly, and I dedicate time each week to learn new concepts and tools.
                </p>
              </div>
              
              <div className="bg-background-card p-6 rounded-lg shadow-md border border-ui-border hover:border-primary transition-all duration-300">
                <div className="text-4xl mb-4 text-primary">🤝</div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Collaboration First</h3>
                <p className="text-text-secondary">
                  The best solutions emerge from diverse perspectives and shared knowledge.
                </p>
              </div>
              
              <div className="bg-background-card p-6 rounded-lg shadow-md border border-ui-border hover:border-primary transition-all duration-300">
                <div className="text-4xl mb-4 text-primary">⚡</div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Performance Matters</h3>
                <p className="text-text-secondary">
                  I optimize for speed and efficiency at every layer of the application stack.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutMe;