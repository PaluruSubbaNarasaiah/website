import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital services designed specifically for Indian businesses 
            to succeed in the competitive digital marketplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white p-8 rounded-2xl shadow-lg hover-lift transition-all duration-300 border border-gray-100 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <span className="text-green-500 text-sm">✓</span>
                    <span className="text-gray-600 text-sm">{feature.split(' - ')[0]}</span>
                  </div>
                ))}
              </div>
              <div className="text-orange-600 font-semibold text-sm mb-4">
                {service.pricing}
              </div>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center group"
              >
                Learn More
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fadeInUp">
          <Link
            to="/services"
            className="gradient-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
          >
            View All Services
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;