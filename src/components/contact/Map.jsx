import React from 'react';
import { companyInfo } from '../../data/companyInfo';

const Map = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h3 className="text-xl font-bold mb-2">Our Location</h3>
        <p className="text-blue-100">
          Visit our office in the heart of HITEC City, Hyderabad
        </p>
      </div>
      
      <div className="h-96 relative">
        <iframe
          src={companyInfo.googleMapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DigitalVista Solutions Office Location"
        ></iframe>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
            <p className="text-gray-600 text-sm">
              {companyInfo.contact.address.line1}<br />
              {companyInfo.contact.address.line2}<br />
              {companyInfo.contact.address.city}, {companyInfo.contact.address.state} {companyInfo.contact.address.pincode}<br />
              {companyInfo.contact.address.country}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
            <div className="text-gray-600 text-sm space-y-1">
              <p>{companyInfo.businessHours.weekdays}</p>
              <p>{companyInfo.businessHours.saturday}</p>
              <p>{companyInfo.businessHours.sunday}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(
              `${companyInfo.contact.address.line1}, ${companyInfo.contact.address.line2}, ${companyInfo.contact.address.city}, ${companyInfo.contact.address.state}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-blue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;