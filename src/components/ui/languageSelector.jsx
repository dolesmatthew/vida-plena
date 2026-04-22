import { useState } from 'react';
import i18next from 'i18next';

const languageOptions = [
  { language: 'English', code: 'en' },
  { language: 'Spanish', code: 'es' }
];

const LanguageSelector = () => {
  const [language, setLanguage] = useState(i18next.language);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage);
  };

  return (
    <select
      id="language"
      value={language}
      onChange={handleLanguageChange}
      className="p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:focus:border-indigo-400 dark:focus:ring-indigo-700 dark:focus:ring-opacity-50">
      {languageOptions.map(({ language, code }, key) => (
        <option value={code} key={key}>
          {language}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
