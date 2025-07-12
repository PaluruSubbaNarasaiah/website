import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = companyInfo.contact.whatsapp.replace(/[^0-9]/g, '');
    const message = "Hi! I'm interested in your digital services. Please provide more information.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;