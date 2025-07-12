import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
  ];

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language.name);
    setIsOpen(false);
    // Here you would implement actual language switching logic
    console.log(`Language changed to: ${language.code}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
      >
        <Globe size={18} />
        <span className="hidden sm:inline text-sm">{currentLanguage}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-32 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;