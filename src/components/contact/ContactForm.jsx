import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Digital Marketing Services',
    'Web Development',
    'IT Consultancy & Support',
    'Digital Business Solutions',
    'Other - Please specify in message'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your message has been sent successfully. Our team will contact you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="gradient-blue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Information */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
        <p className="text-blue-100 mb-8">
          Ready to transform your business digitally? Contact our experts for a free consultation.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Phone className="text-orange-400 mt-1" size={20} />
            <div>
              <p className="font-semibold">Call Us</p>
              <p className="text-blue-100">{companyInfo.contact.phone}</p>
              <p className="text-sm text-blue-200">Mon-Fri 9AM-7PM IST</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Mail className="text-orange-400 mt-1" size={20} />
            <div>
              <p className="font-semibold">Email Us</p>
              <p className="text-blue-100">{companyInfo.contact.email}</p>
              <p className="text-sm text-blue-200">Response within 2 hours</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <MapPin className="text-orange-400 mt-1" size={20} />
            <div>
              <p className="font-semibold">Visit Us</p>
              <p className="text-blue-100 text-sm">
                {companyInfo.contact.address.line1}<br />
                {companyInfo.contact.address.line2}<br />
                {companyInfo.contact.address.city}, {companyInfo.contact.address.state}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-500">
          <p className="text-blue-100 text-sm">
            🚀 Join 500+ satisfied customers who transformed their business with us
          </p>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                placeholder="+91 98765 43210"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
              placeholder="Tell us about your project requirements..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-orange text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </div>
            ) : (
              <>
                Send Message
                <Send className="ml-2" size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;