'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            © {new Date().getFullYear()} Necmettin Zivlak
          </div>
          <div className="flex space-x-8 mt-4 sm:mt-0">
            <Link 
              href="https://github.com/necmettinzivlak" 
              target="_blank" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium tracking-wide transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="https://linkedin.com/in/necmettinzivlak" 
              target="_blank" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium tracking-wide transition-colors"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://twitter.com/necmettinzivlak" 
              target="_blank" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium tracking-wide transition-colors"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 