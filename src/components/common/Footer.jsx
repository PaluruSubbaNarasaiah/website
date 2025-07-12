import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DV</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">{companyInfo.name}</h2>
                <p className="text-sm text-gray-400">{companyInfo.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {companyInfo.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500" />
                <span className="text-gray-300">{companyInfo.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500" />
                <span className="text-gray-300">{companyInfo.contact.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 mt-1" />
                <div className="text-gray-300">
                  <p>{companyInfo.contact.address.line1}</p>
                  <p>{companyInfo.contact.address.line2}</p>
                  <p>{companyInfo.contact.address.city}, {companyInfo.contact.address.state} {companyInfo.contact.address.pincode}</p>
                  <p>{companyInfo.contact.address.country}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="text-gray-300 space-y-1 text-sm mb-6">
              <p>{companyInfo.businessHours.weekdays}</p>
              <p>{companyInfo.businessHours.saturday}</p>
              <p>{companyInfo.businessHours.sunday}</p>
            </div>
            
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-blue-500 transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-pink-500 transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href={`https://wa.me/${companyInfo.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank\" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-green-500 transition-colors duration-200">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {companyInfo.name}. All rights reserved. | 
            Proudly serving Indian businesses with digital solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;