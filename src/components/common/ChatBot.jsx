import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your digital assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickResponses = [
    "Tell me about your services",
    "I need a website",
    "Digital marketing help",
    "Get a quote",
    "Contact information"
  ];

  const botResponses = {
    "tell me about your services": "We offer Digital Marketing, Web Development, IT Consultancy, and Digital Business Solutions. Would you like to know more about any specific service?",
    "i need a website": "Great! We create modern, responsive websites for Indian businesses. Our packages start from ₹25,000. Would you like to schedule a free consultation?",
    "digital marketing help": "Our digital marketing services include SEO, PPC, Social Media Marketing, and more. We've helped Indian businesses increase their online presence by 300%. Shall I connect you with our marketing expert?",
    "get a quote": "I'd be happy to help you get a quote! Please share your requirements or contact us at +91 98765 43210 for a detailed discussion.",
    "contact information": "You can reach us at:\n📞 +91 98765 43210\n📧 info@digitalvista.in\n📍 HITEC City, Hyderabad\n\nOr use our contact form for detailed inquiries!"
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Generate bot response
    setTimeout(() => {
      const lowercaseInput = inputValue.toLowerCase();
      let botResponse = "Thank you for your message! For detailed assistance, please contact us at +91 98765 43210 or fill out our contact form.";

      // Find matching response
      Object.keys(botResponses).forEach(key => {
        if (lowercaseInput.includes(key)) {
          botResponse = botResponses[key];
        }
      });

      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  const handleQuickResponse = (response) => {
    setInputValue(response);
    handleSendMessage();
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageSquare size={20} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="gradient-blue text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">DigitalVista Assistant</h3>
              <p className="text-xs opacity-90">Online now</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'gradient-blue text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Quick Responses */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">Quick options:</p>
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className="block w-full text-left p-2 text-xs bg-blue-50 hover:bg-blue-100 text-blue-600 rounded transition-colors duration-200"
                  >
                    {response}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="gradient-blue text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;