"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n, Language } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";
import { memorialMusicians, MemorialMusician } from "@/data/memorial-instruments";

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

// Musician Card Component
function MusicianCard({ musician, language }: { musician: MemorialMusician; language: Language }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const name = musician.name[language];
  const biography = musician.biography[language];
  const years = musician.years.birth && musician.years.death 
    ? `${musician.years.birth}–${musician.years.death}` 
    : '';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="group relative"
    >
      <motion.div
        layout
        className={`relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
          isExpanded ? 'col-span-full' : ''
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Image Section */}
        <motion.div 
          layout
          className={`relative ${isExpanded ? 'h-[500px]' : 'h-[400px]'} overflow-hidden bg-gradient-to-br from-amber-50 to-stone-100`}
        >
          <div className={`absolute inset-0 transition-opacity duration-700 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-stone-100 to-amber-50 animate-pulse" />
          </div>
          
          <Image
            src={musician.image}
            alt={name}
            fill
            className={`object-cover object-center transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setImageLoaded(true)}
            priority={false}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Name & Years Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <motion.h3 
              layout
              className="text-2xl md:text-3xl font-bold mb-1 tracking-tight"
            >
              {name}
            </motion.h3>
            {years && (
              <motion.p 
                layout
                className="text-lg md:text-xl text-white/90 font-light"
              >
                {years}
              </motion.p>
            )}
          </div>

          {/* Expand/Collapse Indicator */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Biography Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="p-6 md:p-8 space-y-4">
                <div className="prose prose-lg max-w-none">
                  {biography.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/30 transition-colors duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

export default function MemorialPage() {
  const { t, language, setLanguage } = useI18n();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-amber-50">
      {/* Header - Matching instruments page style */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/kazakh"
            className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            {t.memorialPage.backButton.replace('← ', '')}
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

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
              {t.memorialPage.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
              {t.memorialPage.subtitle}
            </p>
          </motion.div>

          {/* Musicians Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {memorialMusicians.map((musician, index) => (
              <MusicianCard
                key={musician.id}
                musician={musician}
                language={language}
              />
            ))}
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 text-center"
          >
            <p className="text-lg text-stone-500 italic max-w-2xl mx-auto">
              {language === 'en' && "Each instrument tells a story. Each story echoes through generations."}
              {language === 'ru' && "Каждый инструмент хранит историю. Каждая история звучит сквозь поколения."}
              {language === 'kk' && "Әр аспап бір тарих. Әр тарих ұрпақтан ұрпаққа жалғасады."}
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
