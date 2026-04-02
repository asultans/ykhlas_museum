"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n, Language } from "@/lib/i18n";
import Link from "next/link";
import { KazakhCategoryAccordion } from "@/components/ui/interactive-image-accordion";
import { ImageSequencePlayer } from "@/components/ui/image-sequence-player";

// Language icon component
function LanguageIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function KazakhSectionPage() {
  const { t, language, setLanguage } = useI18n();
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close language menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  const languageLabels: Record<Language, string> = {
    kk: 'ҚАЗ',
    ru: 'РУС',
    en: 'ENG',
  };

  // Category items for the accordion with correct images
  const categoryItems = [
    {
      id: 'stringed',
      title: t.kazakhInstruments.categories.stringed.name,
      imageUrl: '/instruments/kazakh/stringed/adyrna/2.png',
      link: '/kazakh/instruments#stringed',
    },
    {
      id: 'percussion',
      title: t.kazakhInstruments.categories.percussion.name,
      imageUrl: '/instruments/kazakh/percussion/kos_dunkildek/1.png',
      link: '/kazakh/instruments#percussion',
    },
    {
      id: 'wind',
      title: t.kazakhInstruments.categories.wind.name,
      imageUrl: '/instruments/kazakh/wind/muiiz_syrnai/1.png',
      link: '/kazakh/instruments#wind',
    },
    {
      id: 'noisemaker',
      title: t.kazakhInstruments.categories.noisemaker.name,
      imageUrl: '/instruments/kazakh/noisemaker/asatayak/2.png',
      link: '/kazakh/instruments#noisemaker',
    },
    {
      id: 'reed',
      title: t.kazakhInstruments.categories.reed.name,
      imageUrl: '/instruments/kazakh/reed/shankobyz/3.png',
      link: '/kazakh/instruments#reed',
    },
  ];

  const backText: Record<string, string> = {
    en: '← Back',
    kk: '← Артқа',
    ru: '← Назад',
  };

  const exploreText: Record<string, string> = {
    en: 'Explore Collection',
    kk: 'Жинақты зерттеу',
    ru: 'Исследовать коллекцию',
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            {backText[language]}
          </Link>
          <span className="text-base font-medium text-gray-900">
            {t.header.museumName}
          </span>
          
          {/* Language Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100 transition-colors min-w-[70px]"
            >
              <LanguageIcon className="w-4 h-4" />
              <span className="text-xs font-medium">{languageLabels[language]}</span>
            </button>
            
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 py-1 rounded-md shadow-lg min-w-[120px] overflow-hidden bg-white border border-gray-200"
                >
                  {(['kk', 'ru', 'en'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full px-3 py-2 text-left text-sm transition-colors flex items-center justify-between hover:bg-gray-100 text-gray-900 ${
                        language === lang ? 'bg-gray-100' : ''
                      }`}
                    >
                      <span>{t.languages[lang]}</span>
                      {language === lang && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="pt-24 md:pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
            
            {/* Left Side: Text Content */}
            <motion.div 
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tighter mb-6">
                {t.kazakhInstruments.hero.title}
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t.kazakhInstruments.hero.subtitle}
              </p>
              <div className="mt-10">
                <Link
                  href="/kazakh/instruments"
                  className="inline-block bg-gray-900 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  {exploreText[language]}
                </Link>
              </div>
            </motion.div>

            {/* Right Side: Image Accordion */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <KazakhCategoryAccordion items={categoryItems} defaultActiveIndex={2} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Memorial Section Teaser - Split Layout with Bento */}
      <section className="pb-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                {t.kazakhInstruments.memorial.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t.kazakhInstruments.memorial.description}
              </p>
              <div className="pt-4">
                <Link
                  href="/kazakh/memorial"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-xl border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg group"
                >
                  <span>{t.kazakhInstruments.memorial.buttonText}</span>
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Berkut Image Sequence Bento */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-200 bg-gradient-to-br from-amber-50 to-stone-50">
                <ImageSequencePlayer
                  frameCount={63}
                  framePrefix="/berkut-frames/frame_"
                  frameSuffix=".jpg"
                  frameDigits={4}
                  duration={3}
                  className="w-full h-full"
                />
                
                {/* Decorative gradient overlay on edges */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-stone-500/5"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">{t.header.museumName}</p>
        </div>
      </footer>
    </div>
  );
}
