"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/translations";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-full mx-auto px-2">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="w-8 h-8 sm:w-10 sm:h-10 relative rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700 flex-shrink-0">
            <Image
              src="/images/me.jpeg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden sm:flex items-center bg-gray-100/50 dark:bg-gray-800/50 rounded-lg p-1 space-x-1">
              {[
                { lang: "tr", alt: "Türkçe" },
                { lang: "az", alt: "Azərbaycan" },
                { lang: "en", alt: "English" },
                { lang: "de", alt: "Deutsch" },
              ].map((item) => (
                <button
                  key={item.lang}
                  onClick={() => setLanguage(item.lang as any)}
                  className={`w-7 h-5 relative group transition-all duration-200 rounded overflow-hidden ${
                    language === item.lang
                      ? "shadow-md scale-110 bg-white dark:bg-gray-700"
                      : "hover:bg-white/50 dark:hover:bg-gray-700/50 hover:scale-105"
                  }`}
                >
                  <Image
                    src={`/images/flags/${item.lang}.svg`}
                    alt={item.alt}
                    fill
                    className={`object-cover transition-opacity ${
                      language !== item.lang ? "opacity-75" : "opacity-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors" />
                </button>
              ))}
            </div>

            <div className="flex sm:hidden relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-1 px-2 py-1 rounded-lg bg-gray-100/50 dark:bg-gray-800/50"
              >
                <Image
                  src={`/images/flags/${language}.svg`}
                  alt="Current Language"
                  width={16}
                  height={12}
                  className="w-4 h-3"
                />
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>

              {/* Mobile Language Menu */}
              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 rounded-xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-200 dark:ring-gray-800">
                  <div className="py-1">
                    {[
                      { lang: "tr", alt: "Türkçe" },
                      { lang: "az", alt: "Azərbaycan" },
                      { lang: "en", alt: "English" },
                      { lang: "de", alt: "Deutsch" },
                    ].map((item) => (
                      <button
                        key={item.lang}
                        onClick={() => {
                          setLanguage(item.lang as any);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-left text-sm transition-colors ${
                          language === item.lang
                            ? "bg-gray-50 dark:bg-gray-800/50 text-blue-600 dark:text-blue-400"
                            : "hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <Image
                          src={`/images/flags/${item.lang}.svg`}
                          alt={item.alt}
                          width={16}
                          height={12}
                          className="w-4 h-3"
                        />
                        <span className="font-medium">{item.alt}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105 flex-shrink-0"
              title={theme === "dark" ? "Açık tema" : "Koyu tema"}
            >
              {theme === "dark" ? (
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10 opacity-0 flex-shrink-0"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
