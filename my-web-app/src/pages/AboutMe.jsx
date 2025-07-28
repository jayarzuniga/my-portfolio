import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profileImage from "../assets/images/profile.jpg"; 
import resumePDF from "../assets/ATS Zuñiga, Jonh Ronel - Resume.docx.pdf";
import { FaGithub, FaLinkedin, FaFileDownload, FaEnvelope } from "react-icons/fa";
import { SiReact, SiDjango, SiFlutter, SiFirebase, SiChatbot, SiLinux, SiRobotframework } from "react-icons/si";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const skills = [
    { name: "AI Engineering (Agents)", icon: <SiRobotframework className="text-2xl" />, level: 90 },
    { name: "Prompt Engineering", icon: <SiChatbot className="text-2xl" />, level: 85 },
    { name: "React Development", icon: <SiReact className="text-2xl" />, level: 80 },
    { name: "Django Backend", icon: <SiDjango className="text-2xl" />, level: 75 },
    { name: "Flutter Mobile Apps", icon: <SiFlutter className="text-2xl" />, level: 80 },
    { name: "Firebase Services", icon: <SiFirebase className="text-2xl" />, level: 85 },
    
    { name: "Linux System Admin", icon: <SiLinux className="text-2xl" />, level: 70 },
    { name: "Hardware & Deployment", icon: "💻", level: 85 }
  ];

  const experiences = [
    {
      role: "IT Support Engineer Intern",
      company: "Adventus IT Services Inc.",
      period: "February 2025 – April 2025",
      description: "Installed, configured, and maintained desktop systems, printers, and peripherals. Provided technical support for hardware, software, and network issues to end-users."
    },
    {
      role: "Salesforce Admin Practitioner",
      company: "Northern Salesforce Chapter",
      period: "June 2021 - September 2022",
      description: "Configured and customized Salesforce to meet client needs. Managed user access and permissions, collaborating with clients to understand requirements and translate them into efficient Salesforce solutions."
    },
    {
      role: "Barista, Trainer, Coffee Master",
      company: "Starbucks",
      period: "July 2019 - December 2021",
      description: "Provided excellent customer service, trained new team members, and achieved Coffee Master certification demonstrating expertise in coffee knowledge and preparation."
    },
    {
      role: "Housekeeper and Supervisor Trainee",
      company: "Pearl Lane Hotel",
      period: "June 2016 - July 2019",
      description: "Maintained hotel cleanliness standards and underwent supervisor training, developing leadership and operational management skills."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-darker">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background-darker to-background-dark"></div>
          
          <div className="container text-center relative z-10">
            <h1 className="text-4xl lg:text-6xl font-black text-primary mb-4 animate-fade-in">
              About Me
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-200">
              Cloud enthusiast, problem solver, and passionate developer dedicated to building impactful solutions through technology.
            </p>

            <blockquote className="max-w-3xl mx-auto mt-16 animate-fade-in animation-delay-400">
              <p className="text-2xl lg:text-3xl font-medium text-text-primary italic mb-6 leading-relaxed">
                "Enthusiastic about learning technology, I eagerly seek opportunities to expand my skill set and contribute positively to a collaborative team environment."
              </p>
              <cite className="text-lg text-text-secondary font-normal not-italic">
                — My Philosophy
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
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
                  <h2 className="text-2xl font-bold text-text-primary">Jonh Ronel Zuñiga</h2>
                  <p className="text-primary mb-4">AI Engineer | Prompt Engineer | Cloud Engineer | Full Stack Developer</p>
                  <div className="text-sm text-text-secondary mb-4">
                    <div className="flex items-center">
                      <FaEnvelope className="mr-2" />
                      <span>jonhronelzuniga@gmail.com</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mb-6">
                    <a href="https://github.com/jayarzuniga" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                    <a href="https://linkedin.com/in/jonhzuniga" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                  
                  <a 
                    href={resumePDF} 
                    download="Jonh_Ronel_Zuniga_Resume.pdf"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-background-darker bg-primary hover:bg-primary-light transition-colors"
                  >
                    <FaFileDownload className="mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="md:col-span-2">
              <div className="bg-background-card rounded-xl shadow-lg p-8 border border-ui-border">
                <h2 className="text-3xl font-bold text-text-primary mb-6">My Journey</h2>
                
                <div className="prose prose-lg text-text-secondary mb-8">
                  <p className="mb-4">
                    "Enthusiastic about learning technology, I eagerly seek opportunities to expand my skill set and contribute positively to a collaborative team environment. With a particular interest in networks, cloud, AI, and security, I am committed to continuously improving my knowledge and abilities in these areas."
                  </p>
                  <p>
                    "By staying updated on the latest trends and technologies, I aim to become an invaluable asset to any organization I work with, advancing my professional growth and development."
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

                {/* Carousel Section */}
                <div>
                  {/* Tab Navigation */}
                  <div className="flex justify-center mb-8">
                    <div className="bg-background-dark rounded-lg p-1 flex space-x-1">
                      <button
                        onClick={() => setActiveTab('experience')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                          activeTab === 'experience'
                            ? 'bg-primary text-background-darker shadow-md'
                            : 'text-text-secondary hover:text-text-primary hover:bg-background-card'
                        }`}
                      >
                        Experience
                      </button>
                      <button
                        onClick={() => setActiveTab('projects')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                          activeTab === 'projects'
                            ? 'bg-primary text-background-darker shadow-md'
                            : 'text-text-secondary hover:text-text-primary hover:bg-background-card'
                        }`}
                      >
                        Projects & Certs
                      </button>
                      <button
                        onClick={() => setActiveTab('education')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                          activeTab === 'education'
                            ? 'bg-primary text-background-darker shadow-md'
                            : 'text-text-secondary hover:text-text-primary hover:bg-background-card'
                        }`}
                      >
                        Education
                      </button>
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[300px]">
                    {activeTab === 'experience' && (
                      <div className="animate-fade-in">
                        <h3 className="text-xl font-semibold text-text-primary mb-4 text-center">Professional Experience</h3>
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
                    )}

                    {activeTab === 'projects' && (
                      <div className="animate-fade-in">
                        <h3 className="text-xl font-semibold text-text-primary mb-4 text-center">Certifications & Projects</h3>
                        <div className="space-y-6">
                          <div className="border-l-4 border-primary pl-4 py-1">
                            <h4 className="font-bold text-text-primary">CompTIA ITF+ Fundamentals</h4>
                            <div className="text-text-secondary mb-1">
                              <span>April 2023 (Passed)</span>
                            </div>
                            <p className="text-text-secondary">Foundation-level certification covering IT fundamentals and technical concepts.</p>
                          </div>
                          
                          <div className="border-l-4 border-primary pl-4 py-1">
                            <h4 className="font-bold text-text-primary">APPCON 2024 Grand Winner</h4>
                            <div className="text-text-secondary mb-1">
                              <span>TransiTech: SMART Transportation Management • June 2025</span>
                            </div>
                            <p className="text-text-secondary mb-2">
                              IoT and AI-themed hackathon focused on social impact. Developed an IoT-based system for monitoring jeepney drivers and analyzing passenger density using Computer Vision, with real-time data displayed through custom-built web and mobile applications.
                            </p>
                            <a href="https://transitechiot.web.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline">
                              View Project →
                            </a>
                          </div>
                          
                          <div className="border-l-4 border-primary pl-4 py-1">
                            <h4 className="font-bold text-text-primary">APPCON 2023 Best Technology Winner</h4>
                            <div className="text-text-secondary mb-1">
                              <span>Real-time Flood Surveillance System • July 2024</span>
                            </div>
                            <p className="text-text-secondary mb-2">
                              Developed an integrated project including a web application as user interface, IoT device for measuring flood levels, and integration of TEFNUT AI model to forecast water levels based on historical data.
                            </p>
                            <a href="https://floodmonitor-iot.web.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline">
                              View Project →
                            </a>
                          </div>
                          
                          <div className="border-l-4 border-primary pl-4 py-1">
                            <h4 className="font-bold text-text-primary">Ramelyn Catering Web Application</h4>
                            <div className="text-text-secondary mb-1">
                              <span>Capstone Project • January 2024 – July 2024</span>
                            </div>
                            <p className="text-text-secondary">
                              Developed a public-facing web application supporting three core business areas: cooking services, catering services, and rental services, with integrated recommendation AI to enhance user engagement and drive sales.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'education' && (
                      <div className="animate-fade-in">
                        <h3 className="text-xl font-semibold text-text-primary mb-4 text-center">Educational Background</h3>
                        <div className="space-y-4">
                          <div className="border-l-4 border-primary pl-4 py-1">
                            <h4 className="font-bold text-text-primary">Bachelor of Science in Information Technology</h4>
                            <div className="text-text-secondary mb-1">
                              <span className="font-medium">AMA University</span>
                              <span className="mx-2">•</span>
                              <span>2022 - Current</span>
                            </div>
                            <p className="text-text-secondary">Villa Arca, Project 8, Quezon City</p>
                          </div>
                          
                          <div className="border-l-4 border-primary pl-4 py-1">
                            <h4 className="font-bold text-text-primary">Bachelor of Science in Hotel and Restaurant Management</h4>
                            <div className="text-text-secondary mb-1">
                              <span className="font-medium">Sta. Cecilia College</span>
                              <span className="mx-2">•</span>
                              <span>2011 - 2015</span>
                            </div>
                            <p className="text-text-secondary">Gen. T. De Leon, Valenzuela City</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12">
          <div className="container">
            <div className="bg-gradient-to-br from-background-card to-background-dark p-16 rounded-xl text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-dark rounded-full filter blur-3xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-4">
                  My Development <span className="text-primary">Philosophy</span>
                </h2>
                <p className="text-base text-text-secondary mb-12 max-w-2xl mx-auto">
                  The principles and values that guide my approach to technology and professional growth.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-background-card/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-ui-border hover:border-primary transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl mb-4 text-primary">🧠</div>
                    <h3 className="text-xl font-semibold mb-2 text-text-primary">Continuous Learning</h3>
                    <p className="text-text-secondary">
                      With particular interest in networks, cloud, AI, and security, I am committed to continuously improving my knowledge and abilities.
                    </p>
                  </div>
                  
                  <div className="bg-background-card/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-ui-border hover:border-primary transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl mb-4 text-primary">🤝</div>
                    <h3 className="text-xl font-semibold mb-2 text-text-primary">Team Collaboration</h3>
                    <p className="text-text-secondary">
                      I eagerly seek opportunities to contribute positively to a collaborative team environment and expand my skill set.
                    </p>
                  </div>
                  
                  <div className="bg-background-card/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-ui-border hover:border-primary transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl mb-4 text-primary">⚡</div>
                    <h3 className="text-xl font-semibold mb-2 text-text-primary">Professional Growth</h3>
                    <p className="text-text-secondary">
                      By staying updated on the latest trends and technologies, I aim to become an invaluable asset to any organization.
                    </p>
                  </div>
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

export default AboutMe;