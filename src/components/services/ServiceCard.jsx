import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover-lift transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="text-4xl mr-4">{service.icon}</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
            <p className="text-orange-600 font-semibold">{service.subtitle}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
          <div className="space-y-2">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-600 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
          <div className="space-y-2">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <ArrowRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-600 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Starting from</p>
              <p className="text-2xl font-bold text-orange-600">{service.pricing}</p>
            </div>
            <button className="gradient-blue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;