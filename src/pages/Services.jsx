import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/services/ServiceCard';
import ServiceDetail from '../components/services/ServiceDetail';
import { servicesData } from '../data/servicesData';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Digital Marketing, Web Development & IT Solutions | DigitalVista</title>
        <meta name="description" content="Comprehensive digital services for Indian businesses: SEO, PPC, social media marketing, web development, ecommerce solutions, and IT consultancy. Pricing starts from ₹10,000/month." />
        <meta name="keywords" content="digital marketing services India, web development packages, SEO services pricing, PPC management, social media marketing cost, ecommerce development India, IT support services" />
        <link rel="canonical" href="https://digitalvista.in/services" />
      </Helmet>
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Digital Solutions for
              <span className="text-orange-400"> Indian Businesses</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive digital transformation services designed to help your business 
              thrive in India's competitive digital marketplace.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle size={20} className="text-green-400" />
                <span>500+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle size={20} className="text-green-400" />
                <span>4.9/5 Customer Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle size={20} className="text-green-400" />
                <span>Pan-India Service</span>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="gradient-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Comprehensive Service Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From startups to established enterprises, we provide end-to-end digital solutions 
                tailored for the Indian market.
              </p>
            </div>
            
            <div className="space-y-12">
              {servicesData.map((service, index) => (
                <div key={service.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                  <ServiceDetail service={service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Indian Businesses Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges and opportunities in the Indian market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🇮🇳",
                  title: "India-First Approach",
                  description: "Strategies designed specifically for Indian markets, consumer behavior, and business landscape."
                },
                {
                  icon: "💰",
                  title: "Affordable Pricing",
                  description: "Competitive pricing structure designed for Indian startups and MSMEs with transparent costs."
                },
                {
                  icon: "🕐",
                  title: "24/7 Support",
                  description: "Round-the-clock support in multiple Indian languages with local customer service team."
                },
                {
                  icon: "📈",
                  title: "Proven Results",
                  description: "Track record of helping 500+ Indian businesses achieve 300% average growth in digital presence."
                },
                {
                  icon: "🏆",
                  title: "Industry Expertise",
                  description: "Deep understanding of Indian industries from textiles to technology, retail to restaurants."
                },
                {
                  icon: "🤝",
                  title: "Long-term Partnership",
                  description: "We don't just deliver projects, we build lasting partnerships to grow your business continuously."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`text-center p-6 bg-gray-50 rounded-2xl hover-lift transition-all duration-300 animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of successful Indian businesses who have already transformed digitally with us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="gradient-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Your Digital Journey
                <ArrowRight className="ml-2" size={20} />
              </Link>
              
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent("Hi! I'm interested in your digital services. Please provide more information.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;