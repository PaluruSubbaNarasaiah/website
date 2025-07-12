import React from 'react';
import { Check, Star, Users } from 'lucide-react';

const ServiceDetail = ({ service }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center mb-6">
            <div className="text-5xl mr-4">{service.icon}</div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
              <p className="text-orange-600 font-semibold text-lg">{service.subtitle}</p>
            </div>
          </div>
          
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">{service.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Users className="text-blue-600 mx-auto mb-2" size={24} />
              <p className="text-sm font-semibold text-gray-900">100+ Projects</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Star className="text-yellow-500 mx-auto mb-2" size={24} />
              <p className="text-sm font-semibold text-gray-900">4.9/5 Rating</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Check className="text-green-500 mx-auto mb-2" size={24} />
              <p className="text-sm font-semibold text-gray-900">Guaranteed Results</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Service Features</h3>
          <div className="space-y-3 mb-6">
            {service.features.slice(0, 6).map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-600 text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">Starting from</p>
                <p className="text-2xl font-bold text-orange-600">{service.pricing}</p>
              </div>
            </div>
            <button className="w-full gradient-orange text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;