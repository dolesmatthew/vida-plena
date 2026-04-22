import { useState } from 'react';
import i18next from 'i18next';

const LanguageSelector = () => {
  const [language, setLanguage] = useState(i18next.language);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage);
  };

  return (
    <div className="flex items-center gap-1 bg-obsidian/8 rounded-full p-0.5 border border-obsidian/10">
      {[
        { key: 'en', values: ['en', 'en-US'] },
        { key: 'es', values: ['es', 'es-ES'] }
      ].map((l) => (
        <button
          key={l.key}
          onClick={() => handleLanguageChange(l.key)}
          className={`px-3 py-1 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-200 ${
            l.values.includes(language)
              ? 'bg-terracotta text-alabaster shadow-sm'
              : 'text-obsidian/50 hover:text-obsidian'
          }`}>
          {l.key}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
