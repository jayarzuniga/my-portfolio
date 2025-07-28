import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PortfolioGrid from "../components/PortfolioGrid";
import Testimonial from "../components/Testimonial";
import CTASection from "../components/CTASection";

const Home = () => {

  return (
    <div className="min-h-screen bg-background-darker">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Portfolio Grid */}
        <PortfolioGrid />
        
        {/* Testimonial Section */}
        <Testimonial />
        
        {/* CTA Section */}
        <CTASection />

      </main>

      <Footer />
    </div>
  );
};

export default Home;