import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cloudbackground from "../assets/images/cloud-background.jpeg";

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Cloud Migration Dashboard",
      description: "A comprehensive tool for managing cloud resource migration with real-time analytics.",
      tags: ["AWS", "React", "Node.js"]
    },
    {
      id: 2,
      title: "Serverless E-Commerce",
      description: "Full-stack e-commerce platform built with serverless architecture.",
      tags: ["Firebase", "Stripe", "Next.js"]
    },
    {
      id: 3,
      title: "DevOps Automation Suite",
      description: "CI/CD pipeline automation with integrated monitoring.",
      tags: ["Docker", "Kubernetes", "GitHub Actions"]
    }
  ];

  const modules = [
    { id: 1, title: "Cloud Architecture", icon: "☁️" },
    { id: 2, title: "React Optimization", icon: "⚛️" },
    { id: 3, title: "DevOps Fundamentals", icon: "🛠️" }
  ];

  return (
    <div className="bg-[#f8fafc]">
      <Navbar />

      <main>
        {/* Hero Section - Already upgraded in your version */}
{/* Hero Section with Background Image */}
        <section
          className="min-h-[100vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center relative"
          style={{
            backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${cloudbackground})
    `,
            backgroundSize: "cover",
          }}
        >

          {/* Hero content */}
          <div className="relative z-10 text-white transition-all duration-700 ease-in-out animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm Jay-R
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
              A cloud enthusiast, full-stack developer, and lifelong learner. I
              build modern web apps, cloud-native solutions, and love solving
              real-world problems.
            </p>
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-transform transform hover:scale-105"
            >
              View My Projects
            </Link>
          </div>
        </section>

        {/* About Me Section - Enhanced */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="About Jay-R"
                className="rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -inset-4 border-2 border-blue-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            
            <div className="text-center md:text-left">
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Building Digital Solutions That Matter
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With 5+ years of experience in full-stack development and cloud architecture, I specialize in creating scalable, performant applications that solve real business problems. My approach combines technical excellence with user-centric design.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800">Frontend</h3>
                  <p className="text-sm text-gray-600">React, Next.js, Tailwind</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800">Backend</h3>
                  <p className="text-sm text-gray-600">Node.js, Python, Firebase</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800">Cloud</h3>
                  <p className="text-sm text-gray-600">AWS, GCP, Docker</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800">DevOps</h3>
                  <p className="text-sm text-gray-600">CI/CD, Kubernetes, Terraform</p>
                </div>
              </div>
              <Link
                to="/about-me"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Read my full story
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section - Modern Card Design */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Selected work showcasing my expertise in full-stack development and cloud solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                    <span className="text-white text-4xl">{project.id}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View case study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                View all projects
              </Link>
            </div>
          </div>
        </section>

        {/* Learning Modules - Interactive Design */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Learning Resources
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Knowledge Sharing Modules
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                I document my learning journey through comprehensive guides and tutorials covering modern web development and cloud technologies.
              </p>
              
              <div className="space-y-4">
                {modules.map((module) => (
                  <Link
                    key={module.id}
                    to={`/personal-guides#module${module.id}`}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-4 group-hover:text-blue-600 transition-colors">
                        {module.icon}
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {module.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Comprehensive guide with practical examples
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto text-gray-400 group-hover:text-blue-600 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex items-center justify-center h-full bg-gray-100">
                    <span className="text-gray-400">Module Preview</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Learning</h3>
                  <p className="text-gray-600">
                    Each module includes code samples, diagrams, and real-world applications.
                  </p>
                </div>
              </div>
              <div className="absolute -z-10 -inset-4 bg-blue-200 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you need a full-stack application, cloud solution, or technical consultation, I'd love to hear about your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-md"
              >
                Get in Touch
              </Link>
              <Link
                to="/projects"
                className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;