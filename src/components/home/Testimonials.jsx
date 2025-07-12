import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Indian Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses across India transform digitally and achieve remarkable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-6 rounded-2xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <Quote className="text-blue-600 mr-2" size={20} />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs">{testimonial.company}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fadeInUp">
          <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-400 fill-current" size={24} />
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
            <div className="text-gray-600">
              <p className="font-semibold">Excellent Rating</p>
              <p className="text-sm">Based on 500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;