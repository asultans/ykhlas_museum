"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Header } from "@/components/ui/header-2";

interface LampHeroProps {
  children?: React.ReactNode;
  className?: string;
  videoSrc?: string;
  showHeader?: boolean;
  headerLinks?: { label: string; href: string }[];
}

export function LampHero({
  children,
  className,
  videoSrc = "/ornament_bg_web.mp4",
  showHeader = true,
  headerLinks,
}: LampHeroProps) {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  // Track scroll progress for the entire component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to overlay opacity (1 = fully dark, 0 = fully transparent)
  // At scroll 0-0.1: overlay stays dark (controlled by headerScrolled for initial light)
  // At scroll 0.1-0.5: overlay gradually fades out to reveal full video
  const overlayOpacity = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]);
  
  // Also expand the light gradient as we scroll
  const gradientSize = useTransform(scrollYProgress, [0, 0.5], [40, 200]);

  // Auto-play video with multiple fallback attempts
  useEffect(() => {
    const video = bgVideoRef.current;
    if (!video) return;

    // Try to play immediately
    const playVideo = () => {
      video.play().catch((err) => {
        console.log('Video autoplay blocked, waiting for user interaction', err);
      });
    };

    playVideo();

    // Also try on any user interaction (fallback for strict autoplay policies)
    const handleInteraction = () => {
      playVideo();
      // Remove listeners after first successful interaction
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  // Header bottom position
  const lampTopPosition = headerScrolled ? 64 : 56;
  // Width of the light strip in pixels (30rem = 480px)
  const stripWidth = 480;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-screen flex-col items-center overflow-hidden bg-slate-950 w-full z-0",
        className
      )}
    >
      {/* Background Video Layer */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      >
        <video
          ref={bgVideoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            filter: 'blur(8px)',
          }}
          onLoadedData={() => {
            setIsVideoLoaded(true);
          }}
          onCanPlay={() => {
            setIsVideoLoaded(true);
          }}
          onError={(e) => {
            console.error('Video error:', e);
          }}
        />
      </div>

      {/* Dark overlay that covers the video */}
      {/* Initially shows light effect from header, then fades out on scroll to reveal full video */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ 
          zIndex: 2,
          opacity: overlayOpacity,
        }}
      >
        {/* Base dark layer */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: headerScrolled 
              ? `radial-gradient(ellipse 40% 70% at 50% ${lampTopPosition}px, 
                  transparent 0%,
                  rgba(2, 6, 23, 0.1) 30%,
                  rgba(2, 6, 23, 0.4) 50%,
                  rgba(2, 6, 23, 0.75) 70%,
                  rgba(2, 6, 23, 0.95) 85%,
                  rgb(2, 6, 23) 100%
                )`
              : 'rgb(2, 6, 23)',
            transition: 'background 0.8s ease-out',
          }}
        />
      </motion.div>

      {/* Secondary overlay that expands the light area on scroll */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 3,
          background: useTransform(
            gradientSize,
            (size) => `radial-gradient(ellipse ${size}% 100% at 50% 0%, 
              transparent 0%,
              transparent 50%,
              rgba(2, 6, 23, 0.3) 70%,
              rgba(2, 6, 23, 0.6) 85%,
              rgb(2, 6, 23) 100%
            )`
          ),
          opacity: useTransform(scrollYProgress, [0.3, 0.5], [1, 0]),
        }}
      />

      {/* Header */}
      {showHeader && (
        <Header 
          links={headerLinks}
          onScrolledChange={setHeaderScrolled}
        />
      )}

      {/* Light glow effects - soft natural light spread from the strip */}
      <motion.div 
        className="fixed left-0 right-0 pointer-events-none flex justify-center"
        style={{ 
          top: `${lampTopPosition}px`,
          zIndex: 45,
          transition: 'top 0.5s ease-out',
          // Fade out the light glow as video becomes fully visible
          opacity: useTransform(scrollYProgress, [0.3, 0.5], [1, 0]),
        }}
      >
        {/* Wide soft glow spreading down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: headerScrolled ? 0.35 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute"
          style={{ 
            top: 0,
            width: `${stripWidth + 100}px`,
            height: '250px',
            background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        
        {/* Medium glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: headerScrolled ? 0.5 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="absolute"
          style={{ 
            top: 0,
            width: `${stripWidth}px`,
            height: '150px',
            background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 50%, transparent 80%)',
            filter: 'blur(15px)',
          }}
        />

        {/* Core glow at the strip source */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: headerScrolled ? 0.8 : 0,
            scaleX: headerScrolled ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="absolute origin-center"
          style={{ 
            top: '-4px',
            width: `${stripWidth}px`,
            height: '20px',
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
            filter: 'blur(6px)',
          }}
        />

        {/* Bright line at the strip */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: headerScrolled ? 1 : 0,
            scaleX: headerScrolled ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="absolute origin-center"
          style={{ 
            top: '-1px',
            width: `${stripWidth}px`,
            height: '3px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 10%, white 50%, rgba(255,255,255,0.9) 90%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* Content Area */}
      <div 
        className="relative z-40 flex flex-col items-center w-full px-5"
        style={{ paddingTop: '120px' }}
      >
        {children}
      </div>

      {/* Vignette - also fades out on scroll */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
            transparent 0%, 
            transparent 30%,
            rgba(0, 0, 0, 0.15) 60%,
            rgba(0, 0, 0, 0.3) 100%
          )`,
          zIndex: 6,
          opacity: useTransform(scrollYProgress, [0.3, 0.5], [1, 0.3]),
        }}
      />
    </div>
  );
}

export default LampHero;
