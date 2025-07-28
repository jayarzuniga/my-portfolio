import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-me' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Contact', path: '/contact-me' },
  ];

  const services = [
    { name: 'UX/UI Design', path: '/services#ux-ui' },
    { name: 'Web Development', path: '/services#web-dev' },
    { name: 'Mobile Design', path: '/services#mobile' },
    { name: 'Product Strategy', path: '/services#strategy' },
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Resources', path: '/resources' },
    { name: 'FAQ', path: '/faq' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-background-darker pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">😊</span>
              <span className="text-xl font-semibold text-text-primary">Jay-R</span>
            </div>
            <p className="text-small text-text-secondary leading-relaxed mb-4">
              Creating digital experiences that inspire and engage. Let's build something amazing together.
            </p>
            <a 
              href="mailto:hello@jayr.design" 
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              <FaEnvelope />
              <span className="text-base font-medium">hello@jayr.design</span>
            </a>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-small text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-text-primary mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-small text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-semibold text-text-primary mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.path}
                    className="text-small text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-ui-border">
          <p className="text-center text-small text-text-muted">
            © {new Date().getFullYear()} Jay-R. All rights reserved. | 
            <Link to="/privacy" className="ml-1 hover:text-text-secondary transition-colors">
              Privacy Policy
            </Link> | 
            <Link to="/terms" className="ml-1 hover:text-text-secondary transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
