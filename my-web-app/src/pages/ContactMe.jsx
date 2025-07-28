import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      detail: "hello@jayr.design",
      link: "mailto:hello@jayr.design"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      detail: "San Francisco, CA",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <div className="min-h-screen bg-background-darker">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-background-darker to-background-dark">
          <div className="container text-center">
            <h1 className="text-hero font-bold text-text-primary mb-4 animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-background-card p-8 rounded-xl border border-ui-border">
                <h2 className="text-h2 font-bold text-text-primary mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background-dark border border-ui-border rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background-dark border border-ui-border rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background-dark border border-ui-border rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background-dark border border-ui-border rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button type="submit" variant="primary" size="large" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-h2 font-bold text-text-primary mb-6">Let's Connect</h2>
                  <p className="text-text-secondary mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-6 bg-background-card rounded-xl border border-ui-border hover:border-primary transition-all duration-300 group"
                    >
                      <div className="text-2xl text-primary group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-text-primary">
                          {info.title}
                        </h3>
                        <p className="text-text-secondary">
                          {info.detail}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-base font-semibold text-text-primary mb-4">
                    Follow Me
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-background-card border border-ui-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
                        aria-label={link.label}
                      >
                        <span className="text-xl">{link.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary font-semibold">Available for Projects</span>
                  </div>
                  <p className="text-text-secondary text-sm">
                    I'm currently accepting new projects for Q1 2024. Let's discuss your ideas!
                  </p>
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

export default ContactMe;