import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioGrid from "../components/PortfolioGrid";

const Projects = () => {
  const projectData = [
    {
      title: "Cloud Infra Dashboard",
      description: "Monitor cloud infrastructure in real time using Prometheus, Grafana, and Kubernetes.",
      image: "https://via.placeholder.com/600x400?text=Cloud+Dashboard",
      link: "#",
      tags: ["AWS", "Kubernetes", "React"],
      category: "Cloud Architecture"
    },
    {
      title: "Realtime Chat App",
      description: "Full-stack chat app built with React, Firebase, and Tailwind. Supports media sharing.",
      image: "https://via.placeholder.com/600x400?text=Chat+App",
      link: "#",
      tags: ["React", "Firebase", "WebRTC"],
      category: "Web Development"
    },
    {
      title: "DevOps Pipeline",
      description: "CI/CD pipeline using GitHub Actions, Docker, and Azure for production deployments.",
      image: "https://via.placeholder.com/600x400?text=DevOps+Pipeline",
      link: "#",
      tags: ["Docker", "GitHub Actions", "Azure"],
      category: "DevOps"
    },
  ];

  return (
    <div className="min-h-screen bg-background-darker">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-background-darker to-background-dark">
          <div className="container text-center">
            <h1 className="text-hero font-bold text-text-primary mb-4 animate-fade-in">
              My Projects
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Explore my portfolio of web applications, cloud solutions, and innovative digital products
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section bg-background-darker">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.map((project, idx) => (
                <div
                  key={idx}
                  className="group bg-background-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-ui-border hover:border-primary"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center relative overflow-hidden">
                    <span className="text-6xl font-bold text-primary/30 group-hover:scale-110 transition-transform duration-500">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-caption text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 text-text-primary group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-background-dark text-text-muted text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-primary hover:text-primary-light font-medium text-sm transition-colors"
                    >
                      View Project
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Use the existing PortfolioGrid component */}
        <PortfolioGrid />
      </main>

      <Footer />
    </div>
  );
};

export default Projects;