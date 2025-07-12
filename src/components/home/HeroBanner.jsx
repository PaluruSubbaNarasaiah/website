import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <div className="flex items-center space-x-2 mb-6">
              <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full">
                🇮🇳 Made in India, Made for India
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your
              <span className="gradient-blue bg-clip-text text-transparent"> Indian Business </span>
              Digitally
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive digital solutions for Indian startups, MSMEs, and traditional businesses. 
              From websites to digital marketing - we help you thrive in the digital economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="gradient-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              
              <Link
                to="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                View Our Services
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-blue-600 mr-2" size={24} />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="text-orange-500 mr-2" size={24} />
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-gray-600 text-sm">Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="text-green-600 mr-2" size={24} />
                  <span className="text-2xl font-bold text-gray-900">5+</span>
                </div>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="animate-fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 gradient-blue rounded-3xl transform rotate-6"></div>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Indian business team working on digital transformation"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg animate-pulse-slow">
                <div className="text-green-500 text-2xl">📈</div>
                <p className="text-sm font-semibold text-gray-800">300% Growth</p>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg animate-pulse-slow">
                <div className="text-blue-500 text-2xl">💻</div>
                <p className="text-sm font-semibold text-gray-800">Digital Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;