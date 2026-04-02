"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n, Language } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";
import { kazakhInstruments, Instrument } from "@/data/kazakh-instruments";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

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

export default function KazakhInstrumentsPage() {
  const { t, language, setLanguage } = useI18n();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<string, number>>({});

  // Group instruments by category
  const instrumentsByCategory = {
    stringed: kazakhInstruments.filter(i => i.category === 'stringed'),
    percussion: kazakhInstruments.filter(i => i.category === 'percussion'),
    wind: kazakhInstruments.filter(i => i.category === 'wind'),
    noisemaker: kazakhInstruments.filter(i => i.category === 'noisemaker'),
    reed: kazakhInstruments.filter(i => i.category === 'reed'),
  };

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

  // Handle hash navigation on load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
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

  const getCategoryName = (categoryKey: string): string => {
    const categoryMap: Record<string, string> = {
      stringed: t.kazakhInstruments.categories.stringed.name,
      percussion: t.kazakhInstruments.categories.percussion.name,
      wind: t.kazakhInstruments.categories.wind.name,
      noisemaker: t.kazakhInstruments.categories.noisemaker.name,
      reed: t.kazakhInstruments.categories.reed.name,
    };
    return categoryMap[categoryKey] || categoryKey;
  };

  const getInstrumentName = (instrument: Instrument): string => {
    return instrument.name[language];
  };

  const getInstrumentDescription = (instrument: Instrument, truncate: boolean = true): string => {
    const desc = instrument.description[language];
    
    // Remove the first line (instrument name) and any leading whitespace
    const lines = desc.split('\n');
    const descWithoutTitle = lines.slice(1).join('\n').trim();
    
    if (!truncate) return descWithoutTitle;
    
    // Get first ~4 sentences
    const sentences = descWithoutTitle.split(/[.!?]+/).filter(s => s.trim());
    const preview = sentences.slice(0, 4).join('. ') + (sentences.length > 4 ? '...' : '.');
    return preview;
  };

  const toggleExpanded = (id: string) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const nextImage = (instrumentId: string, totalImages: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndices(prev => ({
      ...prev,
      [instrumentId]: ((prev[instrumentId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (instrumentId: string, totalImages: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndices(prev => ({
      ...prev,
      [instrumentId]: ((prev[instrumentId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const getCurrentImageIndex = (instrumentId: string) => {
    return currentImageIndices[instrumentId] || 0;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/kazakh"
            className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            {t.kazakhInstruments.instrumentsPage.backButton.replace('← ', '')}
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gray-900" />
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-900">
                Collection
              </span>
              <div className="h-px w-12 bg-gray-900" />
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-6">
              {t.kazakhInstruments.instrumentsPage.title}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t.kazakhInstruments.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instruments by Category */}
      <div className="max-w-6xl mx-auto px-6 pb-32 space-y-48">
        {Object.entries(instrumentsByCategory).map(([categoryKey, instruments], categoryIndex) => (
          <section key={categoryKey} id={categoryKey} className="scroll-mt-24">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 flex items-center gap-4"
            >
              <span className="font-mono text-sm text-gray-400">
                0{categoryIndex + 1}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
                {getCategoryName(categoryKey)}
              </h2>
            </motion.div>

            {/* Instruments in this category */}
            <div className="space-y-32">
              {instruments.map((instrument, index) => {
                const isHovered = hoveredId === instrument.id;
                const isExpanded = expandedIds.has(instrument.id);
                const instrumentNumber = String(index + 1).padStart(2, '0');
                const currentImageIdx = getCurrentImageIndex(instrument.id);
                const hasMultipleImages = instrument.images.length > 1;
                
                return (
                  <motion.div
                    key={instrument.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group relative flex flex-col md:flex-row items-start gap-12 lg:gap-16"
                    onMouseEnter={() => setHoveredId(instrument.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Left: Text Content */}
                    <div className="relative z-10 flex w-full md:w-[45%] shrink-0 flex-col items-start">
                      {/* Index */}
                      <div className="mb-6 flex items-center gap-4">
                        <div
                          className="h-px bg-gray-900 transition-all duration-700"
                          style={{
                            width: isHovered ? 48 : 32,
                          }}
                        />
                        <span className="font-mono text-xs text-gray-400">
                          {instrumentNumber}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 
                        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6 transition-transform duration-700"
                        style={{
                          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                        }}
                      >
                        {getInstrumentName(instrument)}
                      </h3>

                      {/* Description */}
                      <div className="mb-8">
                        <p 
                          className="text-base leading-relaxed text-gray-600 transition-all duration-700 whitespace-pre-line"
                          style={{
                            color: isHovered ? "rgb(75, 85, 99)" : "rgb(107, 114, 128)",
                            transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                          }}
                        >
                          {getInstrumentDescription(instrument, !isExpanded)}
                        </p>
                      </div>

                      {/* Expand/Collapse Button */}
                      <button
                        onClick={() => toggleExpanded(instrument.id)}
                        className="flex items-center gap-4 group/btn mb-4"
                      >
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500"
                          style={{
                            borderColor: isHovered || isExpanded ? "rgb(17, 24, 39)" : "rgb(229, 231, 235)",
                            backgroundColor: isHovered || isExpanded ? "rgb(17, 24, 39)" : "transparent",
                            color: isHovered || isExpanded ? "white" : "rgb(17, 24, 39)",
                            transform: isHovered || isExpanded ? "scale(1.05)" : "scale(1)",
                            boxShadow: isHovered || isExpanded ? "0 8px 32px rgba(0, 0, 0, 0.12)" : "none",
                          }}
                        >
                          <ArrowUpRight
                            className="h-4 w-4 transition-transform duration-500"
                            style={{
                              transform: isExpanded ? "rotate(135deg)" : (isHovered ? "rotate(45deg)" : "rotate(0deg)"),
                            }}
                          />
                        </div>
                        <span
                          className="text-[10px] font-medium uppercase tracking-widest transition-all duration-700"
                          style={{
                            opacity: isHovered || isExpanded ? 1 : 0.5,
                            transform: isHovered || isExpanded ? "translateX(0)" : "translateX(-8px)",
                          }}
                        >
                          {isExpanded 
                            ? (language === 'en' ? 'Show Less' : language === 'ru' ? 'Свернуть' : 'Жасыру')
                            : (language === 'en' ? 'Read More' : language === 'ru' ? 'Подробнее' : 'Толығырақ')
                          }
                        </span>
                      </button>
                    </div>

                    {/* Right: Image with Stacked Effect */}
                    <div 
                      className="relative w-full md:w-[55%]"
                    >
                      {/* Stacked images container */}
                      <div className="relative w-full h-[500px]">
                        {hasMultipleImages ? (
                          <>
                            {/* Show up to 3 images in stack */}
                            {instrument.images.slice(0, 3).map((img, imgIndex) => {
                              const isActive = imgIndex === currentImageIdx;
                              const displayIndex = (imgIndex - currentImageIdx + instrument.images.length) % instrument.images.length;
                              
                              let xOffset = 0;
                              let rotation = 0;
                              let zIndex = 0;
                              
                              if (isHovered && instrument.images.length > 1) {
                                if (displayIndex === 1) {
                                  xOffset = -40;
                                  rotation = -5;
                                  zIndex = 1;
                                } else if (displayIndex === 2) {
                                  xOffset = 40;
                                  rotation = 5;
                                  zIndex = 2;
                                }
                              }
                              
                              if (isActive) {
                                zIndex = 10;
                              }

                              return (
                                <motion.div
                                  key={`${instrument.id}-${imgIndex}`}
                                  className="absolute inset-0"
                                  initial={{ x: 0, rotate: 0 }}
                                  animate={{
                                    x: xOffset,
                                    rotate: rotation,
                                    zIndex: zIndex,
                                  }}
                                  transition={{
                                    duration: 0.5,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: displayIndex * 0.05,
                                  }}
                                >
                                  {/* Frame outline */}
                                  <div
                                    className="absolute -inset-4 border transition-all duration-700"
                                    style={{
                                      borderColor: isActive && isHovered ? "rgba(17, 24, 39, 0.1)" : "transparent",
                                    }}
                                  />

                                  {/* Image container */}
                                  <div className="relative w-full h-full overflow-hidden bg-gray-50 shadow-lg">
                                    <Image
                                      src={img}
                                      alt={`${getInstrumentName(instrument)} ${imgIndex + 1}`}
                                      fill
                                      className="object-contain p-8 transition-all duration-1000"
                                      sizes="(max-width: 768px) 100vw, 55vw"
                                      quality={90}
                                      style={{
                                        transform: isActive && isHovered ? "scale(1.05)" : "scale(1)",
                                      }}
                                    />

                                    {/* Corner accents - only on active image */}
                                    {isActive && isHovered && (
                                      <>
                                        <motion.div
                                          initial={{ scaleY: 0 }}
                                          animate={{ scaleY: 1 }}
                                          transition={{ duration: 0.5, delay: 0.05 }}
                                          className="absolute left-3 top-3 h-6 w-px bg-gray-900/80 origin-top"
                                        />
                                        <motion.div
                                          initial={{ scaleX: 0 }}
                                          animate={{ scaleX: 1 }}
                                          transition={{ duration: 0.5, delay: 0.1 }}
                                          className="absolute left-3 top-3 h-px w-6 bg-gray-900/80 origin-left"
                                        />
                                        <motion.div
                                          initial={{ scaleY: 0 }}
                                          animate={{ scaleY: 1 }}
                                          transition={{ duration: 0.5, delay: 0.15 }}
                                          className="absolute bottom-3 right-3 h-6 w-px bg-gray-900/80 origin-bottom"
                                        />
                                        <motion.div
                                          initial={{ scaleX: 0 }}
                                          animate={{ scaleX: 1 }}
                                          transition={{ duration: 0.5, delay: 0.2 }}
                                          className="absolute bottom-3 right-3 h-px w-6 bg-gray-900/80 origin-right"
                                        />
                                      </>
                                    )}
                                  </div>
                                </motion.div>
                              );
                            })}

                            {/* Navigation Arrows */}
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                              <button
                                onClick={(e) => prevImage(instrument.id, instrument.images.length, e)}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 shadow-sm"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </button>
                              <span className="font-mono text-xs text-gray-400">
                                {currentImageIdx + 1}/{instrument.images.length}
                              </span>
                              <button
                                onClick={(e) => nextImage(instrument.id, instrument.images.length, e)}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 shadow-sm"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </button>
                            </div>
                          </>
                        ) : (
                          // Single image - no stacking
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              transform: isHovered ? "translateX(8px) translateY(-8px)" : "translateX(0) translateY(0)",
                              transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                          >
                            {/* Frame outline */}
                            <div
                              className="absolute -inset-4 border transition-all duration-700"
                              style={{
                                borderColor: isHovered ? "rgba(17, 24, 39, 0.1)" : "transparent",
                              }}
                            />

                            {/* Image container */}
                            <div className="relative w-full h-full overflow-hidden bg-gray-50 shadow-lg">
                              <Image
                                src={instrument.images[0]}
                                alt={getInstrumentName(instrument)}
                                fill
                                className="object-contain p-8 transition-all duration-1000"
                                sizes="(max-width: 768px) 100vw, 55vw"
                                quality={90}
                                style={{
                                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                                }}
                              />

                              {/* Corner accents */}
                              {isHovered && (
                                <>
                                  <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ duration: 0.5, delay: 0.05 }}
                                    className="absolute left-3 top-3 h-6 w-px bg-gray-900/80 origin-top"
                                  />
                                  <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="absolute left-3 top-3 h-px w-6 bg-gray-900/80 origin-left"
                                  />
                                  <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ duration: 0.5, delay: 0.15 }}
                                    className="absolute bottom-3 right-3 h-6 w-px bg-gray-900/80 origin-bottom"
                                  />
                                  <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="absolute bottom-3 right-3 h-px w-6 bg-gray-900/80 origin-right"
                                  />
                                </>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Minimal Footer */}
      <footer className="border-t border-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">{t.header.museumName}</p>
          <Link href="/kazakh" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            {t.kazakhInstruments.instrumentsPage.backButton}
          </Link>
        </div>
      </footer>
    </div>
  );
}
